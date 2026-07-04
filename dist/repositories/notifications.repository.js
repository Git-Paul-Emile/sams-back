import { prisma } from "../config/database.js";
export const notificationsRepository = {
    findMany(opts) {
        return prisma.notif.findMany({ orderBy: { createdAt: "desc" }, ...opts });
    },
    count() {
        return prisma.notif.count();
    },
    findById(id) {
        return prisma.notif.findUnique({ where: { id } });
    },
    create(data) {
        return prisma.notif.create({ data });
    },
    markAsRead(id) {
        return prisma.notif.update({ where: { id }, data: { lu: true } });
    },
};
//# sourceMappingURL=notifications.repository.js.map