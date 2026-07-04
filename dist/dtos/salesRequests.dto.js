import { formatAbbrevName } from "../utils/format.js";
export function toSalesRequestDto(sr) {
    return {
        id: sr.id,
        num: sr.num,
        date: sr.date.toISOString(),
        client: sr.client.raison,
        commercial: formatAbbrevName(sr.commercial.prenom, sr.commercial.nom),
        produit: sr.produit.designation,
        ref: sr.produit.code,
        qteDemandee: sr.qteDemandee,
        qteValidee: sr.qteValidee,
        stockDispo: sr.stockDispo,
        prixUnit: sr.prixUnit,
        montant: sr.montant,
        entrepot: sr.entrepot,
        observation: sr.observation,
        statut: sr.statut,
        valideur: sr.valideur?.nom ?? null,
        dateValidation: sr.dateValidation?.toISOString() ?? null,
        commentaire: sr.commentaire,
    };
}
//# sourceMappingURL=salesRequests.dto.js.map