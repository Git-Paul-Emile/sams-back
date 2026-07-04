import { z } from "zod";
export declare const createIncidentSchema: z.ZodObject<{
    prodOrderId: z.ZodString;
    operateurId: z.ZodOptional<z.ZodString>;
    categorie: z.ZodString;
    description: z.ZodString;
    gravite: z.ZodString;
}, z.core.$strip>;
export declare const listIncidentsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    statut: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateIncidentInput = z.infer<typeof createIncidentSchema>;
export type ListIncidentsQuery = z.infer<typeof listIncidentsQuerySchema>;
//# sourceMappingURL=incidents.validator.d.ts.map