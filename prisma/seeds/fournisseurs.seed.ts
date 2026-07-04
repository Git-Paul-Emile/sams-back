import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Fournisseurs");

  const fournisseurs = [
    { nom: "Sénégal Chimie SARL", contact: "Moussa Sy", tel: "+221771234567", email: "contact@senegalchimie.sn" },
    { nom: "West Africa Packaging", contact: "Fatoumata Camara", tel: "+221772345678", email: "contact@wapackaging.com" },
    { nom: "Distri Matières SA", contact: "Cheikh Anta Diouf", tel: "+221773456789", email: "contact@distrimatieres.sn" },
  ];

  for (const f of fournisseurs) {
    await prisma.fournisseur.upsert({
      where: { nom: f.nom },
      create: f,
      update: f,
    });
    console.log(`✅ Fournisseur : ${f.nom}`);
  }

  console.log("🌱 Seed Fournisseurs terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Fournisseurs", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
