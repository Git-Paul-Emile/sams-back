import { z } from "zod";

export const bomLineSchema = z.object({
  matiereId: z.string().min(1, "Matière requise"),
  qte: z.number().positive("La quantité doit être positive"),
  unite: z.string().min(1, "Unité requise"),
});

export const createBomSchema = z.object({
  produitId: z.string().min(1, "Produit requis"),
  items: z.array(bomLineSchema).min(1, "Au moins une ligne de composant est requise"),
});

export const updateBomSchema = z.object({
  items: z.array(bomLineSchema).min(1, "Au moins une ligne de composant est requise"),
});

export type BomLineInput = z.infer<typeof bomLineSchema>;
export type CreateBomInput = z.infer<typeof createBomSchema>;
export type UpdateBomInput = z.infer<typeof updateBomSchema>;
