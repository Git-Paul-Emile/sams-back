import type { Bom, BomLine, StockItem } from "../generated/prisma/client.js";

type BomWithRelations = Bom & {
  produit: StockItem;
  items: (BomLine & { matiere: StockItem })[];
};

/** Reforme la forme `BomEntry` du frontend (`production.types.ts`) — voir plan §0.3. */
export function toBomDto(bom: BomWithRelations) {
  return {
    id: bom.id,
    produitId: bom.produit.id,
    produit: bom.produit.designation,
    items: bom.items.map((line) => ({
      id: line.id,
      matiereId: line.matiere.id,
      intrant: line.matiere.designation,
      categorie: line.matiere.categorie,
      qte: line.qte,
      unite: line.unite,
    })),
  };
}
