import { whatsappConfig } from "../../../config/external.js";
import { prisma } from "../../../config/database.js";
const REQUEST_TIMEOUT_MS = 10_000;
/**
 * Bac à sable 360dialog : `https://waba-sandbox.360dialog.io/v1/messages`.
 * Limitations documentées (voir `back/doc bac à sable 360 dialog.md`) :
 * un seul numéro destinataire possible (celui associé à la clé sandbox) et un
 * plafond de 200 messages au total. On applique ces deux garde-fous ici pour
 * ne jamais bloquer le flux métier appelant — un envoi hors de ces limites est
 * simplement ignoré (jamais une erreur qui remonterait à l'utilisateur).
 */
export class ThreeSixtyDialogSandboxProvider {
    async send(input) {
        const sandboxNumber = whatsappConfig.sandboxNumber();
        if (normalizePhone(input.to) !== normalizePhone(sandboxNumber)) {
            console.warn(`[WhatsAppProvider] Sandbox: destinataire "${input.to}" ignoré (seul ${sandboxNumber} est autorisé)`);
            return { success: false, skipped: true, reason: "sandbox-only-supports-configured-number" };
        }
        const sentCount = await prisma.whatsAppNotif.count({ where: { statut: { not: "Ignoré (sandbox)" } } });
        if (sentCount >= whatsappConfig.maxSandboxMessages()) {
            console.warn(`[WhatsAppProvider] Sandbox: plafond de ${whatsappConfig.maxSandboxMessages()} messages atteint`);
            return { success: false, skipped: true, reason: "sandbox-message-quota-reached" };
        }
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
        try {
            const res = await fetch(new URL("v1/messages", whatsappConfig.baseUrl()).toString(), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "D360-API-KEY": whatsappConfig.apiKey(),
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    recipient_type: "individual",
                    to: input.to,
                    type: "text",
                    text: { body: input.message },
                }),
                signal: controller.signal,
            });
            if (!res.ok) {
                const body = await res.text().catch(() => "");
                console.error(`[WhatsAppProvider] Échec envoi (${res.status})`, body);
                return { success: false, reason: `http-${res.status}` };
            }
            const json = (await res.json());
            return { success: true, providerMessageId: json.messages?.[0]?.id };
        }
        catch (error) {
            const message = error instanceof Error ? error.message : "Erreur inconnue";
            console.error("[WhatsAppProvider] Échec envoi", message);
            return { success: false, reason: message };
        }
        finally {
            clearTimeout(timeout);
        }
    }
}
function normalizePhone(value) {
    return value.replace(/[\s()-]/g, "");
}
//# sourceMappingURL=ThreeSixtyDialogSandboxProvider.js.map