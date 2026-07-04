import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Notifications / Email / WhatsApp (logs)");

  const notifs = [{ type: "info", titre: "Nouvelle commande", msg: "CMD-2026-002 en attente de confirmation", lu: false }];
  const emailNotifs = [{ to: "aissatou.diop@samsflux.sn", sujet: "Commande CMD-2026-001 livrée", statut: "Envoyé" }];
  const whatsappNotifs = [{ to: "+221771234567", msg: "Votre commande CMD-2026-001 a été livrée." }];

  for (const n of notifs) {
    await prisma.notif.create({ data: n });
    console.log(`✅ Notif : ${n.titre}`);
  }

  for (const e of emailNotifs) {
    await prisma.emailNotif.create({ data: e });
    console.log(`✅ EmailNotif : ${e.sujet}`);
  }

  for (const w of whatsappNotifs) {
    await prisma.whatsAppNotif.create({ data: w });
    console.log(`✅ WhatsAppNotif : ${w.to}`);
  }

  console.log("🌱 Seed Notifications terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Notifications", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
