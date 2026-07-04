import { emailNotifsRepository } from "../repositories/emailNotifs.repository.js";
import { toEmailNotifDto } from "../dtos/emailNotifs.dto.js";
import { parsePagination } from "../utils/pagination.js";
export const emailNotifsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const [rows, total] = await Promise.all([
            emailNotifsRepository.findMany({ skip, take }),
            emailNotifsRepository.count(),
        ]);
        return { items: rows.map(toEmailNotifDto), total, page, pageSize };
    },
};
//# sourceMappingURL=emailNotifs.service.js.map