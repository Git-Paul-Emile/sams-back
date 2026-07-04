import { z } from "zod";
import { COMMANDE_ETATS, commandeEtatSchema } from "./enums.js";

export const createCommandeSchema = z.object({
  clientId: z.string().min(1, "Client requis"),
  montant: z.number().nonnegative(),
  commercialId: z.string().min(1, "Commercial requis"),
});

export const addCommandeTimelineSchema = z.object({
  etat: commandeEtatSchema,
  commentaire: z.string().optional(),
});

export const listCommandesQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  statutActuel: z.enum(COMMANDE_ETATS).optional(),
  clientId: z.string().optional(),
});

export type CreateCommandeInput = z.infer<typeof createCommandeSchema>;
export type AddCommandeTimelineInput = z.infer<typeof addCommandeTimelineSchema>;
export type ListCommandesQuery = z.infer<typeof listCommandesQuerySchema>;
