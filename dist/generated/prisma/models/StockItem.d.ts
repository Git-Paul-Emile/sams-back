import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model StockItem
 *
 */
export type StockItemModel = runtime.Types.Result.DefaultSelection<Prisma.$StockItemPayload>;
export type AggregateStockItem = {
    _count: StockItemCountAggregateOutputType | null;
    _avg: StockItemAvgAggregateOutputType | null;
    _sum: StockItemSumAggregateOutputType | null;
    _min: StockItemMinAggregateOutputType | null;
    _max: StockItemMaxAggregateOutputType | null;
};
export type StockItemAvgAggregateOutputType = {
    stock: number | null;
    min: number | null;
    critique: number | null;
    valeurUnit: number | null;
};
export type StockItemSumAggregateOutputType = {
    stock: number | null;
    min: number | null;
    critique: number | null;
    valeurUnit: number | null;
};
export type StockItemMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    designation: string | null;
    type: $Enums.StockItemType | null;
    categorie: string | null;
    unite: string | null;
    stock: number | null;
    min: number | null;
    critique: number | null;
    valeurUnit: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StockItemMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    designation: string | null;
    type: $Enums.StockItemType | null;
    categorie: string | null;
    unite: string | null;
    stock: number | null;
    min: number | null;
    critique: number | null;
    valeurUnit: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StockItemCountAggregateOutputType = {
    id: number;
    code: number;
    designation: number;
    type: number;
    categorie: number;
    unite: number;
    stock: number;
    min: number;
    critique: number;
    valeurUnit: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StockItemAvgAggregateInputType = {
    stock?: true;
    min?: true;
    critique?: true;
    valeurUnit?: true;
};
export type StockItemSumAggregateInputType = {
    stock?: true;
    min?: true;
    critique?: true;
    valeurUnit?: true;
};
export type StockItemMinAggregateInputType = {
    id?: true;
    code?: true;
    designation?: true;
    type?: true;
    categorie?: true;
    unite?: true;
    stock?: true;
    min?: true;
    critique?: true;
    valeurUnit?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StockItemMaxAggregateInputType = {
    id?: true;
    code?: true;
    designation?: true;
    type?: true;
    categorie?: true;
    unite?: true;
    stock?: true;
    min?: true;
    critique?: true;
    valeurUnit?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StockItemCountAggregateInputType = {
    id?: true;
    code?: true;
    designation?: true;
    type?: true;
    categorie?: true;
    unite?: true;
    stock?: true;
    min?: true;
    critique?: true;
    valeurUnit?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StockItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StockItem to aggregate.
     */
    where?: Prisma.StockItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StockItems to fetch.
     */
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StockItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StockItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned StockItems
    **/
    _count?: true | StockItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StockItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StockItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StockItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StockItemMaxAggregateInputType;
};
export type GetStockItemAggregateType<T extends StockItemAggregateArgs> = {
    [P in keyof T & keyof AggregateStockItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStockItem[P]> : Prisma.GetScalarType<T[P], AggregateStockItem[P]>;
};
export type StockItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockItemWhereInput;
    orderBy?: Prisma.StockItemOrderByWithAggregationInput | Prisma.StockItemOrderByWithAggregationInput[];
    by: Prisma.StockItemScalarFieldEnum[] | Prisma.StockItemScalarFieldEnum;
    having?: Prisma.StockItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StockItemCountAggregateInputType | true;
    _avg?: StockItemAvgAggregateInputType;
    _sum?: StockItemSumAggregateInputType;
    _min?: StockItemMinAggregateInputType;
    _max?: StockItemMaxAggregateInputType;
};
export type StockItemGroupByOutputType = {
    id: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock: number;
    min: number;
    critique: number;
    valeurUnit: number;
    createdAt: Date;
    updatedAt: Date;
    _count: StockItemCountAggregateOutputType | null;
    _avg: StockItemAvgAggregateOutputType | null;
    _sum: StockItemSumAggregateOutputType | null;
    _min: StockItemMinAggregateOutputType | null;
    _max: StockItemMaxAggregateOutputType | null;
};
export type GetStockItemGroupByPayload<T extends StockItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StockItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StockItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StockItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StockItemGroupByOutputType[P]>;
}>>;
export type StockItemWhereInput = {
    AND?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    OR?: Prisma.StockItemWhereInput[];
    NOT?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    id?: Prisma.StringFilter<"StockItem"> | string;
    code?: Prisma.StringFilter<"StockItem"> | string;
    designation?: Prisma.StringFilter<"StockItem"> | string;
    type?: Prisma.EnumStockItemTypeFilter<"StockItem"> | $Enums.StockItemType;
    categorie?: Prisma.StringFilter<"StockItem"> | string;
    unite?: Prisma.StringFilter<"StockItem"> | string;
    stock?: Prisma.FloatFilter<"StockItem"> | number;
    min?: Prisma.FloatFilter<"StockItem"> | number;
    critique?: Prisma.FloatFilter<"StockItem"> | number;
    valeurUnit?: Prisma.FloatFilter<"StockItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    mouvements?: Prisma.MouvementListRelationFilter;
    bomAsProduit?: Prisma.XOR<Prisma.BomNullableScalarRelationFilter, Prisma.BomWhereInput> | null;
    bomLinesAsMatiere?: Prisma.BomLineListRelationFilter;
    prodOrders?: Prisma.ProdOrderListRelationFilter;
    salesRequests?: Prisma.SalesRequestListRelationFilter;
    materialRequests?: Prisma.MaterialRequestListRelationFilter;
    productCost?: Prisma.XOR<Prisma.ProductCostNullableScalarRelationFilter, Prisma.ProductCostWhereInput> | null;
    productCostBomLines?: Prisma.ProductCostBomLineListRelationFilter;
    matierePrixStat?: Prisma.XOR<Prisma.MatierePrixStatNullableScalarRelationFilter, Prisma.MatierePrixStatWhereInput> | null;
};
export type StockItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    min?: Prisma.SortOrder;
    critique?: Prisma.SortOrder;
    valeurUnit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    mouvements?: Prisma.MouvementOrderByRelationAggregateInput;
    bomAsProduit?: Prisma.BomOrderByWithRelationInput;
    bomLinesAsMatiere?: Prisma.BomLineOrderByRelationAggregateInput;
    prodOrders?: Prisma.ProdOrderOrderByRelationAggregateInput;
    salesRequests?: Prisma.SalesRequestOrderByRelationAggregateInput;
    materialRequests?: Prisma.MaterialRequestOrderByRelationAggregateInput;
    productCost?: Prisma.ProductCostOrderByWithRelationInput;
    productCostBomLines?: Prisma.ProductCostBomLineOrderByRelationAggregateInput;
    matierePrixStat?: Prisma.MatierePrixStatOrderByWithRelationInput;
};
export type StockItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    OR?: Prisma.StockItemWhereInput[];
    NOT?: Prisma.StockItemWhereInput | Prisma.StockItemWhereInput[];
    designation?: Prisma.StringFilter<"StockItem"> | string;
    type?: Prisma.EnumStockItemTypeFilter<"StockItem"> | $Enums.StockItemType;
    categorie?: Prisma.StringFilter<"StockItem"> | string;
    unite?: Prisma.StringFilter<"StockItem"> | string;
    stock?: Prisma.FloatFilter<"StockItem"> | number;
    min?: Prisma.FloatFilter<"StockItem"> | number;
    critique?: Prisma.FloatFilter<"StockItem"> | number;
    valeurUnit?: Prisma.FloatFilter<"StockItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StockItem"> | Date | string;
    mouvements?: Prisma.MouvementListRelationFilter;
    bomAsProduit?: Prisma.XOR<Prisma.BomNullableScalarRelationFilter, Prisma.BomWhereInput> | null;
    bomLinesAsMatiere?: Prisma.BomLineListRelationFilter;
    prodOrders?: Prisma.ProdOrderListRelationFilter;
    salesRequests?: Prisma.SalesRequestListRelationFilter;
    materialRequests?: Prisma.MaterialRequestListRelationFilter;
    productCost?: Prisma.XOR<Prisma.ProductCostNullableScalarRelationFilter, Prisma.ProductCostWhereInput> | null;
    productCostBomLines?: Prisma.ProductCostBomLineListRelationFilter;
    matierePrixStat?: Prisma.XOR<Prisma.MatierePrixStatNullableScalarRelationFilter, Prisma.MatierePrixStatWhereInput> | null;
}, "id" | "code">;
export type StockItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    min?: Prisma.SortOrder;
    critique?: Prisma.SortOrder;
    valeurUnit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StockItemCountOrderByAggregateInput;
    _avg?: Prisma.StockItemAvgOrderByAggregateInput;
    _max?: Prisma.StockItemMaxOrderByAggregateInput;
    _min?: Prisma.StockItemMinOrderByAggregateInput;
    _sum?: Prisma.StockItemSumOrderByAggregateInput;
};
export type StockItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.StockItemScalarWhereWithAggregatesInput | Prisma.StockItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.StockItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StockItemScalarWhereWithAggregatesInput | Prisma.StockItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    code?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    designation?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    type?: Prisma.EnumStockItemTypeWithAggregatesFilter<"StockItem"> | $Enums.StockItemType;
    categorie?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    unite?: Prisma.StringWithAggregatesFilter<"StockItem"> | string;
    stock?: Prisma.FloatWithAggregatesFilter<"StockItem"> | number;
    min?: Prisma.FloatWithAggregatesFilter<"StockItem"> | number;
    critique?: Prisma.FloatWithAggregatesFilter<"StockItem"> | number;
    valeurUnit?: Prisma.FloatWithAggregatesFilter<"StockItem"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StockItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StockItem"> | Date | string;
};
export type StockItemCreateInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateManyInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StockItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    min?: Prisma.SortOrder;
    critique?: Prisma.SortOrder;
    valeurUnit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StockItemAvgOrderByAggregateInput = {
    stock?: Prisma.SortOrder;
    min?: Prisma.SortOrder;
    critique?: Prisma.SortOrder;
    valeurUnit?: Prisma.SortOrder;
};
export type StockItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    min?: Prisma.SortOrder;
    critique?: Prisma.SortOrder;
    valeurUnit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StockItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    designation?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    min?: Prisma.SortOrder;
    critique?: Prisma.SortOrder;
    valeurUnit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StockItemSumOrderByAggregateInput = {
    stock?: Prisma.SortOrder;
    min?: Prisma.SortOrder;
    critique?: Prisma.SortOrder;
    valeurUnit?: Prisma.SortOrder;
};
export type StockItemScalarRelationFilter = {
    is?: Prisma.StockItemWhereInput;
    isNot?: Prisma.StockItemWhereInput;
};
export type EnumStockItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.StockItemType;
};
export type StockItemCreateNestedOneWithoutMouvementsInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutMouvementsInput, Prisma.StockItemUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutMouvementsInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutMouvementsNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutMouvementsInput, Prisma.StockItemUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutMouvementsInput;
    upsert?: Prisma.StockItemUpsertWithoutMouvementsInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutMouvementsInput, Prisma.StockItemUpdateWithoutMouvementsInput>, Prisma.StockItemUncheckedUpdateWithoutMouvementsInput>;
};
export type StockItemCreateNestedOneWithoutBomAsProduitInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutBomAsProduitInput, Prisma.StockItemUncheckedCreateWithoutBomAsProduitInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutBomAsProduitInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutBomAsProduitNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutBomAsProduitInput, Prisma.StockItemUncheckedCreateWithoutBomAsProduitInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutBomAsProduitInput;
    upsert?: Prisma.StockItemUpsertWithoutBomAsProduitInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutBomAsProduitInput, Prisma.StockItemUpdateWithoutBomAsProduitInput>, Prisma.StockItemUncheckedUpdateWithoutBomAsProduitInput>;
};
export type StockItemCreateNestedOneWithoutBomLinesAsMatiereInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutBomLinesAsMatiereInput, Prisma.StockItemUncheckedCreateWithoutBomLinesAsMatiereInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutBomLinesAsMatiereInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutBomLinesAsMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutBomLinesAsMatiereInput, Prisma.StockItemUncheckedCreateWithoutBomLinesAsMatiereInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutBomLinesAsMatiereInput;
    upsert?: Prisma.StockItemUpsertWithoutBomLinesAsMatiereInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutBomLinesAsMatiereInput, Prisma.StockItemUpdateWithoutBomLinesAsMatiereInput>, Prisma.StockItemUncheckedUpdateWithoutBomLinesAsMatiereInput>;
};
export type StockItemCreateNestedOneWithoutProdOrdersInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProdOrdersInput, Prisma.StockItemUncheckedCreateWithoutProdOrdersInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProdOrdersInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutProdOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProdOrdersInput, Prisma.StockItemUncheckedCreateWithoutProdOrdersInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProdOrdersInput;
    upsert?: Prisma.StockItemUpsertWithoutProdOrdersInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutProdOrdersInput, Prisma.StockItemUpdateWithoutProdOrdersInput>, Prisma.StockItemUncheckedUpdateWithoutProdOrdersInput>;
};
export type StockItemCreateNestedOneWithoutSalesRequestsInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutSalesRequestsInput, Prisma.StockItemUncheckedCreateWithoutSalesRequestsInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutSalesRequestsInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutSalesRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutSalesRequestsInput, Prisma.StockItemUncheckedCreateWithoutSalesRequestsInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutSalesRequestsInput;
    upsert?: Prisma.StockItemUpsertWithoutSalesRequestsInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutSalesRequestsInput, Prisma.StockItemUpdateWithoutSalesRequestsInput>, Prisma.StockItemUncheckedUpdateWithoutSalesRequestsInput>;
};
export type StockItemCreateNestedOneWithoutMaterialRequestsInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutMaterialRequestsInput, Prisma.StockItemUncheckedCreateWithoutMaterialRequestsInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutMaterialRequestsInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutMaterialRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutMaterialRequestsInput, Prisma.StockItemUncheckedCreateWithoutMaterialRequestsInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutMaterialRequestsInput;
    upsert?: Prisma.StockItemUpsertWithoutMaterialRequestsInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutMaterialRequestsInput, Prisma.StockItemUpdateWithoutMaterialRequestsInput>, Prisma.StockItemUncheckedUpdateWithoutMaterialRequestsInput>;
};
export type StockItemCreateNestedOneWithoutProductCostInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostInput, Prisma.StockItemUncheckedCreateWithoutProductCostInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductCostInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutProductCostNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostInput, Prisma.StockItemUncheckedCreateWithoutProductCostInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductCostInput;
    upsert?: Prisma.StockItemUpsertWithoutProductCostInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutProductCostInput, Prisma.StockItemUpdateWithoutProductCostInput>, Prisma.StockItemUncheckedUpdateWithoutProductCostInput>;
};
export type StockItemCreateNestedOneWithoutProductCostBomLinesInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostBomLinesInput, Prisma.StockItemUncheckedCreateWithoutProductCostBomLinesInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductCostBomLinesInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutProductCostBomLinesNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostBomLinesInput, Prisma.StockItemUncheckedCreateWithoutProductCostBomLinesInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutProductCostBomLinesInput;
    upsert?: Prisma.StockItemUpsertWithoutProductCostBomLinesInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutProductCostBomLinesInput, Prisma.StockItemUpdateWithoutProductCostBomLinesInput>, Prisma.StockItemUncheckedUpdateWithoutProductCostBomLinesInput>;
};
export type StockItemCreateNestedOneWithoutMatierePrixStatInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutMatierePrixStatInput, Prisma.StockItemUncheckedCreateWithoutMatierePrixStatInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutMatierePrixStatInput;
    connect?: Prisma.StockItemWhereUniqueInput;
};
export type StockItemUpdateOneRequiredWithoutMatierePrixStatNestedInput = {
    create?: Prisma.XOR<Prisma.StockItemCreateWithoutMatierePrixStatInput, Prisma.StockItemUncheckedCreateWithoutMatierePrixStatInput>;
    connectOrCreate?: Prisma.StockItemCreateOrConnectWithoutMatierePrixStatInput;
    upsert?: Prisma.StockItemUpsertWithoutMatierePrixStatInput;
    connect?: Prisma.StockItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StockItemUpdateToOneWithWhereWithoutMatierePrixStatInput, Prisma.StockItemUpdateWithoutMatierePrixStatInput>, Prisma.StockItemUncheckedUpdateWithoutMatierePrixStatInput>;
};
export type StockItemCreateWithoutMouvementsInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutMouvementsInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutMouvementsInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutMouvementsInput, Prisma.StockItemUncheckedCreateWithoutMouvementsInput>;
};
export type StockItemUpsertWithoutMouvementsInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutMouvementsInput, Prisma.StockItemUncheckedUpdateWithoutMouvementsInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutMouvementsInput, Prisma.StockItemUncheckedCreateWithoutMouvementsInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutMouvementsInput, Prisma.StockItemUncheckedUpdateWithoutMouvementsInput>;
};
export type StockItemUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutBomAsProduitInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutBomAsProduitInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutBomAsProduitInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutBomAsProduitInput, Prisma.StockItemUncheckedCreateWithoutBomAsProduitInput>;
};
export type StockItemUpsertWithoutBomAsProduitInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutBomAsProduitInput, Prisma.StockItemUncheckedUpdateWithoutBomAsProduitInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutBomAsProduitInput, Prisma.StockItemUncheckedCreateWithoutBomAsProduitInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutBomAsProduitInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutBomAsProduitInput, Prisma.StockItemUncheckedUpdateWithoutBomAsProduitInput>;
};
export type StockItemUpdateWithoutBomAsProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutBomAsProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutBomLinesAsMatiereInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutBomLinesAsMatiereInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutBomLinesAsMatiereInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutBomLinesAsMatiereInput, Prisma.StockItemUncheckedCreateWithoutBomLinesAsMatiereInput>;
};
export type StockItemUpsertWithoutBomLinesAsMatiereInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutBomLinesAsMatiereInput, Prisma.StockItemUncheckedUpdateWithoutBomLinesAsMatiereInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutBomLinesAsMatiereInput, Prisma.StockItemUncheckedCreateWithoutBomLinesAsMatiereInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutBomLinesAsMatiereInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutBomLinesAsMatiereInput, Prisma.StockItemUncheckedUpdateWithoutBomLinesAsMatiereInput>;
};
export type StockItemUpdateWithoutBomLinesAsMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutBomLinesAsMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutProdOrdersInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutProdOrdersInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutProdOrdersInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProdOrdersInput, Prisma.StockItemUncheckedCreateWithoutProdOrdersInput>;
};
export type StockItemUpsertWithoutProdOrdersInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutProdOrdersInput, Prisma.StockItemUncheckedUpdateWithoutProdOrdersInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProdOrdersInput, Prisma.StockItemUncheckedCreateWithoutProdOrdersInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutProdOrdersInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutProdOrdersInput, Prisma.StockItemUncheckedUpdateWithoutProdOrdersInput>;
};
export type StockItemUpdateWithoutProdOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutProdOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutSalesRequestsInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutSalesRequestsInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutSalesRequestsInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutSalesRequestsInput, Prisma.StockItemUncheckedCreateWithoutSalesRequestsInput>;
};
export type StockItemUpsertWithoutSalesRequestsInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutSalesRequestsInput, Prisma.StockItemUncheckedUpdateWithoutSalesRequestsInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutSalesRequestsInput, Prisma.StockItemUncheckedCreateWithoutSalesRequestsInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutSalesRequestsInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutSalesRequestsInput, Prisma.StockItemUncheckedUpdateWithoutSalesRequestsInput>;
};
export type StockItemUpdateWithoutSalesRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutSalesRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutMaterialRequestsInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutMaterialRequestsInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutMaterialRequestsInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutMaterialRequestsInput, Prisma.StockItemUncheckedCreateWithoutMaterialRequestsInput>;
};
export type StockItemUpsertWithoutMaterialRequestsInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutMaterialRequestsInput, Prisma.StockItemUncheckedUpdateWithoutMaterialRequestsInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutMaterialRequestsInput, Prisma.StockItemUncheckedCreateWithoutMaterialRequestsInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutMaterialRequestsInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutMaterialRequestsInput, Prisma.StockItemUncheckedUpdateWithoutMaterialRequestsInput>;
};
export type StockItemUpdateWithoutMaterialRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutMaterialRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutProductCostInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutProductCostInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutProductCostInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostInput, Prisma.StockItemUncheckedCreateWithoutProductCostInput>;
};
export type StockItemUpsertWithoutProductCostInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutProductCostInput, Prisma.StockItemUncheckedUpdateWithoutProductCostInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostInput, Prisma.StockItemUncheckedCreateWithoutProductCostInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutProductCostInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutProductCostInput, Prisma.StockItemUncheckedUpdateWithoutProductCostInput>;
};
export type StockItemUpdateWithoutProductCostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutProductCostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutProductCostBomLinesInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    matierePrixStat?: Prisma.MatierePrixStatCreateNestedOneWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutProductCostBomLinesInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutProductCostBomLinesInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostBomLinesInput, Prisma.StockItemUncheckedCreateWithoutProductCostBomLinesInput>;
};
export type StockItemUpsertWithoutProductCostBomLinesInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutProductCostBomLinesInput, Prisma.StockItemUncheckedUpdateWithoutProductCostBomLinesInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutProductCostBomLinesInput, Prisma.StockItemUncheckedCreateWithoutProductCostBomLinesInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutProductCostBomLinesInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutProductCostBomLinesInput, Prisma.StockItemUncheckedUpdateWithoutProductCostBomLinesInput>;
};
export type StockItemUpdateWithoutProductCostBomLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUpdateOneWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutProductCostBomLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    matierePrixStat?: Prisma.MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput;
};
export type StockItemCreateWithoutMatierePrixStatInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineCreateNestedManyWithoutMatiereInput;
};
export type StockItemUncheckedCreateWithoutMatierePrixStatInput = {
    id?: string;
    code: string;
    designation: string;
    type: $Enums.StockItemType;
    categorie: string;
    unite: string;
    stock?: number;
    min?: number;
    critique?: number;
    valeurUnit?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutStockItemInput;
    bomAsProduit?: Prisma.BomUncheckedCreateNestedOneWithoutProduitInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedCreateNestedManyWithoutMatiereInput;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutProduitInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutProduitInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput;
    productCost?: Prisma.ProductCostUncheckedCreateNestedOneWithoutProduitInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput;
};
export type StockItemCreateOrConnectWithoutMatierePrixStatInput = {
    where: Prisma.StockItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutMatierePrixStatInput, Prisma.StockItemUncheckedCreateWithoutMatierePrixStatInput>;
};
export type StockItemUpsertWithoutMatierePrixStatInput = {
    update: Prisma.XOR<Prisma.StockItemUpdateWithoutMatierePrixStatInput, Prisma.StockItemUncheckedUpdateWithoutMatierePrixStatInput>;
    create: Prisma.XOR<Prisma.StockItemCreateWithoutMatierePrixStatInput, Prisma.StockItemUncheckedCreateWithoutMatierePrixStatInput>;
    where?: Prisma.StockItemWhereInput;
};
export type StockItemUpdateToOneWithWhereWithoutMatierePrixStatInput = {
    where?: Prisma.StockItemWhereInput;
    data: Prisma.XOR<Prisma.StockItemUpdateWithoutMatierePrixStatInput, Prisma.StockItemUncheckedUpdateWithoutMatierePrixStatInput>;
};
export type StockItemUpdateWithoutMatierePrixStatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUpdateManyWithoutMatiereNestedInput;
};
export type StockItemUncheckedUpdateWithoutMatierePrixStatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    designation?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStockItemTypeFieldUpdateOperationsInput | $Enums.StockItemType;
    categorie?: Prisma.StringFieldUpdateOperationsInput | string;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    min?: Prisma.FloatFieldUpdateOperationsInput | number;
    critique?: Prisma.FloatFieldUpdateOperationsInput | number;
    valeurUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutStockItemNestedInput;
    bomAsProduit?: Prisma.BomUncheckedUpdateOneWithoutProduitNestedInput;
    bomLinesAsMatiere?: Prisma.BomLineUncheckedUpdateManyWithoutMatiereNestedInput;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutProduitNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutProduitNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput;
    productCost?: Prisma.ProductCostUncheckedUpdateOneWithoutProduitNestedInput;
    productCostBomLines?: Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput;
};
/**
 * Count Type StockItemCountOutputType
 */
export type StockItemCountOutputType = {
    mouvements: number;
    bomLinesAsMatiere: number;
    prodOrders: number;
    salesRequests: number;
    materialRequests: number;
    productCostBomLines: number;
};
export type StockItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mouvements?: boolean | StockItemCountOutputTypeCountMouvementsArgs;
    bomLinesAsMatiere?: boolean | StockItemCountOutputTypeCountBomLinesAsMatiereArgs;
    prodOrders?: boolean | StockItemCountOutputTypeCountProdOrdersArgs;
    salesRequests?: boolean | StockItemCountOutputTypeCountSalesRequestsArgs;
    materialRequests?: boolean | StockItemCountOutputTypeCountMaterialRequestsArgs;
    productCostBomLines?: boolean | StockItemCountOutputTypeCountProductCostBomLinesArgs;
};
/**
 * StockItemCountOutputType without action
 */
export type StockItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItemCountOutputType
     */
    select?: Prisma.StockItemCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * StockItemCountOutputType without action
 */
export type StockItemCountOutputTypeCountMouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MouvementWhereInput;
};
/**
 * StockItemCountOutputType without action
 */
export type StockItemCountOutputTypeCountBomLinesAsMatiereArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BomLineWhereInput;
};
/**
 * StockItemCountOutputType without action
 */
export type StockItemCountOutputTypeCountProdOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdOrderWhereInput;
};
/**
 * StockItemCountOutputType without action
 */
export type StockItemCountOutputTypeCountSalesRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesRequestWhereInput;
};
/**
 * StockItemCountOutputType without action
 */
export type StockItemCountOutputTypeCountMaterialRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialRequestWhereInput;
};
/**
 * StockItemCountOutputType without action
 */
export type StockItemCountOutputTypeCountProductCostBomLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCostBomLineWhereInput;
};
export type StockItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    designation?: boolean;
    type?: boolean;
    categorie?: boolean;
    unite?: boolean;
    stock?: boolean;
    min?: boolean;
    critique?: boolean;
    valeurUnit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    mouvements?: boolean | Prisma.StockItem$mouvementsArgs<ExtArgs>;
    bomAsProduit?: boolean | Prisma.StockItem$bomAsProduitArgs<ExtArgs>;
    bomLinesAsMatiere?: boolean | Prisma.StockItem$bomLinesAsMatiereArgs<ExtArgs>;
    prodOrders?: boolean | Prisma.StockItem$prodOrdersArgs<ExtArgs>;
    salesRequests?: boolean | Prisma.StockItem$salesRequestsArgs<ExtArgs>;
    materialRequests?: boolean | Prisma.StockItem$materialRequestsArgs<ExtArgs>;
    productCost?: boolean | Prisma.StockItem$productCostArgs<ExtArgs>;
    productCostBomLines?: boolean | Prisma.StockItem$productCostBomLinesArgs<ExtArgs>;
    matierePrixStat?: boolean | Prisma.StockItem$matierePrixStatArgs<ExtArgs>;
    _count?: boolean | Prisma.StockItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stockItem"]>;
export type StockItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    designation?: boolean;
    type?: boolean;
    categorie?: boolean;
    unite?: boolean;
    stock?: boolean;
    min?: boolean;
    critique?: boolean;
    valeurUnit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["stockItem"]>;
export type StockItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    designation?: boolean;
    type?: boolean;
    categorie?: boolean;
    unite?: boolean;
    stock?: boolean;
    min?: boolean;
    critique?: boolean;
    valeurUnit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["stockItem"]>;
export type StockItemSelectScalar = {
    id?: boolean;
    code?: boolean;
    designation?: boolean;
    type?: boolean;
    categorie?: boolean;
    unite?: boolean;
    stock?: boolean;
    min?: boolean;
    critique?: boolean;
    valeurUnit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StockItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "designation" | "type" | "categorie" | "unite" | "stock" | "min" | "critique" | "valeurUnit" | "createdAt" | "updatedAt", ExtArgs["result"]["stockItem"]>;
export type StockItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mouvements?: boolean | Prisma.StockItem$mouvementsArgs<ExtArgs>;
    bomAsProduit?: boolean | Prisma.StockItem$bomAsProduitArgs<ExtArgs>;
    bomLinesAsMatiere?: boolean | Prisma.StockItem$bomLinesAsMatiereArgs<ExtArgs>;
    prodOrders?: boolean | Prisma.StockItem$prodOrdersArgs<ExtArgs>;
    salesRequests?: boolean | Prisma.StockItem$salesRequestsArgs<ExtArgs>;
    materialRequests?: boolean | Prisma.StockItem$materialRequestsArgs<ExtArgs>;
    productCost?: boolean | Prisma.StockItem$productCostArgs<ExtArgs>;
    productCostBomLines?: boolean | Prisma.StockItem$productCostBomLinesArgs<ExtArgs>;
    matierePrixStat?: boolean | Prisma.StockItem$matierePrixStatArgs<ExtArgs>;
    _count?: boolean | Prisma.StockItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StockItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type StockItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $StockItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StockItem";
    objects: {
        mouvements: Prisma.$MouvementPayload<ExtArgs>[];
        bomAsProduit: Prisma.$BomPayload<ExtArgs> | null;
        bomLinesAsMatiere: Prisma.$BomLinePayload<ExtArgs>[];
        prodOrders: Prisma.$ProdOrderPayload<ExtArgs>[];
        salesRequests: Prisma.$SalesRequestPayload<ExtArgs>[];
        materialRequests: Prisma.$MaterialRequestPayload<ExtArgs>[];
        productCost: Prisma.$ProductCostPayload<ExtArgs> | null;
        productCostBomLines: Prisma.$ProductCostBomLinePayload<ExtArgs>[];
        matierePrixStat: Prisma.$MatierePrixStatPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        designation: string;
        type: $Enums.StockItemType;
        categorie: string;
        unite: string;
        stock: number;
        min: number;
        critique: number;
        valeurUnit: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["stockItem"]>;
    composites: {};
};
export type StockItemGetPayload<S extends boolean | null | undefined | StockItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StockItemPayload, S>;
export type StockItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StockItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StockItemCountAggregateInputType | true;
};
export interface StockItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StockItem'];
        meta: {
            name: 'StockItem';
        };
    };
    /**
     * Find zero or one StockItem that matches the filter.
     * @param {StockItemFindUniqueArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockItemFindUniqueArgs>(args: Prisma.SelectSubset<T, StockItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one StockItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockItemFindUniqueOrThrowArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StockItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StockItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindFirstArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockItemFindFirstArgs>(args?: Prisma.SelectSubset<T, StockItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first StockItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindFirstOrThrowArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StockItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more StockItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockItems
     * const stockItems = await prisma.stockItem.findMany()
     *
     * // Get first 10 StockItems
     * const stockItems = await prisma.stockItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const stockItemWithIdOnly = await prisma.stockItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StockItemFindManyArgs>(args?: Prisma.SelectSubset<T, StockItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a StockItem.
     * @param {StockItemCreateArgs} args - Arguments to create a StockItem.
     * @example
     * // Create one StockItem
     * const StockItem = await prisma.stockItem.create({
     *   data: {
     *     // ... data to create a StockItem
     *   }
     * })
     *
     */
    create<T extends StockItemCreateArgs>(args: Prisma.SelectSubset<T, StockItemCreateArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many StockItems.
     * @param {StockItemCreateManyArgs} args - Arguments to create many StockItems.
     * @example
     * // Create many StockItems
     * const stockItem = await prisma.stockItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StockItemCreateManyArgs>(args?: Prisma.SelectSubset<T, StockItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many StockItems and returns the data saved in the database.
     * @param {StockItemCreateManyAndReturnArgs} args - Arguments to create many StockItems.
     * @example
     * // Create many StockItems
     * const stockItem = await prisma.stockItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many StockItems and only return the `id`
     * const stockItemWithIdOnly = await prisma.stockItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StockItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StockItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a StockItem.
     * @param {StockItemDeleteArgs} args - Arguments to delete one StockItem.
     * @example
     * // Delete one StockItem
     * const StockItem = await prisma.stockItem.delete({
     *   where: {
     *     // ... filter to delete one StockItem
     *   }
     * })
     *
     */
    delete<T extends StockItemDeleteArgs>(args: Prisma.SelectSubset<T, StockItemDeleteArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one StockItem.
     * @param {StockItemUpdateArgs} args - Arguments to update one StockItem.
     * @example
     * // Update one StockItem
     * const stockItem = await prisma.stockItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StockItemUpdateArgs>(args: Prisma.SelectSubset<T, StockItemUpdateArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more StockItems.
     * @param {StockItemDeleteManyArgs} args - Arguments to filter StockItems to delete.
     * @example
     * // Delete a few StockItems
     * const { count } = await prisma.stockItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StockItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, StockItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockItems
     * const stockItem = await prisma.stockItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StockItemUpdateManyArgs>(args: Prisma.SelectSubset<T, StockItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more StockItems and returns the data updated in the database.
     * @param {StockItemUpdateManyAndReturnArgs} args - Arguments to update many StockItems.
     * @example
     * // Update many StockItems
     * const stockItem = await prisma.stockItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more StockItems and only return the `id`
     * const stockItemWithIdOnly = await prisma.stockItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends StockItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StockItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one StockItem.
     * @param {StockItemUpsertArgs} args - Arguments to update or create a StockItem.
     * @example
     * // Update or create a StockItem
     * const stockItem = await prisma.stockItem.upsert({
     *   create: {
     *     // ... data to create a StockItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockItem we want to update
     *   }
     * })
     */
    upsert<T extends StockItemUpsertArgs>(args: Prisma.SelectSubset<T, StockItemUpsertArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of StockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemCountArgs} args - Arguments to filter StockItems to count.
     * @example
     * // Count the number of StockItems
     * const count = await prisma.stockItem.count({
     *   where: {
     *     // ... the filter for the StockItems we want to count
     *   }
     * })
    **/
    count<T extends StockItemCountArgs>(args?: Prisma.Subset<T, StockItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StockItemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a StockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockItemAggregateArgs>(args: Prisma.Subset<T, StockItemAggregateArgs>): Prisma.PrismaPromise<GetStockItemAggregateType<T>>;
    /**
     * Group by StockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StockItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StockItemGroupByArgs['orderBy'];
    } : {
        orderBy?: StockItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StockItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the StockItem model
     */
    readonly fields: StockItemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for StockItem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StockItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    mouvements<T extends Prisma.StockItem$mouvementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bomAsProduit<T extends Prisma.StockItem$bomAsProduitArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$bomAsProduitArgs<ExtArgs>>): Prisma.Prisma__BomClient<runtime.Types.Result.GetResult<Prisma.$BomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    bomLinesAsMatiere<T extends Prisma.StockItem$bomLinesAsMatiereArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$bomLinesAsMatiereArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    prodOrders<T extends Prisma.StockItem$prodOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$prodOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salesRequests<T extends Prisma.StockItem$salesRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$salesRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materialRequests<T extends Prisma.StockItem$materialRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$materialRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productCost<T extends Prisma.StockItem$productCostArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$productCostArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    productCostBomLines<T extends Prisma.StockItem$productCostBomLinesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$productCostBomLinesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matierePrixStat<T extends Prisma.StockItem$matierePrixStatArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItem$matierePrixStatArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the StockItem model
 */
export interface StockItemFieldRefs {
    readonly id: Prisma.FieldRef<"StockItem", 'String'>;
    readonly code: Prisma.FieldRef<"StockItem", 'String'>;
    readonly designation: Prisma.FieldRef<"StockItem", 'String'>;
    readonly type: Prisma.FieldRef<"StockItem", 'StockItemType'>;
    readonly categorie: Prisma.FieldRef<"StockItem", 'String'>;
    readonly unite: Prisma.FieldRef<"StockItem", 'String'>;
    readonly stock: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly min: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly critique: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly valeurUnit: Prisma.FieldRef<"StockItem", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"StockItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StockItem", 'DateTime'>;
}
/**
 * StockItem findUnique
 */
export type StockItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * Filter, which StockItem to fetch.
     */
    where: Prisma.StockItemWhereUniqueInput;
};
/**
 * StockItem findUniqueOrThrow
 */
export type StockItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * Filter, which StockItem to fetch.
     */
    where: Prisma.StockItemWhereUniqueInput;
};
/**
 * StockItem findFirst
 */
export type StockItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * Filter, which StockItem to fetch.
     */
    where?: Prisma.StockItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StockItems to fetch.
     */
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StockItems.
     */
    cursor?: Prisma.StockItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StockItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StockItems.
     */
    distinct?: Prisma.StockItemScalarFieldEnum | Prisma.StockItemScalarFieldEnum[];
};
/**
 * StockItem findFirstOrThrow
 */
export type StockItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * Filter, which StockItem to fetch.
     */
    where?: Prisma.StockItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StockItems to fetch.
     */
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for StockItems.
     */
    cursor?: Prisma.StockItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StockItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StockItems.
     */
    distinct?: Prisma.StockItemScalarFieldEnum | Prisma.StockItemScalarFieldEnum[];
};
/**
 * StockItem findMany
 */
export type StockItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * Filter, which StockItems to fetch.
     */
    where?: Prisma.StockItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of StockItems to fetch.
     */
    orderBy?: Prisma.StockItemOrderByWithRelationInput | Prisma.StockItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing StockItems.
     */
    cursor?: Prisma.StockItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` StockItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of StockItems.
     */
    distinct?: Prisma.StockItemScalarFieldEnum | Prisma.StockItemScalarFieldEnum[];
};
/**
 * StockItem create
 */
export type StockItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a StockItem.
     */
    data: Prisma.XOR<Prisma.StockItemCreateInput, Prisma.StockItemUncheckedCreateInput>;
};
/**
 * StockItem createMany
 */
export type StockItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockItems.
     */
    data: Prisma.StockItemCreateManyInput | Prisma.StockItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StockItem createManyAndReturn
 */
export type StockItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * The data used to create many StockItems.
     */
    data: Prisma.StockItemCreateManyInput | Prisma.StockItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * StockItem update
 */
export type StockItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a StockItem.
     */
    data: Prisma.XOR<Prisma.StockItemUpdateInput, Prisma.StockItemUncheckedUpdateInput>;
    /**
     * Choose, which StockItem to update.
     */
    where: Prisma.StockItemWhereUniqueInput;
};
/**
 * StockItem updateMany
 */
export type StockItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update StockItems.
     */
    data: Prisma.XOR<Prisma.StockItemUpdateManyMutationInput, Prisma.StockItemUncheckedUpdateManyInput>;
    /**
     * Filter which StockItems to update
     */
    where?: Prisma.StockItemWhereInput;
    /**
     * Limit how many StockItems to update.
     */
    limit?: number;
};
/**
 * StockItem updateManyAndReturn
 */
export type StockItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * The data used to update StockItems.
     */
    data: Prisma.XOR<Prisma.StockItemUpdateManyMutationInput, Prisma.StockItemUncheckedUpdateManyInput>;
    /**
     * Filter which StockItems to update
     */
    where?: Prisma.StockItemWhereInput;
    /**
     * Limit how many StockItems to update.
     */
    limit?: number;
};
/**
 * StockItem upsert
 */
export type StockItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the StockItem to update in case it exists.
     */
    where: Prisma.StockItemWhereUniqueInput;
    /**
     * In case the StockItem found by the `where` argument doesn't exist, create a new StockItem with this data.
     */
    create: Prisma.XOR<Prisma.StockItemCreateInput, Prisma.StockItemUncheckedCreateInput>;
    /**
     * In case the StockItem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StockItemUpdateInput, Prisma.StockItemUncheckedUpdateInput>;
};
/**
 * StockItem delete
 */
export type StockItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
    /**
     * Filter which StockItem to delete.
     */
    where: Prisma.StockItemWhereUniqueInput;
};
/**
 * StockItem deleteMany
 */
export type StockItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which StockItems to delete
     */
    where?: Prisma.StockItemWhereInput;
    /**
     * Limit how many StockItems to delete.
     */
    limit?: number;
};
/**
 * StockItem.mouvements
 */
export type StockItem$mouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mouvement
     */
    select?: Prisma.MouvementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mouvement
     */
    omit?: Prisma.MouvementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MouvementInclude<ExtArgs> | null;
    where?: Prisma.MouvementWhereInput;
    orderBy?: Prisma.MouvementOrderByWithRelationInput | Prisma.MouvementOrderByWithRelationInput[];
    cursor?: Prisma.MouvementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MouvementScalarFieldEnum | Prisma.MouvementScalarFieldEnum[];
};
/**
 * StockItem.bomAsProduit
 */
export type StockItem$bomAsProduitArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bom
     */
    select?: Prisma.BomSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bom
     */
    omit?: Prisma.BomOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BomInclude<ExtArgs> | null;
    where?: Prisma.BomWhereInput;
};
/**
 * StockItem.bomLinesAsMatiere
 */
export type StockItem$bomLinesAsMatiereArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BomLine
     */
    select?: Prisma.BomLineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BomLine
     */
    omit?: Prisma.BomLineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BomLineInclude<ExtArgs> | null;
    where?: Prisma.BomLineWhereInput;
    orderBy?: Prisma.BomLineOrderByWithRelationInput | Prisma.BomLineOrderByWithRelationInput[];
    cursor?: Prisma.BomLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BomLineScalarFieldEnum | Prisma.BomLineScalarFieldEnum[];
};
/**
 * StockItem.prodOrders
 */
export type StockItem$prodOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdOrder
     */
    select?: Prisma.ProdOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdOrder
     */
    omit?: Prisma.ProdOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdOrderInclude<ExtArgs> | null;
    where?: Prisma.ProdOrderWhereInput;
    orderBy?: Prisma.ProdOrderOrderByWithRelationInput | Prisma.ProdOrderOrderByWithRelationInput[];
    cursor?: Prisma.ProdOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProdOrderScalarFieldEnum | Prisma.ProdOrderScalarFieldEnum[];
};
/**
 * StockItem.salesRequests
 */
export type StockItem$salesRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesRequest
     */
    select?: Prisma.SalesRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesRequest
     */
    omit?: Prisma.SalesRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SalesRequestInclude<ExtArgs> | null;
    where?: Prisma.SalesRequestWhereInput;
    orderBy?: Prisma.SalesRequestOrderByWithRelationInput | Prisma.SalesRequestOrderByWithRelationInput[];
    cursor?: Prisma.SalesRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SalesRequestScalarFieldEnum | Prisma.SalesRequestScalarFieldEnum[];
};
/**
 * StockItem.materialRequests
 */
export type StockItem$materialRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialRequest
     */
    select?: Prisma.MaterialRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MaterialRequest
     */
    omit?: Prisma.MaterialRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialRequestInclude<ExtArgs> | null;
    where?: Prisma.MaterialRequestWhereInput;
    orderBy?: Prisma.MaterialRequestOrderByWithRelationInput | Prisma.MaterialRequestOrderByWithRelationInput[];
    cursor?: Prisma.MaterialRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialRequestScalarFieldEnum | Prisma.MaterialRequestScalarFieldEnum[];
};
/**
 * StockItem.productCost
 */
export type StockItem$productCostArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProductCostWhereInput;
};
/**
 * StockItem.productCostBomLines
 */
export type StockItem$productCostBomLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * StockItem.matierePrixStat
 */
export type StockItem$matierePrixStatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    where?: Prisma.MatierePrixStatWhereInput;
};
/**
 * StockItem without action
 */
export type StockItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: Prisma.StockItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the StockItem
     */
    omit?: Prisma.StockItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StockItemInclude<ExtArgs> | null;
};
//# sourceMappingURL=StockItem.d.ts.map