import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : BOM");

  const boms = [
    {
      produitCode: "PRO-001",
      lignes: [
        { matiereCode: "MAT-001", qte: 0.05, unite: "L" },
        { matiereCode: "MAT-002", qte: 0.01, unite: "L" },
        { matiereCode: "MAT-003", qte: 1, unite: "unité" },
      ],
    },
    {
      produitCode: "PRO-002",
      lignes: [
        { matiereCode: "MAT-001", qte: 0.03, unite: "L" },
        { matiereCode: "MAT-002", qte: 0.02, unite: "L" },
        { matiereCode: "MAT-003", qte: 1, unite: "unité" },
      ],
    },
  ];

  for (const b of boms) {
    const produit = await prisma.stockItem.findUniqueOrThrow({ where: { code: b.produitCode } });
    const bom = await prisma.bom.upsert({
      where: { produitId: produit.id },
      create: { produitId: produit.id },
      update: {},
    });

    await prisma.bomLine.deleteMany({ where: { bomId: bom.id } });
    for (const ligne of b.lignes) {
      const matiere = await prisma.stockItem.findUniqueOrThrow({ where: { code: ligne.matiereCode } });
      await prisma.bomLine.create({
        data: { bomId: bom.id, matiereId: matiere.id, qte: ligne.qte, unite: ligne.unite },
      });
    }
    console.log(`✅ BOM : ${b.produitCode} (${b.lignes.length} lignes)`);
  }

  console.log("🌱 Seed BOM terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed BOM", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
