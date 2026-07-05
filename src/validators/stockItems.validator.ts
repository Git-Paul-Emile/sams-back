import { z } from "zod";
import { stockItemTypeSchema } from "./enums.js";

export const listStockItemsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  type: stockItemTypeSchema.optional(),
  search: z.string().optional(),
});

export const setStockItemStockSchema = z.object({
  stock: z.number().nonnegative("Le stock ne peut pas être négatif"),
});

export const createStockItemSchema = z.object({
  code: z.string().min(1).optional(),
  designation: z.string().min(1, "Désignation requise"),
  type: stockItemTypeSchema,
  categorie: z.string().min(1, "Catégorie requise"),
  unite: z.string().min(1, "Unité requise"),
  stock: z.coerce.number().nonnegative().optional(),
  min: z.coerce.number().nonnegative().optional(),
  critique: z.coerce.number().nonnegative().optional(),
  valeurUnit: z.coerce.number().nonnegative().optional(),
});

export type ListStockItemsQuery = z.infer<typeof listStockItemsQuerySchema>;
export type SetStockItemStockInput = z.infer<typeof setStockItemStockSchema>;
export type CreateStockItemInput = z.infer<typeof createStockItemSchema>;
