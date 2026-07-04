import type { Commercial } from "../generated/prisma/client.js";

export interface CommercialAggregates {
  caRealise: number;
  nbClients: number;
  nbCmd: number;
}

/** Remappe une ligne Prisma vers la forme plate `administration.types.ts` Commercial. */
export function toCommercialDto(commercial: Commercial, aggregates: CommercialAggregates) {
  return {
    id: commercial.id,
    matricule: commercial.matricule,
    nom: commercial.nom,
    prenom: commercial.prenom,
    tel: commercial.tel,
    email: commercial.email,
    zone: commercial.zone,
    objectif: commercial.objectif,
    caRealise: aggregates.caRealise,
    statut: commercial.statut,
    nbClients: aggregates.nbClients,
    nbCmd: aggregates.nbCmd,
  };
}
