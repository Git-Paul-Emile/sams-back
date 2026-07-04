import { auditLogRepository } from "../repositories/auditLog.repository.js";
import { toAuditLogDto } from "../dtos/auditLog.dto.js";
import { parsePagination } from "../utils/pagination.js";
import type { ListAuditLogQuery } from "../validators/auditLog.validator.js";
import type { Prisma } from "../generated/prisma/client.js";

export const auditLogService = {
  async list(query: ListAuditLogQuery) {
    const { page, pageSize, skip, take } = parsePagination(query);
    const where: Prisma.AuditLogWhereInput = {
      ...(query.module ? { module: query.module } : {}),
    };

    const [rows, total] = await Promise.all([
      auditLogRepository.findMany(where, { skip, take }),
      auditLogRepository.count(where),
    ]);

    return { items: rows.map(toAuditLogDto), total, page, pageSize };
  },
};
