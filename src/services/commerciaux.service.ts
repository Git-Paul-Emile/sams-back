import { StatusCodes } from "http-status-codes";
import { commerciauxRepository } from "../repositories/commerciaux.repository.js";
import { toCommercialDto } from "../dtos/commerciaux.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import type {
  CreateCommercialInput,
  ListCommerciauxQuery,
  UpdateCommercialInput,
} from "../validators/commerciaux.validator.js";
import type { Prisma } from "../generated/prisma/client.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const commerciauxService = {
  async list(query: ListCommerciauxQuery) {
    const { page, pageSize, skip, take } = parsePagination(query);
    const where: Prisma.CommercialWhereInput = {
      ...(query.statut ? { statut: query.statut } : {}),
      ...(query.search
        ? {
            OR: [
              { nom: { contains: query.search, mode: "insensitive" } },
              { prenom: { contains: query.search, mode: "insensitive" } },
              { matricule: { contains: query.search, mode: "insensitive" } },
            ],
          }
        : {}),
    };
    const orderBy: Prisma.CommercialOrderByWithRelationInput = { [query.sort ?? "nom"]: query.order ?? "asc" };

    const [rows, total] = await Promise.all([
      commerciauxRepository.findMany(where, { skip, take, orderBy }),
      commerciauxRepository.count(where),
    ]);

    const aggregates = await commerciauxRepository.aggregatesForCommerciaux(rows.map((r) => r.id));
    const items = rows.map((row) => toCommercialDto(row, aggregates.get(row.id)!));

    return { items, total, page, pageSize };
  },

  async get(id: string) {
    const commercial = await commerciauxRepository.findById(id);
    if (!commercial) throw new AppError("Commercial introuvable", StatusCodes.NOT_FOUND);
    const aggregates = await commerciauxRepository.aggregatesForCommerciaux([id]);
    return toCommercialDto(commercial, aggregates.get(id)!);
  },

  async create(input: CreateCommercialInput, ctx: ActionContext) {
    const matricule =
      input.matricule ?? `COM-${String((await commerciauxRepository.countAll()) + 1).padStart(3, "0")}`;
    const created = await commerciauxRepository.create({
      matricule,
      nom: input.nom,
      prenom: input.prenom,
      tel: input.tel,
      email: input.email,
      zone: input.zone,
      objectif: input.objectif ?? 0,
      statut: "Actif",
    });

    await recordAuditLog({ action: "Création", module: "Admin", ref: created.matricule, userId: ctx.userId, ip: ctx.ip });
    const aggregates = await commerciauxRepository.aggregatesForCommerciaux([created.id]);
    return toCommercialDto(created, aggregates.get(created.id)!);
  },

  async update(id: string, input: UpdateCommercialInput, ctx: ActionContext) {
    const existing = await commerciauxRepository.findById(id);
    if (!existing) throw new AppError("Commercial introuvable", StatusCodes.NOT_FOUND);

    const updated = await commerciauxRepository.update(id, input);
    await recordAuditLog({ action: "Modification", module: "Admin", ref: updated.matricule, userId: ctx.userId, ip: ctx.ip });
    const aggregates = await commerciauxRepository.aggregatesForCommerciaux([id]);
    return toCommercialDto(updated, aggregates.get(id)!);
  },
};
