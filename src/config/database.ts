import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../src/generated/prisma/client.js";




let prisma: PrismaClient;




export const connectToDatabase = async () => {
 try {
   const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
   prisma = new PrismaClient({ adapter });
   await prisma.$connect();
   console.log("✅ Connecté à la base de données principale");
 } catch (err) {
   console.error("❌ Impossible de se connecter à la base de données", err);
   throw err;
 }
};


export { prisma };
