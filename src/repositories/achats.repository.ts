import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeFournisseur = { fournisseur: true } satisfies Prisma.AchatInclude;

export const achatsRepository = {
  findMany(where: Prisma.AchatWhereInput, opts: { skip: number; take: number; orderBy: Prisma.AchatOrderByWithRelationInput }) {
    return prisma.achat.findMany({ where, include: includeFournisseur, ...opts });
  },

  count(where: Prisma.AchatWhereInput) {
    return prisma.achat.count({ where });
  },

  countByNumPrefix(likePrefix: string) {
    return prisma.achat.count({ where: { num: { startsWith: likePrefix } } });
  },

  findById(id: string) {
    return prisma.achat.findUnique({ where: { id }, include: includeFournisseur });
  },

  /**
   * Résout un fournisseur par nom (insensible à la casse) ou le crée, puis
   * crée l'achat dans la même transaction — évite les doublons de fournisseur
   * et garantit l'atomicité résolution+écriture (cf plan).
   */
  async createWithFournisseur(
    fournisseurNom: string,
    data: Omit<Prisma.AchatUncheckedCreateInput, "fournisseurId">
  ) {
    return prisma.$transaction(async (tx) => {
      let fournisseur = await tx.fournisseur.findFirst({
        where: { nom: { equals: fournisseurNom, mode: "insensitive" } },
      });

      if (!fournisseur) {
        fournisseur = await tx.fournisseur.create({ data: { nom: fournisseurNom } });
      }

      const achat = await tx.achat.create({
        data: { ...data, fournisseurId: fournisseur.id },
        include: includeFournisseur,
      });

      return achat;
    });
  },
};
