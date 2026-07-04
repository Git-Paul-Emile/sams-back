import { StatusCodes } from "http-status-codes";
import { stockItemsRepository } from "../repositories/stockItems.repository.js";
import { toStockItemDto } from "../dtos/stockItems.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
export const stockItemsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.type ? { type: query.type } : {}),
            ...(query.search
                ? {
                    OR: [
                        { designation: { contains: query.search, mode: "insensitive" } },
                        { code: { contains: query.search, mode: "insensitive" } },
                    ],
                }
                : {}),
        };
        const [rows, total] = await Promise.all([
            stockItemsRepository.findMany(where, { skip, take, orderBy: { designation: "asc" } }),
            stockItemsRepository.count(where),
        ]);
        return { items: rows.map(toStockItemDto), total, page, pageSize };
    },
    async get(id) {
        const item = await stockItemsRepository.findById(id);
        if (!item)
            throw new AppError("Article de stock introuvable", StatusCodes.NOT_FOUND);
        return toStockItemDto(item);
    },
    async setStock(id, input, ctx) {
        const existing = await stockItemsRepository.findById(id);
        if (!existing)
            throw new AppError("Article de stock introuvable", StatusCodes.NOT_FOUND);
        if (input.stock < 0)
            throw new AppError("Le stock ne peut pas être négatif", StatusCodes.BAD_REQUEST);
        const updated = await stockItemsRepository.updateStock(id, input.stock);
        await recordAuditLog({
            action: "Ajustement stock",
            module: "Stocks",
            ref: updated.code,
            userId: ctx.userId,
            ip: ctx.ip,
        });
        return toStockItemDto(updated);
    },
};
//# sourceMappingURL=stockItems.service.js.map