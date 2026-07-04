import { prisma } from "../config/database.js";
const include = {
    client: true,
    commercial: true,
    produit: true,
    valideur: true,
};
export const salesRequestsRepository = {
    findMany(where, opts) {
        return prisma.salesRequest.findMany({ where, include, orderBy: { date: "desc" }, ...opts });
    },
    count(where) {
        return prisma.salesRequest.count({ where });
    },
    findById(id) {
        return prisma.salesRequest.findUnique({ where: { id }, include });
    },
    countThisMonth(likePrefix) {
        return prisma.salesRequest.count({ where: { num: { startsWith: likePrefix } } });
    },
    create(data) {
        return prisma.salesRequest.create({ data, include });
    },
};
//# sourceMappingURL=salesRequests.repository.js.map