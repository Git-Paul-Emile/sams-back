import { prisma } from "../config/database.js";
export const commerciauxRepository = {
    findMany(where, opts) {
        return prisma.commercial.findMany({ where, ...opts });
    },
    count(where) {
        return prisma.commercial.count({ where });
    },
    findById(id) {
        return prisma.commercial.findUnique({ where: { id } });
    },
    create(data) {
        return prisma.commercial.create({ data });
    },
    update(id, data) {
        return prisma.commercial.update({ where: { id }, data });
    },
    countAll() {
        return prisma.commercial.count();
    },
    /**
     * Agrégats CA réalisé (année civile en cours) / nb clients distincts / nb
     * commandes pour un lot de commerciaux (batch groupBy, pas de N+1) — copie
     * le pattern de `clientsRepository.aggregatesForClients`.
     */
    async aggregatesForCommerciaux(commercialIds) {
        if (commercialIds.length === 0) {
            return new Map();
        }
        const startOfYear = new Date(new Date().getFullYear(), 0, 1);
        const [caGroups, cmdCountGroups, clientGroups] = await Promise.all([
            prisma.commande.groupBy({
                by: ["commercialId"],
                where: { commercialId: { in: commercialIds }, date: { gte: startOfYear } },
                _sum: { montant: true },
            }),
            prisma.commande.groupBy({
                by: ["commercialId"],
                where: { commercialId: { in: commercialIds } },
                _count: { _all: true },
            }),
            prisma.client.groupBy({
                by: ["commercialId"],
                where: { commercialId: { in: commercialIds } },
                _count: { _all: true },
            }),
        ]);
        const result = new Map();
        for (const id of commercialIds)
            result.set(id, { caRealise: 0, nbClients: 0, nbCmd: 0 });
        for (const group of caGroups) {
            const entry = result.get(group.commercialId);
            entry.caRealise = group._sum.montant ?? 0;
        }
        for (const group of cmdCountGroups) {
            const entry = result.get(group.commercialId);
            entry.nbCmd = group._count._all;
        }
        for (const group of clientGroups) {
            if (!group.commercialId)
                continue;
            const entry = result.get(group.commercialId);
            if (entry)
                entry.nbClients = group._count._all;
        }
        return result;
    },
};
//# sourceMappingURL=commerciaux.repository.js.map