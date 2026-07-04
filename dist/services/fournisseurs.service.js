import { StatusCodes } from "http-status-codes";
import { fournisseursRepository } from "../repositories/fournisseurs.repository.js";
import { toFournisseurDto } from "../dtos/fournisseurs.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
export const fournisseursService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.search ? { nom: { contains: query.search, mode: "insensitive" } } : {}),
        };
        const orderBy = { [query.sort ?? "nom"]: query.order ?? "asc" };
        const [rows, total] = await Promise.all([
            fournisseursRepository.findMany(where, { skip, take, orderBy }),
            fournisseursRepository.count(where),
        ]);
        return { items: rows.map(toFournisseurDto), total, page, pageSize };
    },
    async get(id) {
        const fournisseur = await fournisseursRepository.findById(id);
        if (!fournisseur)
            throw new AppError("Fournisseur introuvable", StatusCodes.NOT_FOUND);
        return toFournisseurDto(fournisseur);
    },
    async create(input, ctx) {
        const created = await fournisseursRepository.create({
            nom: input.nom,
            contact: input.contact,
            tel: input.tel,
            email: input.email,
            adresse: input.adresse,
        });
        await recordAuditLog({ action: "Création", module: "Achats", ref: created.nom, userId: ctx.userId, ip: ctx.ip });
        return toFournisseurDto(created);
    },
    async update(id, input, ctx) {
        const existing = await fournisseursRepository.findById(id);
        if (!existing)
            throw new AppError("Fournisseur introuvable", StatusCodes.NOT_FOUND);
        const updated = await fournisseursRepository.update(id, input);
        await recordAuditLog({ action: "Modification", module: "Achats", ref: updated.nom, userId: ctx.userId, ip: ctx.ip });
        return toFournisseurDto(updated);
    },
};
//# sourceMappingURL=fournisseurs.service.js.map