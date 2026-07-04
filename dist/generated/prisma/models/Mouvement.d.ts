import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Mouvement
 *
 */
export type MouvementModel = runtime.Types.Result.DefaultSelection<Prisma.$MouvementPayload>;
export type AggregateMouvement = {
    _count: MouvementCountAggregateOutputType | null;
    _avg: MouvementAvgAggregateOutputType | null;
    _sum: MouvementSumAggregateOutputType | null;
    _min: MouvementMinAggregateOutputType | null;
    _max: MouvementMaxAggregateOutputType | null;
};
export type MouvementAvgAggregateOutputType = {
    qte: number | null;
};
export type MouvementSumAggregateOutputType = {
    qte: number | null;
};
export type MouvementMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    type: string | null;
    stockItemId: string | null;
    qte: number | null;
    userId: string | null;
    motif: string | null;
    commandeId: string | null;
    achatId: string | null;
    prodOrderId: string | null;
    salesRequestId: string | null;
    materialRequestId: string | null;
    createdAt: Date | null;
};
export type MouvementMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    type: string | null;
    stockItemId: string | null;
    qte: number | null;
    userId: string | null;
    motif: string | null;
    commandeId: string | null;
    achatId: string | null;
    prodOrderId: string | null;
    salesRequestId: string | null;
    materialRequestId: string | null;
    createdAt: Date | null;
};
export type MouvementCountAggregateOutputType = {
    id: number;
    date: number;
    type: number;
    stockItemId: number;
    qte: number;
    userId: number;
    motif: number;
    commandeId: number;
    achatId: number;
    prodOrderId: number;
    salesRequestId: number;
    materialRequestId: number;
    createdAt: number;
    _all: number;
};
export type MouvementAvgAggregateInputType = {
    qte?: true;
};
export type MouvementSumAggregateInputType = {
    qte?: true;
};
export type MouvementMinAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    stockItemId?: true;
    qte?: true;
    userId?: true;
    motif?: true;
    commandeId?: true;
    achatId?: true;
    prodOrderId?: true;
    salesRequestId?: true;
    materialRequestId?: true;
    createdAt?: true;
};
export type MouvementMaxAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    stockItemId?: true;
    qte?: true;
    userId?: true;
    motif?: true;
    commandeId?: true;
    achatId?: true;
    prodOrderId?: true;
    salesRequestId?: true;
    materialRequestId?: true;
    createdAt?: true;
};
export type MouvementCountAggregateInputType = {
    id?: true;
    date?: true;
    type?: true;
    stockItemId?: true;
    qte?: true;
    userId?: true;
    motif?: true;
    commandeId?: true;
    achatId?: true;
    prodOrderId?: true;
    salesRequestId?: true;
    materialRequestId?: true;
    createdAt?: true;
    _all?: true;
};
export type MouvementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Mouvement to aggregate.
     */
    where?: Prisma.MouvementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mouvements to fetch.
     */
    orderBy?: Prisma.MouvementOrderByWithRelationInput | Prisma.MouvementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MouvementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mouvements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mouvements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Mouvements
    **/
    _count?: true | MouvementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MouvementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MouvementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MouvementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MouvementMaxAggregateInputType;
};
export type GetMouvementAggregateType<T extends MouvementAggregateArgs> = {
    [P in keyof T & keyof AggregateMouvement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMouvement[P]> : Prisma.GetScalarType<T[P], AggregateMouvement[P]>;
};
export type MouvementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MouvementWhereInput;
    orderBy?: Prisma.MouvementOrderByWithAggregationInput | Prisma.MouvementOrderByWithAggregationInput[];
    by: Prisma.MouvementScalarFieldEnum[] | Prisma.MouvementScalarFieldEnum;
    having?: Prisma.MouvementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MouvementCountAggregateInputType | true;
    _avg?: MouvementAvgAggregateInputType;
    _sum?: MouvementSumAggregateInputType;
    _min?: MouvementMinAggregateInputType;
    _max?: MouvementMaxAggregateInputType;
};
export type MouvementGroupByOutputType = {
    id: string;
    date: Date;
    type: string;
    stockItemId: string;
    qte: number;
    userId: string | null;
    motif: string | null;
    commandeId: string | null;
    achatId: string | null;
    prodOrderId: string | null;
    salesRequestId: string | null;
    materialRequestId: string | null;
    createdAt: Date;
    _count: MouvementCountAggregateOutputType | null;
    _avg: MouvementAvgAggregateOutputType | null;
    _sum: MouvementSumAggregateOutputType | null;
    _min: MouvementMinAggregateOutputType | null;
    _max: MouvementMaxAggregateOutputType | null;
};
export type GetMouvementGroupByPayload<T extends MouvementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MouvementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MouvementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MouvementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MouvementGroupByOutputType[P]>;
}>>;
export type MouvementWhereInput = {
    AND?: Prisma.MouvementWhereInput | Prisma.MouvementWhereInput[];
    OR?: Prisma.MouvementWhereInput[];
    NOT?: Prisma.MouvementWhereInput | Prisma.MouvementWhereInput[];
    id?: Prisma.StringFilter<"Mouvement"> | string;
    date?: Prisma.DateTimeFilter<"Mouvement"> | Date | string;
    type?: Prisma.StringFilter<"Mouvement"> | string;
    stockItemId?: Prisma.StringFilter<"Mouvement"> | string;
    qte?: Prisma.FloatFilter<"Mouvement"> | number;
    userId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    motif?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    commandeId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    achatId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    prodOrderId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    salesRequestId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    materialRequestId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Mouvement"> | Date | string;
    stockItem?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    commande?: Prisma.XOR<Prisma.CommandeNullableScalarRelationFilter, Prisma.CommandeWhereInput> | null;
    achat?: Prisma.XOR<Prisma.AchatNullableScalarRelationFilter, Prisma.AchatWhereInput> | null;
    prodOrder?: Prisma.XOR<Prisma.ProdOrderNullableScalarRelationFilter, Prisma.ProdOrderWhereInput> | null;
    salesRequest?: Prisma.XOR<Prisma.SalesRequestNullableScalarRelationFilter, Prisma.SalesRequestWhereInput> | null;
    materialRequest?: Prisma.XOR<Prisma.MaterialRequestNullableScalarRelationFilter, Prisma.MaterialRequestWhereInput> | null;
};
export type MouvementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    stockItemId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    motif?: Prisma.SortOrderInput | Prisma.SortOrder;
    commandeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    achatId?: Prisma.SortOrderInput | Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    stockItem?: Prisma.StockItemOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    commande?: Prisma.CommandeOrderByWithRelationInput;
    achat?: Prisma.AchatOrderByWithRelationInput;
    prodOrder?: Prisma.ProdOrderOrderByWithRelationInput;
    salesRequest?: Prisma.SalesRequestOrderByWithRelationInput;
    materialRequest?: Prisma.MaterialRequestOrderByWithRelationInput;
};
export type MouvementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MouvementWhereInput | Prisma.MouvementWhereInput[];
    OR?: Prisma.MouvementWhereInput[];
    NOT?: Prisma.MouvementWhereInput | Prisma.MouvementWhereInput[];
    date?: Prisma.DateTimeFilter<"Mouvement"> | Date | string;
    type?: Prisma.StringFilter<"Mouvement"> | string;
    stockItemId?: Prisma.StringFilter<"Mouvement"> | string;
    qte?: Prisma.FloatFilter<"Mouvement"> | number;
    userId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    motif?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    commandeId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    achatId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    prodOrderId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    salesRequestId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    materialRequestId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Mouvement"> | Date | string;
    stockItem?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    commande?: Prisma.XOR<Prisma.CommandeNullableScalarRelationFilter, Prisma.CommandeWhereInput> | null;
    achat?: Prisma.XOR<Prisma.AchatNullableScalarRelationFilter, Prisma.AchatWhereInput> | null;
    prodOrder?: Prisma.XOR<Prisma.ProdOrderNullableScalarRelationFilter, Prisma.ProdOrderWhereInput> | null;
    salesRequest?: Prisma.XOR<Prisma.SalesRequestNullableScalarRelationFilter, Prisma.SalesRequestWhereInput> | null;
    materialRequest?: Prisma.XOR<Prisma.MaterialRequestNullableScalarRelationFilter, Prisma.MaterialRequestWhereInput> | null;
}, "id">;
export type MouvementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    stockItemId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    motif?: Prisma.SortOrderInput | Prisma.SortOrder;
    commandeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    achatId?: Prisma.SortOrderInput | Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MouvementCountOrderByAggregateInput;
    _avg?: Prisma.MouvementAvgOrderByAggregateInput;
    _max?: Prisma.MouvementMaxOrderByAggregateInput;
    _min?: Prisma.MouvementMinOrderByAggregateInput;
    _sum?: Prisma.MouvementSumOrderByAggregateInput;
};
export type MouvementScalarWhereWithAggregatesInput = {
    AND?: Prisma.MouvementScalarWhereWithAggregatesInput | Prisma.MouvementScalarWhereWithAggregatesInput[];
    OR?: Prisma.MouvementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MouvementScalarWhereWithAggregatesInput | Prisma.MouvementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Mouvement"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Mouvement"> | Date | string;
    type?: Prisma.StringWithAggregatesFilter<"Mouvement"> | string;
    stockItemId?: Prisma.StringWithAggregatesFilter<"Mouvement"> | string;
    qte?: Prisma.FloatWithAggregatesFilter<"Mouvement"> | number;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Mouvement"> | string | null;
    motif?: Prisma.StringNullableWithAggregatesFilter<"Mouvement"> | string | null;
    commandeId?: Prisma.StringNullableWithAggregatesFilter<"Mouvement"> | string | null;
    achatId?: Prisma.StringNullableWithAggregatesFilter<"Mouvement"> | string | null;
    prodOrderId?: Prisma.StringNullableWithAggregatesFilter<"Mouvement"> | string | null;
    salesRequestId?: Prisma.StringNullableWithAggregatesFilter<"Mouvement"> | string | null;
    materialRequestId?: Prisma.StringNullableWithAggregatesFilter<"Mouvement"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Mouvement"> | Date | string;
};
export type MouvementCreateInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    stockItem: Prisma.StockItemCreateNestedOneWithoutMouvementsInput;
    user?: Prisma.UserCreateNestedOneWithoutMouvementsInput;
    commande?: Prisma.CommandeCreateNestedOneWithoutMouvementsInput;
    achat?: Prisma.AchatCreateNestedOneWithoutMouvementsInput;
    prodOrder?: Prisma.ProdOrderCreateNestedOneWithoutMouvementsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutMouvementsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockItem?: Prisma.StockItemUpdateOneRequiredWithoutMouvementsNestedInput;
    user?: Prisma.UserUpdateOneWithoutMouvementsNestedInput;
    commande?: Prisma.CommandeUpdateOneWithoutMouvementsNestedInput;
    achat?: Prisma.AchatUpdateOneWithoutMouvementsNestedInput;
    prodOrder?: Prisma.ProdOrderUpdateOneWithoutMouvementsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutMouvementsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementCreateManyInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementListRelationFilter = {
    every?: Prisma.MouvementWhereInput;
    some?: Prisma.MouvementWhereInput;
    none?: Prisma.MouvementWhereInput;
};
export type MouvementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MouvementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    stockItemId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    motif?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    achatId?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MouvementAvgOrderByAggregateInput = {
    qte?: Prisma.SortOrder;
};
export type MouvementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    stockItemId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    motif?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    achatId?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MouvementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    stockItemId?: Prisma.SortOrder;
    qte?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    motif?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    achatId?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MouvementSumOrderByAggregateInput = {
    qte?: Prisma.SortOrder;
};
export type MouvementCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutUserInput, Prisma.MouvementUncheckedCreateWithoutUserInput> | Prisma.MouvementCreateWithoutUserInput[] | Prisma.MouvementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutUserInput | Prisma.MouvementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MouvementCreateManyUserInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutUserInput, Prisma.MouvementUncheckedCreateWithoutUserInput> | Prisma.MouvementCreateWithoutUserInput[] | Prisma.MouvementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutUserInput | Prisma.MouvementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MouvementCreateManyUserInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutUserInput, Prisma.MouvementUncheckedCreateWithoutUserInput> | Prisma.MouvementCreateWithoutUserInput[] | Prisma.MouvementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutUserInput | Prisma.MouvementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutUserInput | Prisma.MouvementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MouvementCreateManyUserInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutUserInput | Prisma.MouvementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutUserInput | Prisma.MouvementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutUserInput, Prisma.MouvementUncheckedCreateWithoutUserInput> | Prisma.MouvementCreateWithoutUserInput[] | Prisma.MouvementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutUserInput | Prisma.MouvementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutUserInput | Prisma.MouvementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MouvementCreateManyUserInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutUserInput | Prisma.MouvementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutUserInput | Prisma.MouvementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementCreateNestedManyWithoutAchatInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutAchatInput, Prisma.MouvementUncheckedCreateWithoutAchatInput> | Prisma.MouvementCreateWithoutAchatInput[] | Prisma.MouvementUncheckedCreateWithoutAchatInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutAchatInput | Prisma.MouvementCreateOrConnectWithoutAchatInput[];
    createMany?: Prisma.MouvementCreateManyAchatInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUncheckedCreateNestedManyWithoutAchatInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutAchatInput, Prisma.MouvementUncheckedCreateWithoutAchatInput> | Prisma.MouvementCreateWithoutAchatInput[] | Prisma.MouvementUncheckedCreateWithoutAchatInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutAchatInput | Prisma.MouvementCreateOrConnectWithoutAchatInput[];
    createMany?: Prisma.MouvementCreateManyAchatInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUpdateManyWithoutAchatNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutAchatInput, Prisma.MouvementUncheckedCreateWithoutAchatInput> | Prisma.MouvementCreateWithoutAchatInput[] | Prisma.MouvementUncheckedCreateWithoutAchatInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutAchatInput | Prisma.MouvementCreateOrConnectWithoutAchatInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutAchatInput | Prisma.MouvementUpsertWithWhereUniqueWithoutAchatInput[];
    createMany?: Prisma.MouvementCreateManyAchatInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutAchatInput | Prisma.MouvementUpdateWithWhereUniqueWithoutAchatInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutAchatInput | Prisma.MouvementUpdateManyWithWhereWithoutAchatInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementUncheckedUpdateManyWithoutAchatNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutAchatInput, Prisma.MouvementUncheckedCreateWithoutAchatInput> | Prisma.MouvementCreateWithoutAchatInput[] | Prisma.MouvementUncheckedCreateWithoutAchatInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutAchatInput | Prisma.MouvementCreateOrConnectWithoutAchatInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutAchatInput | Prisma.MouvementUpsertWithWhereUniqueWithoutAchatInput[];
    createMany?: Prisma.MouvementCreateManyAchatInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutAchatInput | Prisma.MouvementUpdateWithWhereUniqueWithoutAchatInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutAchatInput | Prisma.MouvementUpdateManyWithWhereWithoutAchatInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementCreateNestedManyWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutCommandeInput, Prisma.MouvementUncheckedCreateWithoutCommandeInput> | Prisma.MouvementCreateWithoutCommandeInput[] | Prisma.MouvementUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutCommandeInput | Prisma.MouvementCreateOrConnectWithoutCommandeInput[];
    createMany?: Prisma.MouvementCreateManyCommandeInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutCommandeInput, Prisma.MouvementUncheckedCreateWithoutCommandeInput> | Prisma.MouvementCreateWithoutCommandeInput[] | Prisma.MouvementUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutCommandeInput | Prisma.MouvementCreateOrConnectWithoutCommandeInput[];
    createMany?: Prisma.MouvementCreateManyCommandeInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUpdateManyWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutCommandeInput, Prisma.MouvementUncheckedCreateWithoutCommandeInput> | Prisma.MouvementCreateWithoutCommandeInput[] | Prisma.MouvementUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutCommandeInput | Prisma.MouvementCreateOrConnectWithoutCommandeInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutCommandeInput | Prisma.MouvementUpsertWithWhereUniqueWithoutCommandeInput[];
    createMany?: Prisma.MouvementCreateManyCommandeInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutCommandeInput | Prisma.MouvementUpdateWithWhereUniqueWithoutCommandeInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutCommandeInput | Prisma.MouvementUpdateManyWithWhereWithoutCommandeInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutCommandeInput, Prisma.MouvementUncheckedCreateWithoutCommandeInput> | Prisma.MouvementCreateWithoutCommandeInput[] | Prisma.MouvementUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutCommandeInput | Prisma.MouvementCreateOrConnectWithoutCommandeInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutCommandeInput | Prisma.MouvementUpsertWithWhereUniqueWithoutCommandeInput[];
    createMany?: Prisma.MouvementCreateManyCommandeInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutCommandeInput | Prisma.MouvementUpdateWithWhereUniqueWithoutCommandeInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutCommandeInput | Prisma.MouvementUpdateManyWithWhereWithoutCommandeInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementCreateNestedManyWithoutStockItemInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutStockItemInput, Prisma.MouvementUncheckedCreateWithoutStockItemInput> | Prisma.MouvementCreateWithoutStockItemInput[] | Prisma.MouvementUncheckedCreateWithoutStockItemInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutStockItemInput | Prisma.MouvementCreateOrConnectWithoutStockItemInput[];
    createMany?: Prisma.MouvementCreateManyStockItemInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUncheckedCreateNestedManyWithoutStockItemInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutStockItemInput, Prisma.MouvementUncheckedCreateWithoutStockItemInput> | Prisma.MouvementCreateWithoutStockItemInput[] | Prisma.MouvementUncheckedCreateWithoutStockItemInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutStockItemInput | Prisma.MouvementCreateOrConnectWithoutStockItemInput[];
    createMany?: Prisma.MouvementCreateManyStockItemInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUpdateManyWithoutStockItemNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutStockItemInput, Prisma.MouvementUncheckedCreateWithoutStockItemInput> | Prisma.MouvementCreateWithoutStockItemInput[] | Prisma.MouvementUncheckedCreateWithoutStockItemInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutStockItemInput | Prisma.MouvementCreateOrConnectWithoutStockItemInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutStockItemInput | Prisma.MouvementUpsertWithWhereUniqueWithoutStockItemInput[];
    createMany?: Prisma.MouvementCreateManyStockItemInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutStockItemInput | Prisma.MouvementUpdateWithWhereUniqueWithoutStockItemInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutStockItemInput | Prisma.MouvementUpdateManyWithWhereWithoutStockItemInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementUncheckedUpdateManyWithoutStockItemNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutStockItemInput, Prisma.MouvementUncheckedCreateWithoutStockItemInput> | Prisma.MouvementCreateWithoutStockItemInput[] | Prisma.MouvementUncheckedCreateWithoutStockItemInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutStockItemInput | Prisma.MouvementCreateOrConnectWithoutStockItemInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutStockItemInput | Prisma.MouvementUpsertWithWhereUniqueWithoutStockItemInput[];
    createMany?: Prisma.MouvementCreateManyStockItemInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutStockItemInput | Prisma.MouvementUpdateWithWhereUniqueWithoutStockItemInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutStockItemInput | Prisma.MouvementUpdateManyWithWhereWithoutStockItemInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementCreateNestedManyWithoutProdOrderInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutProdOrderInput, Prisma.MouvementUncheckedCreateWithoutProdOrderInput> | Prisma.MouvementCreateWithoutProdOrderInput[] | Prisma.MouvementUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutProdOrderInput | Prisma.MouvementCreateOrConnectWithoutProdOrderInput[];
    createMany?: Prisma.MouvementCreateManyProdOrderInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUncheckedCreateNestedManyWithoutProdOrderInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutProdOrderInput, Prisma.MouvementUncheckedCreateWithoutProdOrderInput> | Prisma.MouvementCreateWithoutProdOrderInput[] | Prisma.MouvementUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutProdOrderInput | Prisma.MouvementCreateOrConnectWithoutProdOrderInput[];
    createMany?: Prisma.MouvementCreateManyProdOrderInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUpdateManyWithoutProdOrderNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutProdOrderInput, Prisma.MouvementUncheckedCreateWithoutProdOrderInput> | Prisma.MouvementCreateWithoutProdOrderInput[] | Prisma.MouvementUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutProdOrderInput | Prisma.MouvementCreateOrConnectWithoutProdOrderInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutProdOrderInput | Prisma.MouvementUpsertWithWhereUniqueWithoutProdOrderInput[];
    createMany?: Prisma.MouvementCreateManyProdOrderInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutProdOrderInput | Prisma.MouvementUpdateWithWhereUniqueWithoutProdOrderInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutProdOrderInput | Prisma.MouvementUpdateManyWithWhereWithoutProdOrderInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementUncheckedUpdateManyWithoutProdOrderNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutProdOrderInput, Prisma.MouvementUncheckedCreateWithoutProdOrderInput> | Prisma.MouvementCreateWithoutProdOrderInput[] | Prisma.MouvementUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutProdOrderInput | Prisma.MouvementCreateOrConnectWithoutProdOrderInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutProdOrderInput | Prisma.MouvementUpsertWithWhereUniqueWithoutProdOrderInput[];
    createMany?: Prisma.MouvementCreateManyProdOrderInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutProdOrderInput | Prisma.MouvementUpdateWithWhereUniqueWithoutProdOrderInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutProdOrderInput | Prisma.MouvementUpdateManyWithWhereWithoutProdOrderInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementCreateNestedManyWithoutSalesRequestInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutSalesRequestInput, Prisma.MouvementUncheckedCreateWithoutSalesRequestInput> | Prisma.MouvementCreateWithoutSalesRequestInput[] | Prisma.MouvementUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutSalesRequestInput | Prisma.MouvementCreateOrConnectWithoutSalesRequestInput[];
    createMany?: Prisma.MouvementCreateManySalesRequestInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUncheckedCreateNestedManyWithoutSalesRequestInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutSalesRequestInput, Prisma.MouvementUncheckedCreateWithoutSalesRequestInput> | Prisma.MouvementCreateWithoutSalesRequestInput[] | Prisma.MouvementUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutSalesRequestInput | Prisma.MouvementCreateOrConnectWithoutSalesRequestInput[];
    createMany?: Prisma.MouvementCreateManySalesRequestInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUpdateManyWithoutSalesRequestNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutSalesRequestInput, Prisma.MouvementUncheckedCreateWithoutSalesRequestInput> | Prisma.MouvementCreateWithoutSalesRequestInput[] | Prisma.MouvementUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutSalesRequestInput | Prisma.MouvementCreateOrConnectWithoutSalesRequestInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutSalesRequestInput | Prisma.MouvementUpsertWithWhereUniqueWithoutSalesRequestInput[];
    createMany?: Prisma.MouvementCreateManySalesRequestInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutSalesRequestInput | Prisma.MouvementUpdateWithWhereUniqueWithoutSalesRequestInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutSalesRequestInput | Prisma.MouvementUpdateManyWithWhereWithoutSalesRequestInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementUncheckedUpdateManyWithoutSalesRequestNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutSalesRequestInput, Prisma.MouvementUncheckedCreateWithoutSalesRequestInput> | Prisma.MouvementCreateWithoutSalesRequestInput[] | Prisma.MouvementUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutSalesRequestInput | Prisma.MouvementCreateOrConnectWithoutSalesRequestInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutSalesRequestInput | Prisma.MouvementUpsertWithWhereUniqueWithoutSalesRequestInput[];
    createMany?: Prisma.MouvementCreateManySalesRequestInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutSalesRequestInput | Prisma.MouvementUpdateWithWhereUniqueWithoutSalesRequestInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutSalesRequestInput | Prisma.MouvementUpdateManyWithWhereWithoutSalesRequestInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementCreateNestedManyWithoutMaterialRequestInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutMaterialRequestInput, Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput> | Prisma.MouvementCreateWithoutMaterialRequestInput[] | Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput | Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput[];
    createMany?: Prisma.MouvementCreateManyMaterialRequestInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUncheckedCreateNestedManyWithoutMaterialRequestInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutMaterialRequestInput, Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput> | Prisma.MouvementCreateWithoutMaterialRequestInput[] | Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput | Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput[];
    createMany?: Prisma.MouvementCreateManyMaterialRequestInputEnvelope;
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
};
export type MouvementUpdateManyWithoutMaterialRequestNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutMaterialRequestInput, Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput> | Prisma.MouvementCreateWithoutMaterialRequestInput[] | Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput | Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutMaterialRequestInput | Prisma.MouvementUpsertWithWhereUniqueWithoutMaterialRequestInput[];
    createMany?: Prisma.MouvementCreateManyMaterialRequestInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutMaterialRequestInput | Prisma.MouvementUpdateWithWhereUniqueWithoutMaterialRequestInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutMaterialRequestInput | Prisma.MouvementUpdateManyWithWhereWithoutMaterialRequestInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementUncheckedUpdateManyWithoutMaterialRequestNestedInput = {
    create?: Prisma.XOR<Prisma.MouvementCreateWithoutMaterialRequestInput, Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput> | Prisma.MouvementCreateWithoutMaterialRequestInput[] | Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput | Prisma.MouvementCreateOrConnectWithoutMaterialRequestInput[];
    upsert?: Prisma.MouvementUpsertWithWhereUniqueWithoutMaterialRequestInput | Prisma.MouvementUpsertWithWhereUniqueWithoutMaterialRequestInput[];
    createMany?: Prisma.MouvementCreateManyMaterialRequestInputEnvelope;
    set?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    disconnect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    delete?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    connect?: Prisma.MouvementWhereUniqueInput | Prisma.MouvementWhereUniqueInput[];
    update?: Prisma.MouvementUpdateWithWhereUniqueWithoutMaterialRequestInput | Prisma.MouvementUpdateWithWhereUniqueWithoutMaterialRequestInput[];
    updateMany?: Prisma.MouvementUpdateManyWithWhereWithoutMaterialRequestInput | Prisma.MouvementUpdateManyWithWhereWithoutMaterialRequestInput[];
    deleteMany?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
};
export type MouvementCreateWithoutUserInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    stockItem: Prisma.StockItemCreateNestedOneWithoutMouvementsInput;
    commande?: Prisma.CommandeCreateNestedOneWithoutMouvementsInput;
    achat?: Prisma.AchatCreateNestedOneWithoutMouvementsInput;
    prodOrder?: Prisma.ProdOrderCreateNestedOneWithoutMouvementsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutMouvementsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateWithoutUserInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementCreateOrConnectWithoutUserInput = {
    where: Prisma.MouvementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutUserInput, Prisma.MouvementUncheckedCreateWithoutUserInput>;
};
export type MouvementCreateManyUserInputEnvelope = {
    data: Prisma.MouvementCreateManyUserInput | Prisma.MouvementCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MouvementUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MouvementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MouvementUpdateWithoutUserInput, Prisma.MouvementUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutUserInput, Prisma.MouvementUncheckedCreateWithoutUserInput>;
};
export type MouvementUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MouvementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MouvementUpdateWithoutUserInput, Prisma.MouvementUncheckedUpdateWithoutUserInput>;
};
export type MouvementUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MouvementScalarWhereInput;
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyWithoutUserInput>;
};
export type MouvementScalarWhereInput = {
    AND?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
    OR?: Prisma.MouvementScalarWhereInput[];
    NOT?: Prisma.MouvementScalarWhereInput | Prisma.MouvementScalarWhereInput[];
    id?: Prisma.StringFilter<"Mouvement"> | string;
    date?: Prisma.DateTimeFilter<"Mouvement"> | Date | string;
    type?: Prisma.StringFilter<"Mouvement"> | string;
    stockItemId?: Prisma.StringFilter<"Mouvement"> | string;
    qte?: Prisma.FloatFilter<"Mouvement"> | number;
    userId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    motif?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    commandeId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    achatId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    prodOrderId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    salesRequestId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    materialRequestId?: Prisma.StringNullableFilter<"Mouvement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Mouvement"> | Date | string;
};
export type MouvementCreateWithoutAchatInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    stockItem: Prisma.StockItemCreateNestedOneWithoutMouvementsInput;
    user?: Prisma.UserCreateNestedOneWithoutMouvementsInput;
    commande?: Prisma.CommandeCreateNestedOneWithoutMouvementsInput;
    prodOrder?: Prisma.ProdOrderCreateNestedOneWithoutMouvementsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutMouvementsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateWithoutAchatInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementCreateOrConnectWithoutAchatInput = {
    where: Prisma.MouvementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutAchatInput, Prisma.MouvementUncheckedCreateWithoutAchatInput>;
};
export type MouvementCreateManyAchatInputEnvelope = {
    data: Prisma.MouvementCreateManyAchatInput | Prisma.MouvementCreateManyAchatInput[];
    skipDuplicates?: boolean;
};
export type MouvementUpsertWithWhereUniqueWithoutAchatInput = {
    where: Prisma.MouvementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MouvementUpdateWithoutAchatInput, Prisma.MouvementUncheckedUpdateWithoutAchatInput>;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutAchatInput, Prisma.MouvementUncheckedCreateWithoutAchatInput>;
};
export type MouvementUpdateWithWhereUniqueWithoutAchatInput = {
    where: Prisma.MouvementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MouvementUpdateWithoutAchatInput, Prisma.MouvementUncheckedUpdateWithoutAchatInput>;
};
export type MouvementUpdateManyWithWhereWithoutAchatInput = {
    where: Prisma.MouvementScalarWhereInput;
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyWithoutAchatInput>;
};
export type MouvementCreateWithoutCommandeInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    stockItem: Prisma.StockItemCreateNestedOneWithoutMouvementsInput;
    user?: Prisma.UserCreateNestedOneWithoutMouvementsInput;
    achat?: Prisma.AchatCreateNestedOneWithoutMouvementsInput;
    prodOrder?: Prisma.ProdOrderCreateNestedOneWithoutMouvementsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutMouvementsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateWithoutCommandeInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementCreateOrConnectWithoutCommandeInput = {
    where: Prisma.MouvementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutCommandeInput, Prisma.MouvementUncheckedCreateWithoutCommandeInput>;
};
export type MouvementCreateManyCommandeInputEnvelope = {
    data: Prisma.MouvementCreateManyCommandeInput | Prisma.MouvementCreateManyCommandeInput[];
    skipDuplicates?: boolean;
};
export type MouvementUpsertWithWhereUniqueWithoutCommandeInput = {
    where: Prisma.MouvementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MouvementUpdateWithoutCommandeInput, Prisma.MouvementUncheckedUpdateWithoutCommandeInput>;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutCommandeInput, Prisma.MouvementUncheckedCreateWithoutCommandeInput>;
};
export type MouvementUpdateWithWhereUniqueWithoutCommandeInput = {
    where: Prisma.MouvementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MouvementUpdateWithoutCommandeInput, Prisma.MouvementUncheckedUpdateWithoutCommandeInput>;
};
export type MouvementUpdateManyWithWhereWithoutCommandeInput = {
    where: Prisma.MouvementScalarWhereInput;
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyWithoutCommandeInput>;
};
export type MouvementCreateWithoutStockItemInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutMouvementsInput;
    commande?: Prisma.CommandeCreateNestedOneWithoutMouvementsInput;
    achat?: Prisma.AchatCreateNestedOneWithoutMouvementsInput;
    prodOrder?: Prisma.ProdOrderCreateNestedOneWithoutMouvementsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutMouvementsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateWithoutStockItemInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementCreateOrConnectWithoutStockItemInput = {
    where: Prisma.MouvementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutStockItemInput, Prisma.MouvementUncheckedCreateWithoutStockItemInput>;
};
export type MouvementCreateManyStockItemInputEnvelope = {
    data: Prisma.MouvementCreateManyStockItemInput | Prisma.MouvementCreateManyStockItemInput[];
    skipDuplicates?: boolean;
};
export type MouvementUpsertWithWhereUniqueWithoutStockItemInput = {
    where: Prisma.MouvementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MouvementUpdateWithoutStockItemInput, Prisma.MouvementUncheckedUpdateWithoutStockItemInput>;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutStockItemInput, Prisma.MouvementUncheckedCreateWithoutStockItemInput>;
};
export type MouvementUpdateWithWhereUniqueWithoutStockItemInput = {
    where: Prisma.MouvementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MouvementUpdateWithoutStockItemInput, Prisma.MouvementUncheckedUpdateWithoutStockItemInput>;
};
export type MouvementUpdateManyWithWhereWithoutStockItemInput = {
    where: Prisma.MouvementScalarWhereInput;
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyWithoutStockItemInput>;
};
export type MouvementCreateWithoutProdOrderInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    stockItem: Prisma.StockItemCreateNestedOneWithoutMouvementsInput;
    user?: Prisma.UserCreateNestedOneWithoutMouvementsInput;
    commande?: Prisma.CommandeCreateNestedOneWithoutMouvementsInput;
    achat?: Prisma.AchatCreateNestedOneWithoutMouvementsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutMouvementsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateWithoutProdOrderInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementCreateOrConnectWithoutProdOrderInput = {
    where: Prisma.MouvementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutProdOrderInput, Prisma.MouvementUncheckedCreateWithoutProdOrderInput>;
};
export type MouvementCreateManyProdOrderInputEnvelope = {
    data: Prisma.MouvementCreateManyProdOrderInput | Prisma.MouvementCreateManyProdOrderInput[];
    skipDuplicates?: boolean;
};
export type MouvementUpsertWithWhereUniqueWithoutProdOrderInput = {
    where: Prisma.MouvementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MouvementUpdateWithoutProdOrderInput, Prisma.MouvementUncheckedUpdateWithoutProdOrderInput>;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutProdOrderInput, Prisma.MouvementUncheckedCreateWithoutProdOrderInput>;
};
export type MouvementUpdateWithWhereUniqueWithoutProdOrderInput = {
    where: Prisma.MouvementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MouvementUpdateWithoutProdOrderInput, Prisma.MouvementUncheckedUpdateWithoutProdOrderInput>;
};
export type MouvementUpdateManyWithWhereWithoutProdOrderInput = {
    where: Prisma.MouvementScalarWhereInput;
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyWithoutProdOrderInput>;
};
export type MouvementCreateWithoutSalesRequestInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    stockItem: Prisma.StockItemCreateNestedOneWithoutMouvementsInput;
    user?: Prisma.UserCreateNestedOneWithoutMouvementsInput;
    commande?: Prisma.CommandeCreateNestedOneWithoutMouvementsInput;
    achat?: Prisma.AchatCreateNestedOneWithoutMouvementsInput;
    prodOrder?: Prisma.ProdOrderCreateNestedOneWithoutMouvementsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateWithoutSalesRequestInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementCreateOrConnectWithoutSalesRequestInput = {
    where: Prisma.MouvementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutSalesRequestInput, Prisma.MouvementUncheckedCreateWithoutSalesRequestInput>;
};
export type MouvementCreateManySalesRequestInputEnvelope = {
    data: Prisma.MouvementCreateManySalesRequestInput | Prisma.MouvementCreateManySalesRequestInput[];
    skipDuplicates?: boolean;
};
export type MouvementUpsertWithWhereUniqueWithoutSalesRequestInput = {
    where: Prisma.MouvementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MouvementUpdateWithoutSalesRequestInput, Prisma.MouvementUncheckedUpdateWithoutSalesRequestInput>;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutSalesRequestInput, Prisma.MouvementUncheckedCreateWithoutSalesRequestInput>;
};
export type MouvementUpdateWithWhereUniqueWithoutSalesRequestInput = {
    where: Prisma.MouvementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MouvementUpdateWithoutSalesRequestInput, Prisma.MouvementUncheckedUpdateWithoutSalesRequestInput>;
};
export type MouvementUpdateManyWithWhereWithoutSalesRequestInput = {
    where: Prisma.MouvementScalarWhereInput;
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyWithoutSalesRequestInput>;
};
export type MouvementCreateWithoutMaterialRequestInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    motif?: string | null;
    createdAt?: Date | string;
    stockItem: Prisma.StockItemCreateNestedOneWithoutMouvementsInput;
    user?: Prisma.UserCreateNestedOneWithoutMouvementsInput;
    commande?: Prisma.CommandeCreateNestedOneWithoutMouvementsInput;
    achat?: Prisma.AchatCreateNestedOneWithoutMouvementsInput;
    prodOrder?: Prisma.ProdOrderCreateNestedOneWithoutMouvementsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutMouvementsInput;
};
export type MouvementUncheckedCreateWithoutMaterialRequestInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementCreateOrConnectWithoutMaterialRequestInput = {
    where: Prisma.MouvementWhereUniqueInput;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutMaterialRequestInput, Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput>;
};
export type MouvementCreateManyMaterialRequestInputEnvelope = {
    data: Prisma.MouvementCreateManyMaterialRequestInput | Prisma.MouvementCreateManyMaterialRequestInput[];
    skipDuplicates?: boolean;
};
export type MouvementUpsertWithWhereUniqueWithoutMaterialRequestInput = {
    where: Prisma.MouvementWhereUniqueInput;
    update: Prisma.XOR<Prisma.MouvementUpdateWithoutMaterialRequestInput, Prisma.MouvementUncheckedUpdateWithoutMaterialRequestInput>;
    create: Prisma.XOR<Prisma.MouvementCreateWithoutMaterialRequestInput, Prisma.MouvementUncheckedCreateWithoutMaterialRequestInput>;
};
export type MouvementUpdateWithWhereUniqueWithoutMaterialRequestInput = {
    where: Prisma.MouvementWhereUniqueInput;
    data: Prisma.XOR<Prisma.MouvementUpdateWithoutMaterialRequestInput, Prisma.MouvementUncheckedUpdateWithoutMaterialRequestInput>;
};
export type MouvementUpdateManyWithWhereWithoutMaterialRequestInput = {
    where: Prisma.MouvementScalarWhereInput;
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyWithoutMaterialRequestInput>;
};
export type MouvementCreateManyUserInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockItem?: Prisma.StockItemUpdateOneRequiredWithoutMouvementsNestedInput;
    commande?: Prisma.CommandeUpdateOneWithoutMouvementsNestedInput;
    achat?: Prisma.AchatUpdateOneWithoutMouvementsNestedInput;
    prodOrder?: Prisma.ProdOrderUpdateOneWithoutMouvementsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutMouvementsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementCreateManyAchatInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateWithoutAchatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockItem?: Prisma.StockItemUpdateOneRequiredWithoutMouvementsNestedInput;
    user?: Prisma.UserUpdateOneWithoutMouvementsNestedInput;
    commande?: Prisma.CommandeUpdateOneWithoutMouvementsNestedInput;
    prodOrder?: Prisma.ProdOrderUpdateOneWithoutMouvementsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutMouvementsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateWithoutAchatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyWithoutAchatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementCreateManyCommandeInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockItem?: Prisma.StockItemUpdateOneRequiredWithoutMouvementsNestedInput;
    user?: Prisma.UserUpdateOneWithoutMouvementsNestedInput;
    achat?: Prisma.AchatUpdateOneWithoutMouvementsNestedInput;
    prodOrder?: Prisma.ProdOrderUpdateOneWithoutMouvementsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutMouvementsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementCreateManyStockItemInput = {
    id?: string;
    date?: Date | string;
    type: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateWithoutStockItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutMouvementsNestedInput;
    commande?: Prisma.CommandeUpdateOneWithoutMouvementsNestedInput;
    achat?: Prisma.AchatUpdateOneWithoutMouvementsNestedInput;
    prodOrder?: Prisma.ProdOrderUpdateOneWithoutMouvementsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutMouvementsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateWithoutStockItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyWithoutStockItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementCreateManyProdOrderInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateWithoutProdOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockItem?: Prisma.StockItemUpdateOneRequiredWithoutMouvementsNestedInput;
    user?: Prisma.UserUpdateOneWithoutMouvementsNestedInput;
    commande?: Prisma.CommandeUpdateOneWithoutMouvementsNestedInput;
    achat?: Prisma.AchatUpdateOneWithoutMouvementsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutMouvementsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateWithoutProdOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyWithoutProdOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementCreateManySalesRequestInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateWithoutSalesRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockItem?: Prisma.StockItemUpdateOneRequiredWithoutMouvementsNestedInput;
    user?: Prisma.UserUpdateOneWithoutMouvementsNestedInput;
    commande?: Prisma.CommandeUpdateOneWithoutMouvementsNestedInput;
    achat?: Prisma.AchatUpdateOneWithoutMouvementsNestedInput;
    prodOrder?: Prisma.ProdOrderUpdateOneWithoutMouvementsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateWithoutSalesRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyWithoutSalesRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementCreateManyMaterialRequestInput = {
    id?: string;
    date?: Date | string;
    type: string;
    stockItemId: string;
    qte: number;
    userId?: string | null;
    motif?: string | null;
    commandeId?: string | null;
    achatId?: string | null;
    prodOrderId?: string | null;
    salesRequestId?: string | null;
    createdAt?: Date | string;
};
export type MouvementUpdateWithoutMaterialRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stockItem?: Prisma.StockItemUpdateOneRequiredWithoutMouvementsNestedInput;
    user?: Prisma.UserUpdateOneWithoutMouvementsNestedInput;
    commande?: Prisma.CommandeUpdateOneWithoutMouvementsNestedInput;
    achat?: Prisma.AchatUpdateOneWithoutMouvementsNestedInput;
    prodOrder?: Prisma.ProdOrderUpdateOneWithoutMouvementsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutMouvementsNestedInput;
};
export type MouvementUncheckedUpdateWithoutMaterialRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementUncheckedUpdateManyWithoutMaterialRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    stockItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    qte?: Prisma.FloatFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commandeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    achatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prodOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MouvementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    stockItemId?: boolean;
    qte?: boolean;
    userId?: boolean;
    motif?: boolean;
    commandeId?: boolean;
    achatId?: boolean;
    prodOrderId?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
    stockItem?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Mouvement$userArgs<ExtArgs>;
    commande?: boolean | Prisma.Mouvement$commandeArgs<ExtArgs>;
    achat?: boolean | Prisma.Mouvement$achatArgs<ExtArgs>;
    prodOrder?: boolean | Prisma.Mouvement$prodOrderArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.Mouvement$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.Mouvement$materialRequestArgs<ExtArgs>;
}, ExtArgs["result"]["mouvement"]>;
export type MouvementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    stockItemId?: boolean;
    qte?: boolean;
    userId?: boolean;
    motif?: boolean;
    commandeId?: boolean;
    achatId?: boolean;
    prodOrderId?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
    stockItem?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Mouvement$userArgs<ExtArgs>;
    commande?: boolean | Prisma.Mouvement$commandeArgs<ExtArgs>;
    achat?: boolean | Prisma.Mouvement$achatArgs<ExtArgs>;
    prodOrder?: boolean | Prisma.Mouvement$prodOrderArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.Mouvement$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.Mouvement$materialRequestArgs<ExtArgs>;
}, ExtArgs["result"]["mouvement"]>;
export type MouvementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    type?: boolean;
    stockItemId?: boolean;
    qte?: boolean;
    userId?: boolean;
    motif?: boolean;
    commandeId?: boolean;
    achatId?: boolean;
    prodOrderId?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
    stockItem?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Mouvement$userArgs<ExtArgs>;
    commande?: boolean | Prisma.Mouvement$commandeArgs<ExtArgs>;
    achat?: boolean | Prisma.Mouvement$achatArgs<ExtArgs>;
    prodOrder?: boolean | Prisma.Mouvement$prodOrderArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.Mouvement$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.Mouvement$materialRequestArgs<ExtArgs>;
}, ExtArgs["result"]["mouvement"]>;
export type MouvementSelectScalar = {
    id?: boolean;
    date?: boolean;
    type?: boolean;
    stockItemId?: boolean;
    qte?: boolean;
    userId?: boolean;
    motif?: boolean;
    commandeId?: boolean;
    achatId?: boolean;
    prodOrderId?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
};
export type MouvementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "type" | "stockItemId" | "qte" | "userId" | "motif" | "commandeId" | "achatId" | "prodOrderId" | "salesRequestId" | "materialRequestId" | "createdAt", ExtArgs["result"]["mouvement"]>;
export type MouvementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stockItem?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Mouvement$userArgs<ExtArgs>;
    commande?: boolean | Prisma.Mouvement$commandeArgs<ExtArgs>;
    achat?: boolean | Prisma.Mouvement$achatArgs<ExtArgs>;
    prodOrder?: boolean | Prisma.Mouvement$prodOrderArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.Mouvement$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.Mouvement$materialRequestArgs<ExtArgs>;
};
export type MouvementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stockItem?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Mouvement$userArgs<ExtArgs>;
    commande?: boolean | Prisma.Mouvement$commandeArgs<ExtArgs>;
    achat?: boolean | Prisma.Mouvement$achatArgs<ExtArgs>;
    prodOrder?: boolean | Prisma.Mouvement$prodOrderArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.Mouvement$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.Mouvement$materialRequestArgs<ExtArgs>;
};
export type MouvementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stockItem?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Mouvement$userArgs<ExtArgs>;
    commande?: boolean | Prisma.Mouvement$commandeArgs<ExtArgs>;
    achat?: boolean | Prisma.Mouvement$achatArgs<ExtArgs>;
    prodOrder?: boolean | Prisma.Mouvement$prodOrderArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.Mouvement$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.Mouvement$materialRequestArgs<ExtArgs>;
};
export type $MouvementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mouvement";
    objects: {
        stockItem: Prisma.$StockItemPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
        commande: Prisma.$CommandePayload<ExtArgs> | null;
        achat: Prisma.$AchatPayload<ExtArgs> | null;
        prodOrder: Prisma.$ProdOrderPayload<ExtArgs> | null;
        salesRequest: Prisma.$SalesRequestPayload<ExtArgs> | null;
        materialRequest: Prisma.$MaterialRequestPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        type: string;
        stockItemId: string;
        qte: number;
        userId: string | null;
        motif: string | null;
        commandeId: string | null;
        achatId: string | null;
        prodOrderId: string | null;
        salesRequestId: string | null;
        materialRequestId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["mouvement"]>;
    composites: {};
};
export type MouvementGetPayload<S extends boolean | null | undefined | MouvementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MouvementPayload, S>;
export type MouvementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MouvementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MouvementCountAggregateInputType | true;
};
export interface MouvementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mouvement'];
        meta: {
            name: 'Mouvement';
        };
    };
    /**
     * Find zero or one Mouvement that matches the filter.
     * @param {MouvementFindUniqueArgs} args - Arguments to find a Mouvement
     * @example
     * // Get one Mouvement
     * const mouvement = await prisma.mouvement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MouvementFindUniqueArgs>(args: Prisma.SelectSubset<T, MouvementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Mouvement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MouvementFindUniqueOrThrowArgs} args - Arguments to find a Mouvement
     * @example
     * // Get one Mouvement
     * const mouvement = await prisma.mouvement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MouvementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MouvementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mouvement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFindFirstArgs} args - Arguments to find a Mouvement
     * @example
     * // Get one Mouvement
     * const mouvement = await prisma.mouvement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MouvementFindFirstArgs>(args?: Prisma.SelectSubset<T, MouvementFindFirstArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Mouvement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFindFirstOrThrowArgs} args - Arguments to find a Mouvement
     * @example
     * // Get one Mouvement
     * const mouvement = await prisma.mouvement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MouvementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MouvementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Mouvements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mouvements
     * const mouvements = await prisma.mouvement.findMany()
     *
     * // Get first 10 Mouvements
     * const mouvements = await prisma.mouvement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mouvementWithIdOnly = await prisma.mouvement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MouvementFindManyArgs>(args?: Prisma.SelectSubset<T, MouvementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Mouvement.
     * @param {MouvementCreateArgs} args - Arguments to create a Mouvement.
     * @example
     * // Create one Mouvement
     * const Mouvement = await prisma.mouvement.create({
     *   data: {
     *     // ... data to create a Mouvement
     *   }
     * })
     *
     */
    create<T extends MouvementCreateArgs>(args: Prisma.SelectSubset<T, MouvementCreateArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Mouvements.
     * @param {MouvementCreateManyArgs} args - Arguments to create many Mouvements.
     * @example
     * // Create many Mouvements
     * const mouvement = await prisma.mouvement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MouvementCreateManyArgs>(args?: Prisma.SelectSubset<T, MouvementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Mouvements and returns the data saved in the database.
     * @param {MouvementCreateManyAndReturnArgs} args - Arguments to create many Mouvements.
     * @example
     * // Create many Mouvements
     * const mouvement = await prisma.mouvement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Mouvements and only return the `id`
     * const mouvementWithIdOnly = await prisma.mouvement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MouvementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MouvementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Mouvement.
     * @param {MouvementDeleteArgs} args - Arguments to delete one Mouvement.
     * @example
     * // Delete one Mouvement
     * const Mouvement = await prisma.mouvement.delete({
     *   where: {
     *     // ... filter to delete one Mouvement
     *   }
     * })
     *
     */
    delete<T extends MouvementDeleteArgs>(args: Prisma.SelectSubset<T, MouvementDeleteArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Mouvement.
     * @param {MouvementUpdateArgs} args - Arguments to update one Mouvement.
     * @example
     * // Update one Mouvement
     * const mouvement = await prisma.mouvement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MouvementUpdateArgs>(args: Prisma.SelectSubset<T, MouvementUpdateArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Mouvements.
     * @param {MouvementDeleteManyArgs} args - Arguments to filter Mouvements to delete.
     * @example
     * // Delete a few Mouvements
     * const { count } = await prisma.mouvement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MouvementDeleteManyArgs>(args?: Prisma.SelectSubset<T, MouvementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mouvements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mouvements
     * const mouvement = await prisma.mouvement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MouvementUpdateManyArgs>(args: Prisma.SelectSubset<T, MouvementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Mouvements and returns the data updated in the database.
     * @param {MouvementUpdateManyAndReturnArgs} args - Arguments to update many Mouvements.
     * @example
     * // Update many Mouvements
     * const mouvement = await prisma.mouvement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Mouvements and only return the `id`
     * const mouvementWithIdOnly = await prisma.mouvement.updateManyAndReturn({
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
    updateManyAndReturn<T extends MouvementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MouvementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Mouvement.
     * @param {MouvementUpsertArgs} args - Arguments to update or create a Mouvement.
     * @example
     * // Update or create a Mouvement
     * const mouvement = await prisma.mouvement.upsert({
     *   create: {
     *     // ... data to create a Mouvement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mouvement we want to update
     *   }
     * })
     */
    upsert<T extends MouvementUpsertArgs>(args: Prisma.SelectSubset<T, MouvementUpsertArgs<ExtArgs>>): Prisma.Prisma__MouvementClient<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Mouvements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementCountArgs} args - Arguments to filter Mouvements to count.
     * @example
     * // Count the number of Mouvements
     * const count = await prisma.mouvement.count({
     *   where: {
     *     // ... the filter for the Mouvements we want to count
     *   }
     * })
    **/
    count<T extends MouvementCountArgs>(args?: Prisma.Subset<T, MouvementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MouvementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Mouvement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MouvementAggregateArgs>(args: Prisma.Subset<T, MouvementAggregateArgs>): Prisma.PrismaPromise<GetMouvementAggregateType<T>>;
    /**
     * Group by Mouvement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MouvementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MouvementGroupByArgs['orderBy'];
    } : {
        orderBy?: MouvementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MouvementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMouvementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Mouvement model
     */
    readonly fields: MouvementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Mouvement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MouvementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    stockItem<T extends Prisma.StockItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Mouvement$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mouvement$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    commande<T extends Prisma.Mouvement$commandeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mouvement$commandeArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    achat<T extends Prisma.Mouvement$achatArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mouvement$achatArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    prodOrder<T extends Prisma.Mouvement$prodOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mouvement$prodOrderArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    salesRequest<T extends Prisma.Mouvement$salesRequestArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mouvement$salesRequestArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    materialRequest<T extends Prisma.Mouvement$materialRequestArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mouvement$materialRequestArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Mouvement model
 */
export interface MouvementFieldRefs {
    readonly id: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly date: Prisma.FieldRef<"Mouvement", 'DateTime'>;
    readonly type: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly stockItemId: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly qte: Prisma.FieldRef<"Mouvement", 'Float'>;
    readonly userId: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly motif: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly commandeId: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly achatId: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly prodOrderId: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly salesRequestId: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly materialRequestId: Prisma.FieldRef<"Mouvement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Mouvement", 'DateTime'>;
}
/**
 * Mouvement findUnique
 */
export type MouvementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Mouvement to fetch.
     */
    where: Prisma.MouvementWhereUniqueInput;
};
/**
 * Mouvement findUniqueOrThrow
 */
export type MouvementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Mouvement to fetch.
     */
    where: Prisma.MouvementWhereUniqueInput;
};
/**
 * Mouvement findFirst
 */
export type MouvementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Mouvement to fetch.
     */
    where?: Prisma.MouvementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mouvements to fetch.
     */
    orderBy?: Prisma.MouvementOrderByWithRelationInput | Prisma.MouvementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Mouvements.
     */
    cursor?: Prisma.MouvementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mouvements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mouvements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Mouvements.
     */
    distinct?: Prisma.MouvementScalarFieldEnum | Prisma.MouvementScalarFieldEnum[];
};
/**
 * Mouvement findFirstOrThrow
 */
export type MouvementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Mouvement to fetch.
     */
    where?: Prisma.MouvementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mouvements to fetch.
     */
    orderBy?: Prisma.MouvementOrderByWithRelationInput | Prisma.MouvementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Mouvements.
     */
    cursor?: Prisma.MouvementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mouvements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mouvements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Mouvements.
     */
    distinct?: Prisma.MouvementScalarFieldEnum | Prisma.MouvementScalarFieldEnum[];
};
/**
 * Mouvement findMany
 */
export type MouvementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Mouvements to fetch.
     */
    where?: Prisma.MouvementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mouvements to fetch.
     */
    orderBy?: Prisma.MouvementOrderByWithRelationInput | Prisma.MouvementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Mouvements.
     */
    cursor?: Prisma.MouvementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mouvements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mouvements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Mouvements.
     */
    distinct?: Prisma.MouvementScalarFieldEnum | Prisma.MouvementScalarFieldEnum[];
};
/**
 * Mouvement create
 */
export type MouvementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Mouvement.
     */
    data: Prisma.XOR<Prisma.MouvementCreateInput, Prisma.MouvementUncheckedCreateInput>;
};
/**
 * Mouvement createMany
 */
export type MouvementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mouvements.
     */
    data: Prisma.MouvementCreateManyInput | Prisma.MouvementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Mouvement createManyAndReturn
 */
export type MouvementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mouvement
     */
    select?: Prisma.MouvementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Mouvement
     */
    omit?: Prisma.MouvementOmit<ExtArgs> | null;
    /**
     * The data used to create many Mouvements.
     */
    data: Prisma.MouvementCreateManyInput | Prisma.MouvementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MouvementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Mouvement update
 */
export type MouvementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Mouvement.
     */
    data: Prisma.XOR<Prisma.MouvementUpdateInput, Prisma.MouvementUncheckedUpdateInput>;
    /**
     * Choose, which Mouvement to update.
     */
    where: Prisma.MouvementWhereUniqueInput;
};
/**
 * Mouvement updateMany
 */
export type MouvementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Mouvements.
     */
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyInput>;
    /**
     * Filter which Mouvements to update
     */
    where?: Prisma.MouvementWhereInput;
    /**
     * Limit how many Mouvements to update.
     */
    limit?: number;
};
/**
 * Mouvement updateManyAndReturn
 */
export type MouvementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mouvement
     */
    select?: Prisma.MouvementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Mouvement
     */
    omit?: Prisma.MouvementOmit<ExtArgs> | null;
    /**
     * The data used to update Mouvements.
     */
    data: Prisma.XOR<Prisma.MouvementUpdateManyMutationInput, Prisma.MouvementUncheckedUpdateManyInput>;
    /**
     * Filter which Mouvements to update
     */
    where?: Prisma.MouvementWhereInput;
    /**
     * Limit how many Mouvements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MouvementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Mouvement upsert
 */
export type MouvementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Mouvement to update in case it exists.
     */
    where: Prisma.MouvementWhereUniqueInput;
    /**
     * In case the Mouvement found by the `where` argument doesn't exist, create a new Mouvement with this data.
     */
    create: Prisma.XOR<Prisma.MouvementCreateInput, Prisma.MouvementUncheckedCreateInput>;
    /**
     * In case the Mouvement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MouvementUpdateInput, Prisma.MouvementUncheckedUpdateInput>;
};
/**
 * Mouvement delete
 */
export type MouvementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Mouvement to delete.
     */
    where: Prisma.MouvementWhereUniqueInput;
};
/**
 * Mouvement deleteMany
 */
export type MouvementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Mouvements to delete
     */
    where?: Prisma.MouvementWhereInput;
    /**
     * Limit how many Mouvements to delete.
     */
    limit?: number;
};
/**
 * Mouvement.user
 */
export type Mouvement$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Mouvement.commande
 */
export type Mouvement$commandeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: Prisma.CommandeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commande
     */
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeInclude<ExtArgs> | null;
    where?: Prisma.CommandeWhereInput;
};
/**
 * Mouvement.achat
 */
export type Mouvement$achatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: Prisma.AchatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Achat
     */
    omit?: Prisma.AchatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AchatInclude<ExtArgs> | null;
    where?: Prisma.AchatWhereInput;
};
/**
 * Mouvement.prodOrder
 */
export type Mouvement$prodOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Mouvement.salesRequest
 */
export type Mouvement$salesRequestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Mouvement.materialRequest
 */
export type Mouvement$materialRequestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Mouvement without action
 */
export type MouvementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Mouvement.d.ts.map