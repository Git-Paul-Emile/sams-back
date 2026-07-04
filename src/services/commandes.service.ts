import { StatusCodes } from "http-status-codes";
import { commandesRepository } from "../repositories/commandes.repository.js";
import { toCommandeDto } from "../dtos/commandes.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import { createWithSequenceNumber } from "../utils/sequence.js";
import type { AddCommandeTimelineInput, CreateCommandeInput, ListCommandesQuery } from "../validators/commandes.validator.js";
import type { Prisma } from "../generated/prisma/client.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const commandesService = {
  async list(query: ListCommandesQuery) {
    const { page, pageSize, skip, take } = parsePagination(query);
    const where: Prisma.CommandeWhereInput = {
      ...(query.statutActuel ? { statutActuel: query.statutActuel } : {}),
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
    const orderBy: Prisma.CommandeOrderByWithRelationInput = { date: "desc" };

    const [rows, total] = await Promise.all([
      commandesRepository.findMany(where, { skip, take, orderBy }),
      commandesRepository.count(where),
    ]);

    const items = rows.map(toCommandeDto);
    return { items, total, page, pageSize };
  },

  async get(id: string) {
    const commande = await commandesRepository.findById(id);
    if (!commande) throw new AppError("Commande introuvable", StatusCodes.NOT_FOUND);
    return toCommandeDto(commande);
  },

  async create(input: CreateCommandeInput, ctx: ActionContext) {
    const now = new Date();

    const created = await createWithSequenceNumber(
      "CMD",
      (likePrefix) => commandesRepository.countByNumPrefix(likePrefix),
      (num) =>
        commandesRepository.createWithTimeline(
          {
            num,
            clientId: input.clientId,
            date: now,
            montant: input.montant,
            commercialId: input.commercialId,
            statutActuel: "Devis",
          },
          ctx.userId
        )
    );

    await recordAuditLog({ action: "Création", module: "Ventes", ref: created.num, userId: ctx.userId, ip: ctx.ip });
    return toCommandeDto(created);
  },

  async addTimelineEvent(id: string, input: AddCommandeTimelineInput, ctx: ActionContext) {
    const existing = await commandesRepository.findById(id);
    if (!existing) throw new AppError("Commande introuvable", StatusCodes.NOT_FOUND);

    const updated = await commandesRepository.appendTimeline(id, input.etat, ctx.userId, input.commentaire);
    await recordAuditLog({ action: "Changement d'état", module: "Ventes", ref: updated.num, userId: ctx.userId, ip: ctx.ip });
    return toCommandeDto(updated);
  },
};
