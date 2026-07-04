import { prisma } from "../config/database.js";
const includeAll = {
    produit: true,
    responsable: true,
};
export const prodOrdersRepository = {
    findMany(where, opts) {
        return prisma.prodOrder.findMany({ where, include: includeAll, ...opts });
    },
    count(where) {
        return prisma.prodOrder.count({ where });
    },
    findById(id) {
        return prisma.prodOrder.findUnique({ where: { id }, include: includeAll });
    },
    create(data) {
        return prisma.prodOrder.create({ data, include: includeAll });
    },
    countByNumPrefix(likePrefix) {
        return prisma.prodOrder.count({ where: { num: { startsWith: likePrefix } } });
    },
    /** Lignes brutes pour l'agrégation mensuelle de `/chart` — dataset borné (§ compute-on-read). */
    findAllForChart() {
        return prisma.prodOrder.findMany({ select: { debut: true, qteReel: true, qtePrev: true } });
    },
};
//# sourceMappingURL=prodOrders.repository.js.map