import type { Commercial } from "../generated/prisma/client.js";
export interface CommercialAggregates {
    caRealise: number;
    nbClients: number;
    nbCmd: number;
}
/** Remappe une ligne Prisma vers la forme plate `administration.types.ts` Commercial. */
export declare function toCommercialDto(commercial: Commercial, aggregates: CommercialAggregates): {
    id: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel: string | null;
    email: string | null;
    zone: string | null;
    objectif: number;
    caRealise: number;
    statut: string;
    nbClients: number;
    nbCmd: number;
};
//# sourceMappingURL=commerciaux.dto.d.ts.map