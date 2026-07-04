import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

export const stockItemsRepository = {
  findMany(
    where: Prisma.StockItemWhereInput,
    opts: { skip: number; take: number; orderBy: Prisma.StockItemOrderByWithRelationInput }
  ) {
    return prisma.stockItem.findMany({ where, ...opts });
  },

  count(where: Prisma.StockItemWhereInput) {
    return prisma.stockItem.count({ where });
  },

  findById(id: string) {
    return prisma.stockItem.findUnique({ where: { id } });
  },

  updateStock(id: string, stock: number) {
    return prisma.stockItem.update({ where: { id }, data: { stock } });
  },
};
