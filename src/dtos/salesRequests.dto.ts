import { formatAbbrevName } from "../utils/format.js";
import type { Client, Commercial, SalesRequest, StockItem, User } from "../generated/prisma/client.js";

type SalesRequestWithRelations = SalesRequest & {
  client: Client;
  commercial: Commercial;
  produit: StockItem;
  valideur: User | null;
};

export function toSalesRequestDto(sr: SalesRequestWithRelations) {
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
