import type { MaterialRequest, Operateur, ProdOrder, StockItem, User } from "../generated/prisma/client.js";
type MaterialRequestWithRelations = MaterialRequest & {
    prodOrder: ProdOrder & {
        produit: StockItem;
    };
    operateur: Operateur | null;
    matiere: StockItem;
    valideur: User | null;
};
export declare function toMaterialRequestDto(mr: MaterialRequestWithRelations): {
    id: string;
    num: string;
    date: string;
    produitFabrique: string;
    of: string;
    operateur: string | null;
    ligne: string;
    matiere: string;
    qteDemandee: number;
    qteValidee: number | null;
    commentaires: string | null;
    statut: string;
    valideur: string | null;
    dateValidation: string | null;
    docBC: string | null;
    docBL: string | null;
};
export {};
//# sourceMappingURL=materialRequests.dto.d.ts.map