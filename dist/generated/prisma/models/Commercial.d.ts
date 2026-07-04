import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Commercial
 *
 */
export type CommercialModel = runtime.Types.Result.DefaultSelection<Prisma.$CommercialPayload>;
export type AggregateCommercial = {
    _count: CommercialCountAggregateOutputType | null;
    _avg: CommercialAvgAggregateOutputType | null;
    _sum: CommercialSumAggregateOutputType | null;
    _min: CommercialMinAggregateOutputType | null;
    _max: CommercialMaxAggregateOutputType | null;
};
export type CommercialAvgAggregateOutputType = {
    objectif: number | null;
};
export type CommercialSumAggregateOutputType = {
    objectif: number | null;
};
export type CommercialMinAggregateOutputType = {
    id: string | null;
    matricule: string | null;
    nom: string | null;
    prenom: string | null;
    tel: string | null;
    email: string | null;
    zone: string | null;
    objectif: number | null;
    statut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CommercialMaxAggregateOutputType = {
    id: string | null;
    matricule: string | null;
    nom: string | null;
    prenom: string | null;
    tel: string | null;
    email: string | null;
    zone: string | null;
    objectif: number | null;
    statut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CommercialCountAggregateOutputType = {
    id: number;
    matricule: number;
    nom: number;
    prenom: number;
    tel: number;
    email: number;
    zone: number;
    objectif: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CommercialAvgAggregateInputType = {
    objectif?: true;
};
export type CommercialSumAggregateInputType = {
    objectif?: true;
};
export type CommercialMinAggregateInputType = {
    id?: true;
    matricule?: true;
    nom?: true;
    prenom?: true;
    tel?: true;
    email?: true;
    zone?: true;
    objectif?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CommercialMaxAggregateInputType = {
    id?: true;
    matricule?: true;
    nom?: true;
    prenom?: true;
    tel?: true;
    email?: true;
    zone?: true;
    objectif?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CommercialCountAggregateInputType = {
    id?: true;
    matricule?: true;
    nom?: true;
    prenom?: true;
    tel?: true;
    email?: true;
    zone?: true;
    objectif?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CommercialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Commercial to aggregate.
     */
    where?: Prisma.CommercialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commercials to fetch.
     */
    orderBy?: Prisma.CommercialOrderByWithRelationInput | Prisma.CommercialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommercialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commercials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commercials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Commercials
    **/
    _count?: true | CommercialCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CommercialAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CommercialSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommercialMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommercialMaxAggregateInputType;
};
export type GetCommercialAggregateType<T extends CommercialAggregateArgs> = {
    [P in keyof T & keyof AggregateCommercial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommercial[P]> : Prisma.GetScalarType<T[P], AggregateCommercial[P]>;
};
export type CommercialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommercialWhereInput;
    orderBy?: Prisma.CommercialOrderByWithAggregationInput | Prisma.CommercialOrderByWithAggregationInput[];
    by: Prisma.CommercialScalarFieldEnum[] | Prisma.CommercialScalarFieldEnum;
    having?: Prisma.CommercialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommercialCountAggregateInputType | true;
    _avg?: CommercialAvgAggregateInputType;
    _sum?: CommercialSumAggregateInputType;
    _min?: CommercialMinAggregateInputType;
    _max?: CommercialMaxAggregateInputType;
};
export type CommercialGroupByOutputType = {
    id: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel: string | null;
    email: string | null;
    zone: string | null;
    objectif: number;
    statut: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CommercialCountAggregateOutputType | null;
    _avg: CommercialAvgAggregateOutputType | null;
    _sum: CommercialSumAggregateOutputType | null;
    _min: CommercialMinAggregateOutputType | null;
    _max: CommercialMaxAggregateOutputType | null;
};
export type GetCommercialGroupByPayload<T extends CommercialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommercialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommercialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommercialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommercialGroupByOutputType[P]>;
}>>;
export type CommercialWhereInput = {
    AND?: Prisma.CommercialWhereInput | Prisma.CommercialWhereInput[];
    OR?: Prisma.CommercialWhereInput[];
    NOT?: Prisma.CommercialWhereInput | Prisma.CommercialWhereInput[];
    id?: Prisma.StringFilter<"Commercial"> | string;
    matricule?: Prisma.StringFilter<"Commercial"> | string;
    nom?: Prisma.StringFilter<"Commercial"> | string;
    prenom?: Prisma.StringFilter<"Commercial"> | string;
    tel?: Prisma.StringNullableFilter<"Commercial"> | string | null;
    email?: Prisma.StringNullableFilter<"Commercial"> | string | null;
    zone?: Prisma.StringNullableFilter<"Commercial"> | string | null;
    objectif?: Prisma.FloatFilter<"Commercial"> | number;
    statut?: Prisma.StringFilter<"Commercial"> | string;
    createdAt?: Prisma.DateTimeFilter<"Commercial"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commercial"> | Date | string;
    clients?: Prisma.ClientListRelationFilter;
    commandes?: Prisma.CommandeListRelationFilter;
    factures?: Prisma.FactureListRelationFilter;
    salesRequests?: Prisma.SalesRequestListRelationFilter;
};
export type CommercialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    objectif?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clients?: Prisma.ClientOrderByRelationAggregateInput;
    commandes?: Prisma.CommandeOrderByRelationAggregateInput;
    factures?: Prisma.FactureOrderByRelationAggregateInput;
    salesRequests?: Prisma.SalesRequestOrderByRelationAggregateInput;
};
export type CommercialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    matricule?: string;
    email?: string;
    AND?: Prisma.CommercialWhereInput | Prisma.CommercialWhereInput[];
    OR?: Prisma.CommercialWhereInput[];
    NOT?: Prisma.CommercialWhereInput | Prisma.CommercialWhereInput[];
    nom?: Prisma.StringFilter<"Commercial"> | string;
    prenom?: Prisma.StringFilter<"Commercial"> | string;
    tel?: Prisma.StringNullableFilter<"Commercial"> | string | null;
    zone?: Prisma.StringNullableFilter<"Commercial"> | string | null;
    objectif?: Prisma.FloatFilter<"Commercial"> | number;
    statut?: Prisma.StringFilter<"Commercial"> | string;
    createdAt?: Prisma.DateTimeFilter<"Commercial"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commercial"> | Date | string;
    clients?: Prisma.ClientListRelationFilter;
    commandes?: Prisma.CommandeListRelationFilter;
    factures?: Prisma.FactureListRelationFilter;
    salesRequests?: Prisma.SalesRequestListRelationFilter;
}, "id" | "matricule" | "email">;
export type CommercialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    objectif?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CommercialCountOrderByAggregateInput;
    _avg?: Prisma.CommercialAvgOrderByAggregateInput;
    _max?: Prisma.CommercialMaxOrderByAggregateInput;
    _min?: Prisma.CommercialMinOrderByAggregateInput;
    _sum?: Prisma.CommercialSumOrderByAggregateInput;
};
export type CommercialScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommercialScalarWhereWithAggregatesInput | Prisma.CommercialScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommercialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommercialScalarWhereWithAggregatesInput | Prisma.CommercialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Commercial"> | string;
    matricule?: Prisma.StringWithAggregatesFilter<"Commercial"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Commercial"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Commercial"> | string;
    tel?: Prisma.StringNullableWithAggregatesFilter<"Commercial"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Commercial"> | string | null;
    zone?: Prisma.StringNullableWithAggregatesFilter<"Commercial"> | string | null;
    objectif?: Prisma.FloatWithAggregatesFilter<"Commercial"> | number;
    statut?: Prisma.StringWithAggregatesFilter<"Commercial"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Commercial"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Commercial"> | Date | string;
};
export type CommercialCreateInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientCreateNestedManyWithoutCommercialInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutCommercialInput;
};
export type CommercialUncheckedCreateInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutCommercialInput;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutCommercialInput;
};
export type CommercialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUpdateManyWithoutCommercialNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutCommercialNestedInput;
};
export type CommercialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutCommercialNestedInput;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutCommercialNestedInput;
};
export type CommercialCreateManyInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommercialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommercialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommercialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    objectif?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommercialAvgOrderByAggregateInput = {
    objectif?: Prisma.SortOrder;
};
export type CommercialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    objectif?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommercialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    objectif?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommercialSumOrderByAggregateInput = {
    objectif?: Prisma.SortOrder;
};
export type CommercialNullableScalarRelationFilter = {
    is?: Prisma.CommercialWhereInput | null;
    isNot?: Prisma.CommercialWhereInput | null;
};
export type CommercialScalarRelationFilter = {
    is?: Prisma.CommercialWhereInput;
    isNot?: Prisma.CommercialWhereInput;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CommercialCreateNestedOneWithoutClientsInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutClientsInput, Prisma.CommercialUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutClientsInput;
    connect?: Prisma.CommercialWhereUniqueInput;
};
export type CommercialUpdateOneWithoutClientsNestedInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutClientsInput, Prisma.CommercialUncheckedCreateWithoutClientsInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutClientsInput;
    upsert?: Prisma.CommercialUpsertWithoutClientsInput;
    disconnect?: Prisma.CommercialWhereInput | boolean;
    delete?: Prisma.CommercialWhereInput | boolean;
    connect?: Prisma.CommercialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommercialUpdateToOneWithWhereWithoutClientsInput, Prisma.CommercialUpdateWithoutClientsInput>, Prisma.CommercialUncheckedUpdateWithoutClientsInput>;
};
export type CommercialCreateNestedOneWithoutCommandesInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutCommandesInput, Prisma.CommercialUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutCommandesInput;
    connect?: Prisma.CommercialWhereUniqueInput;
};
export type CommercialUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutCommandesInput, Prisma.CommercialUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutCommandesInput;
    upsert?: Prisma.CommercialUpsertWithoutCommandesInput;
    connect?: Prisma.CommercialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommercialUpdateToOneWithWhereWithoutCommandesInput, Prisma.CommercialUpdateWithoutCommandesInput>, Prisma.CommercialUncheckedUpdateWithoutCommandesInput>;
};
export type CommercialCreateNestedOneWithoutFacturesInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutFacturesInput, Prisma.CommercialUncheckedCreateWithoutFacturesInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutFacturesInput;
    connect?: Prisma.CommercialWhereUniqueInput;
};
export type CommercialUpdateOneRequiredWithoutFacturesNestedInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutFacturesInput, Prisma.CommercialUncheckedCreateWithoutFacturesInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutFacturesInput;
    upsert?: Prisma.CommercialUpsertWithoutFacturesInput;
    connect?: Prisma.CommercialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommercialUpdateToOneWithWhereWithoutFacturesInput, Prisma.CommercialUpdateWithoutFacturesInput>, Prisma.CommercialUncheckedUpdateWithoutFacturesInput>;
};
export type CommercialCreateNestedOneWithoutSalesRequestsInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutSalesRequestsInput, Prisma.CommercialUncheckedCreateWithoutSalesRequestsInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutSalesRequestsInput;
    connect?: Prisma.CommercialWhereUniqueInput;
};
export type CommercialUpdateOneRequiredWithoutSalesRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.CommercialCreateWithoutSalesRequestsInput, Prisma.CommercialUncheckedCreateWithoutSalesRequestsInput>;
    connectOrCreate?: Prisma.CommercialCreateOrConnectWithoutSalesRequestsInput;
    upsert?: Prisma.CommercialUpsertWithoutSalesRequestsInput;
    connect?: Prisma.CommercialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommercialUpdateToOneWithWhereWithoutSalesRequestsInput, Prisma.CommercialUpdateWithoutSalesRequestsInput>, Prisma.CommercialUncheckedUpdateWithoutSalesRequestsInput>;
};
export type CommercialCreateWithoutClientsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutCommercialInput;
};
export type CommercialUncheckedCreateWithoutClientsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutCommercialInput;
};
export type CommercialCreateOrConnectWithoutClientsInput = {
    where: Prisma.CommercialWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutClientsInput, Prisma.CommercialUncheckedCreateWithoutClientsInput>;
};
export type CommercialUpsertWithoutClientsInput = {
    update: Prisma.XOR<Prisma.CommercialUpdateWithoutClientsInput, Prisma.CommercialUncheckedUpdateWithoutClientsInput>;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutClientsInput, Prisma.CommercialUncheckedCreateWithoutClientsInput>;
    where?: Prisma.CommercialWhereInput;
};
export type CommercialUpdateToOneWithWhereWithoutClientsInput = {
    where?: Prisma.CommercialWhereInput;
    data: Prisma.XOR<Prisma.CommercialUpdateWithoutClientsInput, Prisma.CommercialUncheckedUpdateWithoutClientsInput>;
};
export type CommercialUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutCommercialNestedInput;
};
export type CommercialUncheckedUpdateWithoutClientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutCommercialNestedInput;
};
export type CommercialCreateWithoutCommandesInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutCommercialInput;
};
export type CommercialUncheckedCreateWithoutCommandesInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutCommercialInput;
};
export type CommercialCreateOrConnectWithoutCommandesInput = {
    where: Prisma.CommercialWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutCommandesInput, Prisma.CommercialUncheckedCreateWithoutCommandesInput>;
};
export type CommercialUpsertWithoutCommandesInput = {
    update: Prisma.XOR<Prisma.CommercialUpdateWithoutCommandesInput, Prisma.CommercialUncheckedUpdateWithoutCommandesInput>;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutCommandesInput, Prisma.CommercialUncheckedCreateWithoutCommandesInput>;
    where?: Prisma.CommercialWhereInput;
};
export type CommercialUpdateToOneWithWhereWithoutCommandesInput = {
    where?: Prisma.CommercialWhereInput;
    data: Prisma.XOR<Prisma.CommercialUpdateWithoutCommandesInput, Prisma.CommercialUncheckedUpdateWithoutCommandesInput>;
};
export type CommercialUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutCommercialNestedInput;
};
export type CommercialUncheckedUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutCommercialNestedInput;
};
export type CommercialCreateWithoutFacturesInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientCreateNestedManyWithoutCommercialInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutCommercialInput;
};
export type CommercialUncheckedCreateWithoutFacturesInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutCommercialInput;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutCommercialInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutCommercialInput;
};
export type CommercialCreateOrConnectWithoutFacturesInput = {
    where: Prisma.CommercialWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutFacturesInput, Prisma.CommercialUncheckedCreateWithoutFacturesInput>;
};
export type CommercialUpsertWithoutFacturesInput = {
    update: Prisma.XOR<Prisma.CommercialUpdateWithoutFacturesInput, Prisma.CommercialUncheckedUpdateWithoutFacturesInput>;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutFacturesInput, Prisma.CommercialUncheckedCreateWithoutFacturesInput>;
    where?: Prisma.CommercialWhereInput;
};
export type CommercialUpdateToOneWithWhereWithoutFacturesInput = {
    where?: Prisma.CommercialWhereInput;
    data: Prisma.XOR<Prisma.CommercialUpdateWithoutFacturesInput, Prisma.CommercialUncheckedUpdateWithoutFacturesInput>;
};
export type CommercialUpdateWithoutFacturesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUpdateManyWithoutCommercialNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutCommercialNestedInput;
};
export type CommercialUncheckedUpdateWithoutFacturesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutCommercialNestedInput;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutCommercialNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutCommercialNestedInput;
};
export type CommercialCreateWithoutSalesRequestsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientCreateNestedManyWithoutCommercialInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommercialInput;
};
export type CommercialUncheckedCreateWithoutSalesRequestsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    zone?: string | null;
    objectif?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    clients?: Prisma.ClientUncheckedCreateNestedManyWithoutCommercialInput;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutCommercialInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommercialInput;
};
export type CommercialCreateOrConnectWithoutSalesRequestsInput = {
    where: Prisma.CommercialWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutSalesRequestsInput, Prisma.CommercialUncheckedCreateWithoutSalesRequestsInput>;
};
export type CommercialUpsertWithoutSalesRequestsInput = {
    update: Prisma.XOR<Prisma.CommercialUpdateWithoutSalesRequestsInput, Prisma.CommercialUncheckedUpdateWithoutSalesRequestsInput>;
    create: Prisma.XOR<Prisma.CommercialCreateWithoutSalesRequestsInput, Prisma.CommercialUncheckedCreateWithoutSalesRequestsInput>;
    where?: Prisma.CommercialWhereInput;
};
export type CommercialUpdateToOneWithWhereWithoutSalesRequestsInput = {
    where?: Prisma.CommercialWhereInput;
    data: Prisma.XOR<Prisma.CommercialUpdateWithoutSalesRequestsInput, Prisma.CommercialUncheckedUpdateWithoutSalesRequestsInput>;
};
export type CommercialUpdateWithoutSalesRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUpdateManyWithoutCommercialNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommercialNestedInput;
};
export type CommercialUncheckedUpdateWithoutSalesRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    objectif?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clients?: Prisma.ClientUncheckedUpdateManyWithoutCommercialNestedInput;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutCommercialNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommercialNestedInput;
};
/**
 * Count Type CommercialCountOutputType
 */
export type CommercialCountOutputType = {
    clients: number;
    commandes: number;
    factures: number;
    salesRequests: number;
};
export type CommercialCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clients?: boolean | CommercialCountOutputTypeCountClientsArgs;
    commandes?: boolean | CommercialCountOutputTypeCountCommandesArgs;
    factures?: boolean | CommercialCountOutputTypeCountFacturesArgs;
    salesRequests?: boolean | CommercialCountOutputTypeCountSalesRequestsArgs;
};
/**
 * CommercialCountOutputType without action
 */
export type CommercialCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommercialCountOutputType
     */
    select?: Prisma.CommercialCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CommercialCountOutputType without action
 */
export type CommercialCountOutputTypeCountClientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
};
/**
 * CommercialCountOutputType without action
 */
export type CommercialCountOutputTypeCountCommandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
};
/**
 * CommercialCountOutputType without action
 */
export type CommercialCountOutputTypeCountFacturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactureWhereInput;
};
/**
 * CommercialCountOutputType without action
 */
export type CommercialCountOutputTypeCountSalesRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesRequestWhereInput;
};
export type CommercialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    zone?: boolean;
    objectif?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clients?: boolean | Prisma.Commercial$clientsArgs<ExtArgs>;
    commandes?: boolean | Prisma.Commercial$commandesArgs<ExtArgs>;
    factures?: boolean | Prisma.Commercial$facturesArgs<ExtArgs>;
    salesRequests?: boolean | Prisma.Commercial$salesRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.CommercialCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commercial"]>;
export type CommercialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    zone?: boolean;
    objectif?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["commercial"]>;
export type CommercialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    zone?: boolean;
    objectif?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["commercial"]>;
export type CommercialSelectScalar = {
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    zone?: boolean;
    objectif?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CommercialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "matricule" | "nom" | "prenom" | "tel" | "email" | "zone" | "objectif" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["commercial"]>;
export type CommercialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clients?: boolean | Prisma.Commercial$clientsArgs<ExtArgs>;
    commandes?: boolean | Prisma.Commercial$commandesArgs<ExtArgs>;
    factures?: boolean | Prisma.Commercial$facturesArgs<ExtArgs>;
    salesRequests?: boolean | Prisma.Commercial$salesRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.CommercialCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CommercialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CommercialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CommercialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Commercial";
    objects: {
        clients: Prisma.$ClientPayload<ExtArgs>[];
        commandes: Prisma.$CommandePayload<ExtArgs>[];
        factures: Prisma.$FacturePayload<ExtArgs>[];
        salesRequests: Prisma.$SalesRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        matricule: string;
        nom: string;
        prenom: string;
        tel: string | null;
        email: string | null;
        zone: string | null;
        objectif: number;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["commercial"]>;
    composites: {};
};
export type CommercialGetPayload<S extends boolean | null | undefined | CommercialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommercialPayload, S>;
export type CommercialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommercialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommercialCountAggregateInputType | true;
};
export interface CommercialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Commercial'];
        meta: {
            name: 'Commercial';
        };
    };
    /**
     * Find zero or one Commercial that matches the filter.
     * @param {CommercialFindUniqueArgs} args - Arguments to find a Commercial
     * @example
     * // Get one Commercial
     * const commercial = await prisma.commercial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommercialFindUniqueArgs>(args: Prisma.SelectSubset<T, CommercialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Commercial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommercialFindUniqueOrThrowArgs} args - Arguments to find a Commercial
     * @example
     * // Get one Commercial
     * const commercial = await prisma.commercial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommercialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommercialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Commercial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialFindFirstArgs} args - Arguments to find a Commercial
     * @example
     * // Get one Commercial
     * const commercial = await prisma.commercial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommercialFindFirstArgs>(args?: Prisma.SelectSubset<T, CommercialFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Commercial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialFindFirstOrThrowArgs} args - Arguments to find a Commercial
     * @example
     * // Get one Commercial
     * const commercial = await prisma.commercial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommercialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommercialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Commercials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commercials
     * const commercials = await prisma.commercial.findMany()
     *
     * // Get first 10 Commercials
     * const commercials = await prisma.commercial.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commercialWithIdOnly = await prisma.commercial.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommercialFindManyArgs>(args?: Prisma.SelectSubset<T, CommercialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Commercial.
     * @param {CommercialCreateArgs} args - Arguments to create a Commercial.
     * @example
     * // Create one Commercial
     * const Commercial = await prisma.commercial.create({
     *   data: {
     *     // ... data to create a Commercial
     *   }
     * })
     *
     */
    create<T extends CommercialCreateArgs>(args: Prisma.SelectSubset<T, CommercialCreateArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Commercials.
     * @param {CommercialCreateManyArgs} args - Arguments to create many Commercials.
     * @example
     * // Create many Commercials
     * const commercial = await prisma.commercial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommercialCreateManyArgs>(args?: Prisma.SelectSubset<T, CommercialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Commercials and returns the data saved in the database.
     * @param {CommercialCreateManyAndReturnArgs} args - Arguments to create many Commercials.
     * @example
     * // Create many Commercials
     * const commercial = await prisma.commercial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Commercials and only return the `id`
     * const commercialWithIdOnly = await prisma.commercial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommercialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommercialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Commercial.
     * @param {CommercialDeleteArgs} args - Arguments to delete one Commercial.
     * @example
     * // Delete one Commercial
     * const Commercial = await prisma.commercial.delete({
     *   where: {
     *     // ... filter to delete one Commercial
     *   }
     * })
     *
     */
    delete<T extends CommercialDeleteArgs>(args: Prisma.SelectSubset<T, CommercialDeleteArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Commercial.
     * @param {CommercialUpdateArgs} args - Arguments to update one Commercial.
     * @example
     * // Update one Commercial
     * const commercial = await prisma.commercial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommercialUpdateArgs>(args: Prisma.SelectSubset<T, CommercialUpdateArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Commercials.
     * @param {CommercialDeleteManyArgs} args - Arguments to filter Commercials to delete.
     * @example
     * // Delete a few Commercials
     * const { count } = await prisma.commercial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommercialDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommercialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Commercials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commercials
     * const commercial = await prisma.commercial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommercialUpdateManyArgs>(args: Prisma.SelectSubset<T, CommercialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Commercials and returns the data updated in the database.
     * @param {CommercialUpdateManyAndReturnArgs} args - Arguments to update many Commercials.
     * @example
     * // Update many Commercials
     * const commercial = await prisma.commercial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Commercials and only return the `id`
     * const commercialWithIdOnly = await prisma.commercial.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommercialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommercialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Commercial.
     * @param {CommercialUpsertArgs} args - Arguments to update or create a Commercial.
     * @example
     * // Update or create a Commercial
     * const commercial = await prisma.commercial.upsert({
     *   create: {
     *     // ... data to create a Commercial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commercial we want to update
     *   }
     * })
     */
    upsert<T extends CommercialUpsertArgs>(args: Prisma.SelectSubset<T, CommercialUpsertArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Commercials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialCountArgs} args - Arguments to filter Commercials to count.
     * @example
     * // Count the number of Commercials
     * const count = await prisma.commercial.count({
     *   where: {
     *     // ... the filter for the Commercials we want to count
     *   }
     * })
    **/
    count<T extends CommercialCountArgs>(args?: Prisma.Subset<T, CommercialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommercialCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Commercial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommercialAggregateArgs>(args: Prisma.Subset<T, CommercialAggregateArgs>): Prisma.PrismaPromise<GetCommercialAggregateType<T>>;
    /**
     * Group by Commercial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommercialGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommercialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommercialGroupByArgs['orderBy'];
    } : {
        orderBy?: CommercialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommercialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommercialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Commercial model
     */
    readonly fields: CommercialFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Commercial.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommercialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clients<T extends Prisma.Commercial$clientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commercial$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    commandes<T extends Prisma.Commercial$commandesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commercial$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    factures<T extends Prisma.Commercial$facturesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commercial$facturesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salesRequests<T extends Prisma.Commercial$salesRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commercial$salesRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Commercial model
 */
export interface CommercialFieldRefs {
    readonly id: Prisma.FieldRef<"Commercial", 'String'>;
    readonly matricule: Prisma.FieldRef<"Commercial", 'String'>;
    readonly nom: Prisma.FieldRef<"Commercial", 'String'>;
    readonly prenom: Prisma.FieldRef<"Commercial", 'String'>;
    readonly tel: Prisma.FieldRef<"Commercial", 'String'>;
    readonly email: Prisma.FieldRef<"Commercial", 'String'>;
    readonly zone: Prisma.FieldRef<"Commercial", 'String'>;
    readonly objectif: Prisma.FieldRef<"Commercial", 'Float'>;
    readonly statut: Prisma.FieldRef<"Commercial", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Commercial", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Commercial", 'DateTime'>;
}
/**
 * Commercial findUnique
 */
export type CommercialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * Filter, which Commercial to fetch.
     */
    where: Prisma.CommercialWhereUniqueInput;
};
/**
 * Commercial findUniqueOrThrow
 */
export type CommercialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * Filter, which Commercial to fetch.
     */
    where: Prisma.CommercialWhereUniqueInput;
};
/**
 * Commercial findFirst
 */
export type CommercialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * Filter, which Commercial to fetch.
     */
    where?: Prisma.CommercialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commercials to fetch.
     */
    orderBy?: Prisma.CommercialOrderByWithRelationInput | Prisma.CommercialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Commercials.
     */
    cursor?: Prisma.CommercialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commercials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commercials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Commercials.
     */
    distinct?: Prisma.CommercialScalarFieldEnum | Prisma.CommercialScalarFieldEnum[];
};
/**
 * Commercial findFirstOrThrow
 */
export type CommercialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * Filter, which Commercial to fetch.
     */
    where?: Prisma.CommercialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commercials to fetch.
     */
    orderBy?: Prisma.CommercialOrderByWithRelationInput | Prisma.CommercialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Commercials.
     */
    cursor?: Prisma.CommercialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commercials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commercials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Commercials.
     */
    distinct?: Prisma.CommercialScalarFieldEnum | Prisma.CommercialScalarFieldEnum[];
};
/**
 * Commercial findMany
 */
export type CommercialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * Filter, which Commercials to fetch.
     */
    where?: Prisma.CommercialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commercials to fetch.
     */
    orderBy?: Prisma.CommercialOrderByWithRelationInput | Prisma.CommercialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Commercials.
     */
    cursor?: Prisma.CommercialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commercials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commercials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Commercials.
     */
    distinct?: Prisma.CommercialScalarFieldEnum | Prisma.CommercialScalarFieldEnum[];
};
/**
 * Commercial create
 */
export type CommercialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * The data needed to create a Commercial.
     */
    data: Prisma.XOR<Prisma.CommercialCreateInput, Prisma.CommercialUncheckedCreateInput>;
};
/**
 * Commercial createMany
 */
export type CommercialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commercials.
     */
    data: Prisma.CommercialCreateManyInput | Prisma.CommercialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Commercial createManyAndReturn
 */
export type CommercialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * The data used to create many Commercials.
     */
    data: Prisma.CommercialCreateManyInput | Prisma.CommercialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Commercial update
 */
export type CommercialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * The data needed to update a Commercial.
     */
    data: Prisma.XOR<Prisma.CommercialUpdateInput, Prisma.CommercialUncheckedUpdateInput>;
    /**
     * Choose, which Commercial to update.
     */
    where: Prisma.CommercialWhereUniqueInput;
};
/**
 * Commercial updateMany
 */
export type CommercialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Commercials.
     */
    data: Prisma.XOR<Prisma.CommercialUpdateManyMutationInput, Prisma.CommercialUncheckedUpdateManyInput>;
    /**
     * Filter which Commercials to update
     */
    where?: Prisma.CommercialWhereInput;
    /**
     * Limit how many Commercials to update.
     */
    limit?: number;
};
/**
 * Commercial updateManyAndReturn
 */
export type CommercialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * The data used to update Commercials.
     */
    data: Prisma.XOR<Prisma.CommercialUpdateManyMutationInput, Prisma.CommercialUncheckedUpdateManyInput>;
    /**
     * Filter which Commercials to update
     */
    where?: Prisma.CommercialWhereInput;
    /**
     * Limit how many Commercials to update.
     */
    limit?: number;
};
/**
 * Commercial upsert
 */
export type CommercialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * The filter to search for the Commercial to update in case it exists.
     */
    where: Prisma.CommercialWhereUniqueInput;
    /**
     * In case the Commercial found by the `where` argument doesn't exist, create a new Commercial with this data.
     */
    create: Prisma.XOR<Prisma.CommercialCreateInput, Prisma.CommercialUncheckedCreateInput>;
    /**
     * In case the Commercial was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommercialUpdateInput, Prisma.CommercialUncheckedUpdateInput>;
};
/**
 * Commercial delete
 */
export type CommercialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
    /**
     * Filter which Commercial to delete.
     */
    where: Prisma.CommercialWhereUniqueInput;
};
/**
 * Commercial deleteMany
 */
export type CommercialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Commercials to delete
     */
    where?: Prisma.CommercialWhereInput;
    /**
     * Limit how many Commercials to delete.
     */
    limit?: number;
};
/**
 * Commercial.clients
 */
export type Commercial$clientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: Prisma.ClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClientInclude<ExtArgs> | null;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    cursor?: Prisma.ClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
/**
 * Commercial.commandes
 */
export type Commercial$commandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    cursor?: Prisma.CommandeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommandeScalarFieldEnum | Prisma.CommandeScalarFieldEnum[];
};
/**
 * Commercial.factures
 */
export type Commercial$facturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facture
     */
    select?: Prisma.FactureSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Facture
     */
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where?: Prisma.FactureWhereInput;
    orderBy?: Prisma.FactureOrderByWithRelationInput | Prisma.FactureOrderByWithRelationInput[];
    cursor?: Prisma.FactureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FactureScalarFieldEnum | Prisma.FactureScalarFieldEnum[];
};
/**
 * Commercial.salesRequests
 */
export type Commercial$salesRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Commercial without action
 */
export type CommercialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commercial
     */
    select?: Prisma.CommercialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Commercial
     */
    omit?: Prisma.CommercialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommercialInclude<ExtArgs> | null;
};
//# sourceMappingURL=Commercial.d.ts.map