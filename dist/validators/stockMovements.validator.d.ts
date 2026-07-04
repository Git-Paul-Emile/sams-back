import { z } from "zod";
export declare const createMouvementSchema: z.ZodObject<{
    stockItemId: z.ZodString;
    type: z.ZodString;
    qte: z.ZodNumber;
    motif: z.ZodOptional<z.ZodString>;
    commandeId: z.ZodOptional<z.ZodString>;
    achatId: z.ZodOptional<z.ZodString>;
    prodOrderId: z.ZodOptional<z.ZodString>;
    salesRequestId: z.ZodOptional<z.ZodString>;
    materialRequestId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const listMouvementsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    stockItemId: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateMouvementInput = z.infer<typeof createMouvementSchema>;
export type ListMouvementsQuery = z.infer<typeof listMouvementsQuerySchema>;
//# sourceMappingURL=stockMovements.validator.d.ts.map