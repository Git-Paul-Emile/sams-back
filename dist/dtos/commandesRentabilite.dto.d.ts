import type { Client, Commande, CommandeRentabilite } from "../generated/prisma/client.js";
type CommandeRentabiliteWithRelations = CommandeRentabilite & {
    commande: Commande & {
        client: Client;
    };
};
/**
 * Remappe une ligne `CommandeRentabilite` (stockée, cf plan §0.2 — aucune
 * ligne de commande source n'existe dans le modèle pour la recalculer) vers
 * la forme `CommandeRentabilite` déjà consommée par le frontend.
 */
export declare function toCommandeRentabiliteDto(row: CommandeRentabiliteWithRelations): {
    id: string;
    num: string;
    client: string;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: string;
};
export {};
//# sourceMappingURL=commandesRentabilite.dto.d.ts.map