import { StatusCodes } from "http-status-codes";
import { bomsRepository } from "../repositories/boms.repository.js";
import { toBomDto } from "../dtos/boms.dto.js";
import { AppError } from "../utils/AppError.js";
import { recordAuditLog } from "../utils/auditLog.js";
import type { CreateBomInput, UpdateBomInput } from "../validators/boms.validator.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const bomsService = {
  async list() {
    const rows = await bomsRepository.findMany();
    return rows.map(toBomDto);
  },

  async get(id: string) {
    const bom = await bomsRepository.findById(id);
    if (!bom) throw new AppError("Nomenclature introuvable", StatusCodes.NOT_FOUND);
    return toBomDto(bom);
  },

  async create(input: CreateBomInput, ctx: ActionContext) {
    const existing = await bomsRepository.findByProduitId(input.produitId);
    if (existing) throw new AppError("Une formule existe déjà pour ce produit", StatusCodes.CONFLICT);

    const created = await bomsRepository.create(input.produitId, input.items);
    await recordAuditLog({ action: "Création", module: "Production", ref: created.produit.designation, userId: ctx.userId, ip: ctx.ip });
    return toBomDto(created);
  },

  async update(id: string, input: UpdateBomInput, ctx: ActionContext) {
    const existing = await bomsRepository.findById(id);
    if (!existing) throw new AppError("Nomenclature introuvable", StatusCodes.NOT_FOUND);

    const updated = await bomsRepository.updateItems(id, input.items);
    await recordAuditLog({ action: "Modification", module: "Production", ref: updated.produit.designation, userId: ctx.userId, ip: ctx.ip });
    return toBomDto(updated);
  },

  async remove(id: string, ctx: ActionContext) {
    const existing = await bomsRepository.findById(id);
    if (!existing) throw new AppError("Nomenclature introuvable", StatusCodes.NOT_FOUND);

    await bomsRepository.delete(id);
    await recordAuditLog({ action: "Suppression", module: "Production", ref: existing.produit.designation, userId: ctx.userId, ip: ctx.ip });
  },
};
