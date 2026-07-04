import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Coûts de production");

  const productCosts = [
    {
      produitCode: "PRO-001",
      prixVente: 1500,
      qteVendue: 200,
      qteProduite: 980,
      qteReel: 980,
      coutMO: 100,
      coutEnergie: 50,
      coutConsommables: 30,
      coutIndirects: 20,
      fraisLogistiques: 40,
      fraisCommerciaux: 60,
      fraisAdmin: 25,
      coutTheoriqueUnit: 900,
      bomLignes: [
        { matiereCode: "MAT-001", incorpPct: 5, qteKg: 0.05, prixAchat: 1200 },
        { matiereCode: "MAT-002", incorpPct: 1, qteKg: 0.01, prixAchat: 8500 },
      ],
      emballages: [{ type: "Flacon PET 500ml", qte: 1, prix: 150 }],
    },
  ];

  for (const pc of productCosts) {
    const produit = await prisma.stockItem.findUniqueOrThrow({ where: { code: pc.produitCode } });
    const created = await prisma.productCost.upsert({
      where: { produitId: produit.id },
      create: {
        produitId: produit.id,
        prixVente: pc.prixVente,
        qteVendue: pc.qteVendue,
        qteProduite: pc.qteProduite,
        qteReel: pc.qteReel,
        coutMO: pc.coutMO,
        coutEnergie: pc.coutEnergie,
        coutConsommables: pc.coutConsommables,
        coutIndirects: pc.coutIndirects,
        fraisLogistiques: pc.fraisLogistiques,
        fraisCommerciaux: pc.fraisCommerciaux,
        fraisAdmin: pc.fraisAdmin,
        coutTheoriqueUnit: pc.coutTheoriqueUnit,
      },
      update: {
        prixVente: pc.prixVente,
        qteVendue: pc.qteVendue,
        qteProduite: pc.qteProduite,
        qteReel: pc.qteReel,
        coutMO: pc.coutMO,
        coutEnergie: pc.coutEnergie,
        coutConsommables: pc.coutConsommables,
        coutIndirects: pc.coutIndirects,
        fraisLogistiques: pc.fraisLogistiques,
        fraisCommerciaux: pc.fraisCommerciaux,
        fraisAdmin: pc.fraisAdmin,
        coutTheoriqueUnit: pc.coutTheoriqueUnit,
      },
    });

    await prisma.productCostBomLine.deleteMany({ where: { productCostId: created.id } });
    for (const line of pc.bomLignes) {
      const matiere = await prisma.stockItem.findUniqueOrThrow({ where: { code: line.matiereCode } });
      await prisma.productCostBomLine.create({
        data: { productCostId: created.id, matiereId: matiere.id, incorpPct: line.incorpPct, qteKg: line.qteKg, prixAchat: line.prixAchat },
      });
    }

    await prisma.productCostEmballage.deleteMany({ where: { productCostId: created.id } });
    for (const emb of pc.emballages) {
      await prisma.productCostEmballage.create({
        data: { productCostId: created.id, type: emb.type, qte: emb.qte, prix: emb.prix },
      });
    }

    console.log(`✅ ProductCost : ${pc.produitCode}`);
  }

  console.log("🌱 Seed Coûts de production terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Coûts de production", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
