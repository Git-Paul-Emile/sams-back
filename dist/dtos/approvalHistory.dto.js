export function toApprovalRecordDto(ap) {
    const dateIso = ap.date.toISOString();
    return {
        id: ap.id,
        date: dateIso.slice(0, 10),
        heure: dateIso.slice(11, 16),
        valideur: ap.valideur.nom,
        action: ap.action,
        type: ap.type,
        ref: ap.salesRequest?.num ?? ap.materialRequest?.num ?? null,
        module: ap.module,
        commentaire: ap.commentaire,
        motifRefus: ap.motifRefus,
    };
}
//# sourceMappingURL=approvalHistory.dto.js.map