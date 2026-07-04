import { z } from "zod";

export const createIncidentSchema = z.object({
  prodOrderId: z.string().min(1, "Ordre de fabrication requis"),
  operateurId: z.string().optional(),
  categorie: z.string().min(1, "Catégorie requise"),
  description: z.string().min(1, "Description requise"),
  gravite: z.string().min(1, "Gravité requise"),
});

export const listIncidentsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  statut: z.string().optional(),
  search: z.string().optional(),
});

export type CreateIncidentInput = z.infer<typeof createIncidentSchema>;
export type ListIncidentsQuery = z.infer<typeof listIncidentsQuerySchema>;
