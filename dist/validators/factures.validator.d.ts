import { z } from "zod";
export declare const createFactureSchema: z.ZodObject<{
    clientId: z.ZodString;
    echeance: z.ZodCoercedDate<unknown>;
    montant: z.ZodNumber;
    commercialId: z.ZodString;
    type: z.ZodString;
    commandeId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const payFactureSchema: z.ZodObject<{
    montant: z.ZodNumber;
}, z.core.$strip>;
export declare const listFacturesQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    statut: z.ZodOptional<z.ZodEnum<{
        Payée: "Payée";
        Brouillon: "Brouillon";
        Émise: "Émise";
        "Partiellement pay\u00E9e": "Partiellement payée";
        "En retard": "En retard";
    }>>;
    clientId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateFactureInput = z.infer<typeof createFactureSchema>;
export type PayFactureInput = z.infer<typeof payFactureSchema>;
export type ListFacturesQuery = z.infer<typeof listFacturesQuerySchema>;
//# sourceMappingURL=factures.validator.d.ts.map