import { StatusCodes } from "http-status-codes";
import { incidentsRepository } from "../repositories/incidents.repository.js";
import { toIncidentDto } from "../dtos/incidents.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
export const incidentsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.statut ? { statut: query.statut } : {}),
            ...(query.search
                ? {
                    OR: [
                        { description: { contains: query.search, mode: "insensitive" } },
                        { categorie: { contains: query.search, mode: "insensitive" } },
                        { operateur: { nom: { contains: query.search, mode: "insensitive" } } },
                        { prodOrder: { num: { contains: query.search, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };
        const [rows, total] = await Promise.all([
            incidentsRepository.findMany(where, { skip, take, orderBy: { date: "desc" } }),
            incidentsRepository.count(where),
        ]);
        return { items: rows.map(toIncidentDto), total, page, pageSize };
    },
    async get(id) {
        const incident = await incidentsRepository.findById(id);
        if (!incident)
            throw new AppError("Incident introuvable", StatusCodes.NOT_FOUND);
        return toIncidentDto(incident);
    },
    // Pas de PATCH pour l'instant : les transitions de statut d'incident ne sont
    // pas spécifiées dans le contrat frontend actuel (scope cut assumé).
    async create(input, ctx) {
        const created = await incidentsRepository.create({
            prodOrderId: input.prodOrderId,
            operateurId: input.operateurId,
            categorie: input.categorie,
            description: input.description,
            gravite: input.gravite,
            statut: "Ouvert",
            date: new Date(),
        });
        await recordAuditLog({ action: "Création", module: "Production", ref: created.prodOrder.num, userId: ctx.userId, ip: ctx.ip });
        return toIncidentDto(created);
    },
};
//# sourceMappingURL=incidents.service.js.map