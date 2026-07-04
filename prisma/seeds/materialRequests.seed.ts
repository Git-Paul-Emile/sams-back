import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Material requests (sorties matières)");

  const materialRequests = [
    {
      num: "MR-2026-001",
      date: new Date("2026-06-01"),
      prodOrderNum: "OF-2026-001",
      operateurMatricule: "OPE-001",
      ligne: "Ligne 1",
      matiereCode: "MAT-001",
      qteDemandee: 50,
      qteValidee: 50,
      statut: "Validée",
      valideurEmail: "stock@samsflux.sn",
      dateValidation: new Date("2026-06-01"),
    },
  ];

  for (const mr of materialRequests) {
    const prodOrder = await prisma.prodOrder.findUniqueOrThrow({ where: { num: mr.prodOrderNum } });
    const operateur = await prisma.operateur.findUniqueOrThrow({ where: { matricule: mr.operateurMatricule } });
    const matiere = await prisma.stockItem.findUniqueOrThrow({ where: { code: mr.matiereCode } });
    const valideur = await prisma.user.findUnique({ where: { email: mr.valideurEmail } });

    await prisma.materialRequest.upsert({
      where: { num: mr.num },
      create: {
        num: mr.num,
        date: mr.date,
        prodOrderId: prodOrder.id,
        operateurId: operateur.id,
        ligne: mr.ligne,
        matiereId: matiere.id,
        qteDemandee: mr.qteDemandee,
        qteValidee: mr.qteValidee,
        statut: mr.statut,
        valideurId: valideur?.id ?? null,
        dateValidation: mr.dateValidation,
      },
      update: {
        prodOrderId: prodOrder.id,
        operateurId: operateur.id,
        ligne: mr.ligne,
        matiereId: matiere.id,
        qteDemandee: mr.qteDemandee,
        qteValidee: mr.qteValidee,
        statut: mr.statut,
        valideurId: valideur?.id ?? null,
        dateValidation: mr.dateValidation,
      },
    });
    console.log(`✅ MaterialRequest : ${mr.num}`);
  }

  console.log("🌱 Seed Material requests terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Material requests", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
