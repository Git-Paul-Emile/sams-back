import "dotenv/config";
import bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Role } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT ?? "10");
const DEFAULT_PASSWORD = "ChangeMoi123!";

async function main() {
  console.log("🌱 Seed : Users");

  const passwordHash = await bcrypt.hash(DEFAULT_PASSWORD, SALT_ROUNDS);

  const users = [
    { nom: "Aminata Ndoye", email: "admin@samsflux.sn", tel: "+221771000001", role: Role.Administrateur },
    { nom: "Ousmane Kane", email: "direction@samsflux.sn", tel: "+221771000002", role: Role.Direction },
    { nom: "Ibrahima Ndiaye", email: "production@samsflux.sn", tel: "+221771000003", role: Role.Production },
    { nom: "Awa Ba", email: "stock@samsflux.sn", tel: "+221771000004", role: Role.Stock },
    { nom: "Aissatou Diop", email: "commercial@samsflux.sn", tel: "+221771000005", role: Role.Commercial },
    { nom: "Modou Gueye", email: "finance@samsflux.sn", tel: "+221771000006", role: Role.Finance },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      create: { ...u, passwordHash, statut: "Actif" },
      update: { nom: u.nom, tel: u.tel, role: u.role },
    });
    console.log(`✅ User : ${u.email}`);
  }

  console.log("🌱 Seed Users terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Users", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
