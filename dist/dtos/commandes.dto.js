import { formatAbbrevName } from "../utils/format.js";
function toTimelineDto(row) {
    return {
        etat: row.etat,
        date: row.date.toISOString(),
        user: row.user?.nom ?? null,
        commentaire: row.commentaire ?? "",
    };
}
/**
 * Forme plate attendue par le frontend (`ventes.types.ts` `Commande`) —
 * `client`/`commercial` en libellés, `timeline` embarquée (ordonnée par date
 * asc), y compris en liste : le frontend lit `.timeline` directement sur les
 * lignes de la liste (`VentesOverview.tsx`), pas de fetch détail séparé.
 */
export function toCommandeDto(commande) {
    return {
        id: commande.id,
        num: commande.num,
        client: commande.client.raison,
        date: commande.date.toISOString(),
        montant: commande.montant,
        commercial: formatAbbrevName(commande.commercial.prenom, commande.commercial.nom),
        statutActuel: commande.statutActuel,
        timeline: commande.timeline.map(toTimelineDto),
    };
}
//# sourceMappingURL=commandes.dto.js.map