import { z } from "zod";
import { prodOrderStatutSchema } from "./enums.js";
export const createProdOrderSchema = z.object({
    produitId: z.string().min(1, "Produit requis"),
    ligne: z.string().min(1, "Ligne requise"),
    qtePrev: z.number().positive("La quantité prévue doit être positive"),
    debut: z.coerce.date(),
    fin: z.coerce.date(),
    responsableId: z.string().optional(),
});
export const listProdOrdersQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
    statut: prodOrderStatutSchema.optional(),
    ligne: z.string().optional(),
    search: z.string().optional(),
});
//# sourceMappingURL=prodOrders.validator.js.map