import { z } from "zod";
export const createSalesRequestSchema = z.object({
    clientId: z.string().min(1),
    commercialId: z.string().min(1),
    produitId: z.string().min(1),
    qteDemandee: z.number().positive(),
    prixUnit: z.number().nonnegative(),
    entrepot: z.string().optional(),
    observation: z.string().optional(),
});
export const approveSalesRequestSchema = z.object({
    qteValidee: z.number().nonnegative().optional(),
    commentaire: z.string().optional(),
});
export const rejectSalesRequestSchema = z.object({
    motifRefus: z.string().min(1, "Motif de refus requis"),
});
export const listSalesRequestsQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
    statut: z.string().optional(),
    search: z.string().optional(),
});
//# sourceMappingURL=salesRequests.validator.js.map