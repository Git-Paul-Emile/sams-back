import { approvalHistoryRepository } from "../repositories/approvalHistory.repository.js";
import { toApprovalRecordDto } from "../dtos/approvalHistory.dto.js";
import { parsePagination } from "../utils/pagination.js";
export const approvalHistoryService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = query.module ? { module: query.module } : {};
        const [rows, total] = await Promise.all([
            approvalHistoryRepository.findMany(where, { skip, take }),
            approvalHistoryRepository.count(where),
        ]);
        return { items: rows.map(toApprovalRecordDto), total, page, pageSize };
    },
};
//# sourceMappingURL=approvalHistory.service.js.map