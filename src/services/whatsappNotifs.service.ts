import { whatsappNotifsRepository } from "../repositories/whatsappNotifs.repository.js";
import { toWhatsAppNotifDto } from "../dtos/whatsappNotifs.dto.js";
import { parsePagination } from "../utils/pagination.js";
import type { PaginationParams } from "../utils/pagination.js";

export const whatsappNotifsService = {
  async list(query: Record<string, unknown>) {
    const { page, pageSize, skip, take }: PaginationParams = parsePagination(query);
    const [rows, total] = await Promise.all([
      whatsappNotifsRepository.findMany({ skip, take }),
      whatsappNotifsRepository.count(),
    ]);
    return { items: rows.map(toWhatsAppNotifDto), total, page, pageSize };
  },
};
