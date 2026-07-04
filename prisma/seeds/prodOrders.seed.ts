import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : ProdOrders");

  const prodOrders = [
    {
      num: "OF-2026-001",
      produitCode: "PRO-001",
      ligne: "Ligne 1",
      qtePrev: 1000,
      qteReel: 980,
      debut: new Date("2026-06-01"),
      fin: new Date("2026-06-03"),
      responsableMatricule: "OPE-001",
      statut: "Terminé",
      rendement: 98,
    },
    {
      num: "OF-2026-002",
      produitCode: "PRO-002",
      ligne: "Ligne 2",
      qtePrev: 500,
      qteReel: 0,
      debut: new Date("2026-07-05"),
      fin: new Date("2026-07-07"),
      responsableMatricule: "OPE-002",
      statut: "Planifié",
      rendement: 0,
    },
  ];

  for (const po of prodOrders) {
    const produit = await prisma.stockItem.findUniqueOrThrow({ where: { code: po.produitCode } });
    const responsable = await prisma.operateur.findUniqueOrThrow({ where: { matricule: po.responsableMatricule } });
    await prisma.prodOrder.upsert({
      where: { num: po.num },
      create: {
        num: po.num,
        produitId: produit.id,
        ligne: po.ligne,
        qtePrev: po.qtePrev,
        qteReel: po.qteReel,
        debut: po.debut,
        fin: po.fin,
        responsableId: responsable.id,
        statut: po.statut,
        rendement: po.rendement,
      },
      update: {
        ligne: po.ligne,
        qtePrev: po.qtePrev,
        qteReel: po.qteReel,
        debut: po.debut,
        fin: po.fin,
        responsableId: responsable.id,
        statut: po.statut,
        rendement: po.rendement,
      },
    });
    console.log(`✅ ProdOrder : ${po.num}`);
  }

  console.log("🌱 Seed ProdOrders terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed ProdOrders", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
