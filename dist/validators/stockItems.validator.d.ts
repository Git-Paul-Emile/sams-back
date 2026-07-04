import { z } from "zod";
export declare const listStockItemsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    type: z.ZodOptional<z.ZodEnum<{
        MATIERE: "MATIERE";
        PRODUIT: "PRODUIT";
    }>>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const setStockItemStockSchema: z.ZodObject<{
    stock: z.ZodNumber;
}, z.core.$strip>;
export type ListStockItemsQuery = z.infer<typeof listStockItemsQuerySchema>;
export type SetStockItemStockInput = z.infer<typeof setStockItemStockSchema>;
//# sourceMappingURL=stockItems.validator.d.ts.map