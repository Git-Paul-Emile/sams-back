import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Statistiques prix matières");

  const matierePrix = [
    { matiereCode: "MAT-001", dernierPrix: 1200, prixMoyen: 1150, evolutionPct: 4.3 },
    { matiereCode: "MAT-002", dernierPrix: 8500, prixMoyen: 8300, evolutionPct: 2.4 },
  ];

  for (const mp of matierePrix) {
    const matiere = await prisma.stockItem.findUniqueOrThrow({ where: { code: mp.matiereCode } });
    await prisma.matierePrixStat.upsert({
      where: { matiereId: matiere.id },
      create: { matiereId: matiere.id, dernierPrix: mp.dernierPrix, prixMoyen: mp.prixMoyen, evolutionPct: mp.evolutionPct },
      update: { dernierPrix: mp.dernierPrix, prixMoyen: mp.prixMoyen, evolutionPct: mp.evolutionPct },
    });
    console.log(`✅ MatierePrixStat : ${mp.matiereCode}`);
  }

  console.log("🌱 Seed Statistiques prix matières terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Statistiques prix matières", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
