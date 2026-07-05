import { StatusCodes } from "http-status-codes";
import { prodOrdersRepository } from "../repositories/prodOrders.repository.js";
import { bomsRepository } from "../repositories/boms.repository.js";
import { toProdOrderDto } from "../dtos/prodOrders.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { recordAuditLog } from "../utils/auditLog.js";
import { createWithSequenceNumber } from "../utils/sequence.js";
import type { CreateProdOrderInput, ListProdOrdersQuery } from "../validators/prodOrders.validator.js";
import type { Prisma } from "../generated/prisma/client.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

// Abréviations françaises alignées sur l'ancien `prodChart` statique de db.json
// ("Août", "Sep", "Oct", "Nov", "Déc", "Jan", ...).
const MOIS_ABBREV = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Août", "Sep", "Oct", "Nov", "Déc"];

export const prodOrdersService = {
  async list(query: ListProdOrdersQuery) {
    const { page, pageSize, skip, take } = parsePagination(query);
    const where: Prisma.ProdOrderWhereInput = {
      ...(query.statut ? { statut: query.statut } : {}),
      ...(query.ligne ? { ligne: query.ligne } : {}),
      ...(query.search
        ? {
            OR: [
              { num: { contains: query.search, mode: "insensitive" } },
              { ligne: { contains: query.search, mode: "insensitive" } },
              { produit: { designation: { contains: query.search, mode: "insensitive" } } },
              { responsable: { nom: { contains: query.search, mode: "insensitive" } } },
              { responsable: { prenom: { contains: query.search, mode: "insensitive" } } },
            ],
          }
        : {}),
    };

    const [rows, total] = await Promise.all([
      prodOrdersRepository.findMany(where, { skip, take, orderBy: { debut: "desc" } }),
      prodOrdersRepository.count(where),
    ]);

    return { items: rows.map(toProdOrderDto), total, page, pageSize };
  },

  async get(id: string) {
    const order = await prodOrdersRepository.findById(id);
    if (!order) throw new AppError("Ordre de fabrication introuvable", StatusCodes.NOT_FOUND);
    return toProdOrderDto(order);
  },

  async create(input: CreateProdOrderInput, ctx: ActionContext) {
    const bom = await bomsRepository.findByProduitId(input.produitId);
    if (!bom) {
      throw new AppError(
        "Aucune formule (BOM) n'existe pour ce produit. Créez-la avant de lancer un ordre de fabrication.",
        StatusCodes.UNPROCESSABLE_ENTITY
      );
    }

    const created = await createWithSequenceNumber(
      "OF",
      (likePrefix) => prodOrdersRepository.countByNumPrefix(likePrefix),
      (num) =>
        prodOrdersRepository.create({
          num,
          produitId: input.produitId,
          ligne: input.ligne,
          qtePrev: input.qtePrev,
          qteReel: 0,
          debut: input.debut,
          fin: input.fin,
          responsableId: input.responsableId,
          statut: "Planifié",
          rendement: 0,
        })
    );

    await recordAuditLog({ action: "Création", module: "Production", ref: created.num, userId: ctx.userId, ip: ctx.ip });
    return toProdOrderDto(created);
  },

  /** Remplace le `prodChart` statique — agrégat `ProdOrder` par mois (compute-on-read, plan §0.2/§9). */
  async chart() {
    const rows = await prodOrdersRepository.findAllForChart();

    const buckets = new Map<string, { production: number; objectif: number; order: number }>();
    for (const row of rows) {
      const year = row.debut.getFullYear();
      const monthIndex = row.debut.getMonth();
      const key = `${year}-${String(monthIndex + 1).padStart(2, "0")}`;
      const bucket = buckets.get(key) ?? { production: 0, objectif: 0, order: year * 12 + monthIndex };
      bucket.production += row.qteReel;
      bucket.objectif += row.qtePrev;
      buckets.set(key, bucket);
    }

    return Array.from(buckets.entries())
      .sort(([, a], [, b]) => a.order - b.order)
      .map(([key, bucket]) => {
        const monthIndex = Number(key.split("-")[1]) - 1;
        return { mois: MOIS_ABBREV[monthIndex], production: bucket.production, objectif: bucket.objectif };
      });
  },
};
