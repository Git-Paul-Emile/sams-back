import { StatusCodes } from "http-status-codes";
import { notificationsRepository } from "../repositories/notifications.repository.js";
import { toNotifDto } from "../dtos/notifications.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { emitNotifCreated } from "../realtime/socketServer.js";
export const notificationsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const [rows, total] = await Promise.all([
            notificationsRepository.findMany({ skip, take }),
            notificationsRepository.count(),
        ]);
        return { items: rows.map(toNotifDto), total, page, pageSize };
    },
    async create(input) {
        const created = await notificationsRepository.create({ ...input, lu: false });
        const dto = toNotifDto(created);
        emitNotifCreated(dto);
        return dto;
    },
    async markAsRead(id) {
        const existing = await notificationsRepository.findById(id);
        if (!existing)
            throw new AppError("Notification introuvable", StatusCodes.NOT_FOUND);
        const updated = await notificationsRepository.markAsRead(id);
        return toNotifDto(updated);
    },
};
//# sourceMappingURL=notifications.service.js.map