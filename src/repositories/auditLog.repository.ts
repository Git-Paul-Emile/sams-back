import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeUser = { user: true } satisfies Prisma.AuditLogInclude;

export const auditLogRepository = {
  findMany(where: Prisma.AuditLogWhereInput, opts: { skip: number; take: number }) {
    return prisma.auditLog.findMany({ where, include: includeUser, orderBy: { createdAt: "desc" }, ...opts });
  },

  count(where: Prisma.AuditLogWhereInput) {
    return prisma.auditLog.count({ where });
  },
};
