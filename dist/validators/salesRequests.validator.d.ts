import { z } from "zod";
export declare const createSalesRequestSchema: z.ZodObject<{
    clientId: z.ZodString;
    commercialId: z.ZodString;
    produitId: z.ZodString;
    qteDemandee: z.ZodNumber;
    prixUnit: z.ZodNumber;
    entrepot: z.ZodOptional<z.ZodString>;
    observation: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const approveSalesRequestSchema: z.ZodObject<{
    qteValidee: z.ZodOptional<z.ZodNumber>;
    commentaire: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const rejectSalesRequestSchema: z.ZodObject<{
    motifRefus: z.ZodString;
}, z.core.$strip>;
export declare const listSalesRequestsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    statut: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateSalesRequestInput = z.infer<typeof createSalesRequestSchema>;
export type ApproveSalesRequestInput = z.infer<typeof approveSalesRequestSchema>;
export type RejectSalesRequestInput = z.infer<typeof rejectSalesRequestSchema>;
//# sourceMappingURL=salesRequests.validator.d.ts.map