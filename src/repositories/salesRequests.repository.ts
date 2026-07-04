import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const include = {
  client: true,
  commercial: true,
  produit: true,
  valideur: true,
} satisfies Prisma.SalesRequestInclude;

export const salesRequestsRepository = {
  findMany(where: Prisma.SalesRequestWhereInput, opts: { skip: number; take: number }) {
    return prisma.salesRequest.findMany({ where, include, orderBy: { date: "desc" }, ...opts });
  },

  count(where: Prisma.SalesRequestWhereInput) {
    return prisma.salesRequest.count({ where });
  },

  findById(id: string) {
    return prisma.salesRequest.findUnique({ where: { id }, include });
  },

  countThisMonth(likePrefix: string) {
    return prisma.salesRequest.count({ where: { num: { startsWith: likePrefix } } });
  },

  create(data: Prisma.SalesRequestUncheckedCreateInput) {
    return prisma.salesRequest.create({ data, include });
  },
};
