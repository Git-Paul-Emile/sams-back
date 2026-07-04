import type { StockItem } from "../generated/prisma/client.js";
/**
 * Forme identique à `StockItem` du frontend (`stock.types.ts`), utilisée à
 * l'identique pour `stockMatieres` et `stockProduits` — voir plan §0.3. Champs
 * internes (`type`, `createdAt`, `updatedAt`) volontairement exclus : `type`
 * ne sert qu'à filtrer la liste (`?type=MATIERE|PRODUIT`), il n'existe pas
 * côté frontend.
 */
export declare function toStockItemDto(item: StockItem): {
    id: string;
    code: string;
    designation: string;
    categorie: string;
    unite: string;
    stock: number;
    min: number;
    critique: number;
    valeurUnit: number;
};
//# sourceMappingURL=stockItems.dto.d.ts.map