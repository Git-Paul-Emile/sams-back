import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Clients");

  const clients = [
    { code: "CLI-001", raison: "Supermarché Douka", commercialMatricule: "COM-001", ville: "Dakar", pays: "Sénégal", plafond: 2000000 },
    { code: "CLI-002", raison: "Boutique Teranga", commercialMatricule: "COM-002", ville: "Thiès", pays: "Sénégal", plafond: 800000 },
    { code: "CLI-003", raison: "Groupe Sahel Distribution", commercialMatricule: "COM-001", ville: "Dakar", pays: "Sénégal", plafond: 5000000 },
  ];

  for (const c of clients) {
    const commercial = await prisma.commercial.findUniqueOrThrow({ where: { matricule: c.commercialMatricule } });
    await prisma.client.upsert({
      where: { code: c.code },
      create: {
        code: c.code,
        raison: c.raison,
        ville: c.ville,
        pays: c.pays,
        plafond: c.plafond,
        commercialId: commercial.id,
      },
      update: {
        raison: c.raison,
        ville: c.ville,
        pays: c.pays,
        plafond: c.plafond,
        commercialId: commercial.id,
      },
    });
    console.log(`✅ Client : ${c.code} — ${c.raison}`);
  }

  console.log("🌱 Seed Clients terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Clients", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
