import { z } from "zod";
import { ACTIVE_STATUTS } from "./enums.js";

export const createCommercialSchema = z.object({
  matricule: z.string().min(1).optional(),
  nom: z.string().min(1, "Nom requis"),
  prenom: z.string().min(1, "Prénom requis"),
  tel: z.string().optional(),
  email: z.string().email("Email invalide").optional(),
  zone: z.string().optional(),
  objectif: z.number().nonnegative().optional(),
});

export const updateCommercialSchema = createCommercialSchema.partial().extend({
  statut: z.enum(ACTIVE_STATUTS).optional(),
});

export const listCommerciauxQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  search: z.string().optional(),
  statut: z.enum(ACTIVE_STATUTS).optional(),
  sort: z.enum(["nom", "matricule", "createdAt"]).optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export type CreateCommercialInput = z.infer<typeof createCommercialSchema>;
export type UpdateCommercialInput = z.infer<typeof updateCommercialSchema>;
export type ListCommerciauxQuery = z.infer<typeof listCommerciauxQuerySchema>;
