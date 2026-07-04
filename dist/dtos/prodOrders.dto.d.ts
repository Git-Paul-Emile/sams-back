import type { Operateur, ProdOrder, StockItem } from "../generated/prisma/client.js";
type ProdOrderWithRelations = ProdOrder & {
    produit: StockItem;
    responsable: Operateur | null;
};
/** Reforme la forme `ProdOrder` du frontend (`production.types.ts`) — voir plan §0.3. */
export declare function toProdOrderDto(order: ProdOrderWithRelations): {
    id: string;
    num: string;
    produit: string;
    ligne: string;
    qtePrev: number;
    qteReel: number;
    debut: string;
    fin: string;
    responsable: string | null;
    statut: string;
    rendement: number;
};
export {};
//# sourceMappingURL=prodOrders.dto.d.ts.map