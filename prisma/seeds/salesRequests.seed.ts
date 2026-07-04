import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Sales requests (sorties vente)");

  const salesRequests = [
    {
      num: "SR-2026-001",
      date: new Date("2026-06-19"),
      clientCode: "CLI-001",
      commercialMatricule: "COM-001",
      produitCode: "PRO-001",
      qteDemandee: 200,
      qteValidee: 200,
      stockDispo: 1200,
      prixUnit: 1500,
      montant: 300000,
      statut: "Validée",
      valideurEmail: "stock@samsflux.sn",
      dateValidation: new Date("2026-06-19"),
    },
  ];

  for (const sr of salesRequests) {
    const client = await prisma.client.findUniqueOrThrow({ where: { code: sr.clientCode } });
    const commercial = await prisma.commercial.findUniqueOrThrow({ where: { matricule: sr.commercialMatricule } });
    const produit = await prisma.stockItem.findUniqueOrThrow({ where: { code: sr.produitCode } });
    const valideur = await prisma.user.findUnique({ where: { email: sr.valideurEmail } });

    await prisma.salesRequest.upsert({
      where: { num: sr.num },
      create: {
        num: sr.num,
        date: sr.date,
        clientId: client.id,
        commercialId: commercial.id,
        produitId: produit.id,
        qteDemandee: sr.qteDemandee,
        qteValidee: sr.qteValidee,
        stockDispo: sr.stockDispo,
        prixUnit: sr.prixUnit,
        montant: sr.montant,
        statut: sr.statut,
        valideurId: valideur?.id ?? null,
        dateValidation: sr.dateValidation,
      },
      update: {
        clientId: client.id,
        commercialId: commercial.id,
        produitId: produit.id,
        qteDemandee: sr.qteDemandee,
        qteValidee: sr.qteValidee,
        stockDispo: sr.stockDispo,
        prixUnit: sr.prixUnit,
        montant: sr.montant,
        statut: sr.statut,
        valideurId: valideur?.id ?? null,
        dateValidation: sr.dateValidation,
      },
    });
    console.log(`✅ SalesRequest : ${sr.num}`);
  }

  console.log("🌱 Seed Sales requests terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Sales requests", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
