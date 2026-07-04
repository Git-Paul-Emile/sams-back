import { prisma } from "../config/database.js";
export const emailNotifsRepository = {
    findMany(opts) {
        return prisma.emailNotif.findMany({ orderBy: { createdAt: "desc" }, ...opts });
    },
    count() {
        return prisma.emailNotif.count();
    },
};
//# sourceMappingURL=emailNotifs.repository.js.map