import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeAll = {
  produit: true,
  bomLines: { include: { matiere: true } },
  emballages: true,
} satisfies Prisma.ProductCostInclude;

export const productCostsRepository = {
  findMany() {
    return prisma.productCost.findMany({ include: includeAll, orderBy: { calculatedAt: "desc" } });
  },
};
