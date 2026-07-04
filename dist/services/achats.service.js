import { StatusCodes } from "http-status-codes";
import { achatsRepository } from "../repositories/achats.repository.js";
import { toAchatDto } from "../dtos/achats.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import { createWithSequenceNumber } from "../utils/sequence.js";
export const achatsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.statut ? { statut: query.statut } : {}),
            ...(query.search
                ? {
                    OR: [
                        { num: { contains: query.search, mode: "insensitive" } },
                        { fournisseur: { nom: { contains: query.search, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };
        const orderBy = { date: "desc" };
        const [rows, total] = await Promise.all([
            achatsRepository.findMany(where, { skip, take, orderBy }),
            achatsRepository.count(where),
        ]);
        const items = rows.map(toAchatDto);
        return { items, total, page, pageSize };
    },
    async get(id) {
        const achat = await achatsRepository.findById(id);
        if (!achat)
            throw new AppError("Achat introuvable", StatusCodes.NOT_FOUND);
        return toAchatDto(achat);
    },
    async create(input, ctx) {
        const now = new Date();
        const created = await createWithSequenceNumber("BC", (likePrefix) => achatsRepository.countByNumPrefix(likePrefix), (num) => achatsRepository.createWithFournisseur(input.fournisseur, {
            num,
            date: now,
            livraison: input.livraison,
            montant: input.montant,
            articles: input.articles,
            statut: "En attente",
        }));
        await recordAuditLog({ action: "Création", module: "Achats", ref: created.num, userId: ctx.userId, ip: ctx.ip });
        return toAchatDto(created);
    },
};
//# sourceMappingURL=achats.service.js.map