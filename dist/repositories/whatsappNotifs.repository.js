import { prisma } from "../config/database.js";
export const whatsappNotifsRepository = {
    findMany(opts) {
        return prisma.whatsAppNotif.findMany({ orderBy: { createdAt: "desc" }, ...opts });
    },
    count() {
        return prisma.whatsAppNotif.count();
    },
};
//# sourceMappingURL=whatsappNotifs.repository.js.map