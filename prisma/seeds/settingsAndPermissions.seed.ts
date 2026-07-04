import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Role } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Settings & RolePermission");

  await prisma.settings.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      notifErpEnabled: true,
      notifEmailEnabled: true,
      notifWhatsappEnabled: true,
      alertRuptureEnabled: true,
      alertValidationEnabled: true,
    },
    update: {},
  });
  console.log("✅ Settings par défaut");

  // Les noms de modules doivent correspondre exactement à ceux utilisés par
  // requirePermission() côté back (routes/*.routes.ts) et par ModuleRoute côté front (App.tsx).
  //
  // Sorties/Validations : les seeds (salesRequests, materialRequests, approvalHistory)
  // montrent que Commercial et Production créent les sorties (vente/matière) et que
  // Stock les valide — d'où Sorties pour les trois, Validations pour Stock uniquement.
  // Couts : visibilité des coûts de production / rentabilité réservée à Finance et Direction.
  const permissions: { role: Role; modules: string[] }[] = [
    { role: Role.Administrateur, modules: ["*"] },
    { role: Role.Direction, modules: ["Dashboard", "Ventes", "Production", "Stocks", "Finance", "Rapports", "Couts"] },
    { role: Role.Production, modules: ["Dashboard", "Production", "Stocks", "Sorties"] },
    { role: Role.Stock, modules: ["Dashboard", "Stocks", "Achats", "Sorties", "Validations"] },
    { role: Role.Commercial, modules: ["Dashboard", "Ventes", "Clients", "Sorties"] },
    { role: Role.Finance, modules: ["Dashboard", "Finance", "Facturation", "Couts"] },
  ];

  for (const perm of permissions) {
    await prisma.rolePermission.upsert({
      where: { role: perm.role },
      create: perm,
      update: { modules: perm.modules },
    });
    console.log(`✅ Permissions : ${perm.role}`);
  }

  console.log("🌱 Seed Settings & RolePermission terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Settings & RolePermission", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
