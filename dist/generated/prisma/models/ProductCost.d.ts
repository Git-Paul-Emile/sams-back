import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProductCost
 *
 */
export type ProductCostModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductCostPayload>;
export type AggregateProductCost = {
    _count: ProductCostCountAggregateOutputType | null;
    _avg: ProductCostAvgAggregateOutputType | null;
    _sum: ProductCostSumAggregateOutputType | null;
    _min: ProductCostMinAggregateOutputType | null;
    _max: ProductCostMaxAggregateOutputType | null;
};
export type ProductCostAvgAggregateOutputType = {
    prixVente: number | null;
    qteVendue: number | null;
    qteProduite: number | null;
    qteReel: number | null;
    coutMO: number | null;
    coutEnergie: number | null;
    coutConsommables: number | null;
    coutIndirects: number | null;
    fraisLogistiques: number | null;
    fraisCommerciaux: number | null;
    fraisAdmin: number | null;
    coutTheoriqueUnit: number | null;
};
export type ProductCostSumAggregateOutputType = {
    prixVente: number | null;
    qteVendue: number | null;
    qteProduite: number | null;
    qteReel: number | null;
    coutMO: number | null;
    coutEnergie: number | null;
    coutConsommables: number | null;
    coutIndirects: number | null;
    fraisLogistiques: number | null;
    fraisCommerciaux: number | null;
    fraisAdmin: number | null;
    coutTheoriqueUnit: number | null;
};
export type ProductCostMinAggregateOutputType = {
    id: string | null;
    produitId: string | null;
    prixVente: number | null;
    qteVendue: number | null;
    qteProduite: number | null;
    qteReel: number | null;
    coutMO: number | null;
    coutEnergie: number | null;
    coutConsommables: number | null;
    coutIndirects: number | null;
    fraisLogistiques: number | null;
    fraisCommerciaux: number | null;
    fraisAdmin: number | null;
    coutTheoriqueUnit: number | null;
    calculatedAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCostMaxAggregateOutputType = {
    id: string | null;
    produitId: string | null;
    prixVente: number | null;
    qteVendue: number | null;
    qteProduite: number | null;
    qteReel: number | null;
    coutMO: number | null;
    coutEnergie: number | null;
    coutConsommables: number | null;
    coutIndirects: number | null;
    fraisLogistiques: number | null;
    fraisCommerciaux: number | null;
    fraisAdmin: number | null;
    coutTheoriqueUnit: number | null;
    calculatedAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCostCountAggregateOutputType = {
    id: number;
    produitId: number;
    prixVente: number;
    qteVendue: number;
    qteProduite: number;
    qteReel: number;
    coutMO: number;
    coutEnergie: number;
    coutConsommables: number;
    coutIndirects: number;
    fraisLogistiques: number;
    fraisCommerciaux: number;
    fraisAdmin: number;
    coutTheoriqueUnit: number;
    calculatedAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductCostAvgAggregateInputType = {
    prixVente?: true;
    qteVendue?: true;
    qteProduite?: true;
    qteReel?: true;
    coutMO?: true;
    coutEnergie?: true;
    coutConsommables?: true;
    coutIndirects?: true;
    fraisLogistiques?: true;
    fraisCommerciaux?: true;
    fraisAdmin?: true;
    coutTheoriqueUnit?: true;
};
export type ProductCostSumAggregateInputType = {
    prixVente?: true;
    qteVendue?: true;
    qteProduite?: true;
    qteReel?: true;
    coutMO?: true;
    coutEnergie?: true;
    coutConsommables?: true;
    coutIndirects?: true;
    fraisLogistiques?: true;
    fraisCommerciaux?: true;
    fraisAdmin?: true;
    coutTheoriqueUnit?: true;
};
export type ProductCostMinAggregateInputType = {
    id?: true;
    produitId?: true;
    prixVente?: true;
    qteVendue?: true;
    qteProduite?: true;
    qteReel?: true;
    coutMO?: true;
    coutEnergie?: true;
    coutConsommables?: true;
    coutIndirects?: true;
    fraisLogistiques?: true;
    fraisCommerciaux?: true;
    fraisAdmin?: true;
    coutTheoriqueUnit?: true;
    calculatedAt?: true;
    updatedAt?: true;
};
export type ProductCostMaxAggregateInputType = {
    id?: true;
    produitId?: true;
    prixVente?: true;
    qteVendue?: true;
    qteProduite?: true;
    qteReel?: true;
    coutMO?: true;
    coutEnergie?: true;
    coutConsommables?: true;
    coutIndirects?: true;
    fraisLogistiques?: true;
    fraisCommerciaux?: true;
    fraisAdmin?: true;
    coutTheoriqueUnit?: true;
    calculatedAt?: true;
    updatedAt?: true;
};
export type ProductCostCountAggregateInputType = {
    id?: true;
    produitId?: true;
    prixVente?: true;
    qteVendue?: true;
    qteProduite?: true;
    qteReel?: true;
    coutMO?: true;
    coutEnergie?: true;
    coutConsommables?: true;
    coutIndirects?: true;
    fraisLogistiques?: true;
    fraisCommerciaux?: true;
    fraisAdmin?: true;
    coutTheoriqueUnit?: true;
    calculatedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductCostAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCost to aggregate.
     */
    where?: Prisma.ProductCostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCosts to fetch.
     */
    orderBy?: Prisma.ProductCostOrderByWithRelationInput | Prisma.ProductCostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductCostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductCosts
    **/
    _count?: true | ProductCostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductCostAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductCostSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductCostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductCostMaxAggregateInputType;
};
export type GetProductCostAggregateType<T extends ProductCostAggregateArgs> = {
    [P in keyof T & keyof AggregateProductCost]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductCost[P]> : Prisma.GetScalarType<T[P], AggregateProductCost[P]>;
};
export type ProductCostGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCostWhereInput;
    orderBy?: Prisma.ProductCostOrderByWithAggregationInput | Prisma.ProductCostOrderByWithAggregationInput[];
    by: Prisma.ProductCostScalarFieldEnum[] | Prisma.ProductCostScalarFieldEnum;
    having?: Prisma.ProductCostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCostCountAggregateInputType | true;
    _avg?: ProductCostAvgAggregateInputType;
    _sum?: ProductCostSumAggregateInputType;
    _min?: ProductCostMinAggregateInputType;
    _max?: ProductCostMaxAggregateInputType;
};
export type ProductCostGroupByOutputType = {
    id: string;
    produitId: string;
    prixVente: number;
    qteVendue: number;
    qteProduite: number;
    qteReel: number;
    coutMO: number;
    coutEnergie: number;
    coutConsommables: number;
    coutIndirects: number;
    fraisLogistiques: number;
    fraisCommerciaux: number;
    fraisAdmin: number;
    coutTheoriqueUnit: number;
    calculatedAt: Date;
    updatedAt: Date;
    _count: ProductCostCountAggregateOutputType | null;
    _avg: ProductCostAvgAggregateOutputType | null;
    _sum: ProductCostSumAggregateOutputType | null;
    _min: ProductCostMinAggregateOutputType | null;
    _max: ProductCostMaxAggregateOutputType | null;
};
export type GetProductCostGroupByPayload<T extends ProductCostGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductCostGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductCostGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductCostGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductCostGroupByOutputType[P]>;
}>>;
export type ProductCostWhereInput = {
    AND?: Prisma.ProductCostWhereInput | Prisma.ProductCostWhereInput[];
    OR?: Prisma.ProductCostWhereInput[];
    NOT?: Prisma.ProductCostWhereInput | Prisma.ProductCostWhereInput[];
    id?: Prisma.StringFilter<"ProductCost"> | string;
    produitId?: Prisma.StringFilter<"ProductCost"> | string;
    prixVente?: Prisma.FloatFilter<"ProductCost"> | number;
    qteVendue?: Prisma.FloatFilter<"ProductCost"> | number;
    qteProduite?: Prisma.FloatFilter<"ProductCost"> | number;
    qteReel?: Prisma.FloatFilter<"ProductCost"> | number;
    coutMO?: Prisma.FloatFilter<"ProductCost"> | number;
    coutEnergie?: Prisma.FloatFilter<"ProductCost"> | number;
    coutConsommables?: Prisma.FloatFilter<"ProductCost"> | number;
    coutIndirects?: Prisma.FloatFilter<"ProductCost"> | number;
    fraisLogistiques?: Prisma.FloatFilter<"ProductCost"> | number;
    fraisCommerciaux?: Prisma.FloatFilter<"ProductCost"> | number;
    fraisAdmin?: Prisma.FloatFilter<"ProductCost"> | number;
    coutTheoriqueUnit?: Prisma.FloatFilter<"ProductCost"> | number;
    calculatedAt?: Prisma.DateTimeFilter<"ProductCost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductCost"> | Date | string;
    produit?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    bomLines?: Prisma.ProductCostBomLineListRelationFilter;
    emballages?: Prisma.ProductCostEmballageListRelationFilter;
};
export type ProductCostOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    prixVente?: Prisma.SortOrder;
    qteVendue?: Prisma.SortOrder;
    qteProduite?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    coutMO?: Prisma.SortOrder;
    coutEnergie?: Prisma.SortOrder;
    coutConsommables?: Prisma.SortOrder;
    coutIndirects?: Prisma.SortOrder;
    fraisLogistiques?: Prisma.SortOrder;
    fraisCommerciaux?: Prisma.SortOrder;
    fraisAdmin?: Prisma.SortOrder;
    coutTheoriqueUnit?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    produit?: Prisma.StockItemOrderByWithRelationInput;
    bomLines?: Prisma.ProductCostBomLineOrderByRelationAggregateInput;
    emballages?: Prisma.ProductCostEmballageOrderByRelationAggregateInput;
};
export type ProductCostWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    produitId?: string;
    AND?: Prisma.ProductCostWhereInput | Prisma.ProductCostWhereInput[];
    OR?: Prisma.ProductCostWhereInput[];
    NOT?: Prisma.ProductCostWhereInput | Prisma.ProductCostWhereInput[];
    prixVente?: Prisma.FloatFilter<"ProductCost"> | number;
    qteVendue?: Prisma.FloatFilter<"ProductCost"> | number;
    qteProduite?: Prisma.FloatFilter<"ProductCost"> | number;
    qteReel?: Prisma.FloatFilter<"ProductCost"> | number;
    coutMO?: Prisma.FloatFilter<"ProductCost"> | number;
    coutEnergie?: Prisma.FloatFilter<"ProductCost"> | number;
    coutConsommables?: Prisma.FloatFilter<"ProductCost"> | number;
    coutIndirects?: Prisma.FloatFilter<"ProductCost"> | number;
    fraisLogistiques?: Prisma.FloatFilter<"ProductCost"> | number;
    fraisCommerciaux?: Prisma.FloatFilter<"ProductCost"> | number;
    fraisAdmin?: Prisma.FloatFilter<"ProductCost"> | number;
    coutTheoriqueUnit?: Prisma.FloatFilter<"ProductCost"> | number;
    calculatedAt?: Prisma.DateTimeFilter<"ProductCost"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductCost"> | Date | string;
    produit?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    bomLines?: Prisma.ProductCostBomLineListRelationFilter;
    emballages?: Prisma.ProductCostEmballageListRelationFilter;
}, "id" | "produitId">;
export type ProductCostOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    prixVente?: Prisma.SortOrder;
    qteVendue?: Prisma.SortOrder;
    qteProduite?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    coutMO?: Prisma.SortOrder;
    coutEnergie?: Prisma.SortOrder;
    coutConsommables?: Prisma.SortOrder;
    coutIndirects?: Prisma.SortOrder;
    fraisLogistiques?: Prisma.SortOrder;
    fraisCommerciaux?: Prisma.SortOrder;
    fraisAdmin?: Prisma.SortOrder;
    coutTheoriqueUnit?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCostCountOrderByAggregateInput;
    _avg?: Prisma.ProductCostAvgOrderByAggregateInput;
    _max?: Prisma.ProductCostMaxOrderByAggregateInput;
    _min?: Prisma.ProductCostMinOrderByAggregateInput;
    _sum?: Prisma.ProductCostSumOrderByAggregateInput;
};
export type ProductCostScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductCostScalarWhereWithAggregatesInput | Prisma.ProductCostScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductCostScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductCostScalarWhereWithAggregatesInput | Prisma.ProductCostScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductCost"> | string;
    produitId?: Prisma.StringWithAggregatesFilter<"ProductCost"> | string;
    prixVente?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    qteVendue?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    qteProduite?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    qteReel?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    coutMO?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    coutEnergie?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    coutConsommables?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    coutIndirects?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    fraisLogistiques?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    fraisCommerciaux?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    fraisAdmin?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    coutTheoriqueUnit?: Prisma.FloatWithAggregatesFilter<"ProductCost"> | number;
    calculatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductCost"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductCost"> | Date | string;
};
export type ProductCostCreateInput = {
    id?: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProductCostInput;
    bomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutProductCostInput;
    emballages?: Prisma.ProductCostEmballageCreateNestedManyWithoutProductCostInput;
};
export type ProductCostUncheckedCreateInput = {
    id?: string;
    produitId: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    bomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutProductCostInput;
    emballages?: Prisma.ProductCostEmballageUncheckedCreateNestedManyWithoutProductCostInput;
};
export type ProductCostUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProductCostNestedInput;
    bomLines?: Prisma.ProductCostBomLineUpdateManyWithoutProductCostNestedInput;
    emballages?: Prisma.ProductCostEmballageUpdateManyWithoutProductCostNestedInput;
};
export type ProductCostUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutProductCostNestedInput;
    emballages?: Prisma.ProductCostEmballageUncheckedUpdateManyWithoutProductCostNestedInput;
};
export type ProductCostCreateManyInput = {
    id?: string;
    produitId: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductCostUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCostUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCostNullableScalarRelationFilter = {
    is?: Prisma.ProductCostWhereInput | null;
    isNot?: Prisma.ProductCostWhereInput | null;
};
export type ProductCostCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    prixVente?: Prisma.SortOrder;
    qteVendue?: Prisma.SortOrder;
    qteProduite?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    coutMO?: Prisma.SortOrder;
    coutEnergie?: Prisma.SortOrder;
    coutConsommables?: Prisma.SortOrder;
    coutIndirects?: Prisma.SortOrder;
    fraisLogistiques?: Prisma.SortOrder;
    fraisCommerciaux?: Prisma.SortOrder;
    fraisAdmin?: Prisma.SortOrder;
    coutTheoriqueUnit?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductCostAvgOrderByAggregateInput = {
    prixVente?: Prisma.SortOrder;
    qteVendue?: Prisma.SortOrder;
    qteProduite?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    coutMO?: Prisma.SortOrder;
    coutEnergie?: Prisma.SortOrder;
    coutConsommables?: Prisma.SortOrder;
    coutIndirects?: Prisma.SortOrder;
    fraisLogistiques?: Prisma.SortOrder;
    fraisCommerciaux?: Prisma.SortOrder;
    fraisAdmin?: Prisma.SortOrder;
    coutTheoriqueUnit?: Prisma.SortOrder;
};
export type ProductCostMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    prixVente?: Prisma.SortOrder;
    qteVendue?: Prisma.SortOrder;
    qteProduite?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    coutMO?: Prisma.SortOrder;
    coutEnergie?: Prisma.SortOrder;
    coutConsommables?: Prisma.SortOrder;
    coutIndirects?: Prisma.SortOrder;
    fraisLogistiques?: Prisma.SortOrder;
    fraisCommerciaux?: Prisma.SortOrder;
    fraisAdmin?: Prisma.SortOrder;
    coutTheoriqueUnit?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductCostMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    prixVente?: Prisma.SortOrder;
    qteVendue?: Prisma.SortOrder;
    qteProduite?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    coutMO?: Prisma.SortOrder;
    coutEnergie?: Prisma.SortOrder;
    coutConsommables?: Prisma.SortOrder;
    coutIndirects?: Prisma.SortOrder;
    fraisLogistiques?: Prisma.SortOrder;
    fraisCommerciaux?: Prisma.SortOrder;
    fraisAdmin?: Prisma.SortOrder;
    coutTheoriqueUnit?: Prisma.SortOrder;
    calculatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductCostSumOrderByAggregateInput = {
    prixVente?: Prisma.SortOrder;
    qteVendue?: Prisma.SortOrder;
    qteProduite?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    coutMO?: Prisma.SortOrder;
    coutEnergie?: Prisma.SortOrder;
    coutConsommables?: Prisma.SortOrder;
    coutIndirects?: Prisma.SortOrder;
    fraisLogistiques?: Prisma.SortOrder;
    fraisCommerciaux?: Prisma.SortOrder;
    fraisAdmin?: Prisma.SortOrder;
    coutTheoriqueUnit?: Prisma.SortOrder;
};
export type ProductCostScalarRelationFilter = {
    is?: Prisma.ProductCostWhereInput;
    isNot?: Prisma.ProductCostWhereInput;
};
export type ProductCostCreateNestedOneWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutProduitInput, Prisma.ProductCostUncheckedCreateWithoutProduitInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutProduitInput;
    connect?: Prisma.ProductCostWhereUniqueInput;
};
export type ProductCostUncheckedCreateNestedOneWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutProduitInput, Prisma.ProductCostUncheckedCreateWithoutProduitInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutProduitInput;
    connect?: Prisma.ProductCostWhereUniqueInput;
};
export type ProductCostUpdateOneWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutProduitInput, Prisma.ProductCostUncheckedCreateWithoutProduitInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutProduitInput;
    upsert?: Prisma.ProductCostUpsertWithoutProduitInput;
    disconnect?: Prisma.ProductCostWhereInput | boolean;
    delete?: Prisma.ProductCostWhereInput | boolean;
    connect?: Prisma.ProductCostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductCostUpdateToOneWithWhereWithoutProduitInput, Prisma.ProductCostUpdateWithoutProduitInput>, Prisma.ProductCostUncheckedUpdateWithoutProduitInput>;
};
export type ProductCostUncheckedUpdateOneWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutProduitInput, Prisma.ProductCostUncheckedCreateWithoutProduitInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutProduitInput;
    upsert?: Prisma.ProductCostUpsertWithoutProduitInput;
    disconnect?: Prisma.ProductCostWhereInput | boolean;
    delete?: Prisma.ProductCostWhereInput | boolean;
    connect?: Prisma.ProductCostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductCostUpdateToOneWithWhereWithoutProduitInput, Prisma.ProductCostUpdateWithoutProduitInput>, Prisma.ProductCostUncheckedUpdateWithoutProduitInput>;
};
export type ProductCostCreateNestedOneWithoutBomLinesInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutBomLinesInput, Prisma.ProductCostUncheckedCreateWithoutBomLinesInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutBomLinesInput;
    connect?: Prisma.ProductCostWhereUniqueInput;
};
export type ProductCostUpdateOneRequiredWithoutBomLinesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutBomLinesInput, Prisma.ProductCostUncheckedCreateWithoutBomLinesInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutBomLinesInput;
    upsert?: Prisma.ProductCostUpsertWithoutBomLinesInput;
    connect?: Prisma.ProductCostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductCostUpdateToOneWithWhereWithoutBomLinesInput, Prisma.ProductCostUpdateWithoutBomLinesInput>, Prisma.ProductCostUncheckedUpdateWithoutBomLinesInput>;
};
export type ProductCostCreateNestedOneWithoutEmballagesInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutEmballagesInput, Prisma.ProductCostUncheckedCreateWithoutEmballagesInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutEmballagesInput;
    connect?: Prisma.ProductCostWhereUniqueInput;
};
export type ProductCostUpdateOneRequiredWithoutEmballagesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostCreateWithoutEmballagesInput, Prisma.ProductCostUncheckedCreateWithoutEmballagesInput>;
    connectOrCreate?: Prisma.ProductCostCreateOrConnectWithoutEmballagesInput;
    upsert?: Prisma.ProductCostUpsertWithoutEmballagesInput;
    connect?: Prisma.ProductCostWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductCostUpdateToOneWithWhereWithoutEmballagesInput, Prisma.ProductCostUpdateWithoutEmballagesInput>, Prisma.ProductCostUncheckedUpdateWithoutEmballagesInput>;
};
export type ProductCostCreateWithoutProduitInput = {
    id?: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    bomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutProductCostInput;
    emballages?: Prisma.ProductCostEmballageCreateNestedManyWithoutProductCostInput;
};
export type ProductCostUncheckedCreateWithoutProduitInput = {
    id?: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    bomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutProductCostInput;
    emballages?: Prisma.ProductCostEmballageUncheckedCreateNestedManyWithoutProductCostInput;
};
export type ProductCostCreateOrConnectWithoutProduitInput = {
    where: Prisma.ProductCostWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCostCreateWithoutProduitInput, Prisma.ProductCostUncheckedCreateWithoutProduitInput>;
};
export type ProductCostUpsertWithoutProduitInput = {
    update: Prisma.XOR<Prisma.ProductCostUpdateWithoutProduitInput, Prisma.ProductCostUncheckedUpdateWithoutProduitInput>;
    create: Prisma.XOR<Prisma.ProductCostCreateWithoutProduitInput, Prisma.ProductCostUncheckedCreateWithoutProduitInput>;
    where?: Prisma.ProductCostWhereInput;
};
export type ProductCostUpdateToOneWithWhereWithoutProduitInput = {
    where?: Prisma.ProductCostWhereInput;
    data: Prisma.XOR<Prisma.ProductCostUpdateWithoutProduitInput, Prisma.ProductCostUncheckedUpdateWithoutProduitInput>;
};
export type ProductCostUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bomLines?: Prisma.ProductCostBomLineUpdateManyWithoutProductCostNestedInput;
    emballages?: Prisma.ProductCostEmballageUpdateManyWithoutProductCostNestedInput;
};
export type ProductCostUncheckedUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutProductCostNestedInput;
    emballages?: Prisma.ProductCostEmballageUncheckedUpdateManyWithoutProductCostNestedInput;
};
export type ProductCostCreateWithoutBomLinesInput = {
    id?: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProductCostInput;
    emballages?: Prisma.ProductCostEmballageCreateNestedManyWithoutProductCostInput;
};
export type ProductCostUncheckedCreateWithoutBomLinesInput = {
    id?: string;
    produitId: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    emballages?: Prisma.ProductCostEmballageUncheckedCreateNestedManyWithoutProductCostInput;
};
export type ProductCostCreateOrConnectWithoutBomLinesInput = {
    where: Prisma.ProductCostWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCostCreateWithoutBomLinesInput, Prisma.ProductCostUncheckedCreateWithoutBomLinesInput>;
};
export type ProductCostUpsertWithoutBomLinesInput = {
    update: Prisma.XOR<Prisma.ProductCostUpdateWithoutBomLinesInput, Prisma.ProductCostUncheckedUpdateWithoutBomLinesInput>;
    create: Prisma.XOR<Prisma.ProductCostCreateWithoutBomLinesInput, Prisma.ProductCostUncheckedCreateWithoutBomLinesInput>;
    where?: Prisma.ProductCostWhereInput;
};
export type ProductCostUpdateToOneWithWhereWithoutBomLinesInput = {
    where?: Prisma.ProductCostWhereInput;
    data: Prisma.XOR<Prisma.ProductCostUpdateWithoutBomLinesInput, Prisma.ProductCostUncheckedUpdateWithoutBomLinesInput>;
};
export type ProductCostUpdateWithoutBomLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProductCostNestedInput;
    emballages?: Prisma.ProductCostEmballageUpdateManyWithoutProductCostNestedInput;
};
export type ProductCostUncheckedUpdateWithoutBomLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emballages?: Prisma.ProductCostEmballageUncheckedUpdateManyWithoutProductCostNestedInput;
};
export type ProductCostCreateWithoutEmballagesInput = {
    id?: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProductCostInput;
    bomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutProductCostInput;
};
export type ProductCostUncheckedCreateWithoutEmballagesInput = {
    id?: string;
    produitId: string;
    prixVente: number;
    qteVendue?: number;
    qteProduite?: number;
    qteReel?: number;
    coutMO?: number;
    coutEnergie?: number;
    coutConsommables?: number;
    coutIndirects?: number;
    fraisLogistiques?: number;
    fraisCommerciaux?: number;
    fraisAdmin?: number;
    coutTheoriqueUnit?: number;
    calculatedAt?: Date | string;
    updatedAt?: Date | string;
    bomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutProductCostInput;
};
export type ProductCostCreateOrConnectWithoutEmballagesInput = {
    where: Prisma.ProductCostWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCostCreateWithoutEmballagesInput, Prisma.ProductCostUncheckedCreateWithoutEmballagesInput>;
};
export type ProductCostUpsertWithoutEmballagesInput = {
    update: Prisma.XOR<Prisma.ProductCostUpdateWithoutEmballagesInput, Prisma.ProductCostUncheckedUpdateWithoutEmballagesInput>;
    create: Prisma.XOR<Prisma.ProductCostCreateWithoutEmballagesInput, Prisma.ProductCostUncheckedCreateWithoutEmballagesInput>;
    where?: Prisma.ProductCostWhereInput;
};
export type ProductCostUpdateToOneWithWhereWithoutEmballagesInput = {
    where?: Prisma.ProductCostWhereInput;
    data: Prisma.XOR<Prisma.ProductCostUpdateWithoutEmballagesInput, Prisma.ProductCostUncheckedUpdateWithoutEmballagesInput>;
};
export type ProductCostUpdateWithoutEmballagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProductCostNestedInput;
    bomLines?: Prisma.ProductCostBomLineUpdateManyWithoutProductCostNestedInput;
};
export type ProductCostUncheckedUpdateWithoutEmballagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    prixVente?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteVendue?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteProduite?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutMO?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutEnergie?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutConsommables?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutIndirects?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisLogistiques?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisCommerciaux?: Prisma.FloatFieldUpdateOperationsInput | number;
    fraisAdmin?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutTheoriqueUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    calculatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutProductCostNestedInput;
};
/**
 * Count Type ProductCostCountOutputType
 */
export type ProductCostCountOutputType = {
    bomLines: number;
    emballages: number;
};
export type ProductCostCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bomLines?: boolean | ProductCostCountOutputTypeCountBomLinesArgs;
    emballages?: boolean | ProductCostCountOutputTypeCountEmballagesArgs;
};
/**
 * ProductCostCountOutputType without action
 */
export type ProductCostCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCostCountOutputType
     */
    select?: Prisma.ProductCostCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProductCostCountOutputType without action
 */
export type ProductCostCountOutputTypeCountBomLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCostBomLineWhereInput;
};
/**
 * ProductCostCountOutputType without action
 */
export type ProductCostCountOutputTypeCountEmballagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCostEmballageWhereInput;
};
export type ProductCostSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    produitId?: boolean;
    prixVente?: boolean;
    qteVendue?: boolean;
    qteProduite?: boolean;
    qteReel?: boolean;
    coutMO?: boolean;
    coutEnergie?: boolean;
    coutConsommables?: boolean;
    coutIndirects?: boolean;
    fraisLogistiques?: boolean;
    fraisCommerciaux?: boolean;
    fraisAdmin?: boolean;
    coutTheoriqueUnit?: boolean;
    calculatedAt?: boolean;
    updatedAt?: boolean;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    bomLines?: boolean | Prisma.ProductCost$bomLinesArgs<ExtArgs>;
    emballages?: boolean | Prisma.ProductCost$emballagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCostCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCost"]>;
export type ProductCostSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    produitId?: boolean;
    prixVente?: boolean;
    qteVendue?: boolean;
    qteProduite?: boolean;
    qteReel?: boolean;
    coutMO?: boolean;
    coutEnergie?: boolean;
    coutConsommables?: boolean;
    coutIndirects?: boolean;
    fraisLogistiques?: boolean;
    fraisCommerciaux?: boolean;
    fraisAdmin?: boolean;
    coutTheoriqueUnit?: boolean;
    calculatedAt?: boolean;
    updatedAt?: boolean;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCost"]>;
export type ProductCostSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    produitId?: boolean;
    prixVente?: boolean;
    qteVendue?: boolean;
    qteProduite?: boolean;
    qteReel?: boolean;
    coutMO?: boolean;
    coutEnergie?: boolean;
    coutConsommables?: boolean;
    coutIndirects?: boolean;
    fraisLogistiques?: boolean;
    fraisCommerciaux?: boolean;
    fraisAdmin?: boolean;
    coutTheoriqueUnit?: boolean;
    calculatedAt?: boolean;
    updatedAt?: boolean;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCost"]>;
export type ProductCostSelectScalar = {
    id?: boolean;
    produitId?: boolean;
    prixVente?: boolean;
    qteVendue?: boolean;
    qteProduite?: boolean;
    qteReel?: boolean;
    coutMO?: boolean;
    coutEnergie?: boolean;
    coutConsommables?: boolean;
    coutIndirects?: boolean;
    fraisLogistiques?: boolean;
    fraisCommerciaux?: boolean;
    fraisAdmin?: boolean;
    coutTheoriqueUnit?: boolean;
    calculatedAt?: boolean;
    updatedAt?: boolean;
};
export type ProductCostOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "produitId" | "prixVente" | "qteVendue" | "qteProduite" | "qteReel" | "coutMO" | "coutEnergie" | "coutConsommables" | "coutIndirects" | "fraisLogistiques" | "fraisCommerciaux" | "fraisAdmin" | "coutTheoriqueUnit" | "calculatedAt" | "updatedAt", ExtArgs["result"]["productCost"]>;
export type ProductCostInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    bomLines?: boolean | Prisma.ProductCost$bomLinesArgs<ExtArgs>;
    emballages?: boolean | Prisma.ProductCost$emballagesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCostCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductCostIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type ProductCostIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type $ProductCostPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductCost";
    objects: {
        produit: Prisma.$StockItemPayload<ExtArgs>;
        bomLines: Prisma.$ProductCostBomLinePayload<ExtArgs>[];
        emballages: Prisma.$ProductCostEmballagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        produitId: string;
        prixVente: number;
        qteVendue: number;
        qteProduite: number;
        qteReel: number;
        coutMO: number;
        coutEnergie: number;
        coutConsommables: number;
        coutIndirects: number;
        fraisLogistiques: number;
        fraisCommerciaux: number;
        fraisAdmin: number;
        coutTheoriqueUnit: number;
        calculatedAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["productCost"]>;
    composites: {};
};
export type ProductCostGetPayload<S extends boolean | null | undefined | ProductCostDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductCostPayload, S>;
export type ProductCostCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductCostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCostCountAggregateInputType | true;
};
export interface ProductCostDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductCost'];
        meta: {
            name: 'ProductCost';
        };
    };
    /**
     * Find zero or one ProductCost that matches the filter.
     * @param {ProductCostFindUniqueArgs} args - Arguments to find a ProductCost
     * @example
     * // Get one ProductCost
     * const productCost = await prisma.productCost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCostFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductCostFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductCost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCostFindUniqueOrThrowArgs} args - Arguments to find a ProductCost
     * @example
     * // Get one ProductCost
     * const productCost = await prisma.productCost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCostFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductCostFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostFindFirstArgs} args - Arguments to find a ProductCost
     * @example
     * // Get one ProductCost
     * const productCost = await prisma.productCost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCostFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductCostFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostFindFirstOrThrowArgs} args - Arguments to find a ProductCost
     * @example
     * // Get one ProductCost
     * const productCost = await prisma.productCost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCostFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductCostFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductCosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCosts
     * const productCosts = await prisma.productCost.findMany()
     *
     * // Get first 10 ProductCosts
     * const productCosts = await prisma.productCost.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productCostWithIdOnly = await prisma.productCost.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductCostFindManyArgs>(args?: Prisma.SelectSubset<T, ProductCostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductCost.
     * @param {ProductCostCreateArgs} args - Arguments to create a ProductCost.
     * @example
     * // Create one ProductCost
     * const ProductCost = await prisma.productCost.create({
     *   data: {
     *     // ... data to create a ProductCost
     *   }
     * })
     *
     */
    create<T extends ProductCostCreateArgs>(args: Prisma.SelectSubset<T, ProductCostCreateArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductCosts.
     * @param {ProductCostCreateManyArgs} args - Arguments to create many ProductCosts.
     * @example
     * // Create many ProductCosts
     * const productCost = await prisma.productCost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCostCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductCosts and returns the data saved in the database.
     * @param {ProductCostCreateManyAndReturnArgs} args - Arguments to create many ProductCosts.
     * @example
     * // Create many ProductCosts
     * const productCost = await prisma.productCost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductCosts and only return the `id`
     * const productCostWithIdOnly = await prisma.productCost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCostCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductCost.
     * @param {ProductCostDeleteArgs} args - Arguments to delete one ProductCost.
     * @example
     * // Delete one ProductCost
     * const ProductCost = await prisma.productCost.delete({
     *   where: {
     *     // ... filter to delete one ProductCost
     *   }
     * })
     *
     */
    delete<T extends ProductCostDeleteArgs>(args: Prisma.SelectSubset<T, ProductCostDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductCost.
     * @param {ProductCostUpdateArgs} args - Arguments to update one ProductCost.
     * @example
     * // Update one ProductCost
     * const productCost = await prisma.productCost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductCostUpdateArgs>(args: Prisma.SelectSubset<T, ProductCostUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductCosts.
     * @param {ProductCostDeleteManyArgs} args - Arguments to filter ProductCosts to delete.
     * @example
     * // Delete a few ProductCosts
     * const { count } = await prisma.productCost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductCostDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductCostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCosts
     * const productCost = await prisma.productCost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductCostUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductCostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCosts and returns the data updated in the database.
     * @param {ProductCostUpdateManyAndReturnArgs} args - Arguments to update many ProductCosts.
     * @example
     * // Update many ProductCosts
     * const productCost = await prisma.productCost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductCosts and only return the `id`
     * const productCostWithIdOnly = await prisma.productCost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProductCostUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductCostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductCost.
     * @param {ProductCostUpsertArgs} args - Arguments to update or create a ProductCost.
     * @example
     * // Update or create a ProductCost
     * const productCost = await prisma.productCost.upsert({
     *   create: {
     *     // ... data to create a ProductCost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCost we want to update
     *   }
     * })
     */
    upsert<T extends ProductCostUpsertArgs>(args: Prisma.SelectSubset<T, ProductCostUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductCosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostCountArgs} args - Arguments to filter ProductCosts to count.
     * @example
     * // Count the number of ProductCosts
     * const count = await prisma.productCost.count({
     *   where: {
     *     // ... the filter for the ProductCosts we want to count
     *   }
     * })
    **/
    count<T extends ProductCostCountArgs>(args?: Prisma.Subset<T, ProductCostCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCostCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductCost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCostAggregateArgs>(args: Prisma.Subset<T, ProductCostAggregateArgs>): Prisma.PrismaPromise<GetProductCostAggregateType<T>>;
    /**
     * Group by ProductCost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ProductCostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductCostGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductCostGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductCostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProductCost model
     */
    readonly fields: ProductCostFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProductCost.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductCostClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    produit<T extends Prisma.StockItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bomLines<T extends Prisma.ProductCost$bomLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductCost$bomLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    emballages<T extends Prisma.ProductCost$emballagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductCost$emballagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostEmballagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ProductCost model
 */
export interface ProductCostFieldRefs {
    readonly id: Prisma.FieldRef<"ProductCost", 'String'>;
    readonly produitId: Prisma.FieldRef<"ProductCost", 'String'>;
    readonly prixVente: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly qteVendue: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly qteProduite: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly qteReel: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly coutMO: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly coutEnergie: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly coutConsommables: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly coutIndirects: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly fraisLogistiques: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly fraisCommerciaux: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly fraisAdmin: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly coutTheoriqueUnit: Prisma.FieldRef<"ProductCost", 'Float'>;
    readonly calculatedAt: Prisma.FieldRef<"ProductCost", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProductCost", 'DateTime'>;
}
/**
 * ProductCost findUnique
 */
export type ProductCostFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * Filter, which ProductCost to fetch.
     */
    where: Prisma.ProductCostWhereUniqueInput;
};
/**
 * ProductCost findUniqueOrThrow
 */
export type ProductCostFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * Filter, which ProductCost to fetch.
     */
    where: Prisma.ProductCostWhereUniqueInput;
};
/**
 * ProductCost findFirst
 */
export type ProductCostFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * Filter, which ProductCost to fetch.
     */
    where?: Prisma.ProductCostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCosts to fetch.
     */
    orderBy?: Prisma.ProductCostOrderByWithRelationInput | Prisma.ProductCostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductCosts.
     */
    cursor?: Prisma.ProductCostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCosts.
     */
    distinct?: Prisma.ProductCostScalarFieldEnum | Prisma.ProductCostScalarFieldEnum[];
};
/**
 * ProductCost findFirstOrThrow
 */
export type ProductCostFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * Filter, which ProductCost to fetch.
     */
    where?: Prisma.ProductCostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCosts to fetch.
     */
    orderBy?: Prisma.ProductCostOrderByWithRelationInput | Prisma.ProductCostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductCosts.
     */
    cursor?: Prisma.ProductCostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCosts.
     */
    distinct?: Prisma.ProductCostScalarFieldEnum | Prisma.ProductCostScalarFieldEnum[];
};
/**
 * ProductCost findMany
 */
export type ProductCostFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * Filter, which ProductCosts to fetch.
     */
    where?: Prisma.ProductCostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCosts to fetch.
     */
    orderBy?: Prisma.ProductCostOrderByWithRelationInput | Prisma.ProductCostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductCosts.
     */
    cursor?: Prisma.ProductCostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCosts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCosts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCosts.
     */
    distinct?: Prisma.ProductCostScalarFieldEnum | Prisma.ProductCostScalarFieldEnum[];
};
/**
 * ProductCost create
 */
export type ProductCostCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProductCost.
     */
    data: Prisma.XOR<Prisma.ProductCostCreateInput, Prisma.ProductCostUncheckedCreateInput>;
};
/**
 * ProductCost createMany
 */
export type ProductCostCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCosts.
     */
    data: Prisma.ProductCostCreateManyInput | Prisma.ProductCostCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductCost createManyAndReturn
 */
export type ProductCostCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * The data used to create many ProductCosts.
     */
    data: Prisma.ProductCostCreateManyInput | Prisma.ProductCostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductCost update
 */
export type ProductCostUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProductCost.
     */
    data: Prisma.XOR<Prisma.ProductCostUpdateInput, Prisma.ProductCostUncheckedUpdateInput>;
    /**
     * Choose, which ProductCost to update.
     */
    where: Prisma.ProductCostWhereUniqueInput;
};
/**
 * ProductCost updateMany
 */
export type ProductCostUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCosts.
     */
    data: Prisma.XOR<Prisma.ProductCostUpdateManyMutationInput, Prisma.ProductCostUncheckedUpdateManyInput>;
    /**
     * Filter which ProductCosts to update
     */
    where?: Prisma.ProductCostWhereInput;
    /**
     * Limit how many ProductCosts to update.
     */
    limit?: number;
};
/**
 * ProductCost updateManyAndReturn
 */
export type ProductCostUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * The data used to update ProductCosts.
     */
    data: Prisma.XOR<Prisma.ProductCostUpdateManyMutationInput, Prisma.ProductCostUncheckedUpdateManyInput>;
    /**
     * Filter which ProductCosts to update
     */
    where?: Prisma.ProductCostWhereInput;
    /**
     * Limit how many ProductCosts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductCost upsert
 */
export type ProductCostUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProductCost to update in case it exists.
     */
    where: Prisma.ProductCostWhereUniqueInput;
    /**
     * In case the ProductCost found by the `where` argument doesn't exist, create a new ProductCost with this data.
     */
    create: Prisma.XOR<Prisma.ProductCostCreateInput, Prisma.ProductCostUncheckedCreateInput>;
    /**
     * In case the ProductCost was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductCostUpdateInput, Prisma.ProductCostUncheckedUpdateInput>;
};
/**
 * ProductCost delete
 */
export type ProductCostDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
    /**
     * Filter which ProductCost to delete.
     */
    where: Prisma.ProductCostWhereUniqueInput;
};
/**
 * ProductCost deleteMany
 */
export type ProductCostDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCosts to delete
     */
    where?: Prisma.ProductCostWhereInput;
    /**
     * Limit how many ProductCosts to delete.
     */
    limit?: number;
};
/**
 * ProductCost.bomLines
 */
export type ProductCost$bomLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCostBomLine
     */
    select?: Prisma.ProductCostBomLineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCostBomLine
     */
    omit?: Prisma.ProductCostBomLineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostBomLineInclude<ExtArgs> | null;
    where?: Prisma.ProductCostBomLineWhereInput;
    orderBy?: Prisma.ProductCostBomLineOrderByWithRelationInput | Prisma.ProductCostBomLineOrderByWithRelationInput[];
    cursor?: Prisma.ProductCostBomLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductCostBomLineScalarFieldEnum | Prisma.ProductCostBomLineScalarFieldEnum[];
};
/**
 * ProductCost.emballages
 */
export type ProductCost$emballagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCostEmballage
     */
    select?: Prisma.ProductCostEmballageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCostEmballage
     */
    omit?: Prisma.ProductCostEmballageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostEmballageInclude<ExtArgs> | null;
    where?: Prisma.ProductCostEmballageWhereInput;
    orderBy?: Prisma.ProductCostEmballageOrderByWithRelationInput | Prisma.ProductCostEmballageOrderByWithRelationInput[];
    cursor?: Prisma.ProductCostEmballageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductCostEmballageScalarFieldEnum | Prisma.ProductCostEmballageScalarFieldEnum[];
};
/**
 * ProductCost without action
 */
export type ProductCostDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCost
     */
    select?: Prisma.ProductCostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCost
     */
    omit?: Prisma.ProductCostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostInclude<ExtArgs> | null;
};
//# sourceMappingURL=ProductCost.d.ts.map