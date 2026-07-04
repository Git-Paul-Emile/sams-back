import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Mouvements de stock");

  const mouvements: {
    date: Date;
    type: string;
    stockItemCode: string;
    qte: number;
    userEmail: string;
    motif: string;
    commandeNum?: string;
    achatNum?: string;
    prodOrderNum?: string;
  }[] = [
    {
      date: new Date("2026-06-15"),
      type: "Entrée",
      stockItemCode: "MAT-001",
      qte: 500,
      userEmail: "stock@samsflux.sn",
      motif: "Réception achat",
      achatNum: "ACH-2026-001",
    },
    {
      date: new Date("2026-06-25"),
      type: "Sortie",
      stockItemCode: "PRO-001",
      qte: 200,
      userEmail: "stock@samsflux.sn",
      motif: "Livraison client",
      commandeNum: "CMD-2026-001",
    },
    {
      date: new Date("2026-06-02"),
      type: "Sortie",
      stockItemCode: "MAT-001",
      qte: 50,
      userEmail: "production@samsflux.sn",
      motif: "Consommation production",
      prodOrderNum: "OF-2026-001",
    },
  ];

  for (const m of mouvements) {
    const stockItem = await prisma.stockItem.findUniqueOrThrow({ where: { code: m.stockItemCode } });
    const user = await prisma.user.findUnique({ where: { email: m.userEmail } });
    const commande = m.commandeNum ? await prisma.commande.findUnique({ where: { num: m.commandeNum } }) : null;
    const achat = m.achatNum ? await prisma.achat.findUnique({ where: { num: m.achatNum } }) : null;
    const prodOrder = m.prodOrderNum ? await prisma.prodOrder.findUnique({ where: { num: m.prodOrderNum } }) : null;

    const existing = await prisma.mouvement.findFirst({
      where: { date: m.date, stockItemId: stockItem.id, type: m.type, qte: m.qte },
    });
    if (existing) {
      console.log(`⚠️ Mouvement déjà existant : ${m.type} ${m.stockItemCode} (${m.date.toISOString()})`);
      continue;
    }

    await prisma.mouvement.create({
      data: {
        date: m.date,
        type: m.type,
        stockItemId: stockItem.id,
        qte: m.qte,
        userId: user?.id ?? null,
        motif: m.motif,
        commandeId: commande?.id ?? null,
        achatId: achat?.id ?? null,
        prodOrderId: prodOrder?.id ?? null,
      },
    });
    console.log(`✅ Mouvement : ${m.type} ${m.stockItemCode} (${m.qte})`);
  }

  console.log("🌱 Seed Mouvements terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Mouvements", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
