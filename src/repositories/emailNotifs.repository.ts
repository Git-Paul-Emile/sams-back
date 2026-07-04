import { prisma } from "../config/database.js";

export const emailNotifsRepository = {
  findMany(opts: { skip: number; take: number }) {
    return prisma.emailNotif.findMany({ orderBy: { createdAt: "desc" }, ...opts });
  },

  count() {
    return prisma.emailNotif.count();
  },
};
