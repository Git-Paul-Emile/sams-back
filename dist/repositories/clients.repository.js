import { prisma } from "../config/database.js";
const includeCommercial = { commercial: true };
export const clientsRepository = {
    findMany(where, opts) {
        return prisma.client.findMany({ where, include: includeCommercial, ...opts });
    },
    count(where) {
        return prisma.client.count({ where });
    },
    findById(id) {
        return prisma.client.findUnique({ where: { id }, include: includeCommercial });
    },
    create(data) {
        return prisma.client.create({ data, include: includeCommercial });
    },
    update(id, data) {
        return prisma.client.update({ where: { id }, data, include: includeCommercial });
    },
    countAll() {
        return prisma.client.count();
    },
    /** Agrégats commandes/factures pour un lot de clients (une seule requête par table, pas de N+1). */
    async aggregatesForClients(clientIds) {
        if (clientIds.length === 0) {
            return new Map();
        }
        const startOfYear = new Date(new Date().getFullYear(), 0, 1);
        const [commandeGroups, factures] = await Promise.all([
            prisma.commande.groupBy({
                by: ["clientId"],
                where: { clientId: { in: clientIds }, date: { gte: startOfYear } },
                _sum: { montant: true },
                _count: { _all: true },
            }),
            prisma.facture.findMany({
                where: { clientId: { in: clientIds } },
                select: { clientId: true, montant: true, paye: true },
            }),
        ]);
        const result = new Map();
        for (const id of clientIds)
            result.set(id, { nbCmd: 0, caYtd: 0, encours: 0 });
        for (const group of commandeGroups) {
            const entry = result.get(group.clientId);
            entry.nbCmd = group._count._all;
            entry.caYtd = group._sum.montant ?? 0;
        }
        for (const facture of factures) {
            const entry = result.get(facture.clientId);
            if (entry)
                entry.encours += facture.montant - facture.paye;
        }
        return result;
    },
};
//# sourceMappingURL=clients.repository.js.map