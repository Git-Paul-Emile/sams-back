import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

// Le frontend (`VentesOverview.tsx`) lit `.timeline` directement sur les
// lignes de la liste (pas de fetch détail séparé au clic) — la timeline est
// donc incluse aussi bien en liste qu'en détail. Un seul `include` imbriqué
// (pas de boucle par ligne) : Prisma exécute une requête batchée, pas de N+1.
const includeDetailRelations = {
  client: true,
  commercial: true,
  timeline: {
    include: { user: true },
    orderBy: { date: "asc" },
  },
} satisfies Prisma.CommandeInclude;

export const commandesRepository = {
  findMany(where: Prisma.CommandeWhereInput, opts: { skip: number; take: number; orderBy: Prisma.CommandeOrderByWithRelationInput }) {
    return prisma.commande.findMany({ where, include: includeDetailRelations, ...opts });
  },

  count(where: Prisma.CommandeWhereInput) {
    return prisma.commande.count({ where });
  },

  countByNumPrefix(likePrefix: string) {
    return prisma.commande.count({ where: { num: { startsWith: likePrefix } } });
  },

  findById(id: string) {
    return prisma.commande.findUnique({ where: { id }, include: includeDetailRelations });
  },

  /**
   * Crée la commande et sa première ligne de timeline dans la même
   * transaction interactive (atomicité requise par le plan).
   */
  async createWithTimeline(data: Prisma.CommandeUncheckedCreateInput, userId: string) {
    return prisma.$transaction(async (tx) => {
      const commande = await tx.commande.create({ data });

      await tx.commandeTimeline.create({
        data: {
          commandeId: commande.id,
          etat: commande.statutActuel,
          date: commande.date,
          userId,
          commentaire: "",
        },
      });

      return tx.commande.findUniqueOrThrow({ where: { id: commande.id }, include: includeDetailRelations });
    });
  },

  /**
   * Ajoute un événement de timeline et met à jour `statutActuel` dans la même
   * transaction.
   */
  async appendTimeline(commandeId: string, etat: string, userId: string, commentaire: string | undefined) {
    return prisma.$transaction(async (tx) => {
      await tx.commandeTimeline.create({
        data: { commandeId, etat, date: new Date(), userId, commentaire: commentaire ?? "" },
      });

      await tx.commande.update({ where: { id: commandeId }, data: { statutActuel: etat } });

      return tx.commande.findUniqueOrThrow({ where: { id: commandeId }, include: includeDetailRelations });
    });
  },
};
