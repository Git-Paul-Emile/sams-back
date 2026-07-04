import { z } from "zod";
export declare const createAchatSchema: z.ZodObject<{
    fournisseur: z.ZodString;
    livraison: z.ZodCoercedDate<unknown>;
    montant: z.ZodNumber;
    articles: z.ZodNumber;
}, z.core.$strip>;
export declare const listAchatsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    statut: z.ZodOptional<z.ZodEnum<{
        "En attente": "En attente";
        "En cours": "En cours";
        "Partiellement re\u00E7u": "Partiellement reçu";
        Reçu: "Reçu";
    }>>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateAchatInput = z.infer<typeof createAchatSchema>;
export type ListAchatsQuery = z.infer<typeof listAchatsQuerySchema>;
//# sourceMappingURL=achats.validator.d.ts.map