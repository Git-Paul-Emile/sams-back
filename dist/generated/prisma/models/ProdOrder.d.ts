import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProdOrder
 *
 */
export type ProdOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$ProdOrderPayload>;
export type AggregateProdOrder = {
    _count: ProdOrderCountAggregateOutputType | null;
    _avg: ProdOrderAvgAggregateOutputType | null;
    _sum: ProdOrderSumAggregateOutputType | null;
    _min: ProdOrderMinAggregateOutputType | null;
    _max: ProdOrderMaxAggregateOutputType | null;
};
export type ProdOrderAvgAggregateOutputType = {
    qtePrev: number | null;
    qteReel: number | null;
    rendement: number | null;
};
export type ProdOrderSumAggregateOutputType = {
    qtePrev: number | null;
    qteReel: number | null;
    rendement: number | null;
};
export type ProdOrderMinAggregateOutputType = {
    id: string | null;
    num: string | null;
    produitId: string | null;
    ligne: string | null;
    qtePrev: number | null;
    qteReel: number | null;
    debut: Date | null;
    fin: Date | null;
    responsableId: string | null;
    statut: string | null;
    rendement: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProdOrderMaxAggregateOutputType = {
    id: string | null;
    num: string | null;
    produitId: string | null;
    ligne: string | null;
    qtePrev: number | null;
    qteReel: number | null;
    debut: Date | null;
    fin: Date | null;
    responsableId: string | null;
    statut: string | null;
    rendement: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProdOrderCountAggregateOutputType = {
    id: number;
    num: number;
    produitId: number;
    ligne: number;
    qtePrev: number;
    qteReel: number;
    debut: number;
    fin: number;
    responsableId: number;
    statut: number;
    rendement: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProdOrderAvgAggregateInputType = {
    qtePrev?: true;
    qteReel?: true;
    rendement?: true;
};
export type ProdOrderSumAggregateInputType = {
    qtePrev?: true;
    qteReel?: true;
    rendement?: true;
};
export type ProdOrderMinAggregateInputType = {
    id?: true;
    num?: true;
    produitId?: true;
    ligne?: true;
    qtePrev?: true;
    qteReel?: true;
    debut?: true;
    fin?: true;
    responsableId?: true;
    statut?: true;
    rendement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProdOrderMaxAggregateInputType = {
    id?: true;
    num?: true;
    produitId?: true;
    ligne?: true;
    qtePrev?: true;
    qteReel?: true;
    debut?: true;
    fin?: true;
    responsableId?: true;
    statut?: true;
    rendement?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProdOrderCountAggregateInputType = {
    id?: true;
    num?: true;
    produitId?: true;
    ligne?: true;
    qtePrev?: true;
    qteReel?: true;
    debut?: true;
    fin?: true;
    responsableId?: true;
    statut?: true;
    rendement?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProdOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProdOrder to aggregate.
     */
    where?: Prisma.ProdOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdOrders to fetch.
     */
    orderBy?: Prisma.ProdOrderOrderByWithRelationInput | Prisma.ProdOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProdOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProdOrders
    **/
    _count?: true | ProdOrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProdOrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProdOrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProdOrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProdOrderMaxAggregateInputType;
};
export type GetProdOrderAggregateType<T extends ProdOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateProdOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProdOrder[P]> : Prisma.GetScalarType<T[P], AggregateProdOrder[P]>;
};
export type ProdOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdOrderWhereInput;
    orderBy?: Prisma.ProdOrderOrderByWithAggregationInput | Prisma.ProdOrderOrderByWithAggregationInput[];
    by: Prisma.ProdOrderScalarFieldEnum[] | Prisma.ProdOrderScalarFieldEnum;
    having?: Prisma.ProdOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProdOrderCountAggregateInputType | true;
    _avg?: ProdOrderAvgAggregateInputType;
    _sum?: ProdOrderSumAggregateInputType;
    _min?: ProdOrderMinAggregateInputType;
    _max?: ProdOrderMaxAggregateInputType;
};
export type ProdOrderGroupByOutputType = {
    id: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel: number;
    debut: Date;
    fin: Date;
    responsableId: string | null;
    statut: string;
    rendement: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProdOrderCountAggregateOutputType | null;
    _avg: ProdOrderAvgAggregateOutputType | null;
    _sum: ProdOrderSumAggregateOutputType | null;
    _min: ProdOrderMinAggregateOutputType | null;
    _max: ProdOrderMaxAggregateOutputType | null;
};
export type GetProdOrderGroupByPayload<T extends ProdOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProdOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProdOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProdOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProdOrderGroupByOutputType[P]>;
}>>;
export type ProdOrderWhereInput = {
    AND?: Prisma.ProdOrderWhereInput | Prisma.ProdOrderWhereInput[];
    OR?: Prisma.ProdOrderWhereInput[];
    NOT?: Prisma.ProdOrderWhereInput | Prisma.ProdOrderWhereInput[];
    id?: Prisma.StringFilter<"ProdOrder"> | string;
    num?: Prisma.StringFilter<"ProdOrder"> | string;
    produitId?: Prisma.StringFilter<"ProdOrder"> | string;
    ligne?: Prisma.StringFilter<"ProdOrder"> | string;
    qtePrev?: Prisma.FloatFilter<"ProdOrder"> | number;
    qteReel?: Prisma.FloatFilter<"ProdOrder"> | number;
    debut?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    fin?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    responsableId?: Prisma.StringNullableFilter<"ProdOrder"> | string | null;
    statut?: Prisma.StringFilter<"ProdOrder"> | string;
    rendement?: Prisma.FloatFilter<"ProdOrder"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    produit?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    responsable?: Prisma.XOR<Prisma.OperateurNullableScalarRelationFilter, Prisma.OperateurWhereInput> | null;
    incidents?: Prisma.IncidentListRelationFilter;
    mouvements?: Prisma.MouvementListRelationFilter;
    materialRequests?: Prisma.MaterialRequestListRelationFilter;
};
export type ProdOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    qtePrev?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    debut?: Prisma.SortOrder;
    fin?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    rendement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    produit?: Prisma.StockItemOrderByWithRelationInput;
    responsable?: Prisma.OperateurOrderByWithRelationInput;
    incidents?: Prisma.IncidentOrderByRelationAggregateInput;
    mouvements?: Prisma.MouvementOrderByRelationAggregateInput;
    materialRequests?: Prisma.MaterialRequestOrderByRelationAggregateInput;
};
export type ProdOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    num?: string;
    AND?: Prisma.ProdOrderWhereInput | Prisma.ProdOrderWhereInput[];
    OR?: Prisma.ProdOrderWhereInput[];
    NOT?: Prisma.ProdOrderWhereInput | Prisma.ProdOrderWhereInput[];
    produitId?: Prisma.StringFilter<"ProdOrder"> | string;
    ligne?: Prisma.StringFilter<"ProdOrder"> | string;
    qtePrev?: Prisma.FloatFilter<"ProdOrder"> | number;
    qteReel?: Prisma.FloatFilter<"ProdOrder"> | number;
    debut?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    fin?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    responsableId?: Prisma.StringNullableFilter<"ProdOrder"> | string | null;
    statut?: Prisma.StringFilter<"ProdOrder"> | string;
    rendement?: Prisma.FloatFilter<"ProdOrder"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    produit?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    responsable?: Prisma.XOR<Prisma.OperateurNullableScalarRelationFilter, Prisma.OperateurWhereInput> | null;
    incidents?: Prisma.IncidentListRelationFilter;
    mouvements?: Prisma.MouvementListRelationFilter;
    materialRequests?: Prisma.MaterialRequestListRelationFilter;
}, "id" | "num">;
export type ProdOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    qtePrev?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    debut?: Prisma.SortOrder;
    fin?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    rendement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProdOrderCountOrderByAggregateInput;
    _avg?: Prisma.ProdOrderAvgOrderByAggregateInput;
    _max?: Prisma.ProdOrderMaxOrderByAggregateInput;
    _min?: Prisma.ProdOrderMinOrderByAggregateInput;
    _sum?: Prisma.ProdOrderSumOrderByAggregateInput;
};
export type ProdOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProdOrderScalarWhereWithAggregatesInput | Prisma.ProdOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProdOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProdOrderScalarWhereWithAggregatesInput | Prisma.ProdOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProdOrder"> | string;
    num?: Prisma.StringWithAggregatesFilter<"ProdOrder"> | string;
    produitId?: Prisma.StringWithAggregatesFilter<"ProdOrder"> | string;
    ligne?: Prisma.StringWithAggregatesFilter<"ProdOrder"> | string;
    qtePrev?: Prisma.FloatWithAggregatesFilter<"ProdOrder"> | number;
    qteReel?: Prisma.FloatWithAggregatesFilter<"ProdOrder"> | number;
    debut?: Prisma.DateTimeWithAggregatesFilter<"ProdOrder"> | Date | string;
    fin?: Prisma.DateTimeWithAggregatesFilter<"ProdOrder"> | Date | string;
    responsableId?: Prisma.StringNullableWithAggregatesFilter<"ProdOrder"> | string | null;
    statut?: Prisma.StringWithAggregatesFilter<"ProdOrder"> | string;
    rendement?: Prisma.FloatWithAggregatesFilter<"ProdOrder"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProdOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProdOrder"> | Date | string;
};
export type ProdOrderCreateInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProdOrdersInput;
    responsable?: Prisma.OperateurCreateNestedOneWithoutProdOrdersInput;
    incidents?: Prisma.IncidentCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderUncheckedCreateInput = {
    id?: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    responsableId?: string | null;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProdOrdersNestedInput;
    responsable?: Prisma.OperateurUpdateOneWithoutProdOrdersNestedInput;
    incidents?: Prisma.IncidentUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderCreateManyInput = {
    id?: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    responsableId?: string | null;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProdOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdOrderListRelationFilter = {
    every?: Prisma.ProdOrderWhereInput;
    some?: Prisma.ProdOrderWhereInput;
    none?: Prisma.ProdOrderWhereInput;
};
export type ProdOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProdOrderNullableScalarRelationFilter = {
    is?: Prisma.ProdOrderWhereInput | null;
    isNot?: Prisma.ProdOrderWhereInput | null;
};
export type ProdOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    qtePrev?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    debut?: Prisma.SortOrder;
    fin?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    rendement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProdOrderAvgOrderByAggregateInput = {
    qtePrev?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    rendement?: Prisma.SortOrder;
};
export type ProdOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    qtePrev?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    debut?: Prisma.SortOrder;
    fin?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    rendement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProdOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    qtePrev?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    debut?: Prisma.SortOrder;
    fin?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    rendement?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProdOrderSumOrderByAggregateInput = {
    qtePrev?: Prisma.SortOrder;
    qteReel?: Prisma.SortOrder;
    rendement?: Prisma.SortOrder;
};
export type ProdOrderScalarRelationFilter = {
    is?: Prisma.ProdOrderWhereInput;
    isNot?: Prisma.ProdOrderWhereInput;
};
export type ProdOrderCreateNestedManyWithoutResponsableInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutResponsableInput, Prisma.ProdOrderUncheckedCreateWithoutResponsableInput> | Prisma.ProdOrderCreateWithoutResponsableInput[] | Prisma.ProdOrderUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutResponsableInput | Prisma.ProdOrderCreateOrConnectWithoutResponsableInput[];
    createMany?: Prisma.ProdOrderCreateManyResponsableInputEnvelope;
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
};
export type ProdOrderUncheckedCreateNestedManyWithoutResponsableInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutResponsableInput, Prisma.ProdOrderUncheckedCreateWithoutResponsableInput> | Prisma.ProdOrderCreateWithoutResponsableInput[] | Prisma.ProdOrderUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutResponsableInput | Prisma.ProdOrderCreateOrConnectWithoutResponsableInput[];
    createMany?: Prisma.ProdOrderCreateManyResponsableInputEnvelope;
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
};
export type ProdOrderUpdateManyWithoutResponsableNestedInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutResponsableInput, Prisma.ProdOrderUncheckedCreateWithoutResponsableInput> | Prisma.ProdOrderCreateWithoutResponsableInput[] | Prisma.ProdOrderUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutResponsableInput | Prisma.ProdOrderCreateOrConnectWithoutResponsableInput[];
    upsert?: Prisma.ProdOrderUpsertWithWhereUniqueWithoutResponsableInput | Prisma.ProdOrderUpsertWithWhereUniqueWithoutResponsableInput[];
    createMany?: Prisma.ProdOrderCreateManyResponsableInputEnvelope;
    set?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    disconnect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    delete?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    update?: Prisma.ProdOrderUpdateWithWhereUniqueWithoutResponsableInput | Prisma.ProdOrderUpdateWithWhereUniqueWithoutResponsableInput[];
    updateMany?: Prisma.ProdOrderUpdateManyWithWhereWithoutResponsableInput | Prisma.ProdOrderUpdateManyWithWhereWithoutResponsableInput[];
    deleteMany?: Prisma.ProdOrderScalarWhereInput | Prisma.ProdOrderScalarWhereInput[];
};
export type ProdOrderUncheckedUpdateManyWithoutResponsableNestedInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutResponsableInput, Prisma.ProdOrderUncheckedCreateWithoutResponsableInput> | Prisma.ProdOrderCreateWithoutResponsableInput[] | Prisma.ProdOrderUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutResponsableInput | Prisma.ProdOrderCreateOrConnectWithoutResponsableInput[];
    upsert?: Prisma.ProdOrderUpsertWithWhereUniqueWithoutResponsableInput | Prisma.ProdOrderUpsertWithWhereUniqueWithoutResponsableInput[];
    createMany?: Prisma.ProdOrderCreateManyResponsableInputEnvelope;
    set?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    disconnect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    delete?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    update?: Prisma.ProdOrderUpdateWithWhereUniqueWithoutResponsableInput | Prisma.ProdOrderUpdateWithWhereUniqueWithoutResponsableInput[];
    updateMany?: Prisma.ProdOrderUpdateManyWithWhereWithoutResponsableInput | Prisma.ProdOrderUpdateManyWithWhereWithoutResponsableInput[];
    deleteMany?: Prisma.ProdOrderScalarWhereInput | Prisma.ProdOrderScalarWhereInput[];
};
export type ProdOrderCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutProduitInput, Prisma.ProdOrderUncheckedCreateWithoutProduitInput> | Prisma.ProdOrderCreateWithoutProduitInput[] | Prisma.ProdOrderUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutProduitInput | Prisma.ProdOrderCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.ProdOrderCreateManyProduitInputEnvelope;
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
};
export type ProdOrderUncheckedCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutProduitInput, Prisma.ProdOrderUncheckedCreateWithoutProduitInput> | Prisma.ProdOrderCreateWithoutProduitInput[] | Prisma.ProdOrderUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutProduitInput | Prisma.ProdOrderCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.ProdOrderCreateManyProduitInputEnvelope;
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
};
export type ProdOrderUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutProduitInput, Prisma.ProdOrderUncheckedCreateWithoutProduitInput> | Prisma.ProdOrderCreateWithoutProduitInput[] | Prisma.ProdOrderUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutProduitInput | Prisma.ProdOrderCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.ProdOrderUpsertWithWhereUniqueWithoutProduitInput | Prisma.ProdOrderUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.ProdOrderCreateManyProduitInputEnvelope;
    set?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    disconnect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    delete?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    update?: Prisma.ProdOrderUpdateWithWhereUniqueWithoutProduitInput | Prisma.ProdOrderUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.ProdOrderUpdateManyWithWhereWithoutProduitInput | Prisma.ProdOrderUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.ProdOrderScalarWhereInput | Prisma.ProdOrderScalarWhereInput[];
};
export type ProdOrderUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutProduitInput, Prisma.ProdOrderUncheckedCreateWithoutProduitInput> | Prisma.ProdOrderCreateWithoutProduitInput[] | Prisma.ProdOrderUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutProduitInput | Prisma.ProdOrderCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.ProdOrderUpsertWithWhereUniqueWithoutProduitInput | Prisma.ProdOrderUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.ProdOrderCreateManyProduitInputEnvelope;
    set?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    disconnect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    delete?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    connect?: Prisma.ProdOrderWhereUniqueInput | Prisma.ProdOrderWhereUniqueInput[];
    update?: Prisma.ProdOrderUpdateWithWhereUniqueWithoutProduitInput | Prisma.ProdOrderUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.ProdOrderUpdateManyWithWhereWithoutProduitInput | Prisma.ProdOrderUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.ProdOrderScalarWhereInput | Prisma.ProdOrderScalarWhereInput[];
};
export type ProdOrderCreateNestedOneWithoutMouvementsInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutMouvementsInput, Prisma.ProdOrderUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutMouvementsInput;
    connect?: Prisma.ProdOrderWhereUniqueInput;
};
export type ProdOrderUpdateOneWithoutMouvementsNestedInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutMouvementsInput, Prisma.ProdOrderUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutMouvementsInput;
    upsert?: Prisma.ProdOrderUpsertWithoutMouvementsInput;
    disconnect?: Prisma.ProdOrderWhereInput | boolean;
    delete?: Prisma.ProdOrderWhereInput | boolean;
    connect?: Prisma.ProdOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProdOrderUpdateToOneWithWhereWithoutMouvementsInput, Prisma.ProdOrderUpdateWithoutMouvementsInput>, Prisma.ProdOrderUncheckedUpdateWithoutMouvementsInput>;
};
export type ProdOrderCreateNestedOneWithoutIncidentsInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutIncidentsInput, Prisma.ProdOrderUncheckedCreateWithoutIncidentsInput>;
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutIncidentsInput;
    connect?: Prisma.ProdOrderWhereUniqueInput;
};
export type ProdOrderUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutIncidentsInput, Prisma.ProdOrderUncheckedCreateWithoutIncidentsInput>;
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutIncidentsInput;
    upsert?: Prisma.ProdOrderUpsertWithoutIncidentsInput;
    connect?: Prisma.ProdOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProdOrderUpdateToOneWithWhereWithoutIncidentsInput, Prisma.ProdOrderUpdateWithoutIncidentsInput>, Prisma.ProdOrderUncheckedUpdateWithoutIncidentsInput>;
};
export type ProdOrderCreateNestedOneWithoutMaterialRequestsInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutMaterialRequestsInput, Prisma.ProdOrderUncheckedCreateWithoutMaterialRequestsInput>;
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutMaterialRequestsInput;
    connect?: Prisma.ProdOrderWhereUniqueInput;
};
export type ProdOrderUpdateOneRequiredWithoutMaterialRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ProdOrderCreateWithoutMaterialRequestsInput, Prisma.ProdOrderUncheckedCreateWithoutMaterialRequestsInput>;
    connectOrCreate?: Prisma.ProdOrderCreateOrConnectWithoutMaterialRequestsInput;
    upsert?: Prisma.ProdOrderUpsertWithoutMaterialRequestsInput;
    connect?: Prisma.ProdOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProdOrderUpdateToOneWithWhereWithoutMaterialRequestsInput, Prisma.ProdOrderUpdateWithoutMaterialRequestsInput>, Prisma.ProdOrderUncheckedUpdateWithoutMaterialRequestsInput>;
};
export type ProdOrderCreateWithoutResponsableInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProdOrdersInput;
    incidents?: Prisma.IncidentCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderUncheckedCreateWithoutResponsableInput = {
    id?: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderCreateOrConnectWithoutResponsableInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutResponsableInput, Prisma.ProdOrderUncheckedCreateWithoutResponsableInput>;
};
export type ProdOrderCreateManyResponsableInputEnvelope = {
    data: Prisma.ProdOrderCreateManyResponsableInput | Prisma.ProdOrderCreateManyResponsableInput[];
    skipDuplicates?: boolean;
};
export type ProdOrderUpsertWithWhereUniqueWithoutResponsableInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProdOrderUpdateWithoutResponsableInput, Prisma.ProdOrderUncheckedUpdateWithoutResponsableInput>;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutResponsableInput, Prisma.ProdOrderUncheckedCreateWithoutResponsableInput>;
};
export type ProdOrderUpdateWithWhereUniqueWithoutResponsableInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProdOrderUpdateWithoutResponsableInput, Prisma.ProdOrderUncheckedUpdateWithoutResponsableInput>;
};
export type ProdOrderUpdateManyWithWhereWithoutResponsableInput = {
    where: Prisma.ProdOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.ProdOrderUpdateManyMutationInput, Prisma.ProdOrderUncheckedUpdateManyWithoutResponsableInput>;
};
export type ProdOrderScalarWhereInput = {
    AND?: Prisma.ProdOrderScalarWhereInput | Prisma.ProdOrderScalarWhereInput[];
    OR?: Prisma.ProdOrderScalarWhereInput[];
    NOT?: Prisma.ProdOrderScalarWhereInput | Prisma.ProdOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"ProdOrder"> | string;
    num?: Prisma.StringFilter<"ProdOrder"> | string;
    produitId?: Prisma.StringFilter<"ProdOrder"> | string;
    ligne?: Prisma.StringFilter<"ProdOrder"> | string;
    qtePrev?: Prisma.FloatFilter<"ProdOrder"> | number;
    qteReel?: Prisma.FloatFilter<"ProdOrder"> | number;
    debut?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    fin?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    responsableId?: Prisma.StringNullableFilter<"ProdOrder"> | string | null;
    statut?: Prisma.StringFilter<"ProdOrder"> | string;
    rendement?: Prisma.FloatFilter<"ProdOrder"> | number;
    createdAt?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProdOrder"> | Date | string;
};
export type ProdOrderCreateWithoutProduitInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responsable?: Prisma.OperateurCreateNestedOneWithoutProdOrdersInput;
    incidents?: Prisma.IncidentCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderUncheckedCreateWithoutProduitInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    responsableId?: string | null;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderCreateOrConnectWithoutProduitInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutProduitInput, Prisma.ProdOrderUncheckedCreateWithoutProduitInput>;
};
export type ProdOrderCreateManyProduitInputEnvelope = {
    data: Prisma.ProdOrderCreateManyProduitInput | Prisma.ProdOrderCreateManyProduitInput[];
    skipDuplicates?: boolean;
};
export type ProdOrderUpsertWithWhereUniqueWithoutProduitInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProdOrderUpdateWithoutProduitInput, Prisma.ProdOrderUncheckedUpdateWithoutProduitInput>;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutProduitInput, Prisma.ProdOrderUncheckedCreateWithoutProduitInput>;
};
export type ProdOrderUpdateWithWhereUniqueWithoutProduitInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProdOrderUpdateWithoutProduitInput, Prisma.ProdOrderUncheckedUpdateWithoutProduitInput>;
};
export type ProdOrderUpdateManyWithWhereWithoutProduitInput = {
    where: Prisma.ProdOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.ProdOrderUpdateManyMutationInput, Prisma.ProdOrderUncheckedUpdateManyWithoutProduitInput>;
};
export type ProdOrderCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProdOrdersInput;
    responsable?: Prisma.OperateurCreateNestedOneWithoutProdOrdersInput;
    incidents?: Prisma.IncidentCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderUncheckedCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    responsableId?: string | null;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderCreateOrConnectWithoutMouvementsInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutMouvementsInput, Prisma.ProdOrderUncheckedCreateWithoutMouvementsInput>;
};
export type ProdOrderUpsertWithoutMouvementsInput = {
    update: Prisma.XOR<Prisma.ProdOrderUpdateWithoutMouvementsInput, Prisma.ProdOrderUncheckedUpdateWithoutMouvementsInput>;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutMouvementsInput, Prisma.ProdOrderUncheckedCreateWithoutMouvementsInput>;
    where?: Prisma.ProdOrderWhereInput;
};
export type ProdOrderUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: Prisma.ProdOrderWhereInput;
    data: Prisma.XOR<Prisma.ProdOrderUpdateWithoutMouvementsInput, Prisma.ProdOrderUncheckedUpdateWithoutMouvementsInput>;
};
export type ProdOrderUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProdOrdersNestedInput;
    responsable?: Prisma.OperateurUpdateOneWithoutProdOrdersNestedInput;
    incidents?: Prisma.IncidentUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderCreateWithoutIncidentsInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProdOrdersInput;
    responsable?: Prisma.OperateurCreateNestedOneWithoutProdOrdersInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderUncheckedCreateWithoutIncidentsInput = {
    id?: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    responsableId?: string | null;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutProdOrderInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderCreateOrConnectWithoutIncidentsInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutIncidentsInput, Prisma.ProdOrderUncheckedCreateWithoutIncidentsInput>;
};
export type ProdOrderUpsertWithoutIncidentsInput = {
    update: Prisma.XOR<Prisma.ProdOrderUpdateWithoutIncidentsInput, Prisma.ProdOrderUncheckedUpdateWithoutIncidentsInput>;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutIncidentsInput, Prisma.ProdOrderUncheckedCreateWithoutIncidentsInput>;
    where?: Prisma.ProdOrderWhereInput;
};
export type ProdOrderUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: Prisma.ProdOrderWhereInput;
    data: Prisma.XOR<Prisma.ProdOrderUpdateWithoutIncidentsInput, Prisma.ProdOrderUncheckedUpdateWithoutIncidentsInput>;
};
export type ProdOrderUpdateWithoutIncidentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProdOrdersNestedInput;
    responsable?: Prisma.OperateurUpdateOneWithoutProdOrdersNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateWithoutIncidentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderCreateWithoutMaterialRequestsInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    produit: Prisma.StockItemCreateNestedOneWithoutProdOrdersInput;
    responsable?: Prisma.OperateurCreateNestedOneWithoutProdOrdersInput;
    incidents?: Prisma.IncidentCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderUncheckedCreateWithoutMaterialRequestsInput = {
    id?: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    responsableId?: string | null;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutProdOrderInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutProdOrderInput;
};
export type ProdOrderCreateOrConnectWithoutMaterialRequestsInput = {
    where: Prisma.ProdOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutMaterialRequestsInput, Prisma.ProdOrderUncheckedCreateWithoutMaterialRequestsInput>;
};
export type ProdOrderUpsertWithoutMaterialRequestsInput = {
    update: Prisma.XOR<Prisma.ProdOrderUpdateWithoutMaterialRequestsInput, Prisma.ProdOrderUncheckedUpdateWithoutMaterialRequestsInput>;
    create: Prisma.XOR<Prisma.ProdOrderCreateWithoutMaterialRequestsInput, Prisma.ProdOrderUncheckedCreateWithoutMaterialRequestsInput>;
    where?: Prisma.ProdOrderWhereInput;
};
export type ProdOrderUpdateToOneWithWhereWithoutMaterialRequestsInput = {
    where?: Prisma.ProdOrderWhereInput;
    data: Prisma.XOR<Prisma.ProdOrderUpdateWithoutMaterialRequestsInput, Prisma.ProdOrderUncheckedUpdateWithoutMaterialRequestsInput>;
};
export type ProdOrderUpdateWithoutMaterialRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProdOrdersNestedInput;
    responsable?: Prisma.OperateurUpdateOneWithoutProdOrdersNestedInput;
    incidents?: Prisma.IncidentUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateWithoutMaterialRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderCreateManyResponsableInput = {
    id?: string;
    num: string;
    produitId: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProdOrderUpdateWithoutResponsableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutProdOrdersNestedInput;
    incidents?: Prisma.IncidentUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateWithoutResponsableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateManyWithoutResponsableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProdOrderCreateManyProduitInput = {
    id?: string;
    num: string;
    ligne: string;
    qtePrev: number;
    qteReel?: number;
    debut: Date | string;
    fin: Date | string;
    responsableId?: string | null;
    statut?: string;
    rendement?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProdOrderUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsable?: Prisma.OperateurUpdateOneWithoutProdOrdersNestedInput;
    incidents?: Prisma.IncidentUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutProdOrderNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutProdOrderNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutProdOrderNestedInput;
};
export type ProdOrderUncheckedUpdateManyWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qtePrev?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteReel?: Prisma.FloatFieldUpdateOperationsInput | number;
    debut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    rendement?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ProdOrderCountOutputType
 */
export type ProdOrderCountOutputType = {
    incidents: number;
    mouvements: number;
    materialRequests: number;
};
export type ProdOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    incidents?: boolean | ProdOrderCountOutputTypeCountIncidentsArgs;
    mouvements?: boolean | ProdOrderCountOutputTypeCountMouvementsArgs;
    materialRequests?: boolean | ProdOrderCountOutputTypeCountMaterialRequestsArgs;
};
/**
 * ProdOrderCountOutputType without action
 */
export type ProdOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdOrderCountOutputType
     */
    select?: Prisma.ProdOrderCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProdOrderCountOutputType without action
 */
export type ProdOrderCountOutputTypeCountIncidentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
};
/**
 * ProdOrderCountOutputType without action
 */
export type ProdOrderCountOutputTypeCountMouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MouvementWhereInput;
};
/**
 * ProdOrderCountOutputType without action
 */
export type ProdOrderCountOutputTypeCountMaterialRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialRequestWhereInput;
};
export type ProdOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    produitId?: boolean;
    ligne?: boolean;
    qtePrev?: boolean;
    qteReel?: boolean;
    debut?: boolean;
    fin?: boolean;
    responsableId?: boolean;
    statut?: boolean;
    rendement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.ProdOrder$responsableArgs<ExtArgs>;
    incidents?: boolean | Prisma.ProdOrder$incidentsArgs<ExtArgs>;
    mouvements?: boolean | Prisma.ProdOrder$mouvementsArgs<ExtArgs>;
    materialRequests?: boolean | Prisma.ProdOrder$materialRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProdOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prodOrder"]>;
export type ProdOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    produitId?: boolean;
    ligne?: boolean;
    qtePrev?: boolean;
    qteReel?: boolean;
    debut?: boolean;
    fin?: boolean;
    responsableId?: boolean;
    statut?: boolean;
    rendement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.ProdOrder$responsableArgs<ExtArgs>;
}, ExtArgs["result"]["prodOrder"]>;
export type ProdOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    produitId?: boolean;
    ligne?: boolean;
    qtePrev?: boolean;
    qteReel?: boolean;
    debut?: boolean;
    fin?: boolean;
    responsableId?: boolean;
    statut?: boolean;
    rendement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.ProdOrder$responsableArgs<ExtArgs>;
}, ExtArgs["result"]["prodOrder"]>;
export type ProdOrderSelectScalar = {
    id?: boolean;
    num?: boolean;
    produitId?: boolean;
    ligne?: boolean;
    qtePrev?: boolean;
    qteReel?: boolean;
    debut?: boolean;
    fin?: boolean;
    responsableId?: boolean;
    statut?: boolean;
    rendement?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProdOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "num" | "produitId" | "ligne" | "qtePrev" | "qteReel" | "debut" | "fin" | "responsableId" | "statut" | "rendement" | "createdAt" | "updatedAt", ExtArgs["result"]["prodOrder"]>;
export type ProdOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.ProdOrder$responsableArgs<ExtArgs>;
    incidents?: boolean | Prisma.ProdOrder$incidentsArgs<ExtArgs>;
    mouvements?: boolean | Prisma.ProdOrder$mouvementsArgs<ExtArgs>;
    materialRequests?: boolean | Prisma.ProdOrder$materialRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProdOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProdOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.ProdOrder$responsableArgs<ExtArgs>;
};
export type ProdOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.ProdOrder$responsableArgs<ExtArgs>;
};
export type $ProdOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProdOrder";
    objects: {
        produit: Prisma.$StockItemPayload<ExtArgs>;
        responsable: Prisma.$OperateurPayload<ExtArgs> | null;
        incidents: Prisma.$IncidentPayload<ExtArgs>[];
        mouvements: Prisma.$MouvementPayload<ExtArgs>[];
        materialRequests: Prisma.$MaterialRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        num: string;
        produitId: string;
        ligne: string;
        qtePrev: number;
        qteReel: number;
        debut: Date;
        fin: Date;
        responsableId: string | null;
        statut: string;
        rendement: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["prodOrder"]>;
    composites: {};
};
export type ProdOrderGetPayload<S extends boolean | null | undefined | ProdOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload, S>;
export type ProdOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProdOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProdOrderCountAggregateInputType | true;
};
export interface ProdOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProdOrder'];
        meta: {
            name: 'ProdOrder';
        };
    };
    /**
     * Find zero or one ProdOrder that matches the filter.
     * @param {ProdOrderFindUniqueArgs} args - Arguments to find a ProdOrder
     * @example
     * // Get one ProdOrder
     * const prodOrder = await prisma.prodOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, ProdOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProdOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdOrderFindUniqueOrThrowArgs} args - Arguments to find a ProdOrder
     * @example
     * // Get one ProdOrder
     * const prodOrder = await prisma.prodOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProdOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProdOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdOrderFindFirstArgs} args - Arguments to find a ProdOrder
     * @example
     * // Get one ProdOrder
     * const prodOrder = await prisma.prodOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, ProdOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProdOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdOrderFindFirstOrThrowArgs} args - Arguments to find a ProdOrder
     * @example
     * // Get one ProdOrder
     * const prodOrder = await prisma.prodOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProdOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProdOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdOrders
     * const prodOrders = await prisma.prodOrder.findMany()
     *
     * // Get first 10 ProdOrders
     * const prodOrders = await prisma.prodOrder.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const prodOrderWithIdOnly = await prisma.prodOrder.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProdOrderFindManyArgs>(args?: Prisma.SelectSubset<T, ProdOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProdOrder.
     * @param {ProdOrderCreateArgs} args - Arguments to create a ProdOrder.
     * @example
     * // Create one ProdOrder
     * const ProdOrder = await prisma.prodOrder.create({
     *   data: {
     *     // ... data to create a ProdOrder
     *   }
     * })
     *
     */
    create<T extends ProdOrderCreateArgs>(args: Prisma.SelectSubset<T, ProdOrderCreateArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProdOrders.
     * @param {ProdOrderCreateManyArgs} args - Arguments to create many ProdOrders.
     * @example
     * // Create many ProdOrders
     * const prodOrder = await prisma.prodOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProdOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, ProdOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProdOrders and returns the data saved in the database.
     * @param {ProdOrderCreateManyAndReturnArgs} args - Arguments to create many ProdOrders.
     * @example
     * // Create many ProdOrders
     * const prodOrder = await prisma.prodOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProdOrders and only return the `id`
     * const prodOrderWithIdOnly = await prisma.prodOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProdOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProdOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProdOrder.
     * @param {ProdOrderDeleteArgs} args - Arguments to delete one ProdOrder.
     * @example
     * // Delete one ProdOrder
     * const ProdOrder = await prisma.prodOrder.delete({
     *   where: {
     *     // ... filter to delete one ProdOrder
     *   }
     * })
     *
     */
    delete<T extends ProdOrderDeleteArgs>(args: Prisma.SelectSubset<T, ProdOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProdOrder.
     * @param {ProdOrderUpdateArgs} args - Arguments to update one ProdOrder.
     * @example
     * // Update one ProdOrder
     * const prodOrder = await prisma.prodOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProdOrderUpdateArgs>(args: Prisma.SelectSubset<T, ProdOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProdOrders.
     * @param {ProdOrderDeleteManyArgs} args - Arguments to filter ProdOrders to delete.
     * @example
     * // Delete a few ProdOrders
     * const { count } = await prisma.prodOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProdOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProdOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProdOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdOrders
     * const prodOrder = await prisma.prodOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProdOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, ProdOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProdOrders and returns the data updated in the database.
     * @param {ProdOrderUpdateManyAndReturnArgs} args - Arguments to update many ProdOrders.
     * @example
     * // Update many ProdOrders
     * const prodOrder = await prisma.prodOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProdOrders and only return the `id`
     * const prodOrderWithIdOnly = await prisma.prodOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProdOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProdOrder.
     * @param {ProdOrderUpsertArgs} args - Arguments to update or create a ProdOrder.
     * @example
     * // Update or create a ProdOrder
     * const prodOrder = await prisma.prodOrder.upsert({
     *   create: {
     *     // ... data to create a ProdOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProdOrderUpsertArgs>(args: Prisma.SelectSubset<T, ProdOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProdOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdOrderCountArgs} args - Arguments to filter ProdOrders to count.
     * @example
     * // Count the number of ProdOrders
     * const count = await prisma.prodOrder.count({
     *   where: {
     *     // ... the filter for the ProdOrders we want to count
     *   }
     * })
    **/
    count<T extends ProdOrderCountArgs>(args?: Prisma.Subset<T, ProdOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProdOrderCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProdOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdOrderAggregateArgs>(args: Prisma.Subset<T, ProdOrderAggregateArgs>): Prisma.PrismaPromise<GetProdOrderAggregateType<T>>;
    /**
     * Group by ProdOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdOrderGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProdOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProdOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: ProdOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProdOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProdOrder model
     */
    readonly fields: ProdOrderFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProdOrder.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProdOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    produit<T extends Prisma.StockItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    responsable<T extends Prisma.ProdOrder$responsableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProdOrder$responsableArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    incidents<T extends Prisma.ProdOrder$incidentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProdOrder$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mouvements<T extends Prisma.ProdOrder$mouvementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProdOrder$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materialRequests<T extends Prisma.ProdOrder$materialRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProdOrder$materialRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ProdOrder model
 */
export interface ProdOrderFieldRefs {
    readonly id: Prisma.FieldRef<"ProdOrder", 'String'>;
    readonly num: Prisma.FieldRef<"ProdOrder", 'String'>;
    readonly produitId: Prisma.FieldRef<"ProdOrder", 'String'>;
    readonly ligne: Prisma.FieldRef<"ProdOrder", 'String'>;
    readonly qtePrev: Prisma.FieldRef<"ProdOrder", 'Float'>;
    readonly qteReel: Prisma.FieldRef<"ProdOrder", 'Float'>;
    readonly debut: Prisma.FieldRef<"ProdOrder", 'DateTime'>;
    readonly fin: Prisma.FieldRef<"ProdOrder", 'DateTime'>;
    readonly responsableId: Prisma.FieldRef<"ProdOrder", 'String'>;
    readonly statut: Prisma.FieldRef<"ProdOrder", 'String'>;
    readonly rendement: Prisma.FieldRef<"ProdOrder", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"ProdOrder", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProdOrder", 'DateTime'>;
}
/**
 * ProdOrder findUnique
 */
export type ProdOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProdOrder to fetch.
     */
    where: Prisma.ProdOrderWhereUniqueInput;
};
/**
 * ProdOrder findUniqueOrThrow
 */
export type ProdOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProdOrder to fetch.
     */
    where: Prisma.ProdOrderWhereUniqueInput;
};
/**
 * ProdOrder findFirst
 */
export type ProdOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProdOrder to fetch.
     */
    where?: Prisma.ProdOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdOrders to fetch.
     */
    orderBy?: Prisma.ProdOrderOrderByWithRelationInput | Prisma.ProdOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProdOrders.
     */
    cursor?: Prisma.ProdOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProdOrders.
     */
    distinct?: Prisma.ProdOrderScalarFieldEnum | Prisma.ProdOrderScalarFieldEnum[];
};
/**
 * ProdOrder findFirstOrThrow
 */
export type ProdOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProdOrder to fetch.
     */
    where?: Prisma.ProdOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdOrders to fetch.
     */
    orderBy?: Prisma.ProdOrderOrderByWithRelationInput | Prisma.ProdOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProdOrders.
     */
    cursor?: Prisma.ProdOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProdOrders.
     */
    distinct?: Prisma.ProdOrderScalarFieldEnum | Prisma.ProdOrderScalarFieldEnum[];
};
/**
 * ProdOrder findMany
 */
export type ProdOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProdOrders to fetch.
     */
    where?: Prisma.ProdOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProdOrders to fetch.
     */
    orderBy?: Prisma.ProdOrderOrderByWithRelationInput | Prisma.ProdOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProdOrders.
     */
    cursor?: Prisma.ProdOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProdOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProdOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProdOrders.
     */
    distinct?: Prisma.ProdOrderScalarFieldEnum | Prisma.ProdOrderScalarFieldEnum[];
};
/**
 * ProdOrder create
 */
export type ProdOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProdOrder.
     */
    data: Prisma.XOR<Prisma.ProdOrderCreateInput, Prisma.ProdOrderUncheckedCreateInput>;
};
/**
 * ProdOrder createMany
 */
export type ProdOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdOrders.
     */
    data: Prisma.ProdOrderCreateManyInput | Prisma.ProdOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProdOrder createManyAndReturn
 */
export type ProdOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdOrder
     */
    select?: Prisma.ProdOrderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdOrder
     */
    omit?: Prisma.ProdOrderOmit<ExtArgs> | null;
    /**
     * The data used to create many ProdOrders.
     */
    data: Prisma.ProdOrderCreateManyInput | Prisma.ProdOrderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProdOrder update
 */
export type ProdOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProdOrder.
     */
    data: Prisma.XOR<Prisma.ProdOrderUpdateInput, Prisma.ProdOrderUncheckedUpdateInput>;
    /**
     * Choose, which ProdOrder to update.
     */
    where: Prisma.ProdOrderWhereUniqueInput;
};
/**
 * ProdOrder updateMany
 */
export type ProdOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdOrders.
     */
    data: Prisma.XOR<Prisma.ProdOrderUpdateManyMutationInput, Prisma.ProdOrderUncheckedUpdateManyInput>;
    /**
     * Filter which ProdOrders to update
     */
    where?: Prisma.ProdOrderWhereInput;
    /**
     * Limit how many ProdOrders to update.
     */
    limit?: number;
};
/**
 * ProdOrder updateManyAndReturn
 */
export type ProdOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdOrder
     */
    select?: Prisma.ProdOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProdOrder
     */
    omit?: Prisma.ProdOrderOmit<ExtArgs> | null;
    /**
     * The data used to update ProdOrders.
     */
    data: Prisma.XOR<Prisma.ProdOrderUpdateManyMutationInput, Prisma.ProdOrderUncheckedUpdateManyInput>;
    /**
     * Filter which ProdOrders to update
     */
    where?: Prisma.ProdOrderWhereInput;
    /**
     * Limit how many ProdOrders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProdOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProdOrder upsert
 */
export type ProdOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProdOrder to update in case it exists.
     */
    where: Prisma.ProdOrderWhereUniqueInput;
    /**
     * In case the ProdOrder found by the `where` argument doesn't exist, create a new ProdOrder with this data.
     */
    create: Prisma.XOR<Prisma.ProdOrderCreateInput, Prisma.ProdOrderUncheckedCreateInput>;
    /**
     * In case the ProdOrder was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProdOrderUpdateInput, Prisma.ProdOrderUncheckedUpdateInput>;
};
/**
 * ProdOrder delete
 */
export type ProdOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProdOrder to delete.
     */
    where: Prisma.ProdOrderWhereUniqueInput;
};
/**
 * ProdOrder deleteMany
 */
export type ProdOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProdOrders to delete
     */
    where?: Prisma.ProdOrderWhereInput;
    /**
     * Limit how many ProdOrders to delete.
     */
    limit?: number;
};
/**
 * ProdOrder.responsable
 */
export type ProdOrder$responsableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operateur
     */
    select?: Prisma.OperateurSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Operateur
     */
    omit?: Prisma.OperateurOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OperateurInclude<ExtArgs> | null;
    where?: Prisma.OperateurWhereInput;
};
/**
 * ProdOrder.incidents
 */
export type ProdOrder$incidentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: Prisma.IncidentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Incident
     */
    omit?: Prisma.IncidentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IncidentInclude<ExtArgs> | null;
    where?: Prisma.IncidentWhereInput;
    orderBy?: Prisma.IncidentOrderByWithRelationInput | Prisma.IncidentOrderByWithRelationInput[];
    cursor?: Prisma.IncidentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncidentScalarFieldEnum | Prisma.IncidentScalarFieldEnum[];
};
/**
 * ProdOrder.mouvements
 */
export type ProdOrder$mouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProdOrder.materialRequests
 */
export type ProdOrder$materialRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProdOrder without action
 */
export type ProdOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ProdOrder.d.ts.map