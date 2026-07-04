import { prisma } from "../config/database.js";
const include = {
    prodOrder: { include: { produit: true } },
    operateur: true,
    matiere: true,
    valideur: true,
};
export const materialRequestsRepository = {
    findMany(where, opts) {
        return prisma.materialRequest.findMany({ where, include, orderBy: { date: "desc" }, ...opts });
    },
    count(where) {
        return prisma.materialRequest.count({ where });
    },
    findById(id) {
        return prisma.materialRequest.findUnique({ where: { id }, include });
    },
    countThisMonth(likePrefix) {
        return prisma.materialRequest.count({ where: { num: { startsWith: likePrefix } } });
    },
    create(data) {
        return prisma.materialRequest.create({ data, include });
    },
};
//# sourceMappingURL=materialRequests.repository.js.map