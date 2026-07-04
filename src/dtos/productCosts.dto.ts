import type { ProductCost, ProductCostBomLine, ProductCostEmballage, StockItem } from "../generated/prisma/client.js";

type ProductCostWithRelations = ProductCost & {
  produit: StockItem;
  bomLines: (ProductCostBomLine & { matiere: StockItem })[];
  emballages: ProductCostEmballage[];
};

/**
 * Remappe une ligne `ProductCost` (photo de coût stockée, cf plan §0.2) vers la
 * forme `ProdCostDef` déjà consommée par le frontend (`couts.types.ts`).
 */
export function toProductCostDto(row: ProductCostWithRelations) {
  return {
    id: row.id,
    ref: row.produit.code,
    designation: row.produit.designation,
    categorie: row.produit.categorie,
    prixVente: row.prixVente,
    qteVendue: row.qteVendue,
    qteProduite: row.qteProduite,
    qteReel: row.qteReel,
    bom: row.bomLines.map((line) => ({
      mat: line.matiere.designation,
      incorp: line.incorpPct,
      qteKg: line.qteKg,
      prixAchat: line.prixAchat,
    })),
    emballages: row.emballages.map((emb) => ({
      type: emb.type,
      qte: emb.qte,
      prix: emb.prix,
    })),
    coutMO: row.coutMO,
    coutEnergie: row.coutEnergie,
    coutConsommables: row.coutConsommables,
    coutIndirects: row.coutIndirects,
    fraisLogistiques: row.fraisLogistiques,
    fraisCommerciaux: row.fraisCommerciaux,
    fraisAdmin: row.fraisAdmin,
    coutTheoriqueUnit: row.coutTheoriqueUnit,
  };
}
