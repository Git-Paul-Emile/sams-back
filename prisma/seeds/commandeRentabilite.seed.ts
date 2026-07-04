import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Rentabilité des commandes");

  const commandesRentabilite = [
    { commandeNum: "CMD-2026-001", montant: 3500000, coutProduits: 2100000, marge: 1400000, tauxMarge: 40, niveau: "Élevé" },
  ];

  for (const cr of commandesRentabilite) {
    const commande = await prisma.commande.findUniqueOrThrow({ where: { num: cr.commandeNum } });
    await prisma.commandeRentabilite.upsert({
      where: { commandeId: commande.id },
      create: {
        commandeId: commande.id,
        montant: cr.montant,
        coutProduits: cr.coutProduits,
        marge: cr.marge,
        tauxMarge: cr.tauxMarge,
        niveau: cr.niveau,
      },
      update: {
        montant: cr.montant,
        coutProduits: cr.coutProduits,
        marge: cr.marge,
        tauxMarge: cr.tauxMarge,
        niveau: cr.niveau,
      },
    });
    console.log(`✅ CommandeRentabilite : ${cr.commandeNum}`);
  }

  console.log("🌱 Seed Rentabilité des commandes terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Rentabilité des commandes", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
