import type { Achat, Commande, MaterialRequest, Mouvement, ProdOrder, SalesRequest, StockItem, User } from "../generated/prisma/client.js";
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
export declare function toMouvementDto(m: MouvementWithRelations): {
    id: string;
    date: string;
    type: string;
    ref: string | null;
    designation: string;
    qte: number;
    user: string | null;
    motif: string | null;
};
export {};
//# sourceMappingURL=stockMovements.dto.d.ts.map