import type { Operateur } from "../generated/prisma/client.js";
export interface OperateurAggregates {
    rendement: number;
    ofRealises: number;
    vol: number;
    incidents: number;
}
/** Remappe une ligne Prisma vers la forme plate `production.types.ts` Operateur. */
export declare function toOperateurDto(operateur: Operateur, aggregates: OperateurAggregates): {
    id: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel: string | null;
    email: string | null;
    poste: string | null;
    ligne: string | null;
    embauche: string | null;
    statut: string;
    rendement: number;
    ofRealises: number;
    vol: number;
    incidents: number;
};
//# sourceMappingURL=operateurs.dto.d.ts.map