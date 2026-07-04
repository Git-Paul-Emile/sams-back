import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

export const fournisseursRepository = {
  findMany(
    where: Prisma.FournisseurWhereInput,
    opts: { skip: number; take: number; orderBy: Prisma.FournisseurOrderByWithRelationInput }
  ) {
    return prisma.fournisseur.findMany({ where, ...opts });
  },

  count(where: Prisma.FournisseurWhereInput) {
    return prisma.fournisseur.count({ where });
  },

  findById(id: string) {
    return prisma.fournisseur.findUnique({ where: { id } });
  },

  create(data: Prisma.FournisseurUncheckedCreateInput) {
    return prisma.fournisseur.create({ data });
  },

  update(id: string, data: Prisma.FournisseurUncheckedUpdateInput) {
    return prisma.fournisseur.update({ where: { id }, data });
  },
};
