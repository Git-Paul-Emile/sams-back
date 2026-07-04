/**
 * Forme identique à `StockItem` du frontend (`stock.types.ts`), utilisée à
 * l'identique pour `stockMatieres` et `stockProduits` — voir plan §0.3. Champs
 * internes (`type`, `createdAt`, `updatedAt`) volontairement exclus : `type`
 * ne sert qu'à filtrer la liste (`?type=MATIERE|PRODUIT`), il n'existe pas
 * côté frontend.
 */
export function toStockItemDto(item) {
    return {
        id: item.id,
        code: item.code,
        designation: item.designation,
        categorie: item.categorie,
        unite: item.unite,
        stock: item.stock,
        min: item.min,
        critique: item.critique,
        valeurUnit: item.valeurUnit,
    };
}
//# sourceMappingURL=stockItems.dto.js.map