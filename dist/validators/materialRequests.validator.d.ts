import { z } from "zod";
export declare const createMaterialRequestSchema: z.ZodObject<{
    prodOrderId: z.ZodString;
    operateurId: z.ZodOptional<z.ZodString>;
    ligne: z.ZodString;
    matiereId: z.ZodString;
    qteDemandee: z.ZodNumber;
    commentaires: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const approveMaterialRequestSchema: z.ZodObject<{
    qteValidee: z.ZodOptional<z.ZodNumber>;
    commentaires: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const rejectMaterialRequestSchema: z.ZodObject<{
    motifRefus: z.ZodString;
}, z.core.$strip>;
export declare const listMaterialRequestsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    statut: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateMaterialRequestInput = z.infer<typeof createMaterialRequestSchema>;
export type ApproveMaterialRequestInput = z.infer<typeof approveMaterialRequestSchema>;
export type RejectMaterialRequestInput = z.infer<typeof rejectMaterialRequestSchema>;
//# sourceMappingURL=materialRequests.validator.d.ts.map