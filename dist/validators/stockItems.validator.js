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
//# sourceMappingURL=stockItems.validator.js.map