import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const include = {
  prodOrder: { include: { produit: true } },
  operateur: true,
  matiere: true,
  valideur: true,
} satisfies Prisma.MaterialRequestInclude;

export const materialRequestsRepository = {
  findMany(where: Prisma.MaterialRequestWhereInput, opts: { skip: number; take: number }) {
    return prisma.materialRequest.findMany({ where, include, orderBy: { date: "desc" }, ...opts });
  },

  count(where: Prisma.MaterialRequestWhereInput) {
    return prisma.materialRequest.count({ where });
  },

  findById(id: string) {
    return prisma.materialRequest.findUnique({ where: { id }, include });
  },

  countThisMonth(likePrefix: string) {
    return prisma.materialRequest.count({ where: { num: { startsWith: likePrefix } } });
  },

  create(data: Prisma.MaterialRequestUncheckedCreateInput) {
    return prisma.materialRequest.create({ data, include });
  },
};
