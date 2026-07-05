import "dotenv/config";
import { connectToDatabase, prisma } from "./src/config/database.js";
await connectToDatabase();
const perms = await prisma.rolePermission.findMany();
console.log(JSON.stringify(perms, null, 2));
const admin = await prisma.user.findUnique({ where: { email: "admin@samsflux.sn" } });
console.log("admin user role:", admin?.role, "statut:", admin?.statut);
process.exit(0);
