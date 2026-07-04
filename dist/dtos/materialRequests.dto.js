export function toMaterialRequestDto(mr) {
    return {
        id: mr.id,
        num: mr.num,
        date: mr.date.toISOString(),
        produitFabrique: mr.prodOrder.produit.designation,
        of: mr.prodOrder.num,
        operateur: mr.operateur ? `${mr.operateur.prenom} ${mr.operateur.nom}` : null,
        ligne: mr.ligne,
        matiere: mr.matiere.designation,
        qteDemandee: mr.qteDemandee,
        qteValidee: mr.qteValidee,
        commentaires: mr.commentaires,
        statut: mr.statut,
        valideur: mr.valideur?.nom ?? null,
        dateValidation: mr.dateValidation?.toISOString() ?? null,
        docBC: mr.docBC,
        docBL: mr.docBL,
    };
}
//# sourceMappingURL=materialRequests.dto.js.map