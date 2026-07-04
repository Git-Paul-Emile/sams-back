import { prisma } from "../config/database.js";
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
};
export const commandesRepository = {
    findMany(where, opts) {
        return prisma.commande.findMany({ where, include: includeDetailRelations, ...opts });
    },
    count(where) {
        return prisma.commande.count({ where });
    },
    countByNumPrefix(likePrefix) {
        return prisma.commande.count({ where: { num: { startsWith: likePrefix } } });
    },
    findById(id) {
        return prisma.commande.findUnique({ where: { id }, include: includeDetailRelations });
    },
    /**
     * Crée la commande et sa première ligne de timeline dans la même
     * transaction interactive (atomicité requise par le plan).
     */
    async createWithTimeline(data, userId) {
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
    async appendTimeline(commandeId, etat, userId, commentaire) {
        return prisma.$transaction(async (tx) => {
            await tx.commandeTimeline.create({
                data: { commandeId, etat, date: new Date(), userId, commentaire: commentaire ?? "" },
            });
            await tx.commande.update({ where: { id: commandeId }, data: { statutActuel: etat } });
            return tx.commande.findUniqueOrThrow({ where: { id: commandeId }, include: includeDetailRelations });
        });
    },
};
//# sourceMappingURL=commandes.repository.js.map