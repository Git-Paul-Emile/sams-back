import { formatAbbrevName } from "../utils/format.js";
import type { Client, Commercial } from "../generated/prisma/client.js";

type ClientWithCommercial = Client & { commercial: Commercial | null };

export interface ClientAggregates {
  nbCmd: number;
  caYtd: number;
  encours: number;
}

/**
 * Remappe une ligne Prisma (avec relation) vers la forme plate que le
 * frontend consomme déjà (`commercial` en string abrégée, agrégats fusionnés)
 * — voir plan §0.3.
 */
export function toClientDto(client: ClientWithCommercial, aggregates: ClientAggregates) {
  return {
    id: client.id,
    code: client.code,
    raison: client.raison,
    contact: client.contact,
    tel: client.tel,
    email: client.email,
    adresse: client.adresse,
    ville: client.ville,
    pays: client.pays,
    zone: client.zone,
    commercial: client.commercial ? formatAbbrevName(client.commercial.prenom, client.commercial.nom) : null,
    commercialId: client.commercialId,
    conditions: client.conditions,
    plafond: client.plafond,
    encours: aggregates.encours,
    caYtd: aggregates.caYtd,
    statut: client.statut,
    nbCmd: aggregates.nbCmd,
  };
}
