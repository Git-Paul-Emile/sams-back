import { prisma } from "../config/database.js";
export const stockItemsRepository = {
    findMany(where, opts) {
        return prisma.stockItem.findMany({ where, ...opts });
    },
    count(where) {
        return prisma.stockItem.count({ where });
    },
    findById(id) {
        return prisma.stockItem.findUnique({ where: { id } });
    },
    updateStock(id, stock) {
        return prisma.stockItem.update({ where: { id }, data: { stock } });
    },
};
//# sourceMappingURL=stockItems.repository.js.map