import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { stockMovementsRepository } from "../repositories/stockMovements.repository.js";
import { toMouvementDto } from "../dtos/stockMovements.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import type { CreateMouvementInput, ListMouvementsQuery } from "../validators/stockMovements.validator.js";
import type { Prisma } from "../generated/prisma/client.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const stockMovementsService = {
  async list(query: ListMouvementsQuery) {
    const { page, pageSize, skip, take } = parsePagination(query);
    const where: Prisma.MouvementWhereInput = {
      ...(query.stockItemId ? { stockItemId: query.stockItemId } : {}),
      ...(query.type ? { type: query.type } : {}),
      ...(query.search
        ? {
            OR: [
              { stockItem: { designation: { contains: query.search, mode: "insensitive" } } },
              { motif: { contains: query.search, mode: "insensitive" } },
              { user: { nom: { contains: query.search, mode: "insensitive" } } },
            ],
          }
        : {}),
    };

    const [rows, total] = await Promise.all([
      stockMovementsRepository.findMany(where, { skip, take, orderBy: { date: "desc" } }),
      stockMovementsRepository.count(where),
    ]);

    return { items: rows.map(toMouvementDto), total, page, pageSize };
  },

  /**
   * Transaction obligatoire : le mouvement ET l'ajustement du stock associé
   * doivent réussir ou échouer ensemble (jamais un mouvement enregistré sans
   * que le stock reflète la réalité, ni l'inverse) — voir plan §2/§5.
   */
  async create(input: CreateMouvementInput, ctx: ActionContext) {
    const created = await prisma.$transaction(async (tx) => {
      const stockItem = await stockMovementsRepository.findStockItemById(input.stockItemId, tx);
      if (!stockItem) throw new AppError("Article de stock introuvable", StatusCodes.NOT_FOUND);

      const newStock = stockItem.stock + input.qte;
      if (newStock < 0) throw new AppError("Stock insuffisant", StatusCodes.BAD_REQUEST);

      await stockMovementsRepository.adjustStock(input.stockItemId, newStock, tx);

      return stockMovementsRepository.create(
        {
          stockItemId: input.stockItemId,
          type: input.type,
          qte: input.qte,
          motif: input.motif,
          userId: ctx.userId,
          commandeId: input.commandeId,
          achatId: input.achatId,
          prodOrderId: input.prodOrderId,
          salesRequestId: input.salesRequestId,
          materialRequestId: input.materialRequestId,
        },
        tx
      );
    });

    await recordAuditLog({
      action: "Mouvement de stock",
      module: "Stocks",
      ref: created.stockItem.designation,
      userId: ctx.userId,
      ip: ctx.ip,
    });

    return toMouvementDto(created);
  },
};
