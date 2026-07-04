import { prisma } from "../config/database.js";
import { getEmailProvider } from "./external/email/emailProviderFactory.js";
import { getWhatsAppProvider } from "./external/whatsapp/whatsappProviderFactory.js";
import { emitNotifCreated } from "../realtime/socketServer.js";

export type WhatsAppCategory = "authorization" | "information";

export interface NotifyDirectionInput {
  eventType: string;
  category: WhatsAppCategory;
  icon: string;
  title: string;
  lines: string[];
  deepLinkPath: string;
  linkLabel: string;
}

function buildMessage(input: NotifyDirectionInput): { text: string; deepLink: string } {
  const base = process.env.FRONT_URL ?? "http://localhost:5173";
  const deepLink = `${base}${input.deepLinkPath}`;
  const text = `${input.icon} *${input.title}*\n\n${input.lines.join("\n")}\n\n${input.linkLabel} ${deepLink}`;
  return { text, deepLink };
}

/**
 * Remplace `front/src/services/whatsappDirection.ts` : toute opération
 * sensible notifie la Direction par WhatsApp + email. La catégorie
 * "authorization" (demandes bloquantes) ignore toujours le réglage
 * `notifWhatsappEnabled` — une action en attente ne doit jamais rester
 * invisible ; la catégorie "information" le respecte. Appelé APRÈS commit de
 * la transaction métier (jamais d'appel externe dans une transaction Postgres
 * ouverte) — les échecs d'envoi sont journalisés, jamais renvoyés à l'appelant.
 */
export const notificationService = {
  async notifyDirection(input: NotifyDirectionInput): Promise<void> {
    try {
      const [directionUsers, settings] = await Promise.all([
        prisma.user.findMany({ where: { role: "Direction" } }),
        prisma.settings.findUnique({ where: { id: 1 } }),
      ]);

      const whatsappAllowed = input.category === "authorization" || (settings?.notifWhatsappEnabled ?? true);
      const emailAllowed = input.category === "authorization" || (settings?.notifEmailEnabled ?? true);
      const { text, deepLink } = buildMessage(input);

      if (whatsappAllowed) {
        const whatsapp = getWhatsAppProvider();
        await Promise.all(
          directionUsers
            .filter((u) => u.tel)
            .map(async (user) => {
              const result = await whatsapp.send({ to: user.tel!, message: text });
              await prisma.whatsAppNotif.create({
                data: {
                  to: user.tel!,
                  msg: text,
                  eventType: input.eventType,
                  category: input.category,
                  deepLink,
                  statut: result.success ? "Envoyé" : result.skipped ? "Ignoré (sandbox)" : "Échec",
                },
              });
            })
        );
      }

      if (emailAllowed) {
        const email = getEmailProvider();
        await Promise.all(
          directionUsers.map(async (user) => {
            const result = await email.send({
              to: user.email,
              subject: input.title,
              html: `<p>${input.lines.join("<br/>")}</p><p><a href="${deepLink}">${input.linkLabel}</a></p>`,
            });
            await prisma.emailNotif.create({
              data: { to: user.email, sujet: input.title, statut: result.success ? "Envoyé" : "Échec" },
            });
          })
        );
      }

      const notif = await prisma.notif.create({
        data: { type: input.eventType, titre: input.title, msg: input.lines.join(" "), lu: false },
      });
      emitNotifCreated(notif);
    } catch (error) {
      console.error("[notificationService] Échec de notification Direction", error);
    }
  },
};
