import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Commandes + timeline");

  const commandes = [
    {
      num: "CMD-2026-001",
      clientCode: "CLI-001",
      commercialMatricule: "COM-001",
      date: new Date("2026-06-20"),
      montant: 3500000,
      statutActuel: "Livrée",
      timeline: [
        { etat: "Devis", date: new Date("2026-06-18"), userEmail: "commercial@samsflux.sn" },
        { etat: "Confirmée", date: new Date("2026-06-20"), userEmail: "commercial@samsflux.sn" },
        { etat: "Livrée", date: new Date("2026-06-25"), userEmail: "stock@samsflux.sn" },
      ],
    },
    {
      num: "CMD-2026-002",
      clientCode: "CLI-002",
      commercialMatricule: "COM-002",
      date: new Date("2026-06-28"),
      montant: 950000,
      statutActuel: "En préparation",
      timeline: [
        { etat: "Devis", date: new Date("2026-06-27"), userEmail: "commercial@samsflux.sn" },
        { etat: "Confirmée", date: new Date("2026-06-28"), userEmail: "commercial@samsflux.sn" },
      ],
    },
  ];

  for (const cmd of commandes) {
    const client = await prisma.client.findUniqueOrThrow({ where: { code: cmd.clientCode } });
    const commercial = await prisma.commercial.findUniqueOrThrow({ where: { matricule: cmd.commercialMatricule } });

    const created = await prisma.commande.upsert({
      where: { num: cmd.num },
      create: {
        num: cmd.num,
        clientId: client.id,
        commercialId: commercial.id,
        date: cmd.date,
        montant: cmd.montant,
        statutActuel: cmd.statutActuel,
      },
      update: {
        clientId: client.id,
        commercialId: commercial.id,
        date: cmd.date,
        montant: cmd.montant,
        statutActuel: cmd.statutActuel,
      },
    });

    await prisma.commandeTimeline.deleteMany({ where: { commandeId: created.id } });
    for (const ev of cmd.timeline) {
      const user = await prisma.user.findUnique({ where: { email: ev.userEmail } });
      await prisma.commandeTimeline.create({
        data: { commandeId: created.id, etat: ev.etat, date: ev.date, userId: user?.id ?? null },
      });
    }
    console.log(`✅ Commande : ${cmd.num} (${cmd.timeline.length} étapes)`);
  }

  console.log("🌱 Seed Commandes terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Commandes", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
