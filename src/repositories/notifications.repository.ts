import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

export const notificationsRepository = {
  findMany(opts: { skip: number; take: number }) {
    return prisma.notif.findMany({ orderBy: { createdAt: "desc" }, ...opts });
  },

  count() {
    return prisma.notif.count();
  },

  findById(id: string) {
    return prisma.notif.findUnique({ where: { id } });
  },

  create(data: Prisma.NotifUncheckedCreateInput) {
    return prisma.notif.create({ data });
  },

  markAsRead(id: string) {
    return prisma.notif.update({ where: { id }, data: { lu: true } });
  },
};
