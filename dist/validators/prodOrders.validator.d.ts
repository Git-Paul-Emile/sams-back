import { z } from "zod";
export declare const createProdOrderSchema: z.ZodObject<{
    produitId: z.ZodString;
    ligne: z.ZodString;
    qtePrev: z.ZodNumber;
    debut: z.ZodCoercedDate<unknown>;
    fin: z.ZodCoercedDate<unknown>;
    responsableId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const listProdOrdersQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    statut: z.ZodOptional<z.ZodEnum<{
        "En cours": "En cours";
        Planifié: "Planifié";
        Bloqué: "Bloqué";
        Terminé: "Terminé";
    }>>;
    ligne: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateProdOrderInput = z.infer<typeof createProdOrderSchema>;
export type ListProdOrdersQuery = z.infer<typeof listProdOrdersQuerySchema>;
//# sourceMappingURL=prodOrders.validator.d.ts.map