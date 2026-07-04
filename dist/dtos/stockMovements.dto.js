/**
 * Reforme la string `ref` unique attendue par le frontend (`Mouvement.ref`)
 * à partir de laquelle des FK d'origine est renseignée — voir plan §0.3 et
 * schéma `Mouvement` (une seule FK d'origine posée selon `type`).
 */
export function toMouvementDto(m) {
    const ref = m.commande?.num ?? m.achat?.num ?? m.prodOrder?.num ?? m.salesRequest?.num ?? m.materialRequest?.num ?? null;
    return {
        id: m.id,
        date: m.date.toISOString(),
        type: m.type,
        ref,
        designation: m.stockItem.designation,
        qte: m.qte,
        user: m.user ? m.user.nom : null,
        motif: m.motif,
    };
}
//# sourceMappingURL=stockMovements.dto.js.map