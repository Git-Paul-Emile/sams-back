import { StatusCodes } from "http-status-codes";
import { clientsRepository } from "../repositories/clients.repository.js";
import { toClientDto } from "../dtos/clients.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import type { CreateClientInput, ListClientsQuery, UpdateClientInput } from "../validators/clients.validator.js";
import type { Prisma } from "../generated/prisma/client.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const clientsService = {
  async list(query: ListClientsQuery) {
    const { page, pageSize, skip, take } = parsePagination(query);
    const where: Prisma.ClientWhereInput = {
      ...(query.statut ? { statut: query.statut } : {}),
      ...(query.search ? { raison: { contains: query.search, mode: "insensitive" } } : {}),
    };
    const orderBy: Prisma.ClientOrderByWithRelationInput = { [query.sort ?? "raison"]: query.order ?? "asc" };

    const [rows, total] = await Promise.all([
      clientsRepository.findMany(where, { skip, take, orderBy }),
      clientsRepository.count(where),
    ]);

    const aggregates = await clientsRepository.aggregatesForClients(rows.map((r) => r.id));
    const items = rows.map((row) => toClientDto(row, aggregates.get(row.id)!));

    return { items, total, page, pageSize };
  },

  async get(id: string) {
    const client = await clientsRepository.findById(id);
    if (!client) throw new AppError("Client introuvable", StatusCodes.NOT_FOUND);
    const aggregates = await clientsRepository.aggregatesForClients([id]);
    return toClientDto(client, aggregates.get(id)!);
  },

  async create(input: CreateClientInput, ctx: ActionContext) {
    const code = input.code ?? `CLI-${String((await clientsRepository.countAll()) + 1).padStart(3, "0")}`;
    const created = await clientsRepository.create({
      code,
      raison: input.raison,
      contact: input.contact,
      tel: input.tel,
      email: input.email,
      adresse: input.adresse,
      ville: input.ville,
      pays: input.pays,
      zone: input.zone,
      commercialId: input.commercialId,
      conditions: input.conditions,
      plafond: input.plafond ?? 0,
      statut: "Actif",
    });

    await recordAuditLog({ action: "Création", module: "Clients", ref: created.code, userId: ctx.userId, ip: ctx.ip });
    const aggregates = await clientsRepository.aggregatesForClients([created.id]);
    return toClientDto(created, aggregates.get(created.id)!);
  },

  async update(id: string, input: UpdateClientInput, ctx: ActionContext) {
    const existing = await clientsRepository.findById(id);
    if (!existing) throw new AppError("Client introuvable", StatusCodes.NOT_FOUND);

    const updated = await clientsRepository.update(id, input);
    await recordAuditLog({ action: "Modification", module: "Clients", ref: updated.code, userId: ctx.userId, ip: ctx.ip });
    const aggregates = await clientsRepository.aggregatesForClients([id]);
    return toClientDto(updated, aggregates.get(id)!);
  },
};
