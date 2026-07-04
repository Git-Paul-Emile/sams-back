import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Historique de validation");

  const approvalHistory: {
    date: Date;
    valideurEmail: string;
    action: string;
    type: string;
    module: string;
    salesRequestNum?: string;
    materialRequestNum?: string;
  }[] = [
    {
      date: new Date("2026-06-19"),
      valideurEmail: "stock@samsflux.sn",
      action: "Validation",
      type: "Sortie vente",
      module: "Ventes",
      salesRequestNum: "SR-2026-001",
    },
    {
      date: new Date("2026-06-01"),
      valideurEmail: "stock@samsflux.sn",
      action: "Validation",
      type: "Sortie matière",
      module: "Production",
      materialRequestNum: "MR-2026-001",
    },
  ];

  for (const ap of approvalHistory) {
    const valideur = await prisma.user.findUniqueOrThrow({ where: { email: ap.valideurEmail } });
    const salesRequest = ap.salesRequestNum ? await prisma.salesRequest.findUnique({ where: { num: ap.salesRequestNum } }) : null;
    const materialRequest = ap.materialRequestNum
      ? await prisma.materialRequest.findUnique({ where: { num: ap.materialRequestNum } })
      : null;

    const existing = await prisma.approvalRecord.findFirst({
      where: { date: ap.date, valideurId: valideur.id, type: ap.type },
    });
    if (existing) {
      console.log(`⚠️ ApprovalRecord déjà existant : ${ap.type} (${ap.date.toISOString()})`);
      continue;
    }

    await prisma.approvalRecord.create({
      data: {
        date: ap.date,
        valideurId: valideur.id,
        action: ap.action,
        type: ap.type,
        module: ap.module,
        salesRequestId: salesRequest?.id ?? null,
        materialRequestId: materialRequest?.id ?? null,
      },
    });
    console.log(`✅ ApprovalRecord : ${ap.type} (${ap.action})`);
  }

  console.log("🌱 Seed Historique de validation terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Historique de validation", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
