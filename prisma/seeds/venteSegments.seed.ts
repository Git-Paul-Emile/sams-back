import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Segments de vente");

  const ventesSegment = [
    { segment: "Grande distribution", ca: 12000000, pct: 55, couleur: "#2563eb" },
    { segment: "Détail", ca: 6000000, pct: 27, couleur: "#16a34a" },
    { segment: "Export", ca: 4000000, pct: 18, couleur: "#f59e0b" },
  ];

  for (const vs of ventesSegment) {
    await prisma.venteSegment.upsert({
      where: { segment: vs.segment },
      create: vs,
      update: { ca: vs.ca, pct: vs.pct, couleur: vs.couleur },
    });
    console.log(`✅ VenteSegment : ${vs.segment}`);
  }

  console.log("🌱 Seed Segments de vente terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Segments de vente", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
