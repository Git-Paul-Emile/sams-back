import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeAll = {
  produit: true,
  responsable: true,
} satisfies Prisma.ProdOrderInclude;

export const prodOrdersRepository = {
  findMany(
    where: Prisma.ProdOrderWhereInput,
    opts: { skip: number; take: number; orderBy: Prisma.ProdOrderOrderByWithRelationInput }
  ) {
    return prisma.prodOrder.findMany({ where, include: includeAll, ...opts });
  },

  count(where: Prisma.ProdOrderWhereInput) {
    return prisma.prodOrder.count({ where });
  },

  findById(id: string) {
    return prisma.prodOrder.findUnique({ where: { id }, include: includeAll });
  },

  create(data: Prisma.ProdOrderUncheckedCreateInput) {
    return prisma.prodOrder.create({ data, include: includeAll });
  },

  countByNumPrefix(likePrefix: string) {
    return prisma.prodOrder.count({ where: { num: { startsWith: likePrefix } } });
  },

  /** Lignes brutes pour l'agrégation mensuelle de `/chart` — dataset borné (§ compute-on-read). */
  findAllForChart() {
    return prisma.prodOrder.findMany({ select: { debut: true, qteReel: true, qtePrev: true } });
  },
};
