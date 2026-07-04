import { z } from "zod";
import { ACHAT_STATUTS } from "./enums.js";

export const createAchatSchema = z.object({
  fournisseur: z.string().min(1, "Nom du fournisseur requis"),
  livraison: z.coerce.date(),
  montant: z.number().nonnegative(),
  articles: z.number().int().nonnegative(),
});

export const listAchatsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  statut: z.enum(ACHAT_STATUTS).optional(),
  search: z.string().optional(),
});

export type CreateAchatInput = z.infer<typeof createAchatSchema>;
export type ListAchatsQuery = z.infer<typeof listAchatsQuerySchema>;
