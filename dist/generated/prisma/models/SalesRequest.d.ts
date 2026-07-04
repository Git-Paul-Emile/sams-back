import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SalesRequest
 *
 */
export type SalesRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$SalesRequestPayload>;
export type AggregateSalesRequest = {
    _count: SalesRequestCountAggregateOutputType | null;
    _avg: SalesRequestAvgAggregateOutputType | null;
    _sum: SalesRequestSumAggregateOutputType | null;
    _min: SalesRequestMinAggregateOutputType | null;
    _max: SalesRequestMaxAggregateOutputType | null;
};
export type SalesRequestAvgAggregateOutputType = {
    qteDemandee: number | null;
    qteValidee: number | null;
    stockDispo: number | null;
    prixUnit: number | null;
    montant: number | null;
};
export type SalesRequestSumAggregateOutputType = {
    qteDemandee: number | null;
    qteValidee: number | null;
    stockDispo: number | null;
    prixUnit: number | null;
    montant: number | null;
};
export type SalesRequestMinAggregateOutputType = {
    id: string | null;
    num: string | null;
    date: Date | null;
    clientId: string | null;
    commercialId: string | null;
    produitId: string | null;
    qteDemandee: number | null;
    qteValidee: number | null;
    stockDispo: number | null;
    prixUnit: number | null;
    montant: number | null;
    entrepot: string | null;
    observation: string | null;
    statut: string | null;
    valideurId: string | null;
    dateValidation: Date | null;
    commentaire: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalesRequestMaxAggregateOutputType = {
    id: string | null;
    num: string | null;
    date: Date | null;
    clientId: string | null;
    commercialId: string | null;
    produitId: string | null;
    qteDemandee: number | null;
    qteValidee: number | null;
    stockDispo: number | null;
    prixUnit: number | null;
    montant: number | null;
    entrepot: string | null;
    observation: string | null;
    statut: string | null;
    valideurId: string | null;
    dateValidation: Date | null;
    commentaire: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SalesRequestCountAggregateOutputType = {
    id: number;
    num: number;
    date: number;
    clientId: number;
    commercialId: number;
    produitId: number;
    qteDemandee: number;
    qteValidee: number;
    stockDispo: number;
    prixUnit: number;
    montant: number;
    entrepot: number;
    observation: number;
    statut: number;
    valideurId: number;
    dateValidation: number;
    commentaire: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SalesRequestAvgAggregateInputType = {
    qteDemandee?: true;
    qteValidee?: true;
    stockDispo?: true;
    prixUnit?: true;
    montant?: true;
};
export type SalesRequestSumAggregateInputType = {
    qteDemandee?: true;
    qteValidee?: true;
    stockDispo?: true;
    prixUnit?: true;
    montant?: true;
};
export type SalesRequestMinAggregateInputType = {
    id?: true;
    num?: true;
    date?: true;
    clientId?: true;
    commercialId?: true;
    produitId?: true;
    qteDemandee?: true;
    qteValidee?: true;
    stockDispo?: true;
    prixUnit?: true;
    montant?: true;
    entrepot?: true;
    observation?: true;
    statut?: true;
    valideurId?: true;
    dateValidation?: true;
    commentaire?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalesRequestMaxAggregateInputType = {
    id?: true;
    num?: true;
    date?: true;
    clientId?: true;
    commercialId?: true;
    produitId?: true;
    qteDemandee?: true;
    qteValidee?: true;
    stockDispo?: true;
    prixUnit?: true;
    montant?: true;
    entrepot?: true;
    observation?: true;
    statut?: true;
    valideurId?: true;
    dateValidation?: true;
    commentaire?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SalesRequestCountAggregateInputType = {
    id?: true;
    num?: true;
    date?: true;
    clientId?: true;
    commercialId?: true;
    produitId?: true;
    qteDemandee?: true;
    qteValidee?: true;
    stockDispo?: true;
    prixUnit?: true;
    montant?: true;
    entrepot?: true;
    observation?: true;
    statut?: true;
    valideurId?: true;
    dateValidation?: true;
    commentaire?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SalesRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SalesRequest to aggregate.
     */
    where?: Prisma.SalesRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesRequests to fetch.
     */
    orderBy?: Prisma.SalesRequestOrderByWithRelationInput | Prisma.SalesRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SalesRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SalesRequests
    **/
    _count?: true | SalesRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SalesRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SalesRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SalesRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SalesRequestMaxAggregateInputType;
};
export type GetSalesRequestAggregateType<T extends SalesRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateSalesRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalesRequest[P]> : Prisma.GetScalarType<T[P], AggregateSalesRequest[P]>;
};
export type SalesRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesRequestWhereInput;
    orderBy?: Prisma.SalesRequestOrderByWithAggregationInput | Prisma.SalesRequestOrderByWithAggregationInput[];
    by: Prisma.SalesRequestScalarFieldEnum[] | Prisma.SalesRequestScalarFieldEnum;
    having?: Prisma.SalesRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesRequestCountAggregateInputType | true;
    _avg?: SalesRequestAvgAggregateInputType;
    _sum?: SalesRequestSumAggregateInputType;
    _min?: SalesRequestMinAggregateInputType;
    _max?: SalesRequestMaxAggregateInputType;
};
export type SalesRequestGroupByOutputType = {
    id: string;
    num: string;
    date: Date;
    clientId: string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee: number | null;
    stockDispo: number | null;
    prixUnit: number;
    montant: number;
    entrepot: string | null;
    observation: string | null;
    statut: string;
    valideurId: string | null;
    dateValidation: Date | null;
    commentaire: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SalesRequestCountAggregateOutputType | null;
    _avg: SalesRequestAvgAggregateOutputType | null;
    _sum: SalesRequestSumAggregateOutputType | null;
    _min: SalesRequestMinAggregateOutputType | null;
    _max: SalesRequestMaxAggregateOutputType | null;
};
export type GetSalesRequestGroupByPayload<T extends SalesRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalesRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalesRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalesRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalesRequestGroupByOutputType[P]>;
}>>;
export type SalesRequestWhereInput = {
    AND?: Prisma.SalesRequestWhereInput | Prisma.SalesRequestWhereInput[];
    OR?: Prisma.SalesRequestWhereInput[];
    NOT?: Prisma.SalesRequestWhereInput | Prisma.SalesRequestWhereInput[];
    id?: Prisma.StringFilter<"SalesRequest"> | string;
    num?: Prisma.StringFilter<"SalesRequest"> | string;
    date?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    clientId?: Prisma.StringFilter<"SalesRequest"> | string;
    commercialId?: Prisma.StringFilter<"SalesRequest"> | string;
    produitId?: Prisma.StringFilter<"SalesRequest"> | string;
    qteDemandee?: Prisma.FloatFilter<"SalesRequest"> | number;
    qteValidee?: Prisma.FloatNullableFilter<"SalesRequest"> | number | null;
    stockDispo?: Prisma.FloatNullableFilter<"SalesRequest"> | number | null;
    prixUnit?: Prisma.FloatFilter<"SalesRequest"> | number;
    montant?: Prisma.FloatFilter<"SalesRequest"> | number;
    entrepot?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    observation?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    statut?: Prisma.StringFilter<"SalesRequest"> | string;
    valideurId?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableFilter<"SalesRequest"> | Date | string | null;
    commentaire?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    commercial?: Prisma.XOR<Prisma.CommercialScalarRelationFilter, Prisma.CommercialWhereInput>;
    produit?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    valideur?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    mouvements?: Prisma.MouvementListRelationFilter;
    approvalRecords?: Prisma.ApprovalRecordListRelationFilter;
};
export type SalesRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrderInput | Prisma.SortOrder;
    stockDispo?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixUnit?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    entrepot?: Prisma.SortOrderInput | Prisma.SortOrder;
    observation?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateValidation?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
    commercial?: Prisma.CommercialOrderByWithRelationInput;
    produit?: Prisma.StockItemOrderByWithRelationInput;
    valideur?: Prisma.UserOrderByWithRelationInput;
    mouvements?: Prisma.MouvementOrderByRelationAggregateInput;
    approvalRecords?: Prisma.ApprovalRecordOrderByRelationAggregateInput;
};
export type SalesRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    num?: string;
    AND?: Prisma.SalesRequestWhereInput | Prisma.SalesRequestWhereInput[];
    OR?: Prisma.SalesRequestWhereInput[];
    NOT?: Prisma.SalesRequestWhereInput | Prisma.SalesRequestWhereInput[];
    date?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    clientId?: Prisma.StringFilter<"SalesRequest"> | string;
    commercialId?: Prisma.StringFilter<"SalesRequest"> | string;
    produitId?: Prisma.StringFilter<"SalesRequest"> | string;
    qteDemandee?: Prisma.FloatFilter<"SalesRequest"> | number;
    qteValidee?: Prisma.FloatNullableFilter<"SalesRequest"> | number | null;
    stockDispo?: Prisma.FloatNullableFilter<"SalesRequest"> | number | null;
    prixUnit?: Prisma.FloatFilter<"SalesRequest"> | number;
    montant?: Prisma.FloatFilter<"SalesRequest"> | number;
    entrepot?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    observation?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    statut?: Prisma.StringFilter<"SalesRequest"> | string;
    valideurId?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableFilter<"SalesRequest"> | Date | string | null;
    commentaire?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    commercial?: Prisma.XOR<Prisma.CommercialScalarRelationFilter, Prisma.CommercialWhereInput>;
    produit?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
    valideur?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    mouvements?: Prisma.MouvementListRelationFilter;
    approvalRecords?: Prisma.ApprovalRecordListRelationFilter;
}, "id" | "num">;
export type SalesRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrderInput | Prisma.SortOrder;
    stockDispo?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixUnit?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    entrepot?: Prisma.SortOrderInput | Prisma.SortOrder;
    observation?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateValidation?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SalesRequestCountOrderByAggregateInput;
    _avg?: Prisma.SalesRequestAvgOrderByAggregateInput;
    _max?: Prisma.SalesRequestMaxOrderByAggregateInput;
    _min?: Prisma.SalesRequestMinOrderByAggregateInput;
    _sum?: Prisma.SalesRequestSumOrderByAggregateInput;
};
export type SalesRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalesRequestScalarWhereWithAggregatesInput | Prisma.SalesRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalesRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalesRequestScalarWhereWithAggregatesInput | Prisma.SalesRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SalesRequest"> | string;
    num?: Prisma.StringWithAggregatesFilter<"SalesRequest"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"SalesRequest"> | Date | string;
    clientId?: Prisma.StringWithAggregatesFilter<"SalesRequest"> | string;
    commercialId?: Prisma.StringWithAggregatesFilter<"SalesRequest"> | string;
    produitId?: Prisma.StringWithAggregatesFilter<"SalesRequest"> | string;
    qteDemandee?: Prisma.FloatWithAggregatesFilter<"SalesRequest"> | number;
    qteValidee?: Prisma.FloatNullableWithAggregatesFilter<"SalesRequest"> | number | null;
    stockDispo?: Prisma.FloatNullableWithAggregatesFilter<"SalesRequest"> | number | null;
    prixUnit?: Prisma.FloatWithAggregatesFilter<"SalesRequest"> | number;
    montant?: Prisma.FloatWithAggregatesFilter<"SalesRequest"> | number;
    entrepot?: Prisma.StringNullableWithAggregatesFilter<"SalesRequest"> | string | null;
    observation?: Prisma.StringNullableWithAggregatesFilter<"SalesRequest"> | string | null;
    statut?: Prisma.StringWithAggregatesFilter<"SalesRequest"> | string;
    valideurId?: Prisma.StringNullableWithAggregatesFilter<"SalesRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableWithAggregatesFilter<"SalesRequest"> | Date | string | null;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"SalesRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SalesRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SalesRequest"> | Date | string;
};
export type SalesRequestCreateInput = {
    id?: string;
    num: string;
    date?: Date | string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutSalesRequestsInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutSalesRequestsInput;
    produit: Prisma.StockItemCreateNestedOneWithoutSalesRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutSalesRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUncheckedCreateInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutSalesRequestsNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutSalesRequestsNestedInput;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutSalesRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutSalesRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestCreateManyInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesRequestListRelationFilter = {
    every?: Prisma.SalesRequestWhereInput;
    some?: Prisma.SalesRequestWhereInput;
    none?: Prisma.SalesRequestWhereInput;
};
export type SalesRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SalesRequestNullableScalarRelationFilter = {
    is?: Prisma.SalesRequestWhereInput | null;
    isNot?: Prisma.SalesRequestWhereInput | null;
};
export type SalesRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    stockDispo?: Prisma.SortOrder;
    prixUnit?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    entrepot?: Prisma.SortOrder;
    observation?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalesRequestAvgOrderByAggregateInput = {
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    stockDispo?: Prisma.SortOrder;
    prixUnit?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
};
export type SalesRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    stockDispo?: Prisma.SortOrder;
    prixUnit?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    entrepot?: Prisma.SortOrder;
    observation?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalesRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    produitId?: Prisma.SortOrder;
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    stockDispo?: Prisma.SortOrder;
    prixUnit?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    entrepot?: Prisma.SortOrder;
    observation?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    valideurId?: Prisma.SortOrder;
    dateValidation?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SalesRequestSumOrderByAggregateInput = {
    qteDemandee?: Prisma.SortOrder;
    qteValidee?: Prisma.SortOrder;
    stockDispo?: Prisma.SortOrder;
    prixUnit?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
};
export type SalesRequestCreateNestedManyWithoutValideurInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutValideurInput, Prisma.SalesRequestUncheckedCreateWithoutValideurInput> | Prisma.SalesRequestCreateWithoutValideurInput[] | Prisma.SalesRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutValideurInput | Prisma.SalesRequestCreateOrConnectWithoutValideurInput[];
    createMany?: Prisma.SalesRequestCreateManyValideurInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUncheckedCreateNestedManyWithoutValideurInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutValideurInput, Prisma.SalesRequestUncheckedCreateWithoutValideurInput> | Prisma.SalesRequestCreateWithoutValideurInput[] | Prisma.SalesRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutValideurInput | Prisma.SalesRequestCreateOrConnectWithoutValideurInput[];
    createMany?: Prisma.SalesRequestCreateManyValideurInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUpdateManyWithoutValideurNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutValideurInput, Prisma.SalesRequestUncheckedCreateWithoutValideurInput> | Prisma.SalesRequestCreateWithoutValideurInput[] | Prisma.SalesRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutValideurInput | Prisma.SalesRequestCreateOrConnectWithoutValideurInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutValideurInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutValideurInput[];
    createMany?: Prisma.SalesRequestCreateManyValideurInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutValideurInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutValideurInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutValideurInput | Prisma.SalesRequestUpdateManyWithWhereWithoutValideurInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestUncheckedUpdateManyWithoutValideurNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutValideurInput, Prisma.SalesRequestUncheckedCreateWithoutValideurInput> | Prisma.SalesRequestCreateWithoutValideurInput[] | Prisma.SalesRequestUncheckedCreateWithoutValideurInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutValideurInput | Prisma.SalesRequestCreateOrConnectWithoutValideurInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutValideurInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutValideurInput[];
    createMany?: Prisma.SalesRequestCreateManyValideurInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutValideurInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutValideurInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutValideurInput | Prisma.SalesRequestUpdateManyWithWhereWithoutValideurInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestCreateNestedManyWithoutCommercialInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutCommercialInput, Prisma.SalesRequestUncheckedCreateWithoutCommercialInput> | Prisma.SalesRequestCreateWithoutCommercialInput[] | Prisma.SalesRequestUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutCommercialInput | Prisma.SalesRequestCreateOrConnectWithoutCommercialInput[];
    createMany?: Prisma.SalesRequestCreateManyCommercialInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUncheckedCreateNestedManyWithoutCommercialInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutCommercialInput, Prisma.SalesRequestUncheckedCreateWithoutCommercialInput> | Prisma.SalesRequestCreateWithoutCommercialInput[] | Prisma.SalesRequestUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutCommercialInput | Prisma.SalesRequestCreateOrConnectWithoutCommercialInput[];
    createMany?: Prisma.SalesRequestCreateManyCommercialInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUpdateManyWithoutCommercialNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutCommercialInput, Prisma.SalesRequestUncheckedCreateWithoutCommercialInput> | Prisma.SalesRequestCreateWithoutCommercialInput[] | Prisma.SalesRequestUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutCommercialInput | Prisma.SalesRequestCreateOrConnectWithoutCommercialInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutCommercialInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutCommercialInput[];
    createMany?: Prisma.SalesRequestCreateManyCommercialInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutCommercialInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutCommercialInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutCommercialInput | Prisma.SalesRequestUpdateManyWithWhereWithoutCommercialInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestUncheckedUpdateManyWithoutCommercialNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutCommercialInput, Prisma.SalesRequestUncheckedCreateWithoutCommercialInput> | Prisma.SalesRequestCreateWithoutCommercialInput[] | Prisma.SalesRequestUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutCommercialInput | Prisma.SalesRequestCreateOrConnectWithoutCommercialInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutCommercialInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutCommercialInput[];
    createMany?: Prisma.SalesRequestCreateManyCommercialInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutCommercialInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutCommercialInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutCommercialInput | Prisma.SalesRequestUpdateManyWithWhereWithoutCommercialInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutClientInput, Prisma.SalesRequestUncheckedCreateWithoutClientInput> | Prisma.SalesRequestCreateWithoutClientInput[] | Prisma.SalesRequestUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutClientInput | Prisma.SalesRequestCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.SalesRequestCreateManyClientInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutClientInput, Prisma.SalesRequestUncheckedCreateWithoutClientInput> | Prisma.SalesRequestCreateWithoutClientInput[] | Prisma.SalesRequestUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutClientInput | Prisma.SalesRequestCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.SalesRequestCreateManyClientInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutClientInput, Prisma.SalesRequestUncheckedCreateWithoutClientInput> | Prisma.SalesRequestCreateWithoutClientInput[] | Prisma.SalesRequestUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutClientInput | Prisma.SalesRequestCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutClientInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.SalesRequestCreateManyClientInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutClientInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutClientInput | Prisma.SalesRequestUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutClientInput, Prisma.SalesRequestUncheckedCreateWithoutClientInput> | Prisma.SalesRequestCreateWithoutClientInput[] | Prisma.SalesRequestUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutClientInput | Prisma.SalesRequestCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutClientInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.SalesRequestCreateManyClientInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutClientInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutClientInput | Prisma.SalesRequestUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutProduitInput, Prisma.SalesRequestUncheckedCreateWithoutProduitInput> | Prisma.SalesRequestCreateWithoutProduitInput[] | Prisma.SalesRequestUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutProduitInput | Prisma.SalesRequestCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.SalesRequestCreateManyProduitInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUncheckedCreateNestedManyWithoutProduitInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutProduitInput, Prisma.SalesRequestUncheckedCreateWithoutProduitInput> | Prisma.SalesRequestCreateWithoutProduitInput[] | Prisma.SalesRequestUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutProduitInput | Prisma.SalesRequestCreateOrConnectWithoutProduitInput[];
    createMany?: Prisma.SalesRequestCreateManyProduitInputEnvelope;
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
};
export type SalesRequestUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutProduitInput, Prisma.SalesRequestUncheckedCreateWithoutProduitInput> | Prisma.SalesRequestCreateWithoutProduitInput[] | Prisma.SalesRequestUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutProduitInput | Prisma.SalesRequestCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutProduitInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.SalesRequestCreateManyProduitInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutProduitInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutProduitInput | Prisma.SalesRequestUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutProduitInput, Prisma.SalesRequestUncheckedCreateWithoutProduitInput> | Prisma.SalesRequestCreateWithoutProduitInput[] | Prisma.SalesRequestUncheckedCreateWithoutProduitInput[];
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutProduitInput | Prisma.SalesRequestCreateOrConnectWithoutProduitInput[];
    upsert?: Prisma.SalesRequestUpsertWithWhereUniqueWithoutProduitInput | Prisma.SalesRequestUpsertWithWhereUniqueWithoutProduitInput[];
    createMany?: Prisma.SalesRequestCreateManyProduitInputEnvelope;
    set?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    disconnect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    delete?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    connect?: Prisma.SalesRequestWhereUniqueInput | Prisma.SalesRequestWhereUniqueInput[];
    update?: Prisma.SalesRequestUpdateWithWhereUniqueWithoutProduitInput | Prisma.SalesRequestUpdateWithWhereUniqueWithoutProduitInput[];
    updateMany?: Prisma.SalesRequestUpdateManyWithWhereWithoutProduitInput | Prisma.SalesRequestUpdateManyWithWhereWithoutProduitInput[];
    deleteMany?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
};
export type SalesRequestCreateNestedOneWithoutMouvementsInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutMouvementsInput, Prisma.SalesRequestUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutMouvementsInput;
    connect?: Prisma.SalesRequestWhereUniqueInput;
};
export type SalesRequestUpdateOneWithoutMouvementsNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutMouvementsInput, Prisma.SalesRequestUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutMouvementsInput;
    upsert?: Prisma.SalesRequestUpsertWithoutMouvementsInput;
    disconnect?: Prisma.SalesRequestWhereInput | boolean;
    delete?: Prisma.SalesRequestWhereInput | boolean;
    connect?: Prisma.SalesRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalesRequestUpdateToOneWithWhereWithoutMouvementsInput, Prisma.SalesRequestUpdateWithoutMouvementsInput>, Prisma.SalesRequestUncheckedUpdateWithoutMouvementsInput>;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SalesRequestCreateNestedOneWithoutApprovalRecordsInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutApprovalRecordsInput, Prisma.SalesRequestUncheckedCreateWithoutApprovalRecordsInput>;
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutApprovalRecordsInput;
    connect?: Prisma.SalesRequestWhereUniqueInput;
};
export type SalesRequestUpdateOneWithoutApprovalRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.SalesRequestCreateWithoutApprovalRecordsInput, Prisma.SalesRequestUncheckedCreateWithoutApprovalRecordsInput>;
    connectOrCreate?: Prisma.SalesRequestCreateOrConnectWithoutApprovalRecordsInput;
    upsert?: Prisma.SalesRequestUpsertWithoutApprovalRecordsInput;
    disconnect?: Prisma.SalesRequestWhereInput | boolean;
    delete?: Prisma.SalesRequestWhereInput | boolean;
    connect?: Prisma.SalesRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SalesRequestUpdateToOneWithWhereWithoutApprovalRecordsInput, Prisma.SalesRequestUpdateWithoutApprovalRecordsInput>, Prisma.SalesRequestUncheckedUpdateWithoutApprovalRecordsInput>;
};
export type SalesRequestCreateWithoutValideurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutSalesRequestsInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutSalesRequestsInput;
    produit: Prisma.StockItemCreateNestedOneWithoutSalesRequestsInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUncheckedCreateWithoutValideurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestCreateOrConnectWithoutValideurInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutValideurInput, Prisma.SalesRequestUncheckedCreateWithoutValideurInput>;
};
export type SalesRequestCreateManyValideurInputEnvelope = {
    data: Prisma.SalesRequestCreateManyValideurInput | Prisma.SalesRequestCreateManyValideurInput[];
    skipDuplicates?: boolean;
};
export type SalesRequestUpsertWithWhereUniqueWithoutValideurInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesRequestUpdateWithoutValideurInput, Prisma.SalesRequestUncheckedUpdateWithoutValideurInput>;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutValideurInput, Prisma.SalesRequestUncheckedCreateWithoutValideurInput>;
};
export type SalesRequestUpdateWithWhereUniqueWithoutValideurInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateWithoutValideurInput, Prisma.SalesRequestUncheckedUpdateWithoutValideurInput>;
};
export type SalesRequestUpdateManyWithWhereWithoutValideurInput = {
    where: Prisma.SalesRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateManyMutationInput, Prisma.SalesRequestUncheckedUpdateManyWithoutValideurInput>;
};
export type SalesRequestScalarWhereInput = {
    AND?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
    OR?: Prisma.SalesRequestScalarWhereInput[];
    NOT?: Prisma.SalesRequestScalarWhereInput | Prisma.SalesRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"SalesRequest"> | string;
    num?: Prisma.StringFilter<"SalesRequest"> | string;
    date?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    clientId?: Prisma.StringFilter<"SalesRequest"> | string;
    commercialId?: Prisma.StringFilter<"SalesRequest"> | string;
    produitId?: Prisma.StringFilter<"SalesRequest"> | string;
    qteDemandee?: Prisma.FloatFilter<"SalesRequest"> | number;
    qteValidee?: Prisma.FloatNullableFilter<"SalesRequest"> | number | null;
    stockDispo?: Prisma.FloatNullableFilter<"SalesRequest"> | number | null;
    prixUnit?: Prisma.FloatFilter<"SalesRequest"> | number;
    montant?: Prisma.FloatFilter<"SalesRequest"> | number;
    entrepot?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    observation?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    statut?: Prisma.StringFilter<"SalesRequest"> | string;
    valideurId?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    dateValidation?: Prisma.DateTimeNullableFilter<"SalesRequest"> | Date | string | null;
    commentaire?: Prisma.StringNullableFilter<"SalesRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SalesRequest"> | Date | string;
};
export type SalesRequestCreateWithoutCommercialInput = {
    id?: string;
    num: string;
    date?: Date | string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutSalesRequestsInput;
    produit: Prisma.StockItemCreateNestedOneWithoutSalesRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutSalesRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUncheckedCreateWithoutCommercialInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestCreateOrConnectWithoutCommercialInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutCommercialInput, Prisma.SalesRequestUncheckedCreateWithoutCommercialInput>;
};
export type SalesRequestCreateManyCommercialInputEnvelope = {
    data: Prisma.SalesRequestCreateManyCommercialInput | Prisma.SalesRequestCreateManyCommercialInput[];
    skipDuplicates?: boolean;
};
export type SalesRequestUpsertWithWhereUniqueWithoutCommercialInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesRequestUpdateWithoutCommercialInput, Prisma.SalesRequestUncheckedUpdateWithoutCommercialInput>;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutCommercialInput, Prisma.SalesRequestUncheckedCreateWithoutCommercialInput>;
};
export type SalesRequestUpdateWithWhereUniqueWithoutCommercialInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateWithoutCommercialInput, Prisma.SalesRequestUncheckedUpdateWithoutCommercialInput>;
};
export type SalesRequestUpdateManyWithWhereWithoutCommercialInput = {
    where: Prisma.SalesRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateManyMutationInput, Prisma.SalesRequestUncheckedUpdateManyWithoutCommercialInput>;
};
export type SalesRequestCreateWithoutClientInput = {
    id?: string;
    num: string;
    date?: Date | string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commercial: Prisma.CommercialCreateNestedOneWithoutSalesRequestsInput;
    produit: Prisma.StockItemCreateNestedOneWithoutSalesRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutSalesRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUncheckedCreateWithoutClientInput = {
    id?: string;
    num: string;
    date?: Date | string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestCreateOrConnectWithoutClientInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutClientInput, Prisma.SalesRequestUncheckedCreateWithoutClientInput>;
};
export type SalesRequestCreateManyClientInputEnvelope = {
    data: Prisma.SalesRequestCreateManyClientInput | Prisma.SalesRequestCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type SalesRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesRequestUpdateWithoutClientInput, Prisma.SalesRequestUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutClientInput, Prisma.SalesRequestUncheckedCreateWithoutClientInput>;
};
export type SalesRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateWithoutClientInput, Prisma.SalesRequestUncheckedUpdateWithoutClientInput>;
};
export type SalesRequestUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.SalesRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateManyMutationInput, Prisma.SalesRequestUncheckedUpdateManyWithoutClientInput>;
};
export type SalesRequestCreateWithoutProduitInput = {
    id?: string;
    num: string;
    date?: Date | string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutSalesRequestsInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutSalesRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutSalesRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUncheckedCreateWithoutProduitInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutSalesRequestInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestCreateOrConnectWithoutProduitInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutProduitInput, Prisma.SalesRequestUncheckedCreateWithoutProduitInput>;
};
export type SalesRequestCreateManyProduitInputEnvelope = {
    data: Prisma.SalesRequestCreateManyProduitInput | Prisma.SalesRequestCreateManyProduitInput[];
    skipDuplicates?: boolean;
};
export type SalesRequestUpsertWithWhereUniqueWithoutProduitInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.SalesRequestUpdateWithoutProduitInput, Prisma.SalesRequestUncheckedUpdateWithoutProduitInput>;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutProduitInput, Prisma.SalesRequestUncheckedCreateWithoutProduitInput>;
};
export type SalesRequestUpdateWithWhereUniqueWithoutProduitInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateWithoutProduitInput, Prisma.SalesRequestUncheckedUpdateWithoutProduitInput>;
};
export type SalesRequestUpdateManyWithWhereWithoutProduitInput = {
    where: Prisma.SalesRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateManyMutationInput, Prisma.SalesRequestUncheckedUpdateManyWithoutProduitInput>;
};
export type SalesRequestCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutSalesRequestsInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutSalesRequestsInput;
    produit: Prisma.StockItemCreateNestedOneWithoutSalesRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutSalesRequestsValidatedInput;
    approvalRecords?: Prisma.ApprovalRecordCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUncheckedCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    approvalRecords?: Prisma.ApprovalRecordUncheckedCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestCreateOrConnectWithoutMouvementsInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutMouvementsInput, Prisma.SalesRequestUncheckedCreateWithoutMouvementsInput>;
};
export type SalesRequestUpsertWithoutMouvementsInput = {
    update: Prisma.XOR<Prisma.SalesRequestUpdateWithoutMouvementsInput, Prisma.SalesRequestUncheckedUpdateWithoutMouvementsInput>;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutMouvementsInput, Prisma.SalesRequestUncheckedCreateWithoutMouvementsInput>;
    where?: Prisma.SalesRequestWhereInput;
};
export type SalesRequestUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: Prisma.SalesRequestWhereInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateWithoutMouvementsInput, Prisma.SalesRequestUncheckedUpdateWithoutMouvementsInput>;
};
export type SalesRequestUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutSalesRequestsNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutSalesRequestsNestedInput;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutSalesRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutSalesRequestsValidatedNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestCreateWithoutApprovalRecordsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutSalesRequestsInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutSalesRequestsInput;
    produit: Prisma.StockItemCreateNestedOneWithoutSalesRequestsInput;
    valideur?: Prisma.UserCreateNestedOneWithoutSalesRequestsValidatedInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestUncheckedCreateWithoutApprovalRecordsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutSalesRequestInput;
};
export type SalesRequestCreateOrConnectWithoutApprovalRecordsInput = {
    where: Prisma.SalesRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutApprovalRecordsInput, Prisma.SalesRequestUncheckedCreateWithoutApprovalRecordsInput>;
};
export type SalesRequestUpsertWithoutApprovalRecordsInput = {
    update: Prisma.XOR<Prisma.SalesRequestUpdateWithoutApprovalRecordsInput, Prisma.SalesRequestUncheckedUpdateWithoutApprovalRecordsInput>;
    create: Prisma.XOR<Prisma.SalesRequestCreateWithoutApprovalRecordsInput, Prisma.SalesRequestUncheckedCreateWithoutApprovalRecordsInput>;
    where?: Prisma.SalesRequestWhereInput;
};
export type SalesRequestUpdateToOneWithWhereWithoutApprovalRecordsInput = {
    where?: Prisma.SalesRequestWhereInput;
    data: Prisma.XOR<Prisma.SalesRequestUpdateWithoutApprovalRecordsInput, Prisma.SalesRequestUncheckedUpdateWithoutApprovalRecordsInput>;
};
export type SalesRequestUpdateWithoutApprovalRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutSalesRequestsNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutSalesRequestsNestedInput;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutSalesRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutSalesRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateWithoutApprovalRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestCreateManyValideurInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesRequestUpdateWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutSalesRequestsNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutSalesRequestsNestedInput;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutSalesRequestsNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateManyWithoutValideurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesRequestCreateManyCommercialInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesRequestUpdateWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutSalesRequestsNestedInput;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutSalesRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutSalesRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateManyWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesRequestCreateManyClientInput = {
    id?: string;
    num: string;
    date?: Date | string;
    commercialId: string;
    produitId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesRequestUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutSalesRequestsNestedInput;
    produit?: Prisma.StockItemUpdateOneRequiredWithoutSalesRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutSalesRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    produitId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SalesRequestCreateManyProduitInput = {
    id?: string;
    num: string;
    date?: Date | string;
    clientId: string;
    commercialId: string;
    qteDemandee: number;
    qteValidee?: number | null;
    stockDispo?: number | null;
    prixUnit: number;
    montant: number;
    entrepot?: string | null;
    observation?: string | null;
    statut?: string;
    valideurId?: string | null;
    dateValidation?: Date | string | null;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SalesRequestUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutSalesRequestsNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutSalesRequestsNestedInput;
    valideur?: Prisma.UserUpdateOneWithoutSalesRequestsValidatedNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutSalesRequestNestedInput;
    approvalRecords?: Prisma.ApprovalRecordUncheckedUpdateManyWithoutSalesRequestNestedInput;
};
export type SalesRequestUncheckedUpdateManyWithoutProduitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    qteDemandee?: Prisma.FloatFieldUpdateOperationsInput | number;
    qteValidee?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    stockDispo?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    prixUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    entrepot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    valideurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateValidation?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SalesRequestCountOutputType
 */
export type SalesRequestCountOutputType = {
    mouvements: number;
    approvalRecords: number;
};
export type SalesRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mouvements?: boolean | SalesRequestCountOutputTypeCountMouvementsArgs;
    approvalRecords?: boolean | SalesRequestCountOutputTypeCountApprovalRecordsArgs;
};
/**
 * SalesRequestCountOutputType without action
 */
export type SalesRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesRequestCountOutputType
     */
    select?: Prisma.SalesRequestCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SalesRequestCountOutputType without action
 */
export type SalesRequestCountOutputTypeCountMouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MouvementWhereInput;
};
/**
 * SalesRequestCountOutputType without action
 */
export type SalesRequestCountOutputTypeCountApprovalRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRecordWhereInput;
};
export type SalesRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    date?: boolean;
    clientId?: boolean;
    commercialId?: boolean;
    produitId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    stockDispo?: boolean;
    prixUnit?: boolean;
    montant?: boolean;
    entrepot?: boolean;
    observation?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    commentaire?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.SalesRequest$valideurArgs<ExtArgs>;
    mouvements?: boolean | Prisma.SalesRequest$mouvementsArgs<ExtArgs>;
    approvalRecords?: boolean | Prisma.SalesRequest$approvalRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.SalesRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["salesRequest"]>;
export type SalesRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    date?: boolean;
    clientId?: boolean;
    commercialId?: boolean;
    produitId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    stockDispo?: boolean;
    prixUnit?: boolean;
    montant?: boolean;
    entrepot?: boolean;
    observation?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    commentaire?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.SalesRequest$valideurArgs<ExtArgs>;
}, ExtArgs["result"]["salesRequest"]>;
export type SalesRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    date?: boolean;
    clientId?: boolean;
    commercialId?: boolean;
    produitId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    stockDispo?: boolean;
    prixUnit?: boolean;
    montant?: boolean;
    entrepot?: boolean;
    observation?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    commentaire?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.SalesRequest$valideurArgs<ExtArgs>;
}, ExtArgs["result"]["salesRequest"]>;
export type SalesRequestSelectScalar = {
    id?: boolean;
    num?: boolean;
    date?: boolean;
    clientId?: boolean;
    commercialId?: boolean;
    produitId?: boolean;
    qteDemandee?: boolean;
    qteValidee?: boolean;
    stockDispo?: boolean;
    prixUnit?: boolean;
    montant?: boolean;
    entrepot?: boolean;
    observation?: boolean;
    statut?: boolean;
    valideurId?: boolean;
    dateValidation?: boolean;
    commentaire?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SalesRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "num" | "date" | "clientId" | "commercialId" | "produitId" | "qteDemandee" | "qteValidee" | "stockDispo" | "prixUnit" | "montant" | "entrepot" | "observation" | "statut" | "valideurId" | "dateValidation" | "commentaire" | "createdAt" | "updatedAt", ExtArgs["result"]["salesRequest"]>;
export type SalesRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.SalesRequest$valideurArgs<ExtArgs>;
    mouvements?: boolean | Prisma.SalesRequest$mouvementsArgs<ExtArgs>;
    approvalRecords?: boolean | Prisma.SalesRequest$approvalRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.SalesRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SalesRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.SalesRequest$valideurArgs<ExtArgs>;
};
export type SalesRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    produit?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
    valideur?: boolean | Prisma.SalesRequest$valideurArgs<ExtArgs>;
};
export type $SalesRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalesRequest";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
        commercial: Prisma.$CommercialPayload<ExtArgs>;
        produit: Prisma.$StockItemPayload<ExtArgs>;
        valideur: Prisma.$UserPayload<ExtArgs> | null;
        mouvements: Prisma.$MouvementPayload<ExtArgs>[];
        approvalRecords: Prisma.$ApprovalRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        num: string;
        date: Date;
        clientId: string;
        commercialId: string;
        produitId: string;
        qteDemandee: number;
        qteValidee: number | null;
        stockDispo: number | null;
        prixUnit: number;
        montant: number;
        entrepot: string | null;
        observation: string | null;
        statut: string;
        valideurId: string | null;
        dateValidation: Date | null;
        commentaire: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["salesRequest"]>;
    composites: {};
};
export type SalesRequestGetPayload<S extends boolean | null | undefined | SalesRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload, S>;
export type SalesRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalesRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalesRequestCountAggregateInputType | true;
};
export interface SalesRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalesRequest'];
        meta: {
            name: 'SalesRequest';
        };
    };
    /**
     * Find zero or one SalesRequest that matches the filter.
     * @param {SalesRequestFindUniqueArgs} args - Arguments to find a SalesRequest
     * @example
     * // Get one SalesRequest
     * const salesRequest = await prisma.salesRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, SalesRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SalesRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesRequestFindUniqueOrThrowArgs} args - Arguments to find a SalesRequest
     * @example
     * // Get one SalesRequest
     * const salesRequest = await prisma.salesRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalesRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SalesRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesRequestFindFirstArgs} args - Arguments to find a SalesRequest
     * @example
     * // Get one SalesRequest
     * const salesRequest = await prisma.salesRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, SalesRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SalesRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesRequestFindFirstOrThrowArgs} args - Arguments to find a SalesRequest
     * @example
     * // Get one SalesRequest
     * const salesRequest = await prisma.salesRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalesRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SalesRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesRequests
     * const salesRequests = await prisma.salesRequest.findMany()
     *
     * // Get first 10 SalesRequests
     * const salesRequests = await prisma.salesRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const salesRequestWithIdOnly = await prisma.salesRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SalesRequestFindManyArgs>(args?: Prisma.SelectSubset<T, SalesRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SalesRequest.
     * @param {SalesRequestCreateArgs} args - Arguments to create a SalesRequest.
     * @example
     * // Create one SalesRequest
     * const SalesRequest = await prisma.salesRequest.create({
     *   data: {
     *     // ... data to create a SalesRequest
     *   }
     * })
     *
     */
    create<T extends SalesRequestCreateArgs>(args: Prisma.SelectSubset<T, SalesRequestCreateArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SalesRequests.
     * @param {SalesRequestCreateManyArgs} args - Arguments to create many SalesRequests.
     * @example
     * // Create many SalesRequests
     * const salesRequest = await prisma.salesRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SalesRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, SalesRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SalesRequests and returns the data saved in the database.
     * @param {SalesRequestCreateManyAndReturnArgs} args - Arguments to create many SalesRequests.
     * @example
     * // Create many SalesRequests
     * const salesRequest = await prisma.salesRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SalesRequests and only return the `id`
     * const salesRequestWithIdOnly = await prisma.salesRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SalesRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalesRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SalesRequest.
     * @param {SalesRequestDeleteArgs} args - Arguments to delete one SalesRequest.
     * @example
     * // Delete one SalesRequest
     * const SalesRequest = await prisma.salesRequest.delete({
     *   where: {
     *     // ... filter to delete one SalesRequest
     *   }
     * })
     *
     */
    delete<T extends SalesRequestDeleteArgs>(args: Prisma.SelectSubset<T, SalesRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SalesRequest.
     * @param {SalesRequestUpdateArgs} args - Arguments to update one SalesRequest.
     * @example
     * // Update one SalesRequest
     * const salesRequest = await prisma.salesRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SalesRequestUpdateArgs>(args: Prisma.SelectSubset<T, SalesRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SalesRequests.
     * @param {SalesRequestDeleteManyArgs} args - Arguments to filter SalesRequests to delete.
     * @example
     * // Delete a few SalesRequests
     * const { count } = await prisma.salesRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SalesRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalesRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SalesRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesRequests
     * const salesRequest = await prisma.salesRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SalesRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, SalesRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SalesRequests and returns the data updated in the database.
     * @param {SalesRequestUpdateManyAndReturnArgs} args - Arguments to update many SalesRequests.
     * @example
     * // Update many SalesRequests
     * const salesRequest = await prisma.salesRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SalesRequests and only return the `id`
     * const salesRequestWithIdOnly = await prisma.salesRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalesRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SalesRequest.
     * @param {SalesRequestUpsertArgs} args - Arguments to update or create a SalesRequest.
     * @example
     * // Update or create a SalesRequest
     * const salesRequest = await prisma.salesRequest.upsert({
     *   create: {
     *     // ... data to create a SalesRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesRequest we want to update
     *   }
     * })
     */
    upsert<T extends SalesRequestUpsertArgs>(args: Prisma.SelectSubset<T, SalesRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__SalesRequestClient<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SalesRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesRequestCountArgs} args - Arguments to filter SalesRequests to count.
     * @example
     * // Count the number of SalesRequests
     * const count = await prisma.salesRequest.count({
     *   where: {
     *     // ... the filter for the SalesRequests we want to count
     *   }
     * })
    **/
    count<T extends SalesRequestCountArgs>(args?: Prisma.Subset<T, SalesRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalesRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SalesRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesRequestAggregateArgs>(args: Prisma.Subset<T, SalesRequestAggregateArgs>): Prisma.PrismaPromise<GetSalesRequestAggregateType<T>>;
    /**
     * Group by SalesRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SalesRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalesRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: SalesRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalesRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SalesRequest model
     */
    readonly fields: SalesRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SalesRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SalesRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    commercial<T extends Prisma.CommercialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommercialDefaultArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    produit<T extends Prisma.StockItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    valideur<T extends Prisma.SalesRequest$valideurArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesRequest$valideurArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mouvements<T extends Prisma.SalesRequest$mouvementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesRequest$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvalRecords<T extends Prisma.SalesRequest$approvalRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SalesRequest$approvalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the SalesRequest model
 */
export interface SalesRequestFieldRefs {
    readonly id: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly num: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly date: Prisma.FieldRef<"SalesRequest", 'DateTime'>;
    readonly clientId: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly commercialId: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly produitId: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly qteDemandee: Prisma.FieldRef<"SalesRequest", 'Float'>;
    readonly qteValidee: Prisma.FieldRef<"SalesRequest", 'Float'>;
    readonly stockDispo: Prisma.FieldRef<"SalesRequest", 'Float'>;
    readonly prixUnit: Prisma.FieldRef<"SalesRequest", 'Float'>;
    readonly montant: Prisma.FieldRef<"SalesRequest", 'Float'>;
    readonly entrepot: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly observation: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly statut: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly valideurId: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly dateValidation: Prisma.FieldRef<"SalesRequest", 'DateTime'>;
    readonly commentaire: Prisma.FieldRef<"SalesRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SalesRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SalesRequest", 'DateTime'>;
}
/**
 * SalesRequest findUnique
 */
export type SalesRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SalesRequest to fetch.
     */
    where: Prisma.SalesRequestWhereUniqueInput;
};
/**
 * SalesRequest findUniqueOrThrow
 */
export type SalesRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SalesRequest to fetch.
     */
    where: Prisma.SalesRequestWhereUniqueInput;
};
/**
 * SalesRequest findFirst
 */
export type SalesRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SalesRequest to fetch.
     */
    where?: Prisma.SalesRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesRequests to fetch.
     */
    orderBy?: Prisma.SalesRequestOrderByWithRelationInput | Prisma.SalesRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalesRequests.
     */
    cursor?: Prisma.SalesRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesRequests.
     */
    distinct?: Prisma.SalesRequestScalarFieldEnum | Prisma.SalesRequestScalarFieldEnum[];
};
/**
 * SalesRequest findFirstOrThrow
 */
export type SalesRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SalesRequest to fetch.
     */
    where?: Prisma.SalesRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesRequests to fetch.
     */
    orderBy?: Prisma.SalesRequestOrderByWithRelationInput | Prisma.SalesRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalesRequests.
     */
    cursor?: Prisma.SalesRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesRequests.
     */
    distinct?: Prisma.SalesRequestScalarFieldEnum | Prisma.SalesRequestScalarFieldEnum[];
};
/**
 * SalesRequest findMany
 */
export type SalesRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SalesRequests to fetch.
     */
    where?: Prisma.SalesRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalesRequests to fetch.
     */
    orderBy?: Prisma.SalesRequestOrderByWithRelationInput | Prisma.SalesRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SalesRequests.
     */
    cursor?: Prisma.SalesRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalesRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalesRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalesRequests.
     */
    distinct?: Prisma.SalesRequestScalarFieldEnum | Prisma.SalesRequestScalarFieldEnum[];
};
/**
 * SalesRequest create
 */
export type SalesRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a SalesRequest.
     */
    data: Prisma.XOR<Prisma.SalesRequestCreateInput, Prisma.SalesRequestUncheckedCreateInput>;
};
/**
 * SalesRequest createMany
 */
export type SalesRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesRequests.
     */
    data: Prisma.SalesRequestCreateManyInput | Prisma.SalesRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SalesRequest createManyAndReturn
 */
export type SalesRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesRequest
     */
    select?: Prisma.SalesRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesRequest
     */
    omit?: Prisma.SalesRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many SalesRequests.
     */
    data: Prisma.SalesRequestCreateManyInput | Prisma.SalesRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SalesRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SalesRequest update
 */
export type SalesRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a SalesRequest.
     */
    data: Prisma.XOR<Prisma.SalesRequestUpdateInput, Prisma.SalesRequestUncheckedUpdateInput>;
    /**
     * Choose, which SalesRequest to update.
     */
    where: Prisma.SalesRequestWhereUniqueInput;
};
/**
 * SalesRequest updateMany
 */
export type SalesRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesRequests.
     */
    data: Prisma.XOR<Prisma.SalesRequestUpdateManyMutationInput, Prisma.SalesRequestUncheckedUpdateManyInput>;
    /**
     * Filter which SalesRequests to update
     */
    where?: Prisma.SalesRequestWhereInput;
    /**
     * Limit how many SalesRequests to update.
     */
    limit?: number;
};
/**
 * SalesRequest updateManyAndReturn
 */
export type SalesRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesRequest
     */
    select?: Prisma.SalesRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalesRequest
     */
    omit?: Prisma.SalesRequestOmit<ExtArgs> | null;
    /**
     * The data used to update SalesRequests.
     */
    data: Prisma.XOR<Prisma.SalesRequestUpdateManyMutationInput, Prisma.SalesRequestUncheckedUpdateManyInput>;
    /**
     * Filter which SalesRequests to update
     */
    where?: Prisma.SalesRequestWhereInput;
    /**
     * Limit how many SalesRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SalesRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SalesRequest upsert
 */
export type SalesRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the SalesRequest to update in case it exists.
     */
    where: Prisma.SalesRequestWhereUniqueInput;
    /**
     * In case the SalesRequest found by the `where` argument doesn't exist, create a new SalesRequest with this data.
     */
    create: Prisma.XOR<Prisma.SalesRequestCreateInput, Prisma.SalesRequestUncheckedCreateInput>;
    /**
     * In case the SalesRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SalesRequestUpdateInput, Prisma.SalesRequestUncheckedUpdateInput>;
};
/**
 * SalesRequest delete
 */
export type SalesRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which SalesRequest to delete.
     */
    where: Prisma.SalesRequestWhereUniqueInput;
};
/**
 * SalesRequest deleteMany
 */
export type SalesRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SalesRequests to delete
     */
    where?: Prisma.SalesRequestWhereInput;
    /**
     * Limit how many SalesRequests to delete.
     */
    limit?: number;
};
/**
 * SalesRequest.valideur
 */
export type SalesRequest$valideurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SalesRequest.mouvements
 */
export type SalesRequest$mouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SalesRequest.approvalRecords
 */
export type SalesRequest$approvalRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SalesRequest without action
 */
export type SalesRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=SalesRequest.d.ts.map