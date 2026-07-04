import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MaterialRequest
 *
 */
export type MaterialRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$MaterialRequestPayload>;
export type AggregateMaterialRequest = {
    _count: MaterialRequestCountAggregateOutputType | null;
    _avg: MaterialRequestAvgAggregateOutputType | null;
    _sum: MaterialRequestSumAggregateOutputType | null;
    _min: MaterialRequestMinAggregateOutputType | null;
    _max: MaterialRequestMaxAggregateOutputType | null;
};
export type MaterialRequestAvgAggregateOutputType = {
    qteDemandee: number | null;
    qteValidee: number | null;
};
export type MaterialRequestSumAggregateOutputType = {
    qteDemandee: number | null;
    qteValidee: number | null;
};
export type MaterialRequestMinAggregateOutputType = {
    id: string | null;
    num: string | null;
    date: Date | null;
    prodOrderId: string | null;
    operateurId: string | null;
    ligne: string | null;
    matiereId: string | null;
    qteDemandee: number | null;
    qteValidee: number | null;
    commentaires: string | null;
    statut: string | null;
    valideurId: string | null;
    dateValidation: Date | null;
    docBC: string | null;
    docBL: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaterialRequestMaxAggregateOutputType = {
    id: string | null;
    num: string | null;
    date: Date | null;
    prodOrderId: string | null;
    operateurId: string | null;
    ligne: string | null;
    matiereId: string | null;
    qteDemandee: number | null;
    qteValidee: number | null;
    commentaires: string | null;
    statut: string | null;
    valideurId: string | null;
    dateValidation: Date | null;
    docBC: string | null;
    docBL: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaterialRequestCountAggregateOutputType = {
    id: number;
    num: number;
    date: number;
    prodOrderId: number;
    operateurId: number;
    ligne: number;
    matiereId: number;
    qteDemandee: number;
    qteValidee: number;
    commentaires: number;
    statut: number;
    valideurId: number;
    dateValidation: number;
    docBC: number;
    docBL: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MaterialRequestAvgAggregateInputType = {
    qteDemandee?: true;
    qteValidee?: true;
};
export type MaterialRequestSumAggregateInputType = {
    qteDemandee?: true;
    qteValidee?: true;
};
export type MaterialRequestMinAggregateInputType = {
    id?: true;
    num?: true;
    date?: true;
    prodOrderId?: true;
    operateurId?: true;
    ligne?: true;
    matiereId?: true;
    qteDemandee?: true;
    qteValidee?: true;
    commentaires?: true;
    statut?: true;
    valideurId?: true;
    dateValidation?: true;
    docBC?: true;
    docBL?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaterialRequestMaxAggregateInputType = {
    id?: true;
    num?: true;
    date?: true;
    prodOrderId?: true;
    operateurId?: true;
    ligne?: true;
    matiereId?: true;
    qteDemandee?: true;
    qteValidee?: true;
    commentaires?: true;
    statut?: true;
    valideurId?: true;
    dateValidation?: true;
    docBC?: true;
    docBL?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaterialRequestCountAggregateInputType = {
    id?: true;
    num?: true;
    date?: true;
    prodOrderId?: true;
    operateurId?: true;
    ligne?: true;
    matiereId?: true;
    qteDemandee?: true;
    qteValidee?: true;
    commentaires?: true;
    statut?: true;
    valideurId?: true;
    dateValidation?: true;
    docBC?: true;
    docBL?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MaterialRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialRequest to aggregate.
     */
    where?: Prisma.MaterialRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaterialRequests to fetch.
     */
    orderBy?: Prisma.MaterialRequestOrderByWithRelationInput | Prisma.MaterialRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MaterialRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaterialRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaterialRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MaterialRequests
    **/
    _count?: true | MaterialRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MaterialRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MaterialRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MaterialRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MaterialRequestMaxAggregateInputType;
};
export type GetMaterialRequestAggregateType<T extends MaterialRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterialRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterialRequest[P]> : Prisma.GetScalarType<T[P], AggregateMaterialRequest[P]>;
};
export type MaterialRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialRequestWhereInput;
    orderBy?: Prisma.MaterialRequestOrderByWithAggregationInput | Prisma.MaterialRequestOrderByWithAggregationInput[];
    by: Prisma.MaterialRequestScalarFieldEnum[] | Prisma.MaterialRequestScalarFieldEnum;
    having?: Prisma.MaterialRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaterialRequestCountAggregateInputType | true;
    _avg?: MaterialRequestAvgAggregateInputType;
    _sum?: MaterialRequestSumAggregateInputType;
    _min?: MaterialRequestMinAggregateInputType;
    _max?: MaterialRequestMaxAggregateInputType;
};
export type MaterialRequestGroupByOutputType = {
    id: string;
    num: string;
    date: Date;
    prodOrderId: string;
    operateurId: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee: number | null;
    commentaires: string | null;
    statut: string;
    valideurId: string | null;
    dateValidation: Date | null;
    docBC: string | null;
    docBL: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MaterialRequestCountAggregateOutputType | null;
    _avg: MaterialRequestAvgAggregateOutputType | null;
    _sum: MaterialRequestSumAggregateOutputType | null;
    _min: MaterialRequestMinAggregateOutputType | null;
    _max: MaterialRequestMaxAggregateOutputType | null;
};
export type GetMaterialRequestGroupByPayload<T extends MaterialRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaterialRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaterialRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaterialRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaterialRequestGroupByOutputType[P]>;
}>>;
export type MaterialRequestWhereInput = {
    AND?: Prisma.MaterialRequestWhereInput | Prisma.MaterialRequestWhereInput[];
    OR?: Prisma.MaterialRequestWhereInput[];
    NOT?: Prisma.MaterialRequestWhereInput | Prisma.MaterialRequestWhereInput[];
    id?: Prisma.StringFilter<"MaterialRequest"> | string;
    num?: Prisma.StringFilter<"MaterialRequest"> | string;
    date?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    prodOrderId?: Prisma.StringFilter<"MaterialRequest"> | string;
    operateurId?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    ligne?: Prisma.StringFilter<"MaterialRequest"> | string;
    matiereId?: Prisma.StringFilter<"MaterialRequest"> | string;
    qteDemandee?: Prisma.FloatFilter<"MaterialRequest"> | number;
    qteValidee?: Prisma.FloatNullableFilter<"MaterialRequest"> | number | null;
    commentaires?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    statut?: Prisma.StringFilter<"MaterialRequest"> | string;
    valideurId?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableFilter<"MaterialRequest"> | Date | string | null;
    docBC?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    docBL?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    prodOrder?: Prisma.XOR<Prisma.ProdOrderScalarRelationFilter, Prisma.ProdOrderWhereInput>;
    operateur?: Prisma.XOR<Prisma.OperateurNullableScalarRelationFilter, Prisma.OperateurWhereInput> | null;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    valideur?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    mouvements?: Prisma.MouvementListRelationFilter;
    approvalRecords?: Prisma.ApprovalRecordListRelationFilter;
};
export type MaterialRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    operateurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaires?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateValidation?: Prisma.SortOrderInput | Prisma.SortOrder;
    docBC?: Prisma.SortOrderInput | Prisma.SortOrder;
    docBL?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    prodOrder?: Prisma.ProdOrderOrderByWithRelationInput;
    operateur?: Prisma.OperateurOrderByWithRelationInput;
    matiere?: Prisma.StockItemOrderByWithRelationInput;
    valideur?: Prisma.UserOrderByWithRelationInput;
    mouvements?: Prisma.MouvementOrderByRelationAggregateInput;
    approvalRecords?: Prisma.ApprovalRecordOrderByRelationAggregateInput;
};
export type MaterialRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    num?: string;
    AND?: Prisma.MaterialRequestWhereInput | Prisma.MaterialRequestWhereInput[];
    OR?: Prisma.MaterialRequestWhereInput[];
    NOT?: Prisma.MaterialRequestWhereInput | Prisma.MaterialRequestWhereInput[];
    date?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    prodOrderId?: Prisma.StringFilter<"MaterialRequest"> | string;
    operateurId?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    ligne?: Prisma.StringFilter<"MaterialRequest"> | string;
    matiereId?: Prisma.StringFilter<"MaterialRequest"> | string;
    qteDemandee?: Prisma.FloatFilter<"MaterialRequest"> | number;
    qteValidee?: Prisma.FloatNullableFilter<"MaterialRequest"> | number | null;
    commentaires?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    statut?: Prisma.StringFilter<"MaterialRequest"> | string;
    valideurId?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableFilter<"MaterialRequest"> | Date | string | null;
    docBC?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    docBL?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    prodOrder?: Prisma.XOR<Prisma.ProdOrderScalarRelationFilter, Prisma.ProdOrderWhereInput>;
    operateur?: Prisma.XOR<Prisma.OperateurNullableScalarRelationFilter, Prisma.OperateurWhereInput> | null;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    valideur?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    mouvements?: Prisma.MouvementListRelationFilter;
    approvalRecords?: Prisma.ApprovalRecordListRelationFilter;
}, "id" | "num">;
export type MaterialRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    operateurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaires?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateValidation?: Prisma.SortOrderInput | Prisma.SortOrder;
    docBC?: Prisma.SortOrderInput | Prisma.SortOrder;
    docBL?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MaterialRequestCountOrderByAggregateInput;
    _avg?: Prisma.MaterialRequestAvgOrderByAggregateInput;
    _max?: Prisma.MaterialRequestMaxOrderByAggregateInput;
    _min?: Prisma.MaterialRequestMinOrderByAggregateInput;
    _sum?: Prisma.MaterialRequestSumOrderByAggregateInput;
};
export type MaterialRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaterialRequestScalarWhereWithAggregatesInput | Prisma.MaterialRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaterialRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaterialRequestScalarWhereWithAggregatesInput | Prisma.MaterialRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MaterialRequest"> | string;
    num?: Prisma.StringWithAggregatesFilter<"MaterialRequest"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"MaterialRequest"> | Date | string;
    prodOrderId?: Prisma.StringWithAggregatesFilter<"MaterialRequest"> | string;
    operateurId?: Prisma.StringNullableWithAggregatesFilter<"MaterialRequest"> | string | null;
    ligne?: Prisma.StringWithAggregatesFilter<"MaterialRequest"> | string;
    matiereId?: Prisma.StringWithAggregatesFilter<"MaterialRequest"> | string;
    qteDemandee?: Prisma.FloatWithAggregatesFilter<"MaterialRequest"> | number;
    qteValidee?: Prisma.FloatNullableWithAggregatesFilter<"MaterialRequest"> | number | null;
    commentaires?: Prisma.StringNullableWithAggregatesFilter<"MaterialRequest"> | string | null;
    statut?: Prisma.StringWithAggregatesFilter<"MaterialRequest"> | string;
    valideurId?: Prisma.StringNullableWithAggregatesFilter<"MaterialRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableWithAggregatesFilter<"MaterialRequest"> | Date | string | null;
    docBC?: Prisma.StringNullableWithAggregatesFilter<"MaterialRequest"> | string | null;
    docBL?: Prisma.StringNullableWithAggregatesFilter<"MaterialRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MaterialRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MaterialRequest"> | Date | string;
};
export type MaterialRequestCreateInput = {
    id?: string;
    num: string;
    date?: Date | string;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrder: Prisma.ProdOrderCreateNestedOneWithoutMaterialRequestsInput;
    operateur?: Prisma.OperateurCreateNestedOneWithoutMaterialRequestsInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutMaterialRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutMaterialRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUncheckedCreateInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrder?: Prisma.ProdOrderUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    operateur?: Prisma.OperateurUpdateOneWithoutMaterialRequestsNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutMaterialRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestCreateManyInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialRequestListRelationFilter = {
    every?: Prisma.MaterialRequestWhereInput;
    some?: Prisma.MaterialRequestWhereInput;
    none?: Prisma.MaterialRequestWhereInput;
};
export type MaterialRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MaterialRequestNullableScalarRelationFilter = {
    is?: Prisma.MaterialRequestWhereInput | null;
    isNot?: Prisma.MaterialRequestWhereInput | null;
};
export type MaterialRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    operateurId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    commentaires?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    docBC?: Prisma.SortOrder;
    docBL?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialRequestAvgOrderByAggregateInput = {
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
};
export type MaterialRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    operateurId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    commentaires?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    docBC?: Prisma.SortOrder;
    docBL?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    prodOrderId?: Prisma.SortOrder;
    operateurId?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    commentaires?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    docBC?: Prisma.SortOrder;
    docBL?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialRequestSumOrderByAggregateInput = {
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
};
export type MaterialRequestCreateNestedManyWithoutValideurInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutValideurInput, Prisma.MaterialRequestUncheckedCreateWithoutValideurInput> | Prisma.MaterialRequestCreateWithoutValideurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutValideurInput | Prisma.MaterialRequestCreateOrConnectWithoutValideurInput[];
    createMany?: Prisma.MaterialRequestCreateManyValideurInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUncheckedCreateNestedManyWithoutValideurInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutValideurInput, Prisma.MaterialRequestUncheckedCreateWithoutValideurInput> | Prisma.MaterialRequestCreateWithoutValideurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutValideurInput | Prisma.MaterialRequestCreateOrConnectWithoutValideurInput[];
    createMany?: Prisma.MaterialRequestCreateManyValideurInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUpdateManyWithoutValideurNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutValideurInput, Prisma.MaterialRequestUncheckedCreateWithoutValideurInput> | Prisma.MaterialRequestCreateWithoutValideurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutValideurInput | Prisma.MaterialRequestCreateOrConnectWithoutValideurInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutValideurInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutValideurInput[];
    createMany?: Prisma.MaterialRequestCreateManyValideurInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutValideurInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutValideurInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutValideurInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutValideurInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestUncheckedUpdateManyWithoutValideurNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutValideurInput, Prisma.MaterialRequestUncheckedCreateWithoutValideurInput> | Prisma.MaterialRequestCreateWithoutValideurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutValideurInput | Prisma.MaterialRequestCreateOrConnectWithoutValideurInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutValideurInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutValideurInput[];
    createMany?: Prisma.MaterialRequestCreateManyValideurInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutValideurInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutValideurInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutValideurInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutValideurInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestCreateNestedManyWithoutOperateurInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutOperateurInput, Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput> | Prisma.MaterialRequestCreateWithoutOperateurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput | Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput[];
    createMany?: Prisma.MaterialRequestCreateManyOperateurInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUncheckedCreateNestedManyWithoutOperateurInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutOperateurInput, Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput> | Prisma.MaterialRequestCreateWithoutOperateurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput | Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput[];
    createMany?: Prisma.MaterialRequestCreateManyOperateurInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUpdateManyWithoutOperateurNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutOperateurInput, Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput> | Prisma.MaterialRequestCreateWithoutOperateurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput | Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutOperateurInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutOperateurInput[];
    createMany?: Prisma.MaterialRequestCreateManyOperateurInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutOperateurInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutOperateurInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutOperateurInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutOperateurInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestUncheckedUpdateManyWithoutOperateurNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutOperateurInput, Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput> | Prisma.MaterialRequestCreateWithoutOperateurInput[] | Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput | Prisma.MaterialRequestCreateOrConnectWithoutOperateurInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutOperateurInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutOperateurInput[];
    createMany?: Prisma.MaterialRequestCreateManyOperateurInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutOperateurInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutOperateurInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutOperateurInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutOperateurInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMatiereInput, Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput> | Prisma.MaterialRequestCreateWithoutMatiereInput[] | Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput | Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.MaterialRequestCreateManyMatiereInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUncheckedCreateNestedManyWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMatiereInput, Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput> | Prisma.MaterialRequestCreateWithoutMatiereInput[] | Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput | Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput[];
    createMany?: Prisma.MaterialRequestCreateManyMatiereInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMatiereInput, Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput> | Prisma.MaterialRequestCreateWithoutMatiereInput[] | Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput | Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutMatiereInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.MaterialRequestCreateManyMatiereInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutMatiereInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutMatiereInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestUncheckedUpdateManyWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMatiereInput, Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput> | Prisma.MaterialRequestCreateWithoutMatiereInput[] | Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput | Prisma.MaterialRequestCreateOrConnectWithoutMatiereInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutMatiereInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutMatiereInput[];
    createMany?: Prisma.MaterialRequestCreateManyMatiereInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutMatiereInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutMatiereInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutMatiereInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutMatiereInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestCreateNestedOneWithoutMouvementsInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMouvementsInput, Prisma.MaterialRequestUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutMouvementsInput;
    connect?: Prisma.MaterialRequestWhereUniqueInput;
};
export type MaterialRequestUpdateOneWithoutMouvementsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMouvementsInput, Prisma.MaterialRequestUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutMouvementsInput;
    upsert?: Prisma.MaterialRequestUpsertWithoutMouvementsInput;
    disconnect?: Prisma.MaterialRequestWhereInput | boolean;
    delete?: Prisma.MaterialRequestWhereInput | boolean;
    connect?: Prisma.MaterialRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialRequestUpdateToOneWithWhereWithoutMouvementsInput, Prisma.MaterialRequestUpdateWithoutMouvementsInput>, Prisma.MaterialRequestUncheckedUpdateWithoutMouvementsInput>;
};
export type MaterialRequestCreateNestedManyWithoutProdOrderInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput> | Prisma.MaterialRequestCreateWithoutProdOrderInput[] | Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput | Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput[];
    createMany?: Prisma.MaterialRequestCreateManyProdOrderInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUncheckedCreateNestedManyWithoutProdOrderInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput> | Prisma.MaterialRequestCreateWithoutProdOrderInput[] | Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput | Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput[];
    createMany?: Prisma.MaterialRequestCreateManyProdOrderInputEnvelope;
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
};
export type MaterialRequestUpdateManyWithoutProdOrderNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput> | Prisma.MaterialRequestCreateWithoutProdOrderInput[] | Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput | Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutProdOrderInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutProdOrderInput[];
    createMany?: Prisma.MaterialRequestCreateManyProdOrderInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutProdOrderInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutProdOrderInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutProdOrderInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutProdOrderInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestUncheckedUpdateManyWithoutProdOrderNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput> | Prisma.MaterialRequestCreateWithoutProdOrderInput[] | Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput[];
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput | Prisma.MaterialRequestCreateOrConnectWithoutProdOrderInput[];
    upsert?: Prisma.MaterialRequestUpsertWithWhereUniqueWithoutProdOrderInput | Prisma.MaterialRequestUpsertWithWhereUniqueWithoutProdOrderInput[];
    createMany?: Prisma.MaterialRequestCreateManyProdOrderInputEnvelope;
    set?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    disconnect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    delete?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    connect?: Prisma.MaterialRequestWhereUniqueInput | Prisma.MaterialRequestWhereUniqueInput[];
    update?: Prisma.MaterialRequestUpdateWithWhereUniqueWithoutProdOrderInput | Prisma.MaterialRequestUpdateWithWhereUniqueWithoutProdOrderInput[];
    updateMany?: Prisma.MaterialRequestUpdateManyWithWhereWithoutProdOrderInput | Prisma.MaterialRequestUpdateManyWithWhereWithoutProdOrderInput[];
    deleteMany?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
};
export type MaterialRequestCreateNestedOneWithoutApprovalRecordsInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutApprovalRecordsInput, Prisma.MaterialRequestUncheckedCreateWithoutApprovalRecordsInput>;
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutApprovalRecordsInput;
    connect?: Prisma.MaterialRequestWhereUniqueInput;
};
export type MaterialRequestUpdateOneWithoutApprovalRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialRequestCreateWithoutApprovalRecordsInput, Prisma.MaterialRequestUncheckedCreateWithoutApprovalRecordsInput>;
    connectOrCreate?: Prisma.MaterialRequestCreateOrConnectWithoutApprovalRecordsInput;
    upsert?: Prisma.MaterialRequestUpsertWithoutApprovalRecordsInput;
    disconnect?: Prisma.MaterialRequestWhereInput | boolean;
    delete?: Prisma.MaterialRequestWhereInput | boolean;
    connect?: Prisma.MaterialRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialRequestUpdateToOneWithWhereWithoutApprovalRecordsInput, Prisma.MaterialRequestUpdateWithoutApprovalRecordsInput>, Prisma.MaterialRequestUncheckedUpdateWithoutApprovalRecordsInput>;
};
export type MaterialRequestCreateWithoutValideurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrder: Prisma.ProdOrderCreateNestedOneWithoutMaterialRequestsInput;
    operateur?: Prisma.OperateurCreateNestedOneWithoutMaterialRequestsInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutMaterialRequestsInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUncheckedCreateWithoutValideurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestCreateOrConnectWithoutValideurInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutValideurInput, Prisma.MaterialRequestUncheckedCreateWithoutValideurInput>;
};
export type MaterialRequestCreateManyValideurInputEnvelope = {
    data: Prisma.MaterialRequestCreateManyValideurInput | Prisma.MaterialRequestCreateManyValideurInput[];
    skipDuplicates?: boolean;
};
export type MaterialRequestUpsertWithWhereUniqueWithoutValideurInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutValideurInput, Prisma.MaterialRequestUncheckedUpdateWithoutValideurInput>;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutValideurInput, Prisma.MaterialRequestUncheckedCreateWithoutValideurInput>;
};
export type MaterialRequestUpdateWithWhereUniqueWithoutValideurInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutValideurInput, Prisma.MaterialRequestUncheckedUpdateWithoutValideurInput>;
};
export type MaterialRequestUpdateManyWithWhereWithoutValideurInput = {
    where: Prisma.MaterialRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateManyMutationInput, Prisma.MaterialRequestUncheckedUpdateManyWithoutValideurInput>;
};
export type MaterialRequestScalarWhereInput = {
    AND?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
    OR?: Prisma.MaterialRequestScalarWhereInput[];
    NOT?: Prisma.MaterialRequestScalarWhereInput | Prisma.MaterialRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"MaterialRequest"> | string;
    num?: Prisma.StringFilter<"MaterialRequest"> | string;
    date?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    prodOrderId?: Prisma.StringFilter<"MaterialRequest"> | string;
    operateurId?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    ligne?: Prisma.StringFilter<"MaterialRequest"> | string;
    matiereId?: Prisma.StringFilter<"MaterialRequest"> | string;
    qteDemandee?: Prisma.FloatFilter<"MaterialRequest"> | number;
    qteValidee?: Prisma.FloatNullableFilter<"MaterialRequest"> | number | null;
    commentaires?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    statut?: Prisma.StringFilter<"MaterialRequest"> | string;
    valideurId?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableFilter<"MaterialRequest"> | Date | string | null;
    docBC?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    docBL?: Prisma.StringNullableFilter<"MaterialRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MaterialRequest"> | Date | string;
};
export type MaterialRequestCreateWithoutOperateurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrder: Prisma.ProdOrderCreateNestedOneWithoutMaterialRequestsInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutMaterialRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutMaterialRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUncheckedCreateWithoutOperateurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestCreateOrConnectWithoutOperateurInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutOperateurInput, Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput>;
};
export type MaterialRequestCreateManyOperateurInputEnvelope = {
    data: Prisma.MaterialRequestCreateManyOperateurInput | Prisma.MaterialRequestCreateManyOperateurInput[];
    skipDuplicates?: boolean;
};
export type MaterialRequestUpsertWithWhereUniqueWithoutOperateurInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutOperateurInput, Prisma.MaterialRequestUncheckedUpdateWithoutOperateurInput>;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutOperateurInput, Prisma.MaterialRequestUncheckedCreateWithoutOperateurInput>;
};
export type MaterialRequestUpdateWithWhereUniqueWithoutOperateurInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutOperateurInput, Prisma.MaterialRequestUncheckedUpdateWithoutOperateurInput>;
};
export type MaterialRequestUpdateManyWithWhereWithoutOperateurInput = {
    where: Prisma.MaterialRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateManyMutationInput, Prisma.MaterialRequestUncheckedUpdateManyWithoutOperateurInput>;
};
export type MaterialRequestCreateWithoutMatiereInput = {
    id?: string;
    num: string;
    date?: Date | string;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrder: Prisma.ProdOrderCreateNestedOneWithoutMaterialRequestsInput;
    operateur?: Prisma.OperateurCreateNestedOneWithoutMaterialRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutMaterialRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUncheckedCreateWithoutMatiereInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestCreateOrConnectWithoutMatiereInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMatiereInput, Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput>;
};
export type MaterialRequestCreateManyMatiereInputEnvelope = {
    data: Prisma.MaterialRequestCreateManyMatiereInput | Prisma.MaterialRequestCreateManyMatiereInput[];
    skipDuplicates?: boolean;
};
export type MaterialRequestUpsertWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutMatiereInput, Prisma.MaterialRequestUncheckedUpdateWithoutMatiereInput>;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMatiereInput, Prisma.MaterialRequestUncheckedCreateWithoutMatiereInput>;
};
export type MaterialRequestUpdateWithWhereUniqueWithoutMatiereInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutMatiereInput, Prisma.MaterialRequestUncheckedUpdateWithoutMatiereInput>;
};
export type MaterialRequestUpdateManyWithWhereWithoutMatiereInput = {
    where: Prisma.MaterialRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateManyMutationInput, Prisma.MaterialRequestUncheckedUpdateManyWithoutMatiereInput>;
};
export type MaterialRequestCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrder: Prisma.ProdOrderCreateNestedOneWithoutMaterialRequestsInput;
    operateur?: Prisma.OperateurCreateNestedOneWithoutMaterialRequestsInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutMaterialRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutMaterialRequestsValidatedInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUncheckedCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestCreateOrConnectWithoutMouvementsInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMouvementsInput, Prisma.MaterialRequestUncheckedCreateWithoutMouvementsInput>;
};
export type MaterialRequestUpsertWithoutMouvementsInput = {
    update: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutMouvementsInput, Prisma.MaterialRequestUncheckedUpdateWithoutMouvementsInput>;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutMouvementsInput, Prisma.MaterialRequestUncheckedCreateWithoutMouvementsInput>;
    where?: Prisma.MaterialRequestWhereInput;
};
export type MaterialRequestUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: Prisma.MaterialRequestWhereInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutMouvementsInput, Prisma.MaterialRequestUncheckedUpdateWithoutMouvementsInput>;
};
export type MaterialRequestUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrder?: Prisma.ProdOrderUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    operateur?: Prisma.OperateurUpdateOneWithoutMaterialRequestsNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutMaterialRequestsValidatedNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestCreateWithoutProdOrderInput = {
    id?: string;
    num: string;
    date?: Date | string;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    operateur?: Prisma.OperateurCreateNestedOneWithoutMaterialRequestsInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutMaterialRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutMaterialRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUncheckedCreateWithoutProdOrderInput = {
    id?: string;
    num: string;
    date?: Date | string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutMaterialRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestCreateOrConnectWithoutProdOrderInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput>;
};
export type MaterialRequestCreateManyProdOrderInputEnvelope = {
    data: Prisma.MaterialRequestCreateManyProdOrderInput | Prisma.MaterialRequestCreateManyProdOrderInput[];
    skipDuplicates?: boolean;
};
export type MaterialRequestUpsertWithWhereUniqueWithoutProdOrderInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedUpdateWithoutProdOrderInput>;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedCreateWithoutProdOrderInput>;
};
export type MaterialRequestUpdateWithWhereUniqueWithoutProdOrderInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutProdOrderInput, Prisma.MaterialRequestUncheckedUpdateWithoutProdOrderInput>;
};
export type MaterialRequestUpdateManyWithWhereWithoutProdOrderInput = {
    where: Prisma.MaterialRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateManyMutationInput, Prisma.MaterialRequestUncheckedUpdateManyWithoutProdOrderInput>;
};
export type MaterialRequestCreateWithoutApprovalRecordsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrder: Prisma.ProdOrderCreateNestedOneWithoutMaterialRequestsInput;
    operateur?: Prisma.OperateurCreateNestedOneWithoutMaterialRequestsInput;
    matiere: Prisma.StockItemCreateNestedOneWithoutMaterialRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutMaterialRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestUncheckedCreateWithoutApprovalRecordsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutMaterialRequestInput;
};
export type MaterialRequestCreateOrConnectWithoutApprovalRecordsInput = {
    where: Prisma.MaterialRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutApprovalRecordsInput, Prisma.MaterialRequestUncheckedCreateWithoutApprovalRecordsInput>;
};
export type MaterialRequestUpsertWithoutApprovalRecordsInput = {
    update: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutApprovalRecordsInput, Prisma.MaterialRequestUncheckedUpdateWithoutApprovalRecordsInput>;
    create: Prisma.XOR<Prisma.MaterialRequestCreateWithoutApprovalRecordsInput, Prisma.MaterialRequestUncheckedCreateWithoutApprovalRecordsInput>;
    where?: Prisma.MaterialRequestWhereInput;
};
export type MaterialRequestUpdateToOneWithWhereWithoutApprovalRecordsInput = {
    where?: Prisma.MaterialRequestWhereInput;
    data: Prisma.XOR<Prisma.MaterialRequestUpdateWithoutApprovalRecordsInput, Prisma.MaterialRequestUncheckedUpdateWithoutApprovalRecordsInput>;
};
export type MaterialRequestUpdateWithoutApprovalRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrder?: Prisma.ProdOrderUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    operateur?: Prisma.OperateurUpdateOneWithoutMaterialRequestsNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutMaterialRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateWithoutApprovalRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestCreateManyValideurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialRequestUpdateWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrder?: Prisma.ProdOrderUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    operateur?: Prisma.OperateurUpdateOneWithoutMaterialRequestsNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateManyWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialRequestCreateManyOperateurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialRequestUpdateWithoutOperateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrder?: Prisma.ProdOrderUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutMaterialRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateWithoutOperateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateManyWithoutOperateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialRequestCreateManyMatiereInput = {
    id?: string;
    num: string;
    date?: Date | string;
    prodOrderId: string;
    operateurId?: string | null;
    ligne: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialRequestUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrder?: Prisma.ProdOrderUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    operateur?: Prisma.OperateurUpdateOneWithoutMaterialRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutMaterialRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateManyWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialRequestCreateManyProdOrderInput = {
    id?: string;
    num: string;
    date?: Date | string;
    operateurId?: string | null;
    ligne: string;
    matiereId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    commentaires?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    docBC?: string | null;
    docBL?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialRequestUpdateWithoutProdOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operateur?: Prisma.OperateurUpdateOneWithoutMaterialRequestsNestedInput;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutMaterialRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutMaterialRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateWithoutProdOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutMaterialRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutMaterialRequestNestedInput;
};
export type MaterialRequestUncheckedUpdateManyWithoutProdOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    commentaires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    docBC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    docBL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MaterialRequestCountOutputType
 */
export type MaterialRequestCountOutputType = {
    mouvements: number;
    approvalRecords: number;
};
export type MaterialRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mouvements?: boolean | MaterialRequestCountOutputTypeCountMouvementsArgs;
    approvalRecords?: boolean | MaterialRequestCountOutputTypeCountApprovalRecordsArgs;
};
/**
 * MaterialRequestCountOutputType without action
 */
export type MaterialRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialRequestCountOutputType
     */
    select?: Prisma.MaterialRequestCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MaterialRequestCountOutputType without action
 */
export type MaterialRequestCountOutputTypeCountMouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MouvementWhereInput;
};
/**
 * MaterialRequestCountOutputType without action
 */
export type MaterialRequestCountOutputTypeCountApprovalRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRecordWhereInput;
};
export type MaterialRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    date?: boolean;
    prodOrderId?: boolean;
    operateurId?: boolean;
    ligne?: boolean;
    matiereId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    commentaires?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    docBC?: boolean;
    docBL?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    prodOrder?: boolean | Prisma.ProdOrderDefaultArgs<ExtArgs>;
    operateur?: boolean | Prisma.MaterialRequest$operateurArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.MaterialRequest$valideurArgs<ExtArgs>;
    mouvements?: boolean | Prisma.MaterialRequest$mouvementsArgs<ExtArgs>;
    approvalRecords?: boolean | Prisma.MaterialRequest$approvalRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["materialRequest"]>;
export type MaterialRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    date?: boolean;
    prodOrderId?: boolean;
    operateurId?: boolean;
    ligne?: boolean;
    matiereId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    commentaires?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    docBC?: boolean;
    docBL?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    prodOrder?: boolean | Prisma.ProdOrderDefaultArgs<ExtArgs>;
    operateur?: boolean | Prisma.MaterialRequest$operateurArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.MaterialRequest$valideurArgs<ExtArgs>;
}, ExtArgs["result"]["materialRequest"]>;
export type MaterialRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    date?: boolean;
    prodOrderId?: boolean;
    operateurId?: boolean;
    ligne?: boolean;
    matiereId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    commentaires?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    docBC?: boolean;
    docBL?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    prodOrder?: boolean | Prisma.ProdOrderDefaultArgs<ExtArgs>;
    operateur?: boolean | Prisma.MaterialRequest$operateurArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.MaterialRequest$valideurArgs<ExtArgs>;
}, ExtArgs["result"]["materialRequest"]>;
export type MaterialRequestSelectScalar = {
    id?: boolean;
    num?: boolean;
    date?: boolean;
    prodOrderId?: boolean;
    operateurId?: boolean;
    ligne?: boolean;
    matiereId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    commentaires?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    docBC?: boolean;
    docBL?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MaterialRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "num" | "date" | "prodOrderId" | "operateurId" | "ligne" | "matiereId" | "qteDemandee" | "qteValidee" | "commentaires" | "statut" | "valideurId" | "dateValidation" | "docBC" | "docBL" | "createdAt" | "updatedAt", ExtArgs["result"]["materialRequest"]>;
export type MaterialRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prodOrder?: boolean | Prisma.ProdOrderDefaultArgs<ExtArgs>;
    operateur?: boolean | Prisma.MaterialRequest$operateurArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.MaterialRequest$valideurArgs<ExtArgs>;
    mouvements?: boolean | Prisma.MaterialRequest$mouvementsArgs<ExtArgs>;
    approvalRecords?: boolean | Prisma.MaterialRequest$approvalRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MaterialRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prodOrder?: boolean | Prisma.ProdOrderDefaultArgs<ExtArgs>;
    operateur?: boolean | Prisma.MaterialRequest$operateurArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.MaterialRequest$valideurArgs<ExtArgs>;
};
export type MaterialRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prodOrder?: boolean | Prisma.ProdOrderDefaultArgs<ExtArgs>;
    operateur?: boolean | Prisma.MaterialRequest$operateurArgs<ExtArgs>;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.MaterialRequest$valideurArgs<ExtArgs>;
};
export type $MaterialRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MaterialRequest";
    objects: {
        prodOrder: Prisma.$ProdOrderPayload<ExtArgs>;
        operateur: Prisma.$OperateurPayload<ExtArgs> | null;
        matiere: Prisma.$StockItemPayload<ExtArgs>;
        valideur: Prisma.$UserPayload<ExtArgs> | null;
        mouvements: Prisma.$MouvementPayload<ExtArgs>[];
        approvalRecords: Prisma.$ApprovalRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        num: string;
        date: Date;
        prodOrderId: string;
        operateurId: string | null;
        ligne: string;
        matiereId: string;
        qteDemandee: number;
        qteValidee: number | null;
        commentaires: string | null;
        statut: string;
        valideurId: string | null;
        dateValidation: Date | null;
        docBC: string | null;
        docBL: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["materialRequest"]>;
    composites: {};
};
export type MaterialRequestGetPayload<S extends boolean | null | undefined | MaterialRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload, S>;
export type MaterialRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaterialRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaterialRequestCountAggregateInputType | true;
};
export interface MaterialRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MaterialRequest'];
        meta: {
            name: 'MaterialRequest';
        };
    };
    /**
     * Find zero or one MaterialRequest that matches the filter.
     * @param {MaterialRequestFindUniqueArgs} args - Arguments to find a MaterialRequest
     * @example
     * // Get one MaterialRequest
     * const materialRequest = await prisma.materialRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, MaterialRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MaterialRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialRequestFindUniqueOrThrowArgs} args - Arguments to find a MaterialRequest
     * @example
     * // Get one MaterialRequest
     * const materialRequest = await prisma.materialRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaterialRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MaterialRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialRequestFindFirstArgs} args - Arguments to find a MaterialRequest
     * @example
     * // Get one MaterialRequest
     * const materialRequest = await prisma.materialRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, MaterialRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MaterialRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialRequestFindFirstOrThrowArgs} args - Arguments to find a MaterialRequest
     * @example
     * // Get one MaterialRequest
     * const materialRequest = await prisma.materialRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaterialRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MaterialRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialRequests
     * const materialRequests = await prisma.materialRequest.findMany()
     *
     * // Get first 10 MaterialRequests
     * const materialRequests = await prisma.materialRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const materialRequestWithIdOnly = await prisma.materialRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MaterialRequestFindManyArgs>(args?: Prisma.SelectSubset<T, MaterialRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MaterialRequest.
     * @param {MaterialRequestCreateArgs} args - Arguments to create a MaterialRequest.
     * @example
     * // Create one MaterialRequest
     * const MaterialRequest = await prisma.materialRequest.create({
     *   data: {
     *     // ... data to create a MaterialRequest
     *   }
     * })
     *
     */
    create<T extends MaterialRequestCreateArgs>(args: Prisma.SelectSubset<T, MaterialRequestCreateArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MaterialRequests.
     * @param {MaterialRequestCreateManyArgs} args - Arguments to create many MaterialRequests.
     * @example
     * // Create many MaterialRequests
     * const materialRequest = await prisma.materialRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MaterialRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, MaterialRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MaterialRequests and returns the data saved in the database.
     * @param {MaterialRequestCreateManyAndReturnArgs} args - Arguments to create many MaterialRequests.
     * @example
     * // Create many MaterialRequests
     * const materialRequest = await prisma.materialRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MaterialRequests and only return the `id`
     * const materialRequestWithIdOnly = await prisma.materialRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MaterialRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaterialRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MaterialRequest.
     * @param {MaterialRequestDeleteArgs} args - Arguments to delete one MaterialRequest.
     * @example
     * // Delete one MaterialRequest
     * const MaterialRequest = await prisma.materialRequest.delete({
     *   where: {
     *     // ... filter to delete one MaterialRequest
     *   }
     * })
     *
     */
    delete<T extends MaterialRequestDeleteArgs>(args: Prisma.SelectSubset<T, MaterialRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MaterialRequest.
     * @param {MaterialRequestUpdateArgs} args - Arguments to update one MaterialRequest.
     * @example
     * // Update one MaterialRequest
     * const materialRequest = await prisma.materialRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MaterialRequestUpdateArgs>(args: Prisma.SelectSubset<T, MaterialRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MaterialRequests.
     * @param {MaterialRequestDeleteManyArgs} args - Arguments to filter MaterialRequests to delete.
     * @example
     * // Delete a few MaterialRequests
     * const { count } = await prisma.materialRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MaterialRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaterialRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MaterialRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialRequests
     * const materialRequest = await prisma.materialRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MaterialRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, MaterialRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MaterialRequests and returns the data updated in the database.
     * @param {MaterialRequestUpdateManyAndReturnArgs} args - Arguments to update many MaterialRequests.
     * @example
     * // Update many MaterialRequests
     * const materialRequest = await prisma.materialRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MaterialRequests and only return the `id`
     * const materialRequestWithIdOnly = await prisma.materialRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaterialRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MaterialRequest.
     * @param {MaterialRequestUpsertArgs} args - Arguments to update or create a MaterialRequest.
     * @example
     * // Update or create a MaterialRequest
     * const materialRequest = await prisma.materialRequest.upsert({
     *   create: {
     *     // ... data to create a MaterialRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialRequest we want to update
     *   }
     * })
     */
    upsert<T extends MaterialRequestUpsertArgs>(args: Prisma.SelectSubset<T, MaterialRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__MaterialRequestClient<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MaterialRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialRequestCountArgs} args - Arguments to filter MaterialRequests to count.
     * @example
     * // Count the number of MaterialRequests
     * const count = await prisma.materialRequest.count({
     *   where: {
     *     // ... the filter for the MaterialRequests we want to count
     *   }
     * })
    **/
    count<T extends MaterialRequestCountArgs>(args?: Prisma.Subset<T, MaterialRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaterialRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MaterialRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialRequestAggregateArgs>(args: Prisma.Subset<T, MaterialRequestAggregateArgs>): Prisma.PrismaPromise<GetMaterialRequestAggregateType<T>>;
    /**
     * Group by MaterialRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MaterialRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaterialRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: MaterialRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaterialRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MaterialRequest model
     */
    readonly fields: MaterialRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MaterialRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MaterialRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prodOrder<T extends Prisma.ProdOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProdOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__ProdOrderClient<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    operateur<T extends Prisma.MaterialRequest$operateurArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialRequest$operateurArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    matiere<T extends Prisma.StockItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    valideur<T extends Prisma.MaterialRequest$valideurArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialRequest$valideurArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mouvements<T extends Prisma.MaterialRequest$mouvementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialRequest$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvalRecords<T extends Prisma.MaterialRequest$approvalRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialRequest$approvalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MaterialRequest model
 */
export interface MaterialRequestFieldRefs {
    readonly id: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly num: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly date: Prisma.FieldRef<"MaterialRequest", 'DateTime'>;
    readonly prodOrderId: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly operateurId: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly ligne: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly matiereId: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly qteDemandee: Prisma.FieldRef<"MaterialRequest", 'Float'>;
    readonly qteValidee: Prisma.FieldRef<"MaterialRequest", 'Float'>;
    readonly commentaires: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly statut: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly valideurId: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly dateValidation: Prisma.FieldRef<"MaterialRequest", 'DateTime'>;
    readonly docBC: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly docBL: Prisma.FieldRef<"MaterialRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MaterialRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MaterialRequest", 'DateTime'>;
}
/**
 * MaterialRequest findUnique
 */
export type MaterialRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MaterialRequest to fetch.
     */
    where: Prisma.MaterialRequestWhereUniqueInput;
};
/**
 * MaterialRequest findUniqueOrThrow
 */
export type MaterialRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MaterialRequest to fetch.
     */
    where: Prisma.MaterialRequestWhereUniqueInput;
};
/**
 * MaterialRequest findFirst
 */
export type MaterialRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MaterialRequest to fetch.
     */
    where?: Prisma.MaterialRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaterialRequests to fetch.
     */
    orderBy?: Prisma.MaterialRequestOrderByWithRelationInput | Prisma.MaterialRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MaterialRequests.
     */
    cursor?: Prisma.MaterialRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaterialRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaterialRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MaterialRequests.
     */
    distinct?: Prisma.MaterialRequestScalarFieldEnum | Prisma.MaterialRequestScalarFieldEnum[];
};
/**
 * MaterialRequest findFirstOrThrow
 */
export type MaterialRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MaterialRequest to fetch.
     */
    where?: Prisma.MaterialRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaterialRequests to fetch.
     */
    orderBy?: Prisma.MaterialRequestOrderByWithRelationInput | Prisma.MaterialRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MaterialRequests.
     */
    cursor?: Prisma.MaterialRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaterialRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaterialRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MaterialRequests.
     */
    distinct?: Prisma.MaterialRequestScalarFieldEnum | Prisma.MaterialRequestScalarFieldEnum[];
};
/**
 * MaterialRequest findMany
 */
export type MaterialRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which MaterialRequests to fetch.
     */
    where?: Prisma.MaterialRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MaterialRequests to fetch.
     */
    orderBy?: Prisma.MaterialRequestOrderByWithRelationInput | Prisma.MaterialRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MaterialRequests.
     */
    cursor?: Prisma.MaterialRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MaterialRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MaterialRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MaterialRequests.
     */
    distinct?: Prisma.MaterialRequestScalarFieldEnum | Prisma.MaterialRequestScalarFieldEnum[];
};
/**
 * MaterialRequest create
 */
export type MaterialRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a MaterialRequest.
     */
    data: Prisma.XOR<Prisma.MaterialRequestCreateInput, Prisma.MaterialRequestUncheckedCreateInput>;
};
/**
 * MaterialRequest createMany
 */
export type MaterialRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialRequests.
     */
    data: Prisma.MaterialRequestCreateManyInput | Prisma.MaterialRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MaterialRequest createManyAndReturn
 */
export type MaterialRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialRequest
     */
    select?: Prisma.MaterialRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MaterialRequest
     */
    omit?: Prisma.MaterialRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many MaterialRequests.
     */
    data: Prisma.MaterialRequestCreateManyInput | Prisma.MaterialRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MaterialRequest update
 */
export type MaterialRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a MaterialRequest.
     */
    data: Prisma.XOR<Prisma.MaterialRequestUpdateInput, Prisma.MaterialRequestUncheckedUpdateInput>;
    /**
     * Choose, which MaterialRequest to update.
     */
    where: Prisma.MaterialRequestWhereUniqueInput;
};
/**
 * MaterialRequest updateMany
 */
export type MaterialRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialRequests.
     */
    data: Prisma.XOR<Prisma.MaterialRequestUpdateManyMutationInput, Prisma.MaterialRequestUncheckedUpdateManyInput>;
    /**
     * Filter which MaterialRequests to update
     */
    where?: Prisma.MaterialRequestWhereInput;
    /**
     * Limit how many MaterialRequests to update.
     */
    limit?: number;
};
/**
 * MaterialRequest updateManyAndReturn
 */
export type MaterialRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialRequest
     */
    select?: Prisma.MaterialRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MaterialRequest
     */
    omit?: Prisma.MaterialRequestOmit<ExtArgs> | null;
    /**
     * The data used to update MaterialRequests.
     */
    data: Prisma.XOR<Prisma.MaterialRequestUpdateManyMutationInput, Prisma.MaterialRequestUncheckedUpdateManyInput>;
    /**
     * Filter which MaterialRequests to update
     */
    where?: Prisma.MaterialRequestWhereInput;
    /**
     * Limit how many MaterialRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MaterialRequest upsert
 */
export type MaterialRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the MaterialRequest to update in case it exists.
     */
    where: Prisma.MaterialRequestWhereUniqueInput;
    /**
     * In case the MaterialRequest found by the `where` argument doesn't exist, create a new MaterialRequest with this data.
     */
    create: Prisma.XOR<Prisma.MaterialRequestCreateInput, Prisma.MaterialRequestUncheckedCreateInput>;
    /**
     * In case the MaterialRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MaterialRequestUpdateInput, Prisma.MaterialRequestUncheckedUpdateInput>;
};
/**
 * MaterialRequest delete
 */
export type MaterialRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which MaterialRequest to delete.
     */
    where: Prisma.MaterialRequestWhereUniqueInput;
};
/**
 * MaterialRequest deleteMany
 */
export type MaterialRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialRequests to delete
     */
    where?: Prisma.MaterialRequestWhereInput;
    /**
     * Limit how many MaterialRequests to delete.
     */
    limit?: number;
};
/**
 * MaterialRequest.operateur
 */
export type MaterialRequest$operateurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * MaterialRequest.valideur
 */
export type MaterialRequest$valideurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * MaterialRequest.mouvements
 */
export type MaterialRequest$mouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * MaterialRequest.approvalRecords
 */
export type MaterialRequest$approvalRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ApprovalRecordWhereInput;
    orderBy?: Prisma.ApprovalRecordOrderByWithRelationInput | Prisma.ApprovalRecordOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRecordScalarFieldEnum | Prisma.ApprovalRecordScalarFieldEnum[];
};
/**
 * MaterialRequest without action
 */
export type MaterialRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=MaterialRequest.d.ts.map