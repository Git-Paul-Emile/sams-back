import { auditLogRepository } from "../repositories/auditLog.repository.js";
import { toAuditLogDto } from "../dtos/auditLog.dto.js";
import { parsePagination } from "../utils/pagination.js";
export const auditLogService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.module ? { module: query.module } : {}),
            ...(query.search
                ? {
                    OR: [
                        { action: { contains: query.search, mode: "insensitive" } },
                        { ref: { contains: query.search, mode: "insensitive" } },
                        { ip: { contains: query.search, mode: "insensitive" } },
                        { user: { nom: { contains: query.search, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };
        const [rows, total] = await Promise.all([
            auditLogRepository.findMany(where, { skip, take }),
            auditLogRepository.count(where),
        ]);
        return { items: rows.map(toAuditLogDto), total, page, pageSize };
    },
};
//# sourceMappingURL=auditLog.service.js.map