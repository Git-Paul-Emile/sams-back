import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const include = {
  valideur: true,
  salesRequest: true,
  materialRequest: true,
} satisfies Prisma.ApprovalRecordInclude;

export const approvalHistoryRepository = {
  findMany(where: Prisma.ApprovalRecordWhereInput, opts: { skip: number; take: number }) {
    return prisma.approvalRecord.findMany({ where, include, orderBy: { date: "desc" }, ...opts });
  },
  count(where: Prisma.ApprovalRecordWhereInput) {
    return prisma.approvalRecord.count({ where });
  },
};
