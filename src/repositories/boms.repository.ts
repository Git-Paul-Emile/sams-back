import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeAll = {
  produit: true,
  items: { include: { matiere: true } },
} satisfies Prisma.BomInclude;

export const bomsRepository = {
  findMany() {
    return prisma.bom.findMany({ include: includeAll });
  },

  findById(id: string) {
    return prisma.bom.findUnique({ where: { id }, include: includeAll });
  },
};
