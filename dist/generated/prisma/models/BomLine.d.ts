import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BomLine
 *
 */
export type BomLineModel = runtime.Types.Result.DefaultSelection<Prisma.$BomLinePayload>;
export type AggregateBomLine = {
    _count: BomLineCountAggregateOutputType | null;
    _avg: BomLineAvgAggregateOutputType | null;
    _sum: BomLineSumAggregateOutputType | null;
    _min: BomLineMinAggregateOutputType | null;
    _max: BomLineMaxAggregateOutputType | null;
};
export type BomLineAvgAggregateOutputType = {
    qte: number | null;
};
export type BomLineSumAggregateOutputType = {
    qte: number | null;
};
export type BomLineMinAggregateOutputType = {
    id: string | null;
    bomId: string | null;
    matiereId: string | null;
    qte: number | null;
    unite: string | null;
};
export type BomLineMaxAggregateOutputType = {
    id: string | null;
    bomId: string | null;
    matiereId: string | null;
    qte: number | null;
    unite: string | null;
};
export type BomLineCountAggregateOutputType = {
    id: number;
    bomId: number;
    matiereId: number;
    qte: number;
    unite: number;
    _all: number;
};
export type BomLineAvgAggregateInputType = {
    qte?: true;
};
export type BomLineSumAggregateInputType = {
    qte?: true;
};
export type BomLineMinAggregateInputType = {
    id?: true;
    bomId?: true;
    matiereId?: true;
    qte?: true;
    unite?: true;
};
export type BomLineMaxAggregateInputType = {
    id?: true;
    bomId?: true;
    matiereId?: true;
    qte?: true;
    unite?: true;
};
export type BomLineCountAggregateInputType = {
    id?: true;
    bomId?: true;
    matiereId?: true;
    qte?: true;
    unite?: true;
    _all?: true;
};
export type BomLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BomLine to aggregate.
     */
    where?: Prisma.BomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BomLines to fetch.
     */
    orderBy?: Prisma.BomLineOrderByWithRelationInput | Prisma.BomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BomLines
    **/
    _count?: true | BomLineCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BomLineAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BomLineSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BomLineMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BomLineMaxAggregateInputType;
};
export type GetBomLineAggregateType<T extends BomLineAggregateArgs> = {
    [P in keyof T & keyof AggregateBomLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBomLine[P]> : Prisma.GetScalarType<T[P], AggregateBomLine[P]>;
};
export type BomLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BomLineWhereInput;
    orderBy?: Prisma.BomLineOrderByWithAggregationInput | Prisma.BomLineOrderByWithAggregationInput[];
    by: Prisma.BomLineScalarFieldEnum[] | Prisma.BomLineScalarFieldEnum;
    having?: Prisma.BomLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BomLineCountAggregateInputType | true;
    _avg?: BomLineAvgAggregateInputType;
    _sum?: BomLineSumAggregateInputType;
    _min?: BomLineMinAggregateInputType;
    _max?: BomLineMaxAggregateInputType;
};
export type BomLineGroupByOutputType = {
    id: string;
    bomId: string;
    matiereId: string;
    qte: number;
    unite: string;
    _count: BomLineCountAggregateOutputType | null;
    _avg: BomLineAvgAggregateOutputType | null;
    _sum: BomLineSumAggregateOutputType | null;
    _min: BomLineMinAggregateOutputType | null;
    _max: BomLineMaxAggregateOutputType | null;
};
export type GetBomLineGroupByPayload<T extends BomLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BomLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BomLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BomLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BomLineGroupByOutputType[P]>;
}>>;
export type BomLineWhereInput = {
    AND?: Prisma.BomLineWhereInput | Prisma.BomLineWhereInput[];
    OR?: Prisma.BomLineWhereInput[];
    NOT?: Prisma.BomLineWhereInput | Prisma.BomLineWhereInput[];
    id?: Prisma.StringFilter<"BomLine"> | string;
    bomId?: Prisma.StringFilter<"BomLine"> | string;
    matiereId?: Prisma.StringFilter<"BomLine"> | string;
    qte?: Prisma.FloatFilter<"BomLine"> | number;
    unite?: Prisma.StringFilter<"BomLine"> | string;
    bom?: Prisma.XOR<Prisma.BomScalarRelationFilter, Prisma.BomWhereInput>;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
};
export type BomLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bomId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
    bom?: Prisma.BomOrderByWithRelationInput;
    matiere?: Prisma.StockItemOrderByWithRelationInput;
};
export type BomLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BomLineWhereInput | Prisma.BomLineWhereInput[];
    OR?: Prisma.BomLineWhereInput[];
    NOT?: Prisma.BomLineWhereInput | Prisma.BomLineWhereInput[];
    bomId?: Prisma.StringFilter<"BomLine"> | string;
    matiereId?: Prisma.StringFilter<"BomLine"> | string;
    qte?: Prisma.FloatFilter<"BomLine"> | number;
    unite?: Prisma.StringFilter<"BomLine"> | string;
    bom?: Prisma.XOR<Prisma.BomScalarRelationFilter, Prisma.BomWhereInput>;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
}, "id">;
export type BomLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bomId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
    _count?: Prisma.BomLineCountOrderByAggregateInput;
    _avg?: Prisma.BomLineAvgOrderByAggregateInput;
    _max?: Prisma.BomLineMaxOrderByAggregateInput;
    _min?: Prisma.BomLineMinOrderByAggregateInput;
    _sum?: Prisma.BomLineSumOrderByAggregateInput;
};
export type BomLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.BomLineScalarWhereWithAggregatesInput | Prisma.BomLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.BomLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BomLineScalarWhereWithAggregatesInput | Prisma.BomLineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BomLine"> | string;
    bomId?: Prisma.StringWithAggregatesFilter<"BomLine"> | string;
    matiereId?: Prisma.StringWithAggregatesFilter<"BomLine"> | string;
    qte?: Prisma.FloatWithAggregatesFilter<"BomLine"> | number;
    unite?: Prisma.StringWithAggregatesFilter<"BomLine"> | string;
};
export type BomLineCreateInput = {
    id?: string;
    qte: number;
    unite: string;
    bom: Prisma.BomCreateNestedOneWithoutItemsInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutBomLinesAsMatiereInput;
};
export type BomLineUncheckedCreateInput = {
    id?: string;
    bomId: string;
    matiereId: string;
    qte: number;
    unite: string;
};
export type BomLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    bom?: Prisma.BomUpdateOneRequiredWithoutItemsNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutBomLinesAsMatiereNestedInput;
};
export type BomLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bomId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BomLineCreateManyInput = {
    id?: string;
    bomId: string;
    matiereId: string;
    qte: number;
    unite: string;
};
export type BomLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BomLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bomId?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BomLineListRelationFilter = {
    every?: Prisma.BomLineWhereInput;
    some?: Prisma.BomLineWhereInput;
    none?: Prisma.BomLineWhereInput;
};
export type BomLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BomLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bomId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
};
export type BomLineAvgOrderByAggregateInput = {
    qte?: Prisma.SortOrder;
};
export type BomLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bomId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
};
export type BomLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bomId?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    unite?: Prisma.SortOrder;
};
export type BomLineSumOrderByAggregateInput = {
    qte?: Prisma.SortOrder;
};
export type BomLineCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutMatiereInput, Prisma.BomLineUncheckedCreateWithoutMatiereInput> | Prisma.BomLineCreateWithoutMatiereInput[] | Prisma.BomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutMatiereInput | Prisma.BomLineCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.BomLineCreateManyMatiereInputEnvelope;
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
};
export type BomLineUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutMatiereInput, Prisma.BomLineUncheckedCreateWithoutMatiereInput> | Prisma.BomLineCreateWithoutMatiereInput[] | Prisma.BomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutMatiereInput | Prisma.BomLineCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.BomLineCreateManyMatiereInputEnvelope;
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
};
export type BomLineUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutMatiereInput, Prisma.BomLineUncheckedCreateWithoutMatiereInput> | Prisma.BomLineCreateWithoutMatiereInput[] | Prisma.BomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutMatiereInput | Prisma.BomLineCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.BomLineUpsertWithWhereUniqueWithoutMatiereInput | Prisma.BomLineUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.BomLineCreateManyMatiereInputEnvelope;
    set?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    disconnect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    delete?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    update?: Prisma.BomLineUpdateWithWhereUniqueWithoutMatiereInput | Prisma.BomLineUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.BomLineUpdateManyWithWhereWithoutMatiereInput | Prisma.BomLineUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.BomLineScalarWhereInput | Prisma.BomLineScalarWhereInput[];
};
export type BomLineUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutMatiereInput, Prisma.BomLineUncheckedCreateWithoutMatiereInput> | Prisma.BomLineCreateWithoutMatiereInput[] | Prisma.BomLineUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutMatiereInput | Prisma.BomLineCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.BomLineUpsertWithWhereUniqueWithoutMatiereInput | Prisma.BomLineUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.BomLineCreateManyMatiereInputEnvelope;
    set?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    disconnect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    delete?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    update?: Prisma.BomLineUpdateWithWhereUniqueWithoutMatiereInput | Prisma.BomLineUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.BomLineUpdateManyWithWhereWithoutMatiereInput | Prisma.BomLineUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.BomLineScalarWhereInput | Prisma.BomLineScalarWhereInput[];
};
export type BomLineCreateNestedManyWithoutBomInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutBomInput, Prisma.BomLineUncheckedCreateWithoutBomInput> | Prisma.BomLineCreateWithoutBomInput[] | Prisma.BomLineUncheckedCreateWithoutBomInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutBomInput | Prisma.BomLineCreateOrConnectWithoutBomInput[];
    createMany?: Prisma.BomLineCreateManyBomInputEnvelope;
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
};
export type BomLineUncheckedCreateNestedManyWithoutBomInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutBomInput, Prisma.BomLineUncheckedCreateWithoutBomInput> | Prisma.BomLineCreateWithoutBomInput[] | Prisma.BomLineUncheckedCreateWithoutBomInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutBomInput | Prisma.BomLineCreateOrConnectWithoutBomInput[];
    createMany?: Prisma.BomLineCreateManyBomInputEnvelope;
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
};
export type BomLineUpdateManyWithoutBomNestedInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutBomInput, Prisma.BomLineUncheckedCreateWithoutBomInput> | Prisma.BomLineCreateWithoutBomInput[] | Prisma.BomLineUncheckedCreateWithoutBomInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutBomInput | Prisma.BomLineCreateOrConnectWithoutBomInput[];
    upsert?: Prisma.BomLineUpsertWithWhereUniqueWithoutBomInput | Prisma.BomLineUpsertWithWhereUniqueWithoutBomInput[];
    createMany?: Prisma.BomLineCreateManyBomInputEnvelope;
    set?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    disconnect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    delete?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    update?: Prisma.BomLineUpdateWithWhereUniqueWithoutBomInput | Prisma.BomLineUpdateWithWhereUniqueWithoutBomInput[];
    updateMany?: Prisma.BomLineUpdateManyWithWhereWithoutBomInput | Prisma.BomLineUpdateManyWithWhereWithoutBomInput[];
    deleteMany?: Prisma.BomLineScalarWhereInput | Prisma.BomLineScalarWhereInput[];
};
export type BomLineUncheckedUpdateManyWithoutBomNestedInput = {
    create?: Prisma.XOR<Prisma.BomLineCreateWithoutBomInput, Prisma.BomLineUncheckedCreateWithoutBomInput> | Prisma.BomLineCreateWithoutBomInput[] | Prisma.BomLineUncheckedCreateWithoutBomInput[];
    connectOrCreate?: Prisma.BomLineCreateOrConnectWithoutBomInput | Prisma.BomLineCreateOrConnectWithoutBomInput[];
    upsert?: Prisma.BomLineUpsertWithWhereUniqueWithoutBomInput | Prisma.BomLineUpsertWithWhereUniqueWithoutBomInput[];
    createMany?: Prisma.BomLineCreateManyBomInputEnvelope;
    set?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    disconnect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    delete?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    connect?: Prisma.BomLineWhereUniqueInput | Prisma.BomLineWhereUniqueInput[];
    update?: Prisma.BomLineUpdateWithWhereUniqueWithoutBomInput | Prisma.BomLineUpdateWithWhereUniqueWithoutBomInput[];
    updateMany?: Prisma.BomLineUpdateManyWithWhereWithoutBomInput | Prisma.BomLineUpdateManyWithWhereWithoutBomInput[];
    deleteMany?: Prisma.BomLineScalarWhereInput | Prisma.BomLineScalarWhereInput[];
};
export type BomLineCreateWithoutMatiereInput = {
    id?: string;
    qte: number;
    unite: string;
    bom: Prisma.BomCreateNestedOneWithoutItemsInput;
};
export type BomLineUncheckedCreateWithoutMatiereInput = {
    id?: string;
    bomId: string;
    qte: number;
    unite: string;
};
export type BomLineCreateOrConnectWithoutMatiereInput = {
    where: Prisma.BomLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BomLineCreateWithoutMatiereInput, Prisma.BomLineUncheckedCreateWithoutMatiereInput>;
};
export type BomLineCreateManyMatiereInputEnvelope = {
    data: Prisma.BomLineCreateManyMatiereInput | Prisma.BomLineCreateManyMatiereInput[];
    skipDuplicates?: boolean;
};
export type BomLineUpsertWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.BomLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.BomLineUpdateWithoutMatiereInput, Prisma.BomLineUncheckedUpdateWithoutMatiereInput>;
    create: Prisma.XOR<Prisma.BomLineCreateWithoutMatiereInput, Prisma.BomLineUncheckedCreateWithoutMatiereInput>;
};
export type BomLineUpdateWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.BomLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.BomLineUpdateWithoutMatiereInput, Prisma.BomLineUncheckedUpdateWithoutMatiereInput>;
};
export type BomLineUpdateManyWithWhereWithoutMatiereInput = {
    where: Prisma.BomLineScalarWhereInput;
    data: Prisma.XOR<Prisma.BomLineUpdateManyMutationInput, Prisma.BomLineUncheckedUpdateManyWithoutMatiereInput>;
};
export type BomLineScalarWhereInput = {
    AND?: Prisma.BomLineScalarWhereInput | Prisma.BomLineScalarWhereInput[];
    OR?: Prisma.BomLineScalarWhereInput[];
    NOT?: Prisma.BomLineScalarWhereInput | Prisma.BomLineScalarWhereInput[];
    id?: Prisma.StringFilter<"BomLine"> | string;
    bomId?: Prisma.StringFilter<"BomLine"> | string;
    matiereId?: Prisma.StringFilter<"BomLine"> | string;
    qte?: Prisma.FloatFilter<"BomLine"> | number;
    unite?: Prisma.StringFilter<"BomLine"> | string;
};
export type BomLineCreateWithoutBomInput = {
    id?: string;
    qte: number;
    unite: string;
    matiere: Prisma.StockItemCreateNestedOneWithoutBomLinesAsMatiereInput;
};
export type BomLineUncheckedCreateWithoutBomInput = {
    id?: string;
    matiereId: string;
    qte: number;
    unite: string;
};
export type BomLineCreateOrConnectWithoutBomInput = {
    where: Prisma.BomLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.BomLineCreateWithoutBomInput, Prisma.BomLineUncheckedCreateWithoutBomInput>;
};
export type BomLineCreateManyBomInputEnvelope = {
    data: Prisma.BomLineCreateManyBomInput | Prisma.BomLineCreateManyBomInput[];
    skipDuplicates?: boolean;
};
export type BomLineUpsertWithWhereUniqueWithoutBomInput = {
    where: Prisma.BomLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.BomLineUpdateWithoutBomInput, Prisma.BomLineUncheckedUpdateWithoutBomInput>;
    create: Prisma.XOR<Prisma.BomLineCreateWithoutBomInput, Prisma.BomLineUncheckedCreateWithoutBomInput>;
};
export type BomLineUpdateWithWhereUniqueWithoutBomInput = {
    where: Prisma.BomLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.BomLineUpdateWithoutBomInput, Prisma.BomLineUncheckedUpdateWithoutBomInput>;
};
export type BomLineUpdateManyWithWhereWithoutBomInput = {
    where: Prisma.BomLineScalarWhereInput;
    data: Prisma.XOR<Prisma.BomLineUpdateManyMutationInput, Prisma.BomLineUncheckedUpdateManyWithoutBomInput>;
};
export type BomLineCreateManyMatiereInput = {
    id?: string;
    bomId: string;
    qte: number;
    unite: string;
};
export type BomLineUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    bom?: Prisma.BomUpdateOneRequiredWithoutItemsNestedInput;
};
export type BomLineUncheckedUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bomId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BomLineUncheckedUpdateManyWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bomId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BomLineCreateManyBomInput = {
    id?: string;
    matiereId: string;
    qte: number;
    unite: string;
};
export type BomLineUpdateWithoutBomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutBomLinesAsMatiereNestedInput;
};
export type BomLineUncheckedUpdateWithoutBomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BomLineUncheckedUpdateManyWithoutBomInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    unite?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BomLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bomId?: boolean;
    matiereId?: boolean;
    qte?: boolean;
    unite?: boolean;
    bom?: boolean | Prisma.BomDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bomLine"]>;
export type BomLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bomId?: boolean;
    matiereId?: boolean;
    qte?: boolean;
    unite?: boolean;
    bom?: boolean | Prisma.BomDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bomLine"]>;
export type BomLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bomId?: boolean;
    matiereId?: boolean;
    qte?: boolean;
    unite?: boolean;
    bom?: boolean | Prisma.BomDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bomLine"]>;
export type BomLineSelectScalar = {
    id?: boolean;
    bomId?: boolean;
    matiereId?: boolean;
    qte?: boolean;
    unite?: boolean;
};
export type BomLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bomId" | "matiereId" | "qte" | "unite", ExtArgs["result"]["bomLine"]>;
export type BomLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bom?: boolean | Prisma.BomDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type BomLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bom?: boolean | Prisma.BomDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type BomLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bom?: boolean | Prisma.BomDefaultArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type $BomLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BomLine";
    objects: {
        bom: Prisma.$BomPayload<ExtArgs>;
        matiere: Prisma.$StockItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bomId: string;
        matiereId: string;
        qte: number;
        unite: string;
    }, ExtArgs["result"]["bomLine"]>;
    composites: {};
};
export type BomLineGetPayload<S extends boolean | null | undefined | BomLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BomLinePayload, S>;
export type BomLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BomLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BomLineCountAggregateInputType | true;
};
export interface BomLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BomLine'];
        meta: {
            name: 'BomLine';
        };
    };
    /**
     * Find zero or one BomLine that matches the filter.
     * @param {BomLineFindUniqueArgs} args - Arguments to find a BomLine
     * @example
     * // Get one BomLine
     * const bomLine = await prisma.bomLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BomLineFindUniqueArgs>(args: Prisma.SelectSubset<T, BomLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BomLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BomLineFindUniqueOrThrowArgs} args - Arguments to find a BomLine
     * @example
     * // Get one BomLine
     * const bomLine = await prisma.bomLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BomLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BomLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BomLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BomLineFindFirstArgs} args - Arguments to find a BomLine
     * @example
     * // Get one BomLine
     * const bomLine = await prisma.bomLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BomLineFindFirstArgs>(args?: Prisma.SelectSubset<T, BomLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BomLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BomLineFindFirstOrThrowArgs} args - Arguments to find a BomLine
     * @example
     * // Get one BomLine
     * const bomLine = await prisma.bomLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BomLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BomLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BomLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BomLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BomLines
     * const bomLines = await prisma.bomLine.findMany()
     *
     * // Get first 10 BomLines
     * const bomLines = await prisma.bomLine.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bomLineWithIdOnly = await prisma.bomLine.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BomLineFindManyArgs>(args?: Prisma.SelectSubset<T, BomLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BomLine.
     * @param {BomLineCreateArgs} args - Arguments to create a BomLine.
     * @example
     * // Create one BomLine
     * const BomLine = await prisma.bomLine.create({
     *   data: {
     *     // ... data to create a BomLine
     *   }
     * })
     *
     */
    create<T extends BomLineCreateArgs>(args: Prisma.SelectSubset<T, BomLineCreateArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BomLines.
     * @param {BomLineCreateManyArgs} args - Arguments to create many BomLines.
     * @example
     * // Create many BomLines
     * const bomLine = await prisma.bomLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BomLineCreateManyArgs>(args?: Prisma.SelectSubset<T, BomLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BomLines and returns the data saved in the database.
     * @param {BomLineCreateManyAndReturnArgs} args - Arguments to create many BomLines.
     * @example
     * // Create many BomLines
     * const bomLine = await prisma.bomLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BomLines and only return the `id`
     * const bomLineWithIdOnly = await prisma.bomLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BomLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BomLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BomLine.
     * @param {BomLineDeleteArgs} args - Arguments to delete one BomLine.
     * @example
     * // Delete one BomLine
     * const BomLine = await prisma.bomLine.delete({
     *   where: {
     *     // ... filter to delete one BomLine
     *   }
     * })
     *
     */
    delete<T extends BomLineDeleteArgs>(args: Prisma.SelectSubset<T, BomLineDeleteArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BomLine.
     * @param {BomLineUpdateArgs} args - Arguments to update one BomLine.
     * @example
     * // Update one BomLine
     * const bomLine = await prisma.bomLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BomLineUpdateArgs>(args: Prisma.SelectSubset<T, BomLineUpdateArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BomLines.
     * @param {BomLineDeleteManyArgs} args - Arguments to filter BomLines to delete.
     * @example
     * // Delete a few BomLines
     * const { count } = await prisma.bomLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BomLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, BomLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BomLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BomLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BomLines
     * const bomLine = await prisma.bomLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BomLineUpdateManyArgs>(args: Prisma.SelectSubset<T, BomLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BomLines and returns the data updated in the database.
     * @param {BomLineUpdateManyAndReturnArgs} args - Arguments to update many BomLines.
     * @example
     * // Update many BomLines
     * const bomLine = await prisma.bomLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BomLines and only return the `id`
     * const bomLineWithIdOnly = await prisma.bomLine.updateManyAndReturn({
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
    updateManyAndReturn<T extends BomLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BomLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BomLine.
     * @param {BomLineUpsertArgs} args - Arguments to update or create a BomLine.
     * @example
     * // Update or create a BomLine
     * const bomLine = await prisma.bomLine.upsert({
     *   create: {
     *     // ... data to create a BomLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BomLine we want to update
     *   }
     * })
     */
    upsert<T extends BomLineUpsertArgs>(args: Prisma.SelectSubset<T, BomLineUpsertArgs<ExtArgs>>): Prisma.Prisma__BomLineClient<runtime.Types.Result.GetResult<Prisma.$BomLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BomLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BomLineCountArgs} args - Arguments to filter BomLines to count.
     * @example
     * // Count the number of BomLines
     * const count = await prisma.bomLine.count({
     *   where: {
     *     // ... the filter for the BomLines we want to count
     *   }
     * })
    **/
    count<T extends BomLineCountArgs>(args?: Prisma.Subset<T, BomLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BomLineCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BomLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BomLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BomLineAggregateArgs>(args: Prisma.Subset<T, BomLineAggregateArgs>): Prisma.PrismaPromise<GetBomLineAggregateType<T>>;
    /**
     * Group by BomLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BomLineGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BomLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BomLineGroupByArgs['orderBy'];
    } : {
        orderBy?: BomLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BomLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBomLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BomLine model
     */
    readonly fields: BomLineFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BomLine.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BomLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bom<T extends Prisma.BomDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BomDefaultArgs<ExtArgs>>): Prisma.Prisma__BomClient<runtime.Types.Result.GetResult<Prisma.$BomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BomLine model
 */
export interface BomLineFieldRefs {
    readonly id: Prisma.FieldRef<"BomLine", 'String'>;
    readonly bomId: Prisma.FieldRef<"BomLine", 'String'>;
    readonly matiereId: Prisma.FieldRef<"BomLine", 'String'>;
    readonly qte: Prisma.FieldRef<"BomLine", 'Float'>;
    readonly unite: Prisma.FieldRef<"BomLine", 'String'>;
}
/**
 * BomLine findUnique
 */
export type BomLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BomLine to fetch.
     */
    where: Prisma.BomLineWhereUniqueInput;
};
/**
 * BomLine findUniqueOrThrow
 */
export type BomLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BomLine to fetch.
     */
    where: Prisma.BomLineWhereUniqueInput;
};
/**
 * BomLine findFirst
 */
export type BomLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BomLine to fetch.
     */
    where?: Prisma.BomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BomLines to fetch.
     */
    orderBy?: Prisma.BomLineOrderByWithRelationInput | Prisma.BomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BomLines.
     */
    cursor?: Prisma.BomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BomLines.
     */
    distinct?: Prisma.BomLineScalarFieldEnum | Prisma.BomLineScalarFieldEnum[];
};
/**
 * BomLine findFirstOrThrow
 */
export type BomLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BomLine to fetch.
     */
    where?: Prisma.BomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BomLines to fetch.
     */
    orderBy?: Prisma.BomLineOrderByWithRelationInput | Prisma.BomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BomLines.
     */
    cursor?: Prisma.BomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BomLines.
     */
    distinct?: Prisma.BomLineScalarFieldEnum | Prisma.BomLineScalarFieldEnum[];
};
/**
 * BomLine findMany
 */
export type BomLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BomLines to fetch.
     */
    where?: Prisma.BomLineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BomLines to fetch.
     */
    orderBy?: Prisma.BomLineOrderByWithRelationInput | Prisma.BomLineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BomLines.
     */
    cursor?: Prisma.BomLineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BomLines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BomLines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BomLines.
     */
    distinct?: Prisma.BomLineScalarFieldEnum | Prisma.BomLineScalarFieldEnum[];
};
/**
 * BomLine create
 */
export type BomLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BomLine.
     */
    data: Prisma.XOR<Prisma.BomLineCreateInput, Prisma.BomLineUncheckedCreateInput>;
};
/**
 * BomLine createMany
 */
export type BomLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BomLines.
     */
    data: Prisma.BomLineCreateManyInput | Prisma.BomLineCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BomLine createManyAndReturn
 */
export type BomLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BomLine
     */
    select?: Prisma.BomLineSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BomLine
     */
    omit?: Prisma.BomLineOmit<ExtArgs> | null;
    /**
     * The data used to create many BomLines.
     */
    data: Prisma.BomLineCreateManyInput | Prisma.BomLineCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BomLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BomLine update
 */
export type BomLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BomLine.
     */
    data: Prisma.XOR<Prisma.BomLineUpdateInput, Prisma.BomLineUncheckedUpdateInput>;
    /**
     * Choose, which BomLine to update.
     */
    where: Prisma.BomLineWhereUniqueInput;
};
/**
 * BomLine updateMany
 */
export type BomLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BomLines.
     */
    data: Prisma.XOR<Prisma.BomLineUpdateManyMutationInput, Prisma.BomLineUncheckedUpdateManyInput>;
    /**
     * Filter which BomLines to update
     */
    where?: Prisma.BomLineWhereInput;
    /**
     * Limit how many BomLines to update.
     */
    limit?: number;
};
/**
 * BomLine updateManyAndReturn
 */
export type BomLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BomLine
     */
    select?: Prisma.BomLineSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BomLine
     */
    omit?: Prisma.BomLineOmit<ExtArgs> | null;
    /**
     * The data used to update BomLines.
     */
    data: Prisma.XOR<Prisma.BomLineUpdateManyMutationInput, Prisma.BomLineUncheckedUpdateManyInput>;
    /**
     * Filter which BomLines to update
     */
    where?: Prisma.BomLineWhereInput;
    /**
     * Limit how many BomLines to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BomLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BomLine upsert
 */
export type BomLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BomLine to update in case it exists.
     */
    where: Prisma.BomLineWhereUniqueInput;
    /**
     * In case the BomLine found by the `where` argument doesn't exist, create a new BomLine with this data.
     */
    create: Prisma.XOR<Prisma.BomLineCreateInput, Prisma.BomLineUncheckedCreateInput>;
    /**
     * In case the BomLine was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BomLineUpdateInput, Prisma.BomLineUncheckedUpdateInput>;
};
/**
 * BomLine delete
 */
export type BomLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BomLine to delete.
     */
    where: Prisma.BomLineWhereUniqueInput;
};
/**
 * BomLine deleteMany
 */
export type BomLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BomLines to delete
     */
    where?: Prisma.BomLineWhereInput;
    /**
     * Limit how many BomLines to delete.
     */
    limit?: number;
};
/**
 * BomLine without action
 */
export type BomLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=BomLine.d.ts.map