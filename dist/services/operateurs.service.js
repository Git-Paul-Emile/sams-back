import { StatusCodes } from "http-status-codes";
import { operateursRepository } from "../repositories/operateurs.repository.js";
import { toOperateurDto } from "../dtos/operateurs.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
export const operateursService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.statut ? { statut: query.statut } : {}),
            ...(query.search
                ? {
                    OR: [
                        { nom: { contains: query.search, mode: "insensitive" } },
                        { prenom: { contains: query.search, mode: "insensitive" } },
                        { matricule: { contains: query.search, mode: "insensitive" } },
                        { ligne: { contains: query.search, mode: "insensitive" } },
                    ],
                }
                : {}),
        };
        const orderBy = { [query.sort ?? "nom"]: query.order ?? "asc" };
        const [rows, total] = await Promise.all([
            operateursRepository.findMany(where, { skip, take, orderBy }),
            operateursRepository.count(where),
        ]);
        const aggregates = await operateursRepository.aggregatesForOperateurs(rows.map((r) => r.id));
        const items = rows.map((row) => toOperateurDto(row, aggregates.get(row.id)));
        return { items, total, page, pageSize };
    },
    async get(id) {
        const operateur = await operateursRepository.findById(id);
        if (!operateur)
            throw new AppError("Opérateur introuvable", StatusCodes.NOT_FOUND);
        const aggregates = await operateursRepository.aggregatesForOperateurs([id]);
        return toOperateurDto(operateur, aggregates.get(id));
    },
    async create(input, ctx) {
        const matricule = input.matricule ?? `OP-${String((await operateursRepository.countAll()) + 1).padStart(3, "0")}`;
        const created = await operateursRepository.create({
            matricule,
            nom: input.nom,
            prenom: input.prenom,
            tel: input.tel,
            email: input.email,
            poste: input.poste,
            ligne: input.ligne,
            embauche: input.embauche,
            statut: "Actif",
        });
        await recordAuditLog({ action: "Création", module: "Admin", ref: created.matricule, userId: ctx.userId, ip: ctx.ip });
        const aggregates = await operateursRepository.aggregatesForOperateurs([created.id]);
        return toOperateurDto(created, aggregates.get(created.id));
    },
    async update(id, input, ctx) {
        const existing = await operateursRepository.findById(id);
        if (!existing)
            throw new AppError("Opérateur introuvable", StatusCodes.NOT_FOUND);
        const updated = await operateursRepository.update(id, input);
        await recordAuditLog({ action: "Modification", module: "Admin", ref: updated.matricule, userId: ctx.userId, ip: ctx.ip });
        const aggregates = await operateursRepository.aggregatesForOperateurs([id]);
        return toOperateurDto(updated, aggregates.get(id));
    },
};
//# sourceMappingURL=operateurs.service.js.map