import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Factures");

  const factures = [
    {
      num: "FAC-2026-001",
      clientCode: "CLI-001",
      commercialMatricule: "COM-001",
      commandeNum: "CMD-2026-001",
      type: "Facture",
      date: new Date("2026-06-25"),
      echeance: new Date("2026-07-25"),
      montant: 3500000,
      paye: 3500000,
      statut: "Payée",
      mode: "Virement",
    },
    {
      num: "FAC-2026-002",
      clientCode: "CLI-002",
      commercialMatricule: "COM-002",
      commandeNum: "CMD-2026-002",
      type: "Facture Proforma",
      date: new Date("2026-06-28"),
      echeance: new Date("2026-07-28"),
      montant: 950000,
      paye: 0,
      statut: "En attente",
      mode: "—",
    },
  ];

  for (const f of factures) {
    const client = await prisma.client.findUniqueOrThrow({ where: { code: f.clientCode } });
    const commercial = await prisma.commercial.findUniqueOrThrow({ where: { matricule: f.commercialMatricule } });
    const commande = await prisma.commande.findUnique({ where: { num: f.commandeNum } });

    await prisma.facture.upsert({
      where: { num: f.num },
      create: {
        num: f.num,
        clientId: client.id,
        commercialId: commercial.id,
        commandeId: commande?.id ?? null,
        type: f.type,
        date: f.date,
        echeance: f.echeance,
        montant: f.montant,
        paye: f.paye,
        statut: f.statut,
        mode: f.mode,
      },
      update: {
        clientId: client.id,
        commercialId: commercial.id,
        commandeId: commande?.id ?? null,
        type: f.type,
        date: f.date,
        echeance: f.echeance,
        montant: f.montant,
        paye: f.paye,
        statut: f.statut,
        mode: f.mode,
      },
    });
    console.log(`✅ Facture : ${f.num}`);
  }

  console.log("🌱 Seed Factures terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Factures", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
