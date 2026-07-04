import { z } from "zod";
export declare const ROLES: readonly ["Direction", "Production", "Stock", "Commercial", "Finance", "Administrateur"];
export declare const roleSchema: z.ZodEnum<{
    Direction: "Direction";
    Production: "Production";
    Stock: "Stock";
    Commercial: "Commercial";
    Finance: "Finance";
    Administrateur: "Administrateur";
}>;
export declare const ACTIVE_STATUTS: readonly ["Actif", "Inactif"];
export declare const activeStatutSchema: z.ZodEnum<{
    Actif: "Actif";
    Inactif: "Inactif";
}>;
export declare const OPERATEUR_STATUTS: readonly ["Actif", "Inactif", "Congé"];
export declare const operateurStatutSchema: z.ZodEnum<{
    Actif: "Actif";
    Inactif: "Inactif";
    Congé: "Congé";
}>;
export declare const COMMANDE_ETATS: readonly ["Devis", "Commande reçue", "En attente stock", "En préparation", "En cours de livraison", "Livrée", "Facturée", "Payée"];
export declare const commandeEtatSchema: z.ZodEnum<{
    Devis: "Devis";
    "Commande re\u00E7ue": "Commande reçue";
    "En attente stock": "En attente stock";
    "En pr\u00E9paration": "En préparation";
    "En cours de livraison": "En cours de livraison";
    Livrée: "Livrée";
    Facturée: "Facturée";
    Payée: "Payée";
}>;
export declare const FACTURE_STATUTS: readonly ["Brouillon", "Émise", "Partiellement payée", "Payée", "En retard"];
export declare const factureStatutSchema: z.ZodEnum<{
    Payée: "Payée";
    Brouillon: "Brouillon";
    Émise: "Émise";
    "Partiellement pay\u00E9e": "Partiellement payée";
    "En retard": "En retard";
}>;
export declare const ACHAT_STATUTS: readonly ["En attente", "En cours", "Partiellement reçu", "Reçu"];
export declare const achatStatutSchema: z.ZodEnum<{
    "En attente": "En attente";
    "En cours": "En cours";
    "Partiellement re\u00E7u": "Partiellement reçu";
    Reçu: "Reçu";
}>;
export declare const PROD_ORDER_STATUTS: readonly ["Planifié", "En cours", "Bloqué", "Terminé"];
export declare const prodOrderStatutSchema: z.ZodEnum<{
    "En cours": "En cours";
    Planifié: "Planifié";
    Bloqué: "Bloqué";
    Terminé: "Terminé";
}>;
export declare const VALIDATION_STATUTS: readonly ["Brouillon", "En attente de validation", "Validé", "Refusé", "Distribué à la production"];
export declare const validationStatutSchema: z.ZodEnum<{
    Brouillon: "Brouillon";
    "En attente de validation": "En attente de validation";
    Validé: "Validé";
    Refusé: "Refusé";
    "Distribu\u00E9 \u00E0 la production": "Distribué à la production";
}>;
export declare const STOCK_ITEM_TYPES: readonly ["MATIERE", "PRODUIT"];
export declare const stockItemTypeSchema: z.ZodEnum<{
    MATIERE: "MATIERE";
    PRODUIT: "PRODUIT";
}>;
export declare const idSchema: z.ZodString;
//# sourceMappingURL=enums.d.ts.map