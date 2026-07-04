import { prisma } from "../config/database.js";

export const whatsappNotifsRepository = {
  findMany(opts: { skip: number; take: number }) {
    return prisma.whatsAppNotif.findMany({ orderBy: { createdAt: "desc" }, ...opts });
  },

  count() {
    return prisma.whatsAppNotif.count();
  },
};
