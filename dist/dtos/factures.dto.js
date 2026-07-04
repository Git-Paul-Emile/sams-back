import { formatAbbrevName } from "../utils/format.js";
/**
 * Remappe une ligne Prisma vers la forme plate `Facture` attendue par le
 * frontend (`facturation.types.ts`) — `client`/`commercial` en libellés.
 */
export function toFactureDto(facture) {
    return {
        id: facture.id,
        num: facture.num,
        client: facture.client.raison,
        date: facture.date.toISOString(),
        echeance: facture.echeance.toISOString(),
        montant: facture.montant,
        paye: facture.paye,
        statut: facture.statut,
        mode: facture.mode,
        commercial: formatAbbrevName(facture.commercial.prenom, facture.commercial.nom),
        type: facture.type,
        dateReglPrev: facture.dateReglPrev ? facture.dateReglPrev.toISOString() : null,
        dateReglEff: facture.dateReglEff ? facture.dateReglEff.toISOString() : null,
    };
}
//# sourceMappingURL=factures.dto.js.map