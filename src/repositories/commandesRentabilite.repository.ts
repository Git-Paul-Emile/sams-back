import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeCommandeClient = {
  commande: { include: { client: true } },
} satisfies Prisma.CommandeRentabiliteInclude;

export const commandesRentabiliteRepository = {
  findMany() {
    return prisma.commandeRentabilite.findMany({
      include: includeCommandeClient,
      orderBy: { createdAt: "desc" },
    });
  },
};
