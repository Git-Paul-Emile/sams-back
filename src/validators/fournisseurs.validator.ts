import { z } from "zod";

export const createFournisseurSchema = z.object({
  nom: z.string().min(1, "Nom requis"),
  contact: z.string().optional(),
  tel: z.string().optional(),
  email: z.string().email("Email invalide").optional(),
  adresse: z.string().optional(),
});

export const updateFournisseurSchema = createFournisseurSchema.partial();

export const listFournisseursQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  search: z.string().optional(),
  sort: z.enum(["nom", "createdAt"]).optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export type CreateFournisseurInput = z.infer<typeof createFournisseurSchema>;
export type UpdateFournisseurInput = z.infer<typeof updateFournisseurSchema>;
export type ListFournisseursQuery = z.infer<typeof listFournisseursQuerySchema>;
