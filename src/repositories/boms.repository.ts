import { prisma } from "../config/database.js";
import type { Prisma, PrismaClient } from "../generated/prisma/client.js";
import type { BomLineInput } from "../validators/boms.validator.js";

type Client = PrismaClient | Prisma.TransactionClient;

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

  findByProduitId(produitId: string, client: Client = prisma) {
    return client.bom.findUnique({ where: { produitId }, include: includeAll });
  },

  /** Crée la formule et ses lignes de composants de façon atomique. */
  async create(produitId: string, items: BomLineInput[]) {
    return prisma.$transaction(async (tx) => {
      const bom = await tx.bom.create({ data: { produitId } });
      await tx.bomLine.createMany({
        data: items.map((item) => ({ bomId: bom.id, matiereId: item.matiereId, qte: item.qte, unite: item.unite })),
      });
      return tx.bom.findUniqueOrThrow({ where: { id: bom.id }, include: includeAll });
    });
  },

  /** Remplace toutes les lignes existantes par les nouvelles (delete puis recreate). */
  async updateItems(id: string, items: BomLineInput[]) {
    return prisma.$transaction(async (tx) => {
      await tx.bomLine.deleteMany({ where: { bomId: id } });
      await tx.bomLine.createMany({
        data: items.map((item) => ({ bomId: id, matiereId: item.matiereId, qte: item.qte, unite: item.unite })),
      });
      return tx.bom.findUniqueOrThrow({ where: { id }, include: includeAll });
    });
  },

  delete(id: string) {
    return prisma.bom.delete({ where: { id } });
  },
};
