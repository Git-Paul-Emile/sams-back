import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Opérateurs");

  const operateurs = [
    { matricule: "OPE-001", nom: "Ndiaye", prenom: "Ibrahima", poste: "Chef de ligne", ligne: "Ligne 1", embauche: new Date("2021-03-15") },
    { matricule: "OPE-002", nom: "Ba", prenom: "Awa", poste: "Opérateur", ligne: "Ligne 2", embauche: new Date("2022-06-01") },
    { matricule: "OPE-003", nom: "Diallo", prenom: "Cheikh", poste: "Opérateur", ligne: "Ligne 1", embauche: new Date("2023-01-10") },
  ];

  for (const o of operateurs) {
    await prisma.operateur.upsert({
      where: { matricule: o.matricule },
      create: o,
      update: o,
    });
    console.log(`✅ Opérateur : ${o.matricule} — ${o.prenom} ${o.nom}`);
  }

  console.log("🌱 Seed Opérateurs terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Opérateurs", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
