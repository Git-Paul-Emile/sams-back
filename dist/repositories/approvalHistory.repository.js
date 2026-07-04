import { prisma } from "../config/database.js";
const include = {
    valideur: true,
    salesRequest: true,
    materialRequest: true,
};
export const approvalHistoryRepository = {
    findMany(where, opts) {
        return prisma.approvalRecord.findMany({ where, include, orderBy: { date: "desc" }, ...opts });
    },
    count(where) {
        return prisma.approvalRecord.count({ where });
    },
};
//# sourceMappingURL=approvalHistory.repository.js.map