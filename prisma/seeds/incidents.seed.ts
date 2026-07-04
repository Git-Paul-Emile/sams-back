import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Incidents");

  const incidents = [
    {
      prodOrderNum: "OF-2026-001",
      operateurMatricule: "OPE-001",
      categorie: "Panne machine",
      description: "Arrêt convoyeur 20 min",
      date: new Date("2026-06-02"),
      statut: "Résolu",
      gravite: "Mineure",
    },
  ];

  for (const inc of incidents) {
    const prodOrder = await prisma.prodOrder.findUniqueOrThrow({ where: { num: inc.prodOrderNum } });
    const operateur = await prisma.operateur.findUniqueOrThrow({ where: { matricule: inc.operateurMatricule } });

    const existing = await prisma.incident.findFirst({
      where: { prodOrderId: prodOrder.id, categorie: inc.categorie, date: inc.date },
    });
    if (existing) {
      console.log(`⚠️ Incident déjà existant pour ${inc.prodOrderNum} (${inc.categorie})`);
      continue;
    }

    await prisma.incident.create({
      data: {
        prodOrderId: prodOrder.id,
        operateurId: operateur.id,
        categorie: inc.categorie,
        description: inc.description,
        date: inc.date,
        statut: inc.statut,
        gravite: inc.gravite,
      },
    });
    console.log(`✅ Incident : ${inc.prodOrderNum} — ${inc.categorie}`);
  }

  console.log("🌱 Seed Incidents terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Incidents", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
