import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, StockItemType } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : StockItems (matières + produits)");

  const matieres = [
    { code: "MAT-001", designation: "Hypochlorite de Sodium 5L", categorie: "Matière première", unite: "L", stock: 500, min: 100, critique: 50, valeurUnit: 1200 },
    { code: "MAT-002", designation: "Parfum Citron 1L", categorie: "Matière première", unite: "L", stock: 80, min: 20, critique: 10, valeurUnit: 8500 },
    { code: "MAT-003", designation: "Flacon PET 500ml", categorie: "Emballage", unite: "unité", stock: 5000, min: 1000, critique: 500, valeurUnit: 150 },
  ];

  const produits = [
    { code: "PRO-001", designation: "Eau de Javel 1L", categorie: "Produit fini", unite: "unité", stock: 1200, min: 300, critique: 100, valeurUnit: 900 },
    { code: "PRO-002", designation: "Détergent Multi-Surfaces 1L", categorie: "Produit fini", unite: "unité", stock: 600, min: 150, critique: 50, valeurUnit: 1100 },
  ];

  for (const m of matieres) {
    await prisma.stockItem.upsert({
      where: { code: m.code },
      create: { ...m, type: StockItemType.MATIERE },
      update: { ...m, type: StockItemType.MATIERE },
    });
    console.log(`✅ Matière : ${m.code} — ${m.designation}`);
  }

  for (const p of produits) {
    await prisma.stockItem.upsert({
      where: { code: p.code },
      create: { ...p, type: StockItemType.PRODUIT },
      update: { ...p, type: StockItemType.PRODUIT },
    });
    console.log(`✅ Produit : ${p.code} — ${p.designation}`);
  }

  console.log("🌱 Seed StockItems terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed StockItems", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
