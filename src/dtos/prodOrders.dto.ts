import { formatAbbrevName } from "../utils/format.js";
import type { Operateur, ProdOrder, StockItem } from "../generated/prisma/client.js";

type ProdOrderWithRelations = ProdOrder & {
  produit: StockItem;
  responsable: Operateur | null;
};

/** Reforme la forme `ProdOrder` du frontend (`production.types.ts`) — voir plan §0.3. */
export function toProdOrderDto(order: ProdOrderWithRelations) {
  return {
    id: order.id,
    num: order.num,
    produit: order.produit.designation,
    ligne: order.ligne,
    qtePrev: order.qtePrev,
    qteReel: order.qteReel,
    debut: order.debut.toISOString(),
    fin: order.fin.toISOString(),
    responsable: order.responsable ? formatAbbrevName(order.responsable.prenom, order.responsable.nom) : null,
    statut: order.statut,
    rendement: order.rendement,
  };
}
