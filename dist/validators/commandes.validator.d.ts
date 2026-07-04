import { z } from "zod";
export declare const createCommandeSchema: z.ZodObject<{
    clientId: z.ZodString;
    montant: z.ZodNumber;
    commercialId: z.ZodString;
}, z.core.$strip>;
export declare const addCommandeTimelineSchema: z.ZodObject<{
    etat: z.ZodEnum<{
        Devis: "Devis";
        "Commande re\u00E7ue": "Commande reçue";
        "En attente stock": "En attente stock";
        "En pr\u00E9paration": "En préparation";
        "En cours de livraison": "En cours de livraison";
        Livrée: "Livrée";
        Facturée: "Facturée";
        Payée: "Payée";
    }>;
    commentaire: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const listCommandesQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    statutActuel: z.ZodOptional<z.ZodEnum<{
        Devis: "Devis";
        "Commande re\u00E7ue": "Commande reçue";
        "En attente stock": "En attente stock";
        "En pr\u00E9paration": "En préparation";
        "En cours de livraison": "En cours de livraison";
        Livrée: "Livrée";
        Facturée: "Facturée";
        Payée: "Payée";
    }>>;
    clientId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateCommandeInput = z.infer<typeof createCommandeSchema>;
export type AddCommandeTimelineInput = z.infer<typeof addCommandeTimelineSchema>;
export type ListCommandesQuery = z.infer<typeof listCommandesQuerySchema>;
//# sourceMappingURL=commandes.validator.d.ts.map