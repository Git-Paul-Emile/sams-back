/** Reforme la forme `BomEntry` du frontend (`production.types.ts`) — voir plan §0.3. */
export function toBomDto(bom) {
    return {
        id: bom.id,
        produit: bom.produit.designation,
        items: bom.items.map((line) => ({
            intrant: line.matiere.designation,
            categorie: line.matiere.categorie,
            qte: line.qte,
            unite: line.unite,
        })),
    };
}
//# sourceMappingURL=boms.dto.js.map