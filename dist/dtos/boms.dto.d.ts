import type { Bom, BomLine, StockItem } from "../generated/prisma/client.js";
type BomWithRelations = Bom & {
    produit: StockItem;
    items: (BomLine & {
        matiere: StockItem;
    })[];
};
/** Reforme la forme `BomEntry` du frontend (`production.types.ts`) — voir plan §0.3. */
export declare function toBomDto(bom: BomWithRelations): {
    id: string;
    produit: string;
    items: {
        intrant: string;
        categorie: string;
        qte: number;
        unite: string;
    }[];
};
export {};
//# sourceMappingURL=boms.dto.d.ts.map