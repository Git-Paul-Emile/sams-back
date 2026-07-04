import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Achats");

  const achats = [
    {
      num: "ACH-2026-001",
      fournisseurNom: "Sénégal Chimie SARL",
      date: new Date("2026-06-10"),
      livraison: new Date("2026-06-15"),
      montant: 600000,
      statut: "Livré",
      articles: 2,
    },
    {
      num: "ACH-2026-002",
      fournisseurNom: "West Africa Packaging",
      date: new Date("2026-06-18"),
      livraison: new Date("2026-06-22"),
      montant: 300000,
      statut: "En cours",
      articles: 1,
    },
  ];

  for (const a of achats) {
    const fournisseur = await prisma.fournisseur.findUniqueOrThrow({ where: { nom: a.fournisseurNom } });
    await prisma.achat.upsert({
      where: { num: a.num },
      create: {
        num: a.num,
        fournisseurId: fournisseur.id,
        date: a.date,
        livraison: a.livraison,
        montant: a.montant,
        statut: a.statut,
        articles: a.articles,
      },
      update: {
        fournisseurId: fournisseur.id,
        date: a.date,
        livraison: a.livraison,
        montant: a.montant,
        statut: a.statut,
        articles: a.articles,
      },
    });
    console.log(`✅ Achat : ${a.num}`);
  }

  console.log("🌱 Seed Achats terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Achats", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
