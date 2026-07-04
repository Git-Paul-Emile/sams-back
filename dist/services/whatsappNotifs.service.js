import { whatsappNotifsRepository } from "../repositories/whatsappNotifs.repository.js";
import { toWhatsAppNotifDto } from "../dtos/whatsappNotifs.dto.js";
import { parsePagination } from "../utils/pagination.js";
export const whatsappNotifsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const [rows, total] = await Promise.all([
            whatsappNotifsRepository.findMany({ skip, take }),
            whatsappNotifsRepository.count(),
        ]);
        return { items: rows.map(toWhatsAppNotifDto), total, page, pageSize };
    },
};
//# sourceMappingURL=whatsappNotifs.service.js.map