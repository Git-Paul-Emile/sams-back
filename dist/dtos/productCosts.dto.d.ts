import type { ProductCost, ProductCostBomLine, ProductCostEmballage, StockItem } from "../generated/prisma/client.js";
type ProductCostWithRelations = ProductCost & {
    produit: StockItem;
    bomLines: (ProductCostBomLine & {
        matiere: StockItem;
    })[];
    emballages: ProductCostEmballage[];
};
/**
 * Remappe une ligne `ProductCost` (photo de coût stockée, cf plan §0.2) vers la
 * forme `ProdCostDef` déjà consommée par le frontend (`couts.types.ts`).
 */
export declare function toProductCostDto(row: ProductCostWithRelations): {
    id: string;
    ref: string;
    designation: string;
    categorie: string;
    prixVente: number;
    qteVendue: number;
    qteProduite: number;
    qteReel: number;
    bom: {
        mat: string;
        incorp: number;
        qteKg: number;
        prixAchat: number;
    }[];
    emballages: {
        type: string;
        qte: number;
        prix: number;
    }[];
    coutMO: number;
    coutEnergie: number;
    coutConsommables: number;
    coutIndirects: number;
    fraisLogistiques: number;
    fraisCommerciaux: number;
    fraisAdmin: number;
    coutTheoriqueUnit: number;
};
export {};
//# sourceMappingURL=productCosts.dto.d.ts.map