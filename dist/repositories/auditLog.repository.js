import { prisma } from "../config/database.js";
const includeUser = { user: true };
export const auditLogRepository = {
    findMany(where, opts) {
        return prisma.auditLog.findMany({ where, include: includeUser, orderBy: { createdAt: "desc" }, ...opts });
    },
    count(where) {
        return prisma.auditLog.count({ where });
    },
};
//# sourceMappingURL=auditLog.repository.js.map