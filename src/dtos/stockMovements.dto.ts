import type {
  Achat,
  Commande,
  MaterialRequest,
  Mouvement,
  ProdOrder,
  SalesRequest,
  StockItem,
  User,
} from "../generated/prisma/client.js";

type MouvementWithRelations = Mouvement & {
  stockItem: StockItem;
  user: User | null;
  commande: Commande | null;
  achat: Achat | null;
  prodOrder: ProdOrder | null;
  salesRequest: SalesRequest | null;
  materialRequest: MaterialRequest | null;
};

/**
 * Reforme la string `ref` unique attendue par le frontend (`Mouvement.ref`)
 * à partir de laquelle des FK d'origine est renseignée — voir plan §0.3 et
 * schéma `Mouvement` (une seule FK d'origine posée selon `type`).
 */
export function toMouvementDto(m: MouvementWithRelations) {
  const ref = m.commande?.num ?? m.achat?.num ?? m.prodOrder?.num ?? m.salesRequest?.num ?? m.materialRequest?.num ?? null;

  return {
    id: m.id,
    date: m.date.toISOString(),
    type: m.type,
    ref,
    designation: m.stockItem.designation,
    qte: m.qte,
    user: m.user ? m.user.nom : null,
    motif: m.motif,
  };
}
