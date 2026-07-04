import type { MaterialRequest, Operateur, ProdOrder, StockItem, User } from "../generated/prisma/client.js";

type MaterialRequestWithRelations = MaterialRequest & {
  prodOrder: ProdOrder & { produit: StockItem };
  operateur: Operateur | null;
  matiere: StockItem;
  valideur: User | null;
};

export function toMaterialRequestDto(mr: MaterialRequestWithRelations) {
  return {
    id: mr.id,
    num: mr.num,
    date: mr.date.toISOString(),
    produitFabrique: mr.prodOrder.produit.designation,
    of: mr.prodOrder.num,
    operateur: mr.operateur ? `${mr.operateur.prenom} ${mr.operateur.nom}` : null,
    ligne: mr.ligne,
    matiere: mr.matiere.designation,
    qteDemandee: mr.qteDemandee,
    qteValidee: mr.qteValidee,
    commentaires: mr.commentaires,
    statut: mr.statut,
    valideur: mr.valideur?.nom ?? null,
    dateValidation: mr.dateValidation?.toISOString() ?? null,
    docBC: mr.docBC,
    docBL: mr.docBL,
  };
}
