import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ApprovalRecord
 *
 */
export type ApprovalRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalRecordPayload>;
export type AggregateApprovalRecord = {
    _count: ApprovalRecordCountAggregateOutputType | null;
    _min: ApprovalRecordMinAggregateOutputType | null;
    _max: ApprovalRecordMaxAggregateOutputType | null;
};
export type ApprovalRecordMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    valideurId: string | null;
    action: string | null;
    type: string | null;
    module: string | null;
    commentaire: string | null;
    motifRefus: string | null;
    salesRequestId: string | null;
    materialRequestId: string | null;
    createdAt: Date | null;
};
export type ApprovalRecordMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    valideurId: string | null;
    action: string | null;
    type: string | null;
    module: string | null;
    commentaire: string | null;
    motifRefus: string | null;
    salesRequestId: string | null;
    materialRequestId: string | null;
    createdAt: Date | null;
};
export type ApprovalRecordCountAggregateOutputType = {
    id: number;
    date: number;
    valideurId: number;
    action: number;
    type: number;
    module: number;
    commentaire: number;
    motifRefus: number;
    salesRequestId: number;
    materialRequestId: number;
    createdAt: number;
    _all: number;
};
export type ApprovalRecordMinAggregateInputType = {
    id?: true;
    date?: true;
    valideurId?: true;
    action?: true;
    type?: true;
    module?: true;
    commentaire?: true;
    motifRefus?: true;
    salesRequestId?: true;
    materialRequestId?: true;
    createdAt?: true;
};
export type ApprovalRecordMaxAggregateInputType = {
    id?: true;
    date?: true;
    valideurId?: true;
    action?: true;
    type?: true;
    module?: true;
    commentaire?: true;
    motifRefus?: true;
    salesRequestId?: true;
    materialRequestId?: true;
    createdAt?: true;
};
export type ApprovalRecordCountAggregateInputType = {
    id?: true;
    date?: true;
    valideurId?: true;
    action?: true;
    type?: true;
    module?: true;
    commentaire?: true;
    motifRefus?: true;
    salesRequestId?: true;
    materialRequestId?: true;
    createdAt?: true;
    _all?: true;
};
export type ApprovalRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRecord to aggregate.
     */
    where?: Prisma.ApprovalRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: Prisma.ApprovalRecordOrderByWithRelationInput | Prisma.ApprovalRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApprovalRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ApprovalRecords
    **/
    _count?: true | ApprovalRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalRecordMaxAggregateInputType;
};
export type GetApprovalRecordAggregateType<T extends ApprovalRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalRecord[P]> : Prisma.GetScalarType<T[P], AggregateApprovalRecord[P]>;
};
export type ApprovalRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRecordWhereInput;
    orderBy?: Prisma.ApprovalRecordOrderByWithAggregationInput | Prisma.ApprovalRecordOrderByWithAggregationInput[];
    by: Prisma.ApprovalRecordScalarFieldEnum[] | Prisma.ApprovalRecordScalarFieldEnum;
    having?: Prisma.ApprovalRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalRecordCountAggregateInputType | true;
    _min?: ApprovalRecordMinAggregateInputType;
    _max?: ApprovalRecordMaxAggregateInputType;
};
export type ApprovalRecordGroupByOutputType = {
    id: string;
    date: Date;
    valideurId: string;
    action: string;
    type: string;
    module: string;
    commentaire: string | null;
    motifRefus: string | null;
    salesRequestId: string | null;
    materialRequestId: string | null;
    createdAt: Date;
    _count: ApprovalRecordCountAggregateOutputType | null;
    _min: ApprovalRecordMinAggregateOutputType | null;
    _max: ApprovalRecordMaxAggregateOutputType | null;
};
export type GetApprovalRecordGroupByPayload<T extends ApprovalRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalRecordGroupByOutputType[P]>;
}>>;
export type ApprovalRecordWhereInput = {
    AND?: Prisma.ApprovalRecordWhereInput | Prisma.ApprovalRecordWhereInput[];
    OR?: Prisma.ApprovalRecordWhereInput[];
    NOT?: Prisma.ApprovalRecordWhereInput | Prisma.ApprovalRecordWhereInput[];
    id?: Prisma.StringFilter<"ApprovalRecord"> | string;
    date?: Prisma.DateTimeFilter<"ApprovalRecord"> | Date | string;
    valideurId?: Prisma.StringFilter<"ApprovalRecord"> | string;
    action?: Prisma.StringFilter<"ApprovalRecord"> | string;
    type?: Prisma.StringFilter<"ApprovalRecord"> | string;
    module?: Prisma.StringFilter<"ApprovalRecord"> | string;
    commentaire?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    motifRefus?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    salesRequestId?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    materialRequestId?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalRecord"> | Date | string;
    valideur?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    salesRequest?: Prisma.XOR<Prisma.SalesRequestNullableScalarRelationFilter, Prisma.SalesRequestWhereInput> | null;
    materialRequest?: Prisma.XOR<Prisma.MaterialRequestNullableScalarRelationFilter, Prisma.MaterialRequestWhereInput> | null;
};
export type ApprovalRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    motifRefus?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    valideur?: Prisma.UserOrderByWithRelationInput;
    salesRequest?: Prisma.SalesRequestOrderByWithRelationInput;
    materialRequest?: Prisma.MaterialRequestOrderByWithRelationInput;
};
export type ApprovalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApprovalRecordWhereInput | Prisma.ApprovalRecordWhereInput[];
    OR?: Prisma.ApprovalRecordWhereInput[];
    NOT?: Prisma.ApprovalRecordWhereInput | Prisma.ApprovalRecordWhereInput[];
    date?: Prisma.DateTimeFilter<"ApprovalRecord"> | Date | string;
    valideurId?: Prisma.StringFilter<"ApprovalRecord"> | string;
    action?: Prisma.StringFilter<"ApprovalRecord"> | string;
    type?: Prisma.StringFilter<"ApprovalRecord"> | string;
    module?: Prisma.StringFilter<"ApprovalRecord"> | string;
    commentaire?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    motifRefus?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    salesRequestId?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    materialRequestId?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalRecord"> | Date | string;
    valideur?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    salesRequest?: Prisma.XOR<Prisma.SalesRequestNullableScalarRelationFilter, Prisma.SalesRequestWhereInput> | null;
    materialRequest?: Prisma.XOR<Prisma.MaterialRequestNullableScalarRelationFilter, Prisma.MaterialRequestWhereInput> | null;
}, "id">;
export type ApprovalRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    motifRefus?: Prisma.SortOrderInput | Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ApprovalRecordCountOrderByAggregateInput;
    _max?: Prisma.ApprovalRecordMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalRecordMinOrderByAggregateInput;
};
export type ApprovalRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalRecordScalarWhereWithAggregatesInput | Prisma.ApprovalRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalRecordScalarWhereWithAggregatesInput | Prisma.ApprovalRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApprovalRecord"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"ApprovalRecord"> | Date | string;
    valideurId?: Prisma.StringWithAggregatesFilter<"ApprovalRecord"> | string;
    action?: Prisma.StringWithAggregatesFilter<"ApprovalRecord"> | string;
    type?: Prisma.StringWithAggregatesFilter<"ApprovalRecord"> | string;
    module?: Prisma.StringWithAggregatesFilter<"ApprovalRecord"> | string;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"ApprovalRecord"> | string | null;
    motifRefus?: Prisma.StringNullableWithAggregatesFilter<"ApprovalRecord"> | string | null;
    salesRequestId?: Prisma.StringNullableWithAggregatesFilter<"ApprovalRecord"> | string | null;
    materialRequestId?: Prisma.StringNullableWithAggregatesFilter<"ApprovalRecord"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalRecord"> | Date | string;
};
export type ApprovalRecordCreateInput = {
    id?: string;
    date?: Date | string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    createdAt?: Date | string;
    valideur: Prisma.UserCreateNestedOneWithoutApprovalRecordsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutApprovalRecordsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutApprovalRecordsInput;
};
export type ApprovalRecordUncheckedCreateInput = {
    id?: string;
    date?: Date | string;
    valideurId: string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideur?: Prisma.UserUpdateOneRequiredWithoutApprovalRecordsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutApprovalRecordsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutApprovalRecordsNestedInput;
};
export type ApprovalRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideurId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordCreateManyInput = {
    id?: string;
    date?: Date | string;
    valideurId: string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideurId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordListRelationFilter = {
    every?: Prisma.ApprovalRecordWhereInput;
    some?: Prisma.ApprovalRecordWhereInput;
    none?: Prisma.ApprovalRecordWhereInput;
};
export type ApprovalRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApprovalRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    motifRefus?: Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    motifRefus?: Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    motifRefus?: Prisma.SortOrder;
    salesRequestId?: Prisma.SortOrder;
    materialRequestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalRecordCreateNestedManyWithoutValideurInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutValideurInput, Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput> | Prisma.ApprovalRecordCreateWithoutValideurInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput | Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput[];
    createMany?: Prisma.ApprovalRecordCreateManyValideurInputEnvelope;
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
};
export type ApprovalRecordUncheckedCreateNestedManyWithoutValideurInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutValideurInput, Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput> | Prisma.ApprovalRecordCreateWithoutValideurInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput | Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput[];
    createMany?: Prisma.ApprovalRecordCreateManyValideurInputEnvelope;
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
};
export type ApprovalRecordUpdateManyWithoutValideurNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutValideurInput, Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput> | Prisma.ApprovalRecordCreateWithoutValideurInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput | Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput[];
    upsert?: Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutValideurInput | Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutValideurInput[];
    createMany?: Prisma.ApprovalRecordCreateManyValideurInputEnvelope;
    set?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    delete?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    update?: Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutValideurInput | Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutValideurInput[];
    updateMany?: Prisma.ApprovalRecordUpdateManyWithWhereWithoutValideurInput | Prisma.ApprovalRecordUpdateManyWithWhereWithoutValideurInput[];
    deleteMany?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
};
export type ApprovalRecordUncheckedUpdateManyWithoutValideurNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutValideurInput, Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput> | Prisma.ApprovalRecordCreateWithoutValideurInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput | Prisma.ApprovalRecordCreateOrConnectWithoutValideurInput[];
    upsert?: Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutValideurInput | Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutValideurInput[];
    createMany?: Prisma.ApprovalRecordCreateManyValideurInputEnvelope;
    set?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    delete?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    update?: Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutValideurInput | Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutValideurInput[];
    updateMany?: Prisma.ApprovalRecordUpdateManyWithWhereWithoutValideurInput | Prisma.ApprovalRecordUpdateManyWithWhereWithoutValideurInput[];
    deleteMany?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
};
export type ApprovalRecordCreateNestedManyWithoutSalesRequestInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput> | Prisma.ApprovalRecordCreateWithoutSalesRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManySalesRequestInputEnvelope;
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
};
export type ApprovalRecordUncheckedCreateNestedManyWithoutSalesRequestInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput> | Prisma.ApprovalRecordCreateWithoutSalesRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManySalesRequestInputEnvelope;
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
};
export type ApprovalRecordUpdateManyWithoutSalesRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput> | Prisma.ApprovalRecordCreateWithoutSalesRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput[];
    upsert?: Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutSalesRequestInput | Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutSalesRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManySalesRequestInputEnvelope;
    set?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    delete?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    update?: Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutSalesRequestInput | Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutSalesRequestInput[];
    updateMany?: Prisma.ApprovalRecordUpdateManyWithWhereWithoutSalesRequestInput | Prisma.ApprovalRecordUpdateManyWithWhereWithoutSalesRequestInput[];
    deleteMany?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
};
export type ApprovalRecordUncheckedUpdateManyWithoutSalesRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput> | Prisma.ApprovalRecordCreateWithoutSalesRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutSalesRequestInput[];
    upsert?: Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutSalesRequestInput | Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutSalesRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManySalesRequestInputEnvelope;
    set?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    delete?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    update?: Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutSalesRequestInput | Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutSalesRequestInput[];
    updateMany?: Prisma.ApprovalRecordUpdateManyWithWhereWithoutSalesRequestInput | Prisma.ApprovalRecordUpdateManyWithWhereWithoutSalesRequestInput[];
    deleteMany?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
};
export type ApprovalRecordCreateNestedManyWithoutMaterialRequestInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput> | Prisma.ApprovalRecordCreateWithoutMaterialRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManyMaterialRequestInputEnvelope;
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
};
export type ApprovalRecordUncheckedCreateNestedManyWithoutMaterialRequestInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput> | Prisma.ApprovalRecordCreateWithoutMaterialRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManyMaterialRequestInputEnvelope;
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
};
export type ApprovalRecordUpdateManyWithoutMaterialRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput> | Prisma.ApprovalRecordCreateWithoutMaterialRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput[];
    upsert?: Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutMaterialRequestInput | Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutMaterialRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManyMaterialRequestInputEnvelope;
    set?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    delete?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    update?: Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutMaterialRequestInput | Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutMaterialRequestInput[];
    updateMany?: Prisma.ApprovalRecordUpdateManyWithWhereWithoutMaterialRequestInput | Prisma.ApprovalRecordUpdateManyWithWhereWithoutMaterialRequestInput[];
    deleteMany?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
};
export type ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput> | Prisma.ApprovalRecordCreateWithoutMaterialRequestInput[] | Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput[];
    connectOrCreate?: Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput | Prisma.ApprovalRecordCreateOrConnectWithoutMaterialRequestInput[];
    upsert?: Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutMaterialRequestInput | Prisma.ApprovalRecordUpsertWithWhereUniqueWithoutMaterialRequestInput[];
    createMany?: Prisma.ApprovalRecordCreateManyMaterialRequestInputEnvelope;
    set?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    delete?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    connect?: Prisma.ApprovalRecordWhereUniqueInput | Prisma.ApprovalRecordWhereUniqueInput[];
    update?: Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutMaterialRequestInput | Prisma.ApprovalRecordUpdateWithWhereUniqueWithoutMaterialRequestInput[];
    updateMany?: Prisma.ApprovalRecordUpdateManyWithWhereWithoutMaterialRequestInput | Prisma.ApprovalRecordUpdateManyWithWhereWithoutMaterialRequestInput[];
    deleteMany?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
};
export type ApprovalRecordCreateWithoutValideurInput = {
    id?: string;
    date?: Date | string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    createdAt?: Date | string;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutApprovalRecordsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutApprovalRecordsInput;
};
export type ApprovalRecordUncheckedCreateWithoutValideurInput = {
    id?: string;
    date?: Date | string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordCreateOrConnectWithoutValideurInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutValideurInput, Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput>;
};
export type ApprovalRecordCreateManyValideurInputEnvelope = {
    data: Prisma.ApprovalRecordCreateManyValideurInput | Prisma.ApprovalRecordCreateManyValideurInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRecordUpsertWithWhereUniqueWithoutValideurInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalRecordUpdateWithoutValideurInput, Prisma.ApprovalRecordUncheckedUpdateWithoutValideurInput>;
    create: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutValideurInput, Prisma.ApprovalRecordUncheckedCreateWithoutValideurInput>;
};
export type ApprovalRecordUpdateWithWhereUniqueWithoutValideurInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateWithoutValideurInput, Prisma.ApprovalRecordUncheckedUpdateWithoutValideurInput>;
};
export type ApprovalRecordUpdateManyWithWhereWithoutValideurInput = {
    where: Prisma.ApprovalRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateManyMutationInput, Prisma.ApprovalRecordUncheckedUpdateManyWithoutValideurInput>;
};
export type ApprovalRecordScalarWhereInput = {
    AND?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
    OR?: Prisma.ApprovalRecordScalarWhereInput[];
    NOT?: Prisma.ApprovalRecordScalarWhereInput | Prisma.ApprovalRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"ApprovalRecord"> | string;
    date?: Prisma.DateTimeFilter<"ApprovalRecord"> | Date | string;
    valideurId?: Prisma.StringFilter<"ApprovalRecord"> | string;
    action?: Prisma.StringFilter<"ApprovalRecord"> | string;
    type?: Prisma.StringFilter<"ApprovalRecord"> | string;
    module?: Prisma.StringFilter<"ApprovalRecord"> | string;
    commentaire?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    motifRefus?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    salesRequestId?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    materialRequestId?: Prisma.StringNullableFilter<"ApprovalRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalRecord"> | Date | string;
};
export type ApprovalRecordCreateWithoutSalesRequestInput = {
    id?: string;
    date?: Date | string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    createdAt?: Date | string;
    valideur: Prisma.UserCreateNestedOneWithoutApprovalRecordsInput;
    materialRequest?: Prisma.MaterialRequestCreateNestedOneWithoutApprovalRecordsInput;
};
export type ApprovalRecordUncheckedCreateWithoutSalesRequestInput = {
    id?: string;
    date?: Date | string;
    valideurId: string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordCreateOrConnectWithoutSalesRequestInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput>;
};
export type ApprovalRecordCreateManySalesRequestInputEnvelope = {
    data: Prisma.ApprovalRecordCreateManySalesRequestInput | Prisma.ApprovalRecordCreateManySalesRequestInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRecordUpsertWithWhereUniqueWithoutSalesRequestInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalRecordUpdateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedUpdateWithoutSalesRequestInput>;
    create: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutSalesRequestInput>;
};
export type ApprovalRecordUpdateWithWhereUniqueWithoutSalesRequestInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateWithoutSalesRequestInput, Prisma.ApprovalRecordUncheckedUpdateWithoutSalesRequestInput>;
};
export type ApprovalRecordUpdateManyWithWhereWithoutSalesRequestInput = {
    where: Prisma.ApprovalRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateManyMutationInput, Prisma.ApprovalRecordUncheckedUpdateManyWithoutSalesRequestInput>;
};
export type ApprovalRecordCreateWithoutMaterialRequestInput = {
    id?: string;
    date?: Date | string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    createdAt?: Date | string;
    valideur: Prisma.UserCreateNestedOneWithoutApprovalRecordsInput;
    salesRequest?: Prisma.SalesRequestCreateNestedOneWithoutApprovalRecordsInput;
};
export type ApprovalRecordUncheckedCreateWithoutMaterialRequestInput = {
    id?: string;
    date?: Date | string;
    valideurId: string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    salesRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordCreateOrConnectWithoutMaterialRequestInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput>;
};
export type ApprovalRecordCreateManyMaterialRequestInputEnvelope = {
    data: Prisma.ApprovalRecordCreateManyMaterialRequestInput | Prisma.ApprovalRecordCreateManyMaterialRequestInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRecordUpsertWithWhereUniqueWithoutMaterialRequestInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalRecordUpdateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedUpdateWithoutMaterialRequestInput>;
    create: Prisma.XOR<Prisma.ApprovalRecordCreateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedCreateWithoutMaterialRequestInput>;
};
export type ApprovalRecordUpdateWithWhereUniqueWithoutMaterialRequestInput = {
    where: Prisma.ApprovalRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateWithoutMaterialRequestInput, Prisma.ApprovalRecordUncheckedUpdateWithoutMaterialRequestInput>;
};
export type ApprovalRecordUpdateManyWithWhereWithoutMaterialRequestInput = {
    where: Prisma.ApprovalRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateManyMutationInput, Prisma.ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestInput>;
};
export type ApprovalRecordCreateManyValideurInput = {
    id?: string;
    date?: Date | string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    salesRequestId?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordUpdateWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutApprovalRecordsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutApprovalRecordsNestedInput;
};
export type ApprovalRecordUncheckedUpdateWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordUncheckedUpdateManyWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordCreateManySalesRequestInput = {
    id?: string;
    date?: Date | string;
    valideurId: string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    materialRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordUpdateWithoutSalesRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideur?: Prisma.UserUpdateOneRequiredWithoutApprovalRecordsNestedInput;
    materialRequest?: Prisma.MaterialRequestUpdateOneWithoutApprovalRecordsNestedInput;
};
export type ApprovalRecordUncheckedUpdateWithoutSalesRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideurId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordUncheckedUpdateManyWithoutSalesRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideurId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    materialRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordCreateManyMaterialRequestInput = {
    id?: string;
    date?: Date | string;
    valideurId: string;
    action: string;
    type: string;
    module: string;
    commentaire?: string | null;
    motifRefus?: string | null;
    salesRequestId?: string | null;
    createdAt?: Date | string;
};
export type ApprovalRecordUpdateWithoutMaterialRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideur?: Prisma.UserUpdateOneRequiredWithoutApprovalRecordsNestedInput;
    salesRequest?: Prisma.SalesRequestUpdateOneWithoutApprovalRecordsNestedInput;
};
export type ApprovalRecordUncheckedUpdateWithoutMaterialRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideurId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valideurId?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.StringFieldUpdateOperationsInput | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motifRefus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    salesRequestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    valideurId?: boolean;
    action?: boolean;
    type?: boolean;
    module?: boolean;
    commentaire?: boolean;
    motifRefus?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
    valideur?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.ApprovalRecord$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.ApprovalRecord$materialRequestArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRecord"]>;
export type ApprovalRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    valideurId?: boolean;
    action?: boolean;
    type?: boolean;
    module?: boolean;
    commentaire?: boolean;
    motifRefus?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
    valideur?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.ApprovalRecord$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.ApprovalRecord$materialRequestArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRecord"]>;
export type ApprovalRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    valideurId?: boolean;
    action?: boolean;
    type?: boolean;
    module?: boolean;
    commentaire?: boolean;
    motifRefus?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
    valideur?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.ApprovalRecord$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.ApprovalRecord$materialRequestArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRecord"]>;
export type ApprovalRecordSelectScalar = {
    id?: boolean;
    date?: boolean;
    valideurId?: boolean;
    action?: boolean;
    type?: boolean;
    module?: boolean;
    commentaire?: boolean;
    motifRefus?: boolean;
    salesRequestId?: boolean;
    materialRequestId?: boolean;
    createdAt?: boolean;
};
export type ApprovalRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "valideurId" | "action" | "type" | "module" | "commentaire" | "motifRefus" | "salesRequestId" | "materialRequestId" | "createdAt", ExtArgs["result"]["approvalRecord"]>;
export type ApprovalRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    valideur?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.ApprovalRecord$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.ApprovalRecord$materialRequestArgs<ExtArgs>;
};
export type ApprovalRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    valideur?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.ApprovalRecord$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.ApprovalRecord$materialRequestArgs<ExtArgs>;
};
export type ApprovalRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    valideur?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    salesRequest?: boolean | Prisma.ApprovalRecord$salesRequestArgs<ExtArgs>;
    materialRequest?: boolean | Prisma.ApprovalRecord$materialRequestArgs<ExtArgs>;
};
export type $ApprovalRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalRecord";
    objects: {
        valideur: Prisma.$UserPayload<ExtArgs>;
        salesRequest: Prisma.$SalesRequestPayload<ExtArgs> | null;
        materialRequest: Prisma.$MaterialRequestPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        valideurId: string;
        action: string;
        type: string;
        module: string;
        commentaire: string | null;
        motifRefus: string | null;
        salesRequestId: string | null;
        materialRequestId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["approvalRecord"]>;
    composites: {};
};
export type ApprovalRecordGetPayload<S extends boolean | null | undefined | ApprovalRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload, S>;
export type ApprovalRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalRecordCountAggregateInputType | true;
};
export interface ApprovalRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRecord'];
        meta: {
            name: 'ApprovalRecord';
        };
    };
    /**
     * Find zero or one ApprovalRecord that matches the filter.
     * @param {ApprovalRecordFindUniqueArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ApprovalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalRecordFindUniqueOrThrowArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApprovalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordFindFirstArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApprovalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordFindFirstOrThrowArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ApprovalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalRecords
     * const approvalRecords = await prisma.approvalRecord.findMany()
     *
     * // Get first 10 ApprovalRecords
     * const approvalRecords = await prisma.approvalRecord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const approvalRecordWithIdOnly = await prisma.approvalRecord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApprovalRecordFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ApprovalRecord.
     * @param {ApprovalRecordCreateArgs} args - Arguments to create a ApprovalRecord.
     * @example
     * // Create one ApprovalRecord
     * const ApprovalRecord = await prisma.approvalRecord.create({
     *   data: {
     *     // ... data to create a ApprovalRecord
     *   }
     * })
     *
     */
    create<T extends ApprovalRecordCreateArgs>(args: Prisma.SelectSubset<T, ApprovalRecordCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ApprovalRecords.
     * @param {ApprovalRecordCreateManyArgs} args - Arguments to create many ApprovalRecords.
     * @example
     * // Create many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApprovalRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ApprovalRecords and returns the data saved in the database.
     * @param {ApprovalRecordCreateManyAndReturnArgs} args - Arguments to create many ApprovalRecords.
     * @example
     * // Create many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ApprovalRecords and only return the `id`
     * const approvalRecordWithIdOnly = await prisma.approvalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApprovalRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ApprovalRecord.
     * @param {ApprovalRecordDeleteArgs} args - Arguments to delete one ApprovalRecord.
     * @example
     * // Delete one ApprovalRecord
     * const ApprovalRecord = await prisma.approvalRecord.delete({
     *   where: {
     *     // ... filter to delete one ApprovalRecord
     *   }
     * })
     *
     */
    delete<T extends ApprovalRecordDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ApprovalRecord.
     * @param {ApprovalRecordUpdateArgs} args - Arguments to update one ApprovalRecord.
     * @example
     * // Update one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApprovalRecordUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ApprovalRecords.
     * @param {ApprovalRecordDeleteManyArgs} args - Arguments to filter ApprovalRecords to delete.
     * @example
     * // Delete a few ApprovalRecords
     * const { count } = await prisma.approvalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApprovalRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApprovalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApprovalRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApprovalRecords and returns the data updated in the database.
     * @param {ApprovalRecordUpdateManyAndReturnArgs} args - Arguments to update many ApprovalRecords.
     * @example
     * // Update many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ApprovalRecords and only return the `id`
     * const approvalRecordWithIdOnly = await prisma.approvalRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApprovalRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ApprovalRecord.
     * @param {ApprovalRecordUpsertArgs} args - Arguments to update or create a ApprovalRecord.
     * @example
     * // Update or create a ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.upsert({
     *   create: {
     *     // ... data to create a ApprovalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalRecord we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalRecordUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalRecordClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ApprovalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordCountArgs} args - Arguments to filter ApprovalRecords to count.
     * @example
     * // Count the number of ApprovalRecords
     * const count = await prisma.approvalRecord.count({
     *   where: {
     *     // ... the filter for the ApprovalRecords we want to count
     *   }
     * })
    **/
    count<T extends ApprovalRecordCountArgs>(args?: Prisma.Subset<T, ApprovalRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalRecordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ApprovalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApprovalRecordAggregateArgs>(args: Prisma.Subset<T, ApprovalRecordAggregateArgs>): Prisma.PrismaPromise<GetApprovalRecordAggregateType<T>>;
    /**
     * Group by ApprovalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ApprovalRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ApprovalRecord model
     */
    readonly fields: ApprovalRecordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ApprovalRecord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApprovalRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    valideur<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    salesRequest<T extends Prisma.ApprovalRecord$salesRequestArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalRecord$salesRequestArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    materialRequest<T extends Prisma.ApprovalRecord$materialRequestArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalRecord$materialRequestArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ApprovalRecord model
 */
export interface ApprovalRecordFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly date: Prisma.FieldRef<"ApprovalRecord", 'DateTime'>;
    readonly valideurId: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly action: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly type: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly module: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly commentaire: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly motifRefus: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly salesRequestId: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly materialRequestId: Prisma.FieldRef<"ApprovalRecord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ApprovalRecord", 'DateTime'>;
}
/**
 * ApprovalRecord findUnique
 */
export type ApprovalRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where: Prisma.ApprovalRecordWhereUniqueInput;
};
/**
 * ApprovalRecord findUniqueOrThrow
 */
export type ApprovalRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where: Prisma.ApprovalRecordWhereUniqueInput;
};
/**
 * ApprovalRecord findFirst
 */
export type ApprovalRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where?: Prisma.ApprovalRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: Prisma.ApprovalRecordOrderByWithRelationInput | Prisma.ApprovalRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApprovalRecords.
     */
    cursor?: Prisma.ApprovalRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApprovalRecords.
     */
    distinct?: Prisma.ApprovalRecordScalarFieldEnum | Prisma.ApprovalRecordScalarFieldEnum[];
};
/**
 * ApprovalRecord findFirstOrThrow
 */
export type ApprovalRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where?: Prisma.ApprovalRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: Prisma.ApprovalRecordOrderByWithRelationInput | Prisma.ApprovalRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApprovalRecords.
     */
    cursor?: Prisma.ApprovalRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApprovalRecords.
     */
    distinct?: Prisma.ApprovalRecordScalarFieldEnum | Prisma.ApprovalRecordScalarFieldEnum[];
};
/**
 * ApprovalRecord findMany
 */
export type ApprovalRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * Filter, which ApprovalRecords to fetch.
     */
    where?: Prisma.ApprovalRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: Prisma.ApprovalRecordOrderByWithRelationInput | Prisma.ApprovalRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ApprovalRecords.
     */
    cursor?: Prisma.ApprovalRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApprovalRecords.
     */
    distinct?: Prisma.ApprovalRecordScalarFieldEnum | Prisma.ApprovalRecordScalarFieldEnum[];
};
/**
 * ApprovalRecord create
 */
export type ApprovalRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * The data needed to create a ApprovalRecord.
     */
    data: Prisma.XOR<Prisma.ApprovalRecordCreateInput, Prisma.ApprovalRecordUncheckedCreateInput>;
};
/**
 * ApprovalRecord createMany
 */
export type ApprovalRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalRecords.
     */
    data: Prisma.ApprovalRecordCreateManyInput | Prisma.ApprovalRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ApprovalRecord createManyAndReturn
 */
export type ApprovalRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * The data used to create many ApprovalRecords.
     */
    data: Prisma.ApprovalRecordCreateManyInput | Prisma.ApprovalRecordCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ApprovalRecord update
 */
export type ApprovalRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * The data needed to update a ApprovalRecord.
     */
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateInput, Prisma.ApprovalRecordUncheckedUpdateInput>;
    /**
     * Choose, which ApprovalRecord to update.
     */
    where: Prisma.ApprovalRecordWhereUniqueInput;
};
/**
 * ApprovalRecord updateMany
 */
export type ApprovalRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalRecords.
     */
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateManyMutationInput, Prisma.ApprovalRecordUncheckedUpdateManyInput>;
    /**
     * Filter which ApprovalRecords to update
     */
    where?: Prisma.ApprovalRecordWhereInput;
    /**
     * Limit how many ApprovalRecords to update.
     */
    limit?: number;
};
/**
 * ApprovalRecord updateManyAndReturn
 */
export type ApprovalRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * The data used to update ApprovalRecords.
     */
    data: Prisma.XOR<Prisma.ApprovalRecordUpdateManyMutationInput, Prisma.ApprovalRecordUncheckedUpdateManyInput>;
    /**
     * Filter which ApprovalRecords to update
     */
    where?: Prisma.ApprovalRecordWhereInput;
    /**
     * Limit how many ApprovalRecords to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ApprovalRecord upsert
 */
export type ApprovalRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * The filter to search for the ApprovalRecord to update in case it exists.
     */
    where: Prisma.ApprovalRecordWhereUniqueInput;
    /**
     * In case the ApprovalRecord found by the `where` argument doesn't exist, create a new ApprovalRecord with this data.
     */
    create: Prisma.XOR<Prisma.ApprovalRecordCreateInput, Prisma.ApprovalRecordUncheckedCreateInput>;
    /**
     * In case the ApprovalRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApprovalRecordUpdateInput, Prisma.ApprovalRecordUncheckedUpdateInput>;
};
/**
 * ApprovalRecord delete
 */
export type ApprovalRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
    /**
     * Filter which ApprovalRecord to delete.
     */
    where: Prisma.ApprovalRecordWhereUniqueInput;
};
/**
 * ApprovalRecord deleteMany
 */
export type ApprovalRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRecords to delete
     */
    where?: Prisma.ApprovalRecordWhereInput;
    /**
     * Limit how many ApprovalRecords to delete.
     */
    limit?: number;
};
/**
 * ApprovalRecord.salesRequest
 */
export type ApprovalRecord$salesRequestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ApprovalRecord.materialRequest
 */
export type ApprovalRecord$materialRequestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ApprovalRecord without action
 */
export type ApprovalRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: Prisma.ApprovalRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: Prisma.ApprovalRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApprovalRecordInclude<ExtArgs> | null;
};
//# sourceMappingURL=ApprovalRecord.d.ts.map