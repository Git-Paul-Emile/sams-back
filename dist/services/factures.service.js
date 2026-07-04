import { StatusCodes } from "http-status-codes";
import { facturesRepository } from "../repositories/factures.repository.js";
import { toFactureDto } from "../dtos/factures.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import { createWithSequenceNumber } from "../utils/sequence.js";
export const facturesService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.statut ? { statut: query.statut } : {}),
            ...(query.clientId ? { clientId: query.clientId } : {}),
            ...(query.search
                ? {
                    OR: [
                        { num: { contains: query.search, mode: "insensitive" } },
                        { client: { raison: { contains: query.search, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };
        const orderBy = { date: "desc" };
        const [rows, total] = await Promise.all([
            facturesRepository.findMany(where, { skip, take, orderBy }),
            facturesRepository.count(where),
        ]);
        const items = rows.map(toFactureDto);
        return { items, total, page, pageSize };
    },
    async get(id) {
        const facture = await facturesRepository.findById(id);
        if (!facture)
            throw new AppError("Facture introuvable", StatusCodes.NOT_FOUND);
        return toFactureDto(facture);
    },
    async create(input, ctx) {
        const created = await createWithSequenceNumber("FAC", (likePrefix) => facturesRepository.countByNumPrefix(likePrefix), (num) => facturesRepository.create({
            num,
            clientId: input.clientId,
            commercialId: input.commercialId,
            commandeId: input.commandeId,
            type: input.type,
            date: new Date(),
            echeance: input.echeance,
            montant: input.montant,
            paye: 0,
            statut: "Émise",
            mode: "—",
            dateReglPrev: null,
            dateReglEff: null,
        }));
        await recordAuditLog({ action: "Création", module: "Facturation", ref: created.num, userId: ctx.userId, ip: ctx.ip });
        return toFactureDto(created);
    },
    async pay(id, input, ctx) {
        const existing = await facturesRepository.findById(id);
        if (!existing)
            throw new AppError("Facture introuvable", StatusCodes.NOT_FOUND);
        const updated = await facturesRepository.pay(id, input.montant, {
            action: "Paiement",
            module: "Facturation",
            ref: existing.num,
            userId: ctx.userId,
            ip: ctx.ip,
        });
        return toFactureDto(updated);
    },
};
//# sourceMappingURL=factures.service.js.map