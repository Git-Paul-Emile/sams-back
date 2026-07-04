import { formatDateFr } from "../utils/format.js";
/** Remappe une ligne Prisma vers la forme plate `production.types.ts` Operateur. */
export function toOperateurDto(operateur, aggregates) {
    return {
        id: operateur.id,
        matricule: operateur.matricule,
        nom: operateur.nom,
        prenom: operateur.prenom,
        tel: operateur.tel,
        email: operateur.email,
        poste: operateur.poste,
        ligne: operateur.ligne,
        embauche: operateur.embauche ? formatDateFr(operateur.embauche) : null,
        statut: operateur.statut,
        rendement: aggregates.rendement,
        ofRealises: aggregates.ofRealises,
        vol: aggregates.vol,
        incidents: aggregates.incidents,
    };
}
//# sourceMappingURL=operateurs.dto.js.map