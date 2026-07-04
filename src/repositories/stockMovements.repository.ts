import { prisma } from "../config/database.js";
import type { Prisma, PrismaClient } from "../generated/prisma/client.js";

type Client = PrismaClient | Prisma.TransactionClient;

const includeAll = {
  stockItem: true,
  user: true,
  commande: true,
  achat: true,
  prodOrder: true,
  salesRequest: true,
  materialRequest: true,
} satisfies Prisma.MouvementInclude;

export const stockMovementsRepository = {
  findMany(
    where: Prisma.MouvementWhereInput,
    opts: { skip: number; take: number; orderBy: Prisma.MouvementOrderByWithRelationInput }
  ) {
    return prisma.mouvement.findMany({ where, include: includeAll, ...opts });
  },

  count(where: Prisma.MouvementWhereInput) {
    return prisma.mouvement.count({ where });
  },

  /** À utiliser à l'intérieur d'un `prisma.$transaction` piloté par le Service. */
  findStockItemById(id: string, client: Client = prisma) {
    return client.stockItem.findUnique({ where: { id } });
  },

  adjustStock(id: string, newStock: number, client: Client = prisma) {
    return client.stockItem.update({ where: { id }, data: { stock: newStock } });
  },

  create(data: Prisma.MouvementUncheckedCreateInput, client: Client = prisma) {
    return client.mouvement.create({ data, include: includeAll });
  },
};
