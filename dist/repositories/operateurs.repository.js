import { prisma } from "../config/database.js";
export const operateursRepository = {
    findMany(where, opts) {
        return prisma.operateur.findMany({ where, ...opts });
    },
    count(where) {
        return prisma.operateur.count({ where });
    },
    findById(id) {
        return prisma.operateur.findUnique({ where: { id } });
    },
    create(data) {
        return prisma.operateur.create({ data });
    },
    update(id, data) {
        return prisma.operateur.update({ where: { id }, data });
    },
    countAll() {
        return prisma.operateur.count();
    },
    /**
     * Agrégats rendement / OF réalisés / volume / incidents pour un lot
     * d'opérateurs (batch groupBy, pas de N+1).
     */
    async aggregatesForOperateurs(operateurIds) {
        if (operateurIds.length === 0) {
            return new Map();
        }
        const [completedGroups, allOrdersGroups, incidentGroups] = await Promise.all([
            prisma.prodOrder.groupBy({
                by: ["responsableId"],
                where: { responsableId: { in: operateurIds }, statut: "Terminé" },
                _count: { _all: true },
                _avg: { rendement: true },
            }),
            prisma.prodOrder.groupBy({
                by: ["responsableId"],
                where: { responsableId: { in: operateurIds } },
                _sum: { qteReel: true },
            }),
            prisma.incident.groupBy({
                by: ["operateurId"],
                where: { operateurId: { in: operateurIds } },
                _count: { _all: true },
            }),
        ]);
        const result = new Map();
        for (const id of operateurIds)
            result.set(id, { rendement: 0, ofRealises: 0, vol: 0, incidents: 0 });
        for (const group of completedGroups) {
            if (!group.responsableId)
                continue;
            const entry = result.get(group.responsableId);
            if (entry) {
                entry.ofRealises = group._count._all;
                entry.rendement = group._avg.rendement ?? 0;
            }
        }
        for (const group of allOrdersGroups) {
            if (!group.responsableId)
                continue;
            const entry = result.get(group.responsableId);
            if (entry)
                entry.vol = group._sum.qteReel ?? 0;
        }
        for (const group of incidentGroups) {
            if (!group.operateurId)
                continue;
            const entry = result.get(group.operateurId);
            if (entry)
                entry.incidents = group._count._all;
        }
        return result;
    },
};
//# sourceMappingURL=operateurs.repository.js.map