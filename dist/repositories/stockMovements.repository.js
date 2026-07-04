import { prisma } from "../config/database.js";
const includeAll = {
    stockItem: true,
    user: true,
    commande: true,
    achat: true,
    prodOrder: true,
    salesRequest: true,
    materialRequest: true,
};
export const stockMovementsRepository = {
    findMany(where, opts) {
        return prisma.mouvement.findMany({ where, include: includeAll, ...opts });
    },
    count(where) {
        return prisma.mouvement.count({ where });
    },
    /** À utiliser à l'intérieur d'un `prisma.$transaction` piloté par le Service. */
    findStockItemById(id, client = prisma) {
        return client.stockItem.findUnique({ where: { id } });
    },
    adjustStock(id, newStock, client = prisma) {
        return client.stockItem.update({ where: { id }, data: { stock: newStock } });
    },
    create(data, client = prisma) {
        return client.mouvement.create({ data, include: includeAll });
    },
};
//# sourceMappingURL=stockMovements.repository.js.map