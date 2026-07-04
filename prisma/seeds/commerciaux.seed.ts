import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Commerciaux");

  const commerciaux = [
    { matricule: "COM-001", nom: "Diop", prenom: "Aissatou", email: "aissatou.diop@samsflux.sn", zone: "Dakar", objectif: 5000000 },
    { matricule: "COM-002", nom: "Fall", prenom: "Mamadou", email: "mamadou.fall@samsflux.sn", zone: "Thiès", objectif: 3500000 },
    { matricule: "COM-003", nom: "Sarr", prenom: "Fatou", email: "fatou.sarr@samsflux.sn", zone: "Saint-Louis", objectif: 2800000 },
  ];

  for (const c of commerciaux) {
    await prisma.commercial.upsert({
      where: { matricule: c.matricule },
      create: c,
      update: c,
    });
    console.log(`✅ Commercial : ${c.matricule} — ${c.prenom} ${c.nom}`);
  }

  console.log("🌱 Seed Commerciaux terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Commerciaux", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
