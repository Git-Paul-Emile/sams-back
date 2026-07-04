import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seed : Audit log");

  const auditLog: { action: string; module: string; ref?: string; userEmail: string; ip: string }[] = [
    { action: "Connexion", module: "Auth", userEmail: "admin@samsflux.sn", ip: "10.0.0.5" },
    { action: "Création commande", module: "Ventes", ref: "CMD-2026-001", userEmail: "commercial@samsflux.sn", ip: "10.0.0.12" },
  ];

  for (const a of auditLog) {
    const user = await prisma.user.findUnique({ where: { email: a.userEmail } });
    await prisma.auditLog.create({
      data: {
        action: a.action,
        module: a.module,
        ref: a.ref ?? null,
        userId: user?.id ?? null,
        ip: a.ip,
      },
    });
    console.log(`✅ AuditLog : ${a.action} (${a.module})`);
  }

  console.log("🌱 Seed Audit log terminé");
}

try {
  await main();
} catch (err) {
  console.error("❌ Erreur lors du seed Audit log", err);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
