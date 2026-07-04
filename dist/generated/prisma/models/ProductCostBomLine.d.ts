import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProductCostBomLine
 *
 */
export type ProductCostBomLineModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductCostBomLinePayload>;
export type AggregateProductCostBomLine = {
    _count: ProductCostBomLineCountAggregateOutputType | null;
    _avg: ProductCostBomLineAvgAggregateOutputType | null;
    _sum: ProductCostBomLineSumAggregateOutputType | null;
    _min: ProductCostBomLineMinAggregateOutputType | null;
    _max: ProductCostBomLineMaxAggregateOutputType | null;
};
export type ProductCostBomLineAvgAggregateOutputType = {
    incorpPct: number | null;
    qteKg: number | null;
    prixAchat: number | null;
};
export type ProductCostBomLineSumAggregateOutputType = {
    incorpPct: number | null;
    qteKg: number | null;
    prixAchat: number | null;
};
export type ProductCostBomLineMinAggregateOutputType = {
    id: string | null;
    productCostId: string | null;
    matiereId: string | null;
    incorpPct: number | null;
    qteKg: number | null;
    prixAchat: number | null;
};
export type ProductCostBomLineMaxAggregateOutputType = {
    id: string | null;
    productCostId: string | null;
    matiereId: string | null;
    incorpPct: number | null;
    qteKg: number | null;
    prixAchat: number | null;
};
export type ProductCostBomLineCountAggregateOutputType = {
    id: number;
    productCostId: number;
    matiereId: number;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
    _all: number;
};
export type ProductCostBomLineAvgAggregateInputType = {
    incorpPct?: true;
    qteKg?: true;
    prixAchat?: true;
};
export type ProductCostBomLineSumAggregateInputType = {
    incorpPct?: true;
    qteKg?: true;
    prixAchat?: true;
};
export type ProductCostBomLineMinAggregateInputType = {
    id?: true;
    productCostId?: true;
    matiereId?: true;
    incorpPct?: true;
    qteKg?: true;
    prixAchat?: true;
};
export type ProductCostBomLineMaxAggregateInputType = {
    id?: true;
    productCostId?: true;
    matiereId?: true;
    incorpPct?: true;
    qteKg?: true;
    prixAchat?: true;
};
export type ProductCostBomLineCountAggregateInputType = {
    id?: true;
    productCostId?: true;
    matiereId?: true;
    incorpPct?: true;
    qteKg?: true;
    prixAchat?: true;
    _all?: true;
};
export type ProductCostBomLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCostBomLine to aggregate.
     */
    where?: Prisma.ProductCostBomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCostBomLines to fetch.
     */
    orderBy?: Prisma.ProductCostBomLineOrderByWithRelationInput | Prisma.ProductCostBomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductCostBomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCostBomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCostBomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductCostBomLines
    **/
    _count?: true | ProductCostBomLineCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductCostBomLineAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductCostBomLineSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductCostBomLineMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductCostBomLineMaxAggregateInputType;
};
export type GetProductCostBomLineAggregateType<T extends ProductCostBomLineAggregateArgs> = {
    [P in keyof T & keyof AggregateProductCostBomLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductCostBomLine[P]> : Prisma.GetScalarType<T[P], AggregateProductCostBomLine[P]>;
};
export type ProductCostBomLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductCostBomLineWhereInput;
    orderBy?: Prisma.ProductCostBomLineOrderByWithAggregationInput | Prisma.ProductCostBomLineOrderByWithAggregationInput[];
    by: Prisma.ProductCostBomLineScalarFieldEnum[] | Prisma.ProductCostBomLineScalarFieldEnum;
    having?: Prisma.ProductCostBomLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCostBomLineCountAggregateInputType | true;
    _avg?: ProductCostBomLineAvgAggregateInputType;
    _sum?: ProductCostBomLineSumAggregateInputType;
    _min?: ProductCostBomLineMinAggregateInputType;
    _max?: ProductCostBomLineMaxAggregateInputType;
};
export type ProductCostBomLineGroupByOutputType = {
    id: string;
    productCostId: string;
    matiereId: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
    _count: ProductCostBomLineCountAggregateOutputType | null;
    _avg: ProductCostBomLineAvgAggregateOutputType | null;
    _sum: ProductCostBomLineSumAggregateOutputType | null;
    _min: ProductCostBomLineMinAggregateOutputType | null;
    _max: ProductCostBomLineMaxAggregateOutputType | null;
};
export type GetProductCostBomLineGroupByPayload<T extends ProductCostBomLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductCostBomLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductCostBomLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductCostBomLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductCostBomLineGroupByOutputType[P]>;
}>>;
export type ProductCostBomLineWhereInput = {
    AND?: Prisma.ProductCostBomLineWhereInput | Prisma.ProductCostBomLineWhereInput[];
    OR?: Prisma.ProductCostBomLineWhereInput[];
    NOT?: Prisma.ProductCostBomLineWhereInput | Prisma.ProductCostBomLineWhereInput[];
    id?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    productCostId?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    matiereId?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    incorpPct?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    qteKg?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    prixAchat?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    productCost?: Prisma.XOR<Prisma.ProductCostScalarRelationFilter, Prisma.ProductCostWhereInput>;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
};
export type ProductCostBomLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productCostId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    incorpPct?: Prisma.SortOrder;
    qteKg?: Prisma.SortOrder;
    prixAchat?: Prisma.SortOrder;
    productCost?: Prisma.ProductCostOrderByWithRelationInput;
    matiere?: Prisma.StockItemOrderByWithRelationInput;
};
export type ProductCostBomLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductCostBomLineWhereInput | Prisma.ProductCostBomLineWhereInput[];
    OR?: Prisma.ProductCostBomLineWhereInput[];
    NOT?: Prisma.ProductCostBomLineWhereInput | Prisma.ProductCostBomLineWhereInput[];
    productCostId?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    matiereId?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    incorpPct?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    qteKg?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    prixAchat?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    productCost?: Prisma.XOR<Prisma.ProductCostScalarRelationFilter, Prisma.ProductCostWhereInput>;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
}, "id">;
export type ProductCostBomLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productCostId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    incorpPct?: Prisma.SortOrder;
    qteKg?: Prisma.SortOrder;
    prixAchat?: Prisma.SortOrder;
    _count?: Prisma.ProductCostBomLineCountOrderByAggregateInput;
    _avg?: Prisma.ProductCostBomLineAvgOrderByAggregateInput;
    _max?: Prisma.ProductCostBomLineMaxOrderByAggregateInput;
    _min?: Prisma.ProductCostBomLineMinOrderByAggregateInput;
    _sum?: Prisma.ProductCostBomLineSumOrderByAggregateInput;
};
export type ProductCostBomLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductCostBomLineScalarWhereWithAggregatesInput | Prisma.ProductCostBomLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductCostBomLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductCostBomLineScalarWhereWithAggregatesInput | Prisma.ProductCostBomLineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductCostBomLine"> | string;
    productCostId?: Prisma.StringWithAggregatesFilter<"ProductCostBomLine"> | string;
    matiereId?: Prisma.StringWithAggregatesFilter<"ProductCostBomLine"> | string;
    incorpPct?: Prisma.FloatWithAggregatesFilter<"ProductCostBomLine"> | number;
    qteKg?: Prisma.FloatWithAggregatesFilter<"ProductCostBomLine"> | number;
    prixAchat?: Prisma.FloatWithAggregatesFilter<"ProductCostBomLine"> | number;
};
export type ProductCostBomLineCreateInput = {
    id?: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
    productCost: Prisma.ProductCostCreateNestedOneWithoutBomLinesInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutProductCostBomLinesInput;
};
export type ProductCostBomLineUncheckedCreateInput = {
    id?: string;
    productCostId: string;
    matiereId: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
};
export type ProductCostBomLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
    productCost?: Prisma.ProductCostUpdateOneRequiredWithoutBomLinesNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutProductCostBomLinesNestedInput;
};
export type ProductCostBomLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productCostId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ProductCostBomLineCreateManyInput = {
    id?: string;
    productCostId: string;
    matiereId: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
};
export type ProductCostBomLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ProductCostBomLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productCostId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ProductCostBomLineListRelationFilter = {
    every?: Prisma.ProductCostBomLineWhereInput;
    some?: Prisma.ProductCostBomLineWhereInput;
    none?: Prisma.ProductCostBomLineWhereInput;
};
export type ProductCostBomLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCostBomLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productCostId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    incorpPct?: Prisma.SortOrder;
    qteKg?: Prisma.SortOrder;
    prixAchat?: Prisma.SortOrder;
};
export type ProductCostBomLineAvgOrderByAggregateInput = {
    incorpPct?: Prisma.SortOrder;
    qteKg?: Prisma.SortOrder;
    prixAchat?: Prisma.SortOrder;
};
export type ProductCostBomLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productCostId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    incorpPct?: Prisma.SortOrder;
    qteKg?: Prisma.SortOrder;
    prixAchat?: Prisma.SortOrder;
};
export type ProductCostBomLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productCostId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    incorpPct?: Prisma.SortOrder;
    qteKg?: Prisma.SortOrder;
    prixAchat?: Prisma.SortOrder;
};
export type ProductCostBomLineSumOrderByAggregateInput = {
    incorpPct?: Prisma.SortOrder;
    qteKg?: Prisma.SortOrder;
    prixAchat?: Prisma.SortOrder;
};
export type ProductCostBomLineCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput> | Prisma.ProductCostBomLineCreateWithoutMatiereInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput | Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyMatiereInputEnvelope;
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
};
export type ProductCostBomLineUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput> | Prisma.ProductCostBomLineCreateWithoutMatiereInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput | Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyMatiereInputEnvelope;
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
};
export type ProductCostBomLineUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput> | Prisma.ProductCostBomLineCreateWithoutMatiereInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput | Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutMatiereInput | Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyMatiereInputEnvelope;
    set?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    disconnect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    delete?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    update?: Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutMatiereInput | Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.ProductCostBomLineUpdateManyWithWhereWithoutMatiereInput | Prisma.ProductCostBomLineUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.ProductCostBomLineScalarWhereInput | Prisma.ProductCostBomLineScalarWhereInput[];
};
export type ProductCostBomLineUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput> | Prisma.ProductCostBomLineCreateWithoutMatiereInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput | Prisma.ProductCostBomLineCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutMatiereInput | Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyMatiereInputEnvelope;
    set?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    disconnect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    delete?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    update?: Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutMatiereInput | Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.ProductCostBomLineUpdateManyWithWhereWithoutMatiereInput | Prisma.ProductCostBomLineUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.ProductCostBomLineScalarWhereInput | Prisma.ProductCostBomLineScalarWhereInput[];
};
export type ProductCostBomLineCreateNestedManyWithoutProductCostInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput> | Prisma.ProductCostBomLineCreateWithoutProductCostInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput | Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyProductCostInputEnvelope;
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
};
export type ProductCostBomLineUncheckedCreateNestedManyWithoutProductCostInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput> | Prisma.ProductCostBomLineCreateWithoutProductCostInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput | Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyProductCostInputEnvelope;
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
};
export type ProductCostBomLineUpdateManyWithoutProductCostNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput> | Prisma.ProductCostBomLineCreateWithoutProductCostInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput | Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput[];
    upsert?: Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutProductCostInput | Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutProductCostInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyProductCostInputEnvelope;
    set?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    disconnect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    delete?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    update?: Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutProductCostInput | Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutProductCostInput[];
    updateMany?: Prisma.ProductCostBomLineUpdateManyWithWhereWithoutProductCostInput | Prisma.ProductCostBomLineUpdateManyWithWhereWithoutProductCostInput[];
    deleteMany?: Prisma.ProductCostBomLineScalarWhereInput | Prisma.ProductCostBomLineScalarWhereInput[];
};
export type ProductCostBomLineUncheckedUpdateManyWithoutProductCostNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput> | Prisma.ProductCostBomLineCreateWithoutProductCostInput[] | Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput[];
    connectOrCreate?: Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput | Prisma.ProductCostBomLineCreateOrConnectWithoutProductCostInput[];
    upsert?: Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutProductCostInput | Prisma.ProductCostBomLineUpsertWithWhereUniqueWithoutProductCostInput[];
    createMany?: Prisma.ProductCostBomLineCreateManyProductCostInputEnvelope;
    set?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    disconnect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    delete?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    connect?: Prisma.ProductCostBomLineWhereUniqueInput | Prisma.ProductCostBomLineWhereUniqueInput[];
    update?: Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutProductCostInput | Prisma.ProductCostBomLineUpdateWithWhereUniqueWithoutProductCostInput[];
    updateMany?: Prisma.ProductCostBomLineUpdateManyWithWhereWithoutProductCostInput | Prisma.ProductCostBomLineUpdateManyWithWhereWithoutProductCostInput[];
    deleteMany?: Prisma.ProductCostBomLineScalarWhereInput | Prisma.ProductCostBomLineScalarWhereInput[];
};
export type ProductCostBomLineCreateWithoutMatiereInput = {
    id?: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
    productCost: Prisma.ProductCostCreateNestedOneWithoutBomLinesInput;
};
export type ProductCostBomLineUncheckedCreateWithoutMatiereInput = {
    id?: string;
    productCostId: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
};
export type ProductCostBomLineCreateOrConnectWithoutMatiereInput = {
    where: Prisma.ProductCostBomLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput>;
};
export type ProductCostBomLineCreateManyMatiereInputEnvelope = {
    data: Prisma.ProductCostBomLineCreateManyMatiereInput | Prisma.ProductCostBomLineCreateManyMatiereInput[];
    skipDuplicates?: boolean;
};
export type ProductCostBomLineUpsertWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.ProductCostBomLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductCostBomLineUpdateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedUpdateWithoutMatiereInput>;
    create: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedCreateWithoutMatiereInput>;
};
export type ProductCostBomLineUpdateWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.ProductCostBomLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductCostBomLineUpdateWithoutMatiereInput, Prisma.ProductCostBomLineUncheckedUpdateWithoutMatiereInput>;
};
export type ProductCostBomLineUpdateManyWithWhereWithoutMatiereInput = {
    where: Prisma.ProductCostBomLineScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductCostBomLineUpdateManyMutationInput, Prisma.ProductCostBomLineUncheckedUpdateManyWithoutMatiereInput>;
};
export type ProductCostBomLineScalarWhereInput = {
    AND?: Prisma.ProductCostBomLineScalarWhereInput | Prisma.ProductCostBomLineScalarWhereInput[];
    OR?: Prisma.ProductCostBomLineScalarWhereInput[];
    NOT?: Prisma.ProductCostBomLineScalarWhereInput | Prisma.ProductCostBomLineScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    productCostId?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    matiereId?: Prisma.StringFilter<"ProductCostBomLine"> | string;
    incorpPct?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    qteKg?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
    prixAchat?: Prisma.FloatFilter<"ProductCostBomLine"> | number;
};
export type ProductCostBomLineCreateWithoutProductCostInput = {
    id?: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
    matiere: Prisma.StockItemCreateNestedOneWithoutProductCostBomLinesInput;
};
export type ProductCostBomLineUncheckedCreateWithoutProductCostInput = {
    id?: string;
    matiereId: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
};
export type ProductCostBomLineCreateOrConnectWithoutProductCostInput = {
    where: Prisma.ProductCostBomLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput>;
};
export type ProductCostBomLineCreateManyProductCostInputEnvelope = {
    data: Prisma.ProductCostBomLineCreateManyProductCostInput | Prisma.ProductCostBomLineCreateManyProductCostInput[];
    skipDuplicates?: boolean;
};
export type ProductCostBomLineUpsertWithWhereUniqueWithoutProductCostInput = {
    where: Prisma.ProductCostBomLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductCostBomLineUpdateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedUpdateWithoutProductCostInput>;
    create: Prisma.XOR<Prisma.ProductCostBomLineCreateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedCreateWithoutProductCostInput>;
};
export type ProductCostBomLineUpdateWithWhereUniqueWithoutProductCostInput = {
    where: Prisma.ProductCostBomLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductCostBomLineUpdateWithoutProductCostInput, Prisma.ProductCostBomLineUncheckedUpdateWithoutProductCostInput>;
};
export type ProductCostBomLineUpdateManyWithWhereWithoutProductCostInput = {
    where: Prisma.ProductCostBomLineScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductCostBomLineUpdateManyMutationInput, Prisma.ProductCostBomLineUncheckedUpdateManyWithoutProductCostInput>;
};
export type ProductCostBomLineCreateManyMatiereInput = {
    id?: string;
    productCostId: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
};
export type ProductCostBomLineUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
    productCost?: Prisma.ProductCostUpdateOneRequiredWithoutBomLinesNestedInput;
};
export type ProductCostBomLineUncheckedUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productCostId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ProductCostBomLineUncheckedUpdateManyWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productCostId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ProductCostBomLineCreateManyProductCostInput = {
    id?: string;
    matiereId: string;
    incorpPct: number;
    qteKg: number;
    prixAchat: number;
};
export type ProductCostBomLineUpdateWithoutProductCostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutProductCostBomLinesNestedInput;
};
export type ProductCostBomLineUncheckedUpdateWithoutProductCostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ProductCostBomLineUncheckedUpdateManyWithoutProductCostInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorpPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteKg?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixAchat?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type ProductCostBomLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productCostId?: boolean;
    matiereId?: boolean;
    incorpPct?: boolean;
    qteKg?: boolean;
    prixAchat?: boolean;
    productCost?: boolean | Prisma.ProductCostDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCostBomLine"]>;
export type ProductCostBomLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productCostId?: boolean;
    matiereId?: boolean;
    incorpPct?: boolean;
    qteKg?: boolean;
    prixAchat?: boolean;
    productCost?: boolean | Prisma.ProductCostDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCostBomLine"]>;
export type ProductCostBomLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productCostId?: boolean;
    matiereId?: boolean;
    incorpPct?: boolean;
    qteKg?: boolean;
    prixAchat?: boolean;
    productCost?: boolean | Prisma.ProductCostDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productCostBomLine"]>;
export type ProductCostBomLineSelectScalar = {
    id?: boolean;
    productCostId?: boolean;
    matiereId?: boolean;
    incorpPct?: boolean;
    qteKg?: boolean;
    prixAchat?: boolean;
};
export type ProductCostBomLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productCostId" | "matiereId" | "incorpPct" | "qteKg" | "prixAchat", ExtArgs["result"]["productCostBomLine"]>;
export type ProductCostBomLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productCost?: boolean | Prisma.ProductCostDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type ProductCostBomLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productCost?: boolean | Prisma.ProductCostDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type ProductCostBomLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productCost?: boolean | Prisma.ProductCostDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type $ProductCostBomLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductCostBomLine";
    objects: {
        productCost: Prisma.$ProductCostPayload<ExtArgs>;
        matiere: Prisma.$StockItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productCostId: string;
        matiereId: string;
        incorpPct: number;
        qteKg: number;
        prixAchat: number;
    }, ExtArgs["result"]["productCostBomLine"]>;
    composites: {};
};
export type ProductCostBomLineGetPayload<S extends boolean | null | undefined | ProductCostBomLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload, S>;
export type ProductCostBomLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductCostBomLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCostBomLineCountAggregateInputType | true;
};
export interface ProductCostBomLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductCostBomLine'];
        meta: {
            name: 'ProductCostBomLine';
        };
    };
    /**
     * Find zero or one ProductCostBomLine that matches the filter.
     * @param {ProductCostBomLineFindUniqueArgs} args - Arguments to find a ProductCostBomLine
     * @example
     * // Get one ProductCostBomLine
     * const productCostBomLine = await prisma.productCostBomLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCostBomLineFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductCostBomLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCostBomLineFindUniqueOrThrowArgs} args - Arguments to find a ProductCostBomLine
     * @example
     * // Get one ProductCostBomLine
     * const productCostBomLine = await prisma.productCostBomLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCostBomLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCostBomLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostBomLineFindFirstArgs} args - Arguments to find a ProductCostBomLine
     * @example
     * // Get one ProductCostBomLine
     * const productCostBomLine = await prisma.productCostBomLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCostBomLineFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductCostBomLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductCostBomLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostBomLineFindFirstOrThrowArgs} args - Arguments to find a ProductCostBomLine
     * @example
     * // Get one ProductCostBomLine
     * const productCostBomLine = await prisma.productCostBomLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCostBomLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductCostBomLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductCostBomLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostBomLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCostBomLines
     * const productCostBomLines = await prisma.productCostBomLine.findMany()
     *
     * // Get first 10 ProductCostBomLines
     * const productCostBomLines = await prisma.productCostBomLine.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productCostBomLineWithIdOnly = await prisma.productCostBomLine.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductCostBomLineFindManyArgs>(args?: Prisma.SelectSubset<T, ProductCostBomLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductCostBomLine.
     * @param {ProductCostBomLineCreateArgs} args - Arguments to create a ProductCostBomLine.
     * @example
     * // Create one ProductCostBomLine
     * const ProductCostBomLine = await prisma.productCostBomLine.create({
     *   data: {
     *     // ... data to create a ProductCostBomLine
     *   }
     * })
     *
     */
    create<T extends ProductCostBomLineCreateArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineCreateArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductCostBomLines.
     * @param {ProductCostBomLineCreateManyArgs} args - Arguments to create many ProductCostBomLines.
     * @example
     * // Create many ProductCostBomLines
     * const productCostBomLine = await prisma.productCostBomLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCostBomLineCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCostBomLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductCostBomLines and returns the data saved in the database.
     * @param {ProductCostBomLineCreateManyAndReturnArgs} args - Arguments to create many ProductCostBomLines.
     * @example
     * // Create many ProductCostBomLines
     * const productCostBomLine = await prisma.productCostBomLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductCostBomLines and only return the `id`
     * const productCostBomLineWithIdOnly = await prisma.productCostBomLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCostBomLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCostBomLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductCostBomLine.
     * @param {ProductCostBomLineDeleteArgs} args - Arguments to delete one ProductCostBomLine.
     * @example
     * // Delete one ProductCostBomLine
     * const ProductCostBomLine = await prisma.productCostBomLine.delete({
     *   where: {
     *     // ... filter to delete one ProductCostBomLine
     *   }
     * })
     *
     */
    delete<T extends ProductCostBomLineDeleteArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductCostBomLine.
     * @param {ProductCostBomLineUpdateArgs} args - Arguments to update one ProductCostBomLine.
     * @example
     * // Update one ProductCostBomLine
     * const productCostBomLine = await prisma.productCostBomLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductCostBomLineUpdateArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductCostBomLines.
     * @param {ProductCostBomLineDeleteManyArgs} args - Arguments to filter ProductCostBomLines to delete.
     * @example
     * // Delete a few ProductCostBomLines
     * const { count } = await prisma.productCostBomLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductCostBomLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductCostBomLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCostBomLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostBomLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCostBomLines
     * const productCostBomLine = await prisma.productCostBomLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductCostBomLineUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductCostBomLines and returns the data updated in the database.
     * @param {ProductCostBomLineUpdateManyAndReturnArgs} args - Arguments to update many ProductCostBomLines.
     * @example
     * // Update many ProductCostBomLines
     * const productCostBomLine = await prisma.productCostBomLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductCostBomLines and only return the `id`
     * const productCostBomLineWithIdOnly = await prisma.productCostBomLine.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductCostBomLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductCostBomLine.
     * @param {ProductCostBomLineUpsertArgs} args - Arguments to update or create a ProductCostBomLine.
     * @example
     * // Update or create a ProductCostBomLine
     * const productCostBomLine = await prisma.productCostBomLine.upsert({
     *   create: {
     *     // ... data to create a ProductCostBomLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCostBomLine we want to update
     *   }
     * })
     */
    upsert<T extends ProductCostBomLineUpsertArgs>(args: Prisma.SelectSubset<T, ProductCostBomLineUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductCostBomLineClient<runtime.Types.Result.GetResult<Prisma.$ProductCostBomLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductCostBomLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostBomLineCountArgs} args - Arguments to filter ProductCostBomLines to count.
     * @example
     * // Count the number of ProductCostBomLines
     * const count = await prisma.productCostBomLine.count({
     *   where: {
     *     // ... the filter for the ProductCostBomLines we want to count
     *   }
     * })
    **/
    count<T extends ProductCostBomLineCountArgs>(args?: Prisma.Subset<T, ProductCostBomLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCostBomLineCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductCostBomLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostBomLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCostBomLineAggregateArgs>(args: Prisma.Subset<T, ProductCostBomLineAggregateArgs>): Prisma.PrismaPromise<GetProductCostBomLineAggregateType<T>>;
    /**
     * Group by ProductCostBomLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCostBomLineGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductCostBomLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductCostBomLineGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductCostBomLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductCostBomLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCostBomLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProductCostBomLine model
     */
    readonly fields: ProductCostBomLineFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProductCostBomLine.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductCostBomLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    productCost<T extends Prisma.ProductCostDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductCostDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductCostClient<runtime.Types.Result.GetResult<Prisma.$ProductCostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    matiere<T extends Prisma.StockItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProductCostBomLine model
 */
export interface ProductCostBomLineFieldRefs {
    readonly id: Prisma.FieldRef<"ProductCostBomLine", 'String'>;
    readonly productCostId: Prisma.FieldRef<"ProductCostBomLine", 'String'>;
    readonly matiereId: Prisma.FieldRef<"ProductCostBomLine", 'String'>;
    readonly incorpPct: Prisma.FieldRef<"ProductCostBomLine", 'Float'>;
    readonly qteKg: Prisma.FieldRef<"ProductCostBomLine", 'Float'>;
    readonly prixAchat: Prisma.FieldRef<"ProductCostBomLine", 'Float'>;
}
/**
 * ProductCostBomLine findUnique
 */
export type ProductCostBomLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductCostBomLine to fetch.
     */
    where: Prisma.ProductCostBomLineWhereUniqueInput;
};
/**
 * ProductCostBomLine findUniqueOrThrow
 */
export type ProductCostBomLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductCostBomLine to fetch.
     */
    where: Prisma.ProductCostBomLineWhereUniqueInput;
};
/**
 * ProductCostBomLine findFirst
 */
export type ProductCostBomLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductCostBomLine to fetch.
     */
    where?: Prisma.ProductCostBomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCostBomLines to fetch.
     */
    orderBy?: Prisma.ProductCostBomLineOrderByWithRelationInput | Prisma.ProductCostBomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductCostBomLines.
     */
    cursor?: Prisma.ProductCostBomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCostBomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCostBomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCostBomLines.
     */
    distinct?: Prisma.ProductCostBomLineScalarFieldEnum | Prisma.ProductCostBomLineScalarFieldEnum[];
};
/**
 * ProductCostBomLine findFirstOrThrow
 */
export type ProductCostBomLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductCostBomLine to fetch.
     */
    where?: Prisma.ProductCostBomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCostBomLines to fetch.
     */
    orderBy?: Prisma.ProductCostBomLineOrderByWithRelationInput | Prisma.ProductCostBomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductCostBomLines.
     */
    cursor?: Prisma.ProductCostBomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCostBomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCostBomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCostBomLines.
     */
    distinct?: Prisma.ProductCostBomLineScalarFieldEnum | Prisma.ProductCostBomLineScalarFieldEnum[];
};
/**
 * ProductCostBomLine findMany
 */
export type ProductCostBomLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductCostBomLines to fetch.
     */
    where?: Prisma.ProductCostBomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductCostBomLines to fetch.
     */
    orderBy?: Prisma.ProductCostBomLineOrderByWithRelationInput | Prisma.ProductCostBomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductCostBomLines.
     */
    cursor?: Prisma.ProductCostBomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductCostBomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductCostBomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductCostBomLines.
     */
    distinct?: Prisma.ProductCostBomLineScalarFieldEnum | Prisma.ProductCostBomLineScalarFieldEnum[];
};
/**
 * ProductCostBomLine create
 */
export type ProductCostBomLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProductCostBomLine.
     */
    data: Prisma.XOR<Prisma.ProductCostBomLineCreateInput, Prisma.ProductCostBomLineUncheckedCreateInput>;
};
/**
 * ProductCostBomLine createMany
 */
export type ProductCostBomLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCostBomLines.
     */
    data: Prisma.ProductCostBomLineCreateManyInput | Prisma.ProductCostBomLineCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductCostBomLine createManyAndReturn
 */
export type ProductCostBomLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCostBomLine
     */
    select?: Prisma.ProductCostBomLineSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCostBomLine
     */
    omit?: Prisma.ProductCostBomLineOmit<ExtArgs> | null;
    /**
     * The data used to create many ProductCostBomLines.
     */
    data: Prisma.ProductCostBomLineCreateManyInput | Prisma.ProductCostBomLineCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostBomLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductCostBomLine update
 */
export type ProductCostBomLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProductCostBomLine.
     */
    data: Prisma.XOR<Prisma.ProductCostBomLineUpdateInput, Prisma.ProductCostBomLineUncheckedUpdateInput>;
    /**
     * Choose, which ProductCostBomLine to update.
     */
    where: Prisma.ProductCostBomLineWhereUniqueInput;
};
/**
 * ProductCostBomLine updateMany
 */
export type ProductCostBomLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCostBomLines.
     */
    data: Prisma.XOR<Prisma.ProductCostBomLineUpdateManyMutationInput, Prisma.ProductCostBomLineUncheckedUpdateManyInput>;
    /**
     * Filter which ProductCostBomLines to update
     */
    where?: Prisma.ProductCostBomLineWhereInput;
    /**
     * Limit how many ProductCostBomLines to update.
     */
    limit?: number;
};
/**
 * ProductCostBomLine updateManyAndReturn
 */
export type ProductCostBomLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCostBomLine
     */
    select?: Prisma.ProductCostBomLineSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductCostBomLine
     */
    omit?: Prisma.ProductCostBomLineOmit<ExtArgs> | null;
    /**
     * The data used to update ProductCostBomLines.
     */
    data: Prisma.XOR<Prisma.ProductCostBomLineUpdateManyMutationInput, Prisma.ProductCostBomLineUncheckedUpdateManyInput>;
    /**
     * Filter which ProductCostBomLines to update
     */
    where?: Prisma.ProductCostBomLineWhereInput;
    /**
     * Limit how many ProductCostBomLines to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductCostBomLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductCostBomLine upsert
 */
export type ProductCostBomLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProductCostBomLine to update in case it exists.
     */
    where: Prisma.ProductCostBomLineWhereUniqueInput;
    /**
     * In case the ProductCostBomLine found by the `where` argument doesn't exist, create a new ProductCostBomLine with this data.
     */
    create: Prisma.XOR<Prisma.ProductCostBomLineCreateInput, Prisma.ProductCostBomLineUncheckedCreateInput>;
    /**
     * In case the ProductCostBomLine was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductCostBomLineUpdateInput, Prisma.ProductCostBomLineUncheckedUpdateInput>;
};
/**
 * ProductCostBomLine delete
 */
export type ProductCostBomLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProductCostBomLine to delete.
     */
    where: Prisma.ProductCostBomLineWhereUniqueInput;
};
/**
 * ProductCostBomLine deleteMany
 */
export type ProductCostBomLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCostBomLines to delete
     */
    where?: Prisma.ProductCostBomLineWhereInput;
    /**
     * Limit how many ProductCostBomLines to delete.
     */
    limit?: number;
};
/**
 * ProductCostBomLine without action
 */
export type ProductCostBomLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ProductCostBomLine.d.ts.map