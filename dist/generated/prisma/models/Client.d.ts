import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Client
 *
 */
export type ClientModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientPayload>;
export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type ClientAvgAggregateOutputType = {
    plafond: number | null;
};
export type ClientSumAggregateOutputType = {
    plafond: number | null;
};
export type ClientMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    raison: string | null;
    contact: string | null;
    tel: string | null;
    email: string | null;
    adresse: string | null;
    ville: string | null;
    pays: string | null;
    zone: string | null;
    commercialId: string | null;
    conditions: string | null;
    plafond: number | null;
    statut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    raison: string | null;
    contact: string | null;
    tel: string | null;
    email: string | null;
    adresse: string | null;
    ville: string | null;
    pays: string | null;
    zone: string | null;
    commercialId: string | null;
    conditions: string | null;
    plafond: number | null;
    statut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClientCountAggregateOutputType = {
    id: number;
    code: number;
    raison: number;
    contact: number;
    tel: number;
    email: number;
    adresse: number;
    ville: number;
    pays: number;
    zone: number;
    commercialId: number;
    conditions: number;
    plafond: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClientAvgAggregateInputType = {
    plafond?: true;
};
export type ClientSumAggregateInputType = {
    plafond?: true;
};
export type ClientMinAggregateInputType = {
    id?: true;
    code?: true;
    raison?: true;
    contact?: true;
    tel?: true;
    email?: true;
    adresse?: true;
    ville?: true;
    pays?: true;
    zone?: true;
    commercialId?: true;
    conditions?: true;
    plafond?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientMaxAggregateInputType = {
    id?: true;
    code?: true;
    raison?: true;
    contact?: true;
    tel?: true;
    email?: true;
    adresse?: true;
    ville?: true;
    pays?: true;
    zone?: true;
    commercialId?: true;
    conditions?: true;
    plafond?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClientCountAggregateInputType = {
    id?: true;
    code?: true;
    raison?: true;
    contact?: true;
    tel?: true;
    email?: true;
    adresse?: true;
    ville?: true;
    pays?: true;
    zone?: true;
    commercialId?: true;
    conditions?: true;
    plafond?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: Prisma.ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType;
};
export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClient[P]> : Prisma.GetScalarType<T[P], AggregateClient[P]>;
};
export type ClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithAggregationInput | Prisma.ClientOrderByWithAggregationInput[];
    by: Prisma.ClientScalarFieldEnum[] | Prisma.ClientScalarFieldEnum;
    having?: Prisma.ClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _avg?: ClientAvgAggregateInputType;
    _sum?: ClientSumAggregateInputType;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
};
export type ClientGroupByOutputType = {
    id: string;
    code: string;
    raison: string;
    contact: string | null;
    tel: string | null;
    email: string | null;
    adresse: string | null;
    ville: string | null;
    pays: string | null;
    zone: string | null;
    commercialId: string | null;
    conditions: string | null;
    plafond: number;
    statut: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ClientCountAggregateOutputType | null;
    _avg: ClientAvgAggregateOutputType | null;
    _sum: ClientSumAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
};
export type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClientGroupByOutputType[P]>;
}>>;
export type ClientWhereInput = {
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    id?: Prisma.StringFilter<"Client"> | string;
    code?: Prisma.StringFilter<"Client"> | string;
    raison?: Prisma.StringFilter<"Client"> | string;
    contact?: Prisma.StringNullableFilter<"Client"> | string | null;
    tel?: Prisma.StringNullableFilter<"Client"> | string | null;
    email?: Prisma.StringNullableFilter<"Client"> | string | null;
    adresse?: Prisma.StringNullableFilter<"Client"> | string | null;
    ville?: Prisma.StringNullableFilter<"Client"> | string | null;
    pays?: Prisma.StringNullableFilter<"Client"> | string | null;
    zone?: Prisma.StringNullableFilter<"Client"> | string | null;
    commercialId?: Prisma.StringNullableFilter<"Client"> | string | null;
    conditions?: Prisma.StringNullableFilter<"Client"> | string | null;
    plafond?: Prisma.FloatFilter<"Client"> | number;
    statut?: Prisma.StringFilter<"Client"> | string;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    commercial?: Prisma.XOR<Prisma.CommercialNullableScalarRelationFilter, Prisma.CommercialWhereInput> | null;
    commandes?: Prisma.CommandeListRelationFilter;
    factures?: Prisma.FactureListRelationFilter;
    salesRequests?: Prisma.SalesRequestListRelationFilter;
};
export type ClientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    raison?: Prisma.SortOrder;
    contact?: Prisma.SortOrderInput | Prisma.SortOrder;
    tel?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    pays?: Prisma.SortOrderInput | Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    commercialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    conditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    plafond?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commercial?: Prisma.CommercialOrderByWithRelationInput;
    commandes?: Prisma.CommandeOrderByRelationAggregateInput;
    factures?: Prisma.FactureOrderByRelationAggregateInput;
    salesRequests?: Prisma.SalesRequestOrderByRelationAggregateInput;
};
export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    OR?: Prisma.ClientWhereInput[];
    NOT?: Prisma.ClientWhereInput | Prisma.ClientWhereInput[];
    raison?: Prisma.StringFilter<"Client"> | string;
    contact?: Prisma.StringNullableFilter<"Client"> | string | null;
    tel?: Prisma.StringNullableFilter<"Client"> | string | null;
    email?: Prisma.StringNullableFilter<"Client"> | string | null;
    adresse?: Prisma.StringNullableFilter<"Client"> | string | null;
    ville?: Prisma.StringNullableFilter<"Client"> | string | null;
    pays?: Prisma.StringNullableFilter<"Client"> | string | null;
    zone?: Prisma.StringNullableFilter<"Client"> | string | null;
    commercialId?: Prisma.StringNullableFilter<"Client"> | string | null;
    conditions?: Prisma.StringNullableFilter<"Client"> | string | null;
    plafond?: Prisma.FloatFilter<"Client"> | number;
    statut?: Prisma.StringFilter<"Client"> | string;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    commercial?: Prisma.XOR<Prisma.CommercialNullableScalarRelationFilter, Prisma.CommercialWhereInput> | null;
    commandes?: Prisma.CommandeListRelationFilter;
    factures?: Prisma.FactureListRelationFilter;
    salesRequests?: Prisma.SalesRequestListRelationFilter;
}, "id" | "code">;
export type ClientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    raison?: Prisma.SortOrder;
    contact?: Prisma.SortOrderInput | Prisma.SortOrder;
    tel?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    ville?: Prisma.SortOrderInput | Prisma.SortOrder;
    pays?: Prisma.SortOrderInput | Prisma.SortOrder;
    zone?: Prisma.SortOrderInput | Prisma.SortOrder;
    commercialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    conditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    plafond?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClientCountOrderByAggregateInput;
    _avg?: Prisma.ClientAvgOrderByAggregateInput;
    _max?: Prisma.ClientMaxOrderByAggregateInput;
    _min?: Prisma.ClientMinOrderByAggregateInput;
    _sum?: Prisma.ClientSumOrderByAggregateInput;
};
export type ClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClientScalarWhereWithAggregatesInput | Prisma.ClientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    raison?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    contact?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    tel?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    adresse?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    ville?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    pays?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    zone?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    commercialId?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    conditions?: Prisma.StringNullableWithAggregatesFilter<"Client"> | string | null;
    plafond?: Prisma.FloatWithAggregatesFilter<"Client"> | number;
    statut?: Prisma.StringWithAggregatesFilter<"Client"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Client"> | Date | string;
};
export type ClientCreateInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commercial?: Prisma.CommercialCreateNestedOneWithoutClientsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    factures?: Prisma.FactureCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    commercialId?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercial?: Prisma.CommercialUpdateOneWithoutClientsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commercialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateManyInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    commercialId?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commercialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClientListRelationFilter = {
    every?: Prisma.ClientWhereInput;
    some?: Prisma.ClientWhereInput;
    none?: Prisma.ClientWhereInput;
};
export type ClientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    raison?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    plafond?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientAvgOrderByAggregateInput = {
    plafond?: Prisma.SortOrder;
};
export type ClientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    raison?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    plafond?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    raison?: Prisma.SortOrder;
    contact?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    pays?: Prisma.SortOrder;
    zone?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    plafond?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClientSumOrderByAggregateInput = {
    plafond?: Prisma.SortOrder;
};
export type ClientScalarRelationFilter = {
    is?: Prisma.ClientWhereInput;
    isNot?: Prisma.ClientWhereInput;
};
export type ClientCreateNestedManyWithoutCommercialInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommercialInput, Prisma.ClientUncheckedCreateWithoutCommercialInput> | Prisma.ClientCreateWithoutCommercialInput[] | Prisma.ClientUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommercialInput | Prisma.ClientCreateOrConnectWithoutCommercialInput[];
    createMany?: Prisma.ClientCreateManyCommercialInputEnvelope;
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
};
export type ClientUncheckedCreateNestedManyWithoutCommercialInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommercialInput, Prisma.ClientUncheckedCreateWithoutCommercialInput> | Prisma.ClientCreateWithoutCommercialInput[] | Prisma.ClientUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommercialInput | Prisma.ClientCreateOrConnectWithoutCommercialInput[];
    createMany?: Prisma.ClientCreateManyCommercialInputEnvelope;
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
};
export type ClientUpdateManyWithoutCommercialNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommercialInput, Prisma.ClientUncheckedCreateWithoutCommercialInput> | Prisma.ClientCreateWithoutCommercialInput[] | Prisma.ClientUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommercialInput | Prisma.ClientCreateOrConnectWithoutCommercialInput[];
    upsert?: Prisma.ClientUpsertWithWhereUniqueWithoutCommercialInput | Prisma.ClientUpsertWithWhereUniqueWithoutCommercialInput[];
    createMany?: Prisma.ClientCreateManyCommercialInputEnvelope;
    set?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    disconnect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    delete?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    update?: Prisma.ClientUpdateWithWhereUniqueWithoutCommercialInput | Prisma.ClientUpdateWithWhereUniqueWithoutCommercialInput[];
    updateMany?: Prisma.ClientUpdateManyWithWhereWithoutCommercialInput | Prisma.ClientUpdateManyWithWhereWithoutCommercialInput[];
    deleteMany?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
};
export type ClientUncheckedUpdateManyWithoutCommercialNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommercialInput, Prisma.ClientUncheckedCreateWithoutCommercialInput> | Prisma.ClientCreateWithoutCommercialInput[] | Prisma.ClientUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommercialInput | Prisma.ClientCreateOrConnectWithoutCommercialInput[];
    upsert?: Prisma.ClientUpsertWithWhereUniqueWithoutCommercialInput | Prisma.ClientUpsertWithWhereUniqueWithoutCommercialInput[];
    createMany?: Prisma.ClientCreateManyCommercialInputEnvelope;
    set?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    disconnect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    delete?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    connect?: Prisma.ClientWhereUniqueInput | Prisma.ClientWhereUniqueInput[];
    update?: Prisma.ClientUpdateWithWhereUniqueWithoutCommercialInput | Prisma.ClientUpdateWithWhereUniqueWithoutCommercialInput[];
    updateMany?: Prisma.ClientUpdateManyWithWhereWithoutCommercialInput | Prisma.ClientUpdateManyWithWhereWithoutCommercialInput[];
    deleteMany?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
};
export type ClientCreateNestedOneWithoutCommandesInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommandesInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutCommandesInput;
    upsert?: Prisma.ClientUpsertWithoutCommandesInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutCommandesInput, Prisma.ClientUpdateWithoutCommandesInput>, Prisma.ClientUncheckedUpdateWithoutCommandesInput>;
};
export type ClientCreateNestedOneWithoutFacturesInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutFacturesInput, Prisma.ClientUncheckedCreateWithoutFacturesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutFacturesInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutFacturesNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutFacturesInput, Prisma.ClientUncheckedCreateWithoutFacturesInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutFacturesInput;
    upsert?: Prisma.ClientUpsertWithoutFacturesInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutFacturesInput, Prisma.ClientUpdateWithoutFacturesInput>, Prisma.ClientUncheckedUpdateWithoutFacturesInput>;
};
export type ClientCreateNestedOneWithoutSalesRequestsInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutSalesRequestsInput, Prisma.ClientUncheckedCreateWithoutSalesRequestsInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutSalesRequestsInput;
    connect?: Prisma.ClientWhereUniqueInput;
};
export type ClientUpdateOneRequiredWithoutSalesRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ClientCreateWithoutSalesRequestsInput, Prisma.ClientUncheckedCreateWithoutSalesRequestsInput>;
    connectOrCreate?: Prisma.ClientCreateOrConnectWithoutSalesRequestsInput;
    upsert?: Prisma.ClientUpsertWithoutSalesRequestsInput;
    connect?: Prisma.ClientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClientUpdateToOneWithWhereWithoutSalesRequestsInput, Prisma.ClientUpdateWithoutSalesRequestsInput>, Prisma.ClientUncheckedUpdateWithoutSalesRequestsInput>;
};
export type ClientCreateWithoutCommercialInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    factures?: Prisma.FactureCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutCommercialInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutCommercialInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCommercialInput, Prisma.ClientUncheckedCreateWithoutCommercialInput>;
};
export type ClientCreateManyCommercialInputEnvelope = {
    data: Prisma.ClientCreateManyCommercialInput | Prisma.ClientCreateManyCommercialInput[];
    skipDuplicates?: boolean;
};
export type ClientUpsertWithWhereUniqueWithoutCommercialInput = {
    where: Prisma.ClientWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClientUpdateWithoutCommercialInput, Prisma.ClientUncheckedUpdateWithoutCommercialInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCommercialInput, Prisma.ClientUncheckedCreateWithoutCommercialInput>;
};
export type ClientUpdateWithWhereUniqueWithoutCommercialInput = {
    where: Prisma.ClientWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutCommercialInput, Prisma.ClientUncheckedUpdateWithoutCommercialInput>;
};
export type ClientUpdateManyWithWhereWithoutCommercialInput = {
    where: Prisma.ClientScalarWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyWithoutCommercialInput>;
};
export type ClientScalarWhereInput = {
    AND?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
    OR?: Prisma.ClientScalarWhereInput[];
    NOT?: Prisma.ClientScalarWhereInput | Prisma.ClientScalarWhereInput[];
    id?: Prisma.StringFilter<"Client"> | string;
    code?: Prisma.StringFilter<"Client"> | string;
    raison?: Prisma.StringFilter<"Client"> | string;
    contact?: Prisma.StringNullableFilter<"Client"> | string | null;
    tel?: Prisma.StringNullableFilter<"Client"> | string | null;
    email?: Prisma.StringNullableFilter<"Client"> | string | null;
    adresse?: Prisma.StringNullableFilter<"Client"> | string | null;
    ville?: Prisma.StringNullableFilter<"Client"> | string | null;
    pays?: Prisma.StringNullableFilter<"Client"> | string | null;
    zone?: Prisma.StringNullableFilter<"Client"> | string | null;
    commercialId?: Prisma.StringNullableFilter<"Client"> | string | null;
    conditions?: Prisma.StringNullableFilter<"Client"> | string | null;
    plafond?: Prisma.FloatFilter<"Client"> | number;
    statut?: Prisma.StringFilter<"Client"> | string;
    createdAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Client"> | Date | string;
};
export type ClientCreateWithoutCommandesInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commercial?: Prisma.CommercialCreateNestedOneWithoutClientsInput;
    factures?: Prisma.FactureCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutCommandesInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    commercialId?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutCommandesInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
};
export type ClientUpsertWithoutCommandesInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutCommandesInput, Prisma.ClientUncheckedUpdateWithoutCommandesInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutCommandesInput, Prisma.ClientUncheckedCreateWithoutCommandesInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutCommandesInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutCommandesInput, Prisma.ClientUncheckedUpdateWithoutCommandesInput>;
};
export type ClientUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercial?: Prisma.CommercialUpdateOneWithoutClientsNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutCommandesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commercialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutFacturesInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commercial?: Prisma.CommercialCreateNestedOneWithoutClientsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutFacturesInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    commercialId?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    salesRequests?: Prisma.SalesRequestUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutFacturesInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutFacturesInput, Prisma.ClientUncheckedCreateWithoutFacturesInput>;
};
export type ClientUpsertWithoutFacturesInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutFacturesInput, Prisma.ClientUncheckedUpdateWithoutFacturesInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutFacturesInput, Prisma.ClientUncheckedCreateWithoutFacturesInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutFacturesInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutFacturesInput, Prisma.ClientUncheckedUpdateWithoutFacturesInput>;
};
export type ClientUpdateWithoutFacturesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercial?: Prisma.CommercialUpdateOneWithoutClientsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutFacturesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commercialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateWithoutSalesRequestsInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commercial?: Prisma.CommercialCreateNestedOneWithoutClientsInput;
    commandes?: Prisma.CommandeCreateNestedManyWithoutClientInput;
    factures?: Prisma.FactureCreateNestedManyWithoutClientInput;
};
export type ClientUncheckedCreateWithoutSalesRequestsInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    commercialId?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commandes?: Prisma.CommandeUncheckedCreateNestedManyWithoutClientInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutClientInput;
};
export type ClientCreateOrConnectWithoutSalesRequestsInput = {
    where: Prisma.ClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClientCreateWithoutSalesRequestsInput, Prisma.ClientUncheckedCreateWithoutSalesRequestsInput>;
};
export type ClientUpsertWithoutSalesRequestsInput = {
    update: Prisma.XOR<Prisma.ClientUpdateWithoutSalesRequestsInput, Prisma.ClientUncheckedUpdateWithoutSalesRequestsInput>;
    create: Prisma.XOR<Prisma.ClientCreateWithoutSalesRequestsInput, Prisma.ClientUncheckedCreateWithoutSalesRequestsInput>;
    where?: Prisma.ClientWhereInput;
};
export type ClientUpdateToOneWithWhereWithoutSalesRequestsInput = {
    where?: Prisma.ClientWhereInput;
    data: Prisma.XOR<Prisma.ClientUpdateWithoutSalesRequestsInput, Prisma.ClientUncheckedUpdateWithoutSalesRequestsInput>;
};
export type ClientUpdateWithoutSalesRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercial?: Prisma.CommercialUpdateOneWithoutClientsNestedInput;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutSalesRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commercialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientCreateManyCommercialInput = {
    id?: string;
    code: string;
    raison: string;
    contact?: string | null;
    tel?: string | null;
    email?: string | null;
    adresse?: string | null;
    ville?: string | null;
    pays?: string | null;
    zone?: string | null;
    conditions?: string | null;
    plafond?: number;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClientUpdateWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUpdateManyWithoutClientNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commandes?: Prisma.CommandeUncheckedUpdateManyWithoutClientNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutClientNestedInput;
    salesRequests?: Prisma.SalesRequestUncheckedUpdateManyWithoutClientNestedInput;
};
export type ClientUncheckedUpdateManyWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    raison?: Prisma.StringFieldUpdateOperationsInput | string;
    contact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ville?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pays?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plafond?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ClientCountOutputType
 */
export type ClientCountOutputType = {
    commandes: number;
    factures: number;
    salesRequests: number;
};
export type ClientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commandes?: boolean | ClientCountOutputTypeCountCommandesArgs;
    factures?: boolean | ClientCountOutputTypeCountFacturesArgs;
    salesRequests?: boolean | ClientCountOutputTypeCountSalesRequestsArgs;
};
/**
 * ClientCountOutputType without action
 */
export type ClientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: Prisma.ClientCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ClientCountOutputType without action
 */
export type ClientCountOutputTypeCountCommandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
};
/**
 * ClientCountOutputType without action
 */
export type ClientCountOutputTypeCountFacturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactureWhereInput;
};
/**
 * ClientCountOutputType without action
 */
export type ClientCountOutputTypeCountSalesRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalesRequestWhereInput;
};
export type ClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    raison?: boolean;
    contact?: boolean;
    tel?: boolean;
    email?: boolean;
    adresse?: boolean;
    ville?: boolean;
    pays?: boolean;
    zone?: boolean;
    commercialId?: boolean;
    conditions?: boolean;
    plafond?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commercial?: boolean | Prisma.Client$commercialArgs<ExtArgs>;
    commandes?: boolean | Prisma.Client$commandesArgs<ExtArgs>;
    factures?: boolean | Prisma.Client$facturesArgs<ExtArgs>;
    salesRequests?: boolean | Prisma.Client$salesRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    raison?: boolean;
    contact?: boolean;
    tel?: boolean;
    email?: boolean;
    adresse?: boolean;
    ville?: boolean;
    pays?: boolean;
    zone?: boolean;
    commercialId?: boolean;
    conditions?: boolean;
    plafond?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commercial?: boolean | Prisma.Client$commercialArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    raison?: boolean;
    contact?: boolean;
    tel?: boolean;
    email?: boolean;
    adresse?: boolean;
    ville?: boolean;
    pays?: boolean;
    zone?: boolean;
    commercialId?: boolean;
    conditions?: boolean;
    plafond?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commercial?: boolean | Prisma.Client$commercialArgs<ExtArgs>;
}, ExtArgs["result"]["client"]>;
export type ClientSelectScalar = {
    id?: boolean;
    code?: boolean;
    raison?: boolean;
    contact?: boolean;
    tel?: boolean;
    email?: boolean;
    adresse?: boolean;
    ville?: boolean;
    pays?: boolean;
    zone?: boolean;
    commercialId?: boolean;
    conditions?: boolean;
    plafond?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "raison" | "contact" | "tel" | "email" | "adresse" | "ville" | "pays" | "zone" | "commercialId" | "conditions" | "plafond" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>;
export type ClientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commercial?: boolean | Prisma.Client$commercialArgs<ExtArgs>;
    commandes?: boolean | Prisma.Client$commandesArgs<ExtArgs>;
    factures?: boolean | Prisma.Client$facturesArgs<ExtArgs>;
    salesRequests?: boolean | Prisma.Client$salesRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commercial?: boolean | Prisma.Client$commercialArgs<ExtArgs>;
};
export type ClientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commercial?: boolean | Prisma.Client$commercialArgs<ExtArgs>;
};
export type $ClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Client";
    objects: {
        commercial: Prisma.$CommercialPayload<ExtArgs> | null;
        commandes: Prisma.$CommandePayload<ExtArgs>[];
        factures: Prisma.$FacturePayload<ExtArgs>[];
        salesRequests: Prisma.$SalesRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        raison: string;
        contact: string | null;
        tel: string | null;
        email: string | null;
        adresse: string | null;
        ville: string | null;
        pays: string | null;
        zone: string | null;
        commercialId: string | null;
        conditions: string | null;
        plafond: number;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["client"]>;
    composites: {};
};
export type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientPayload, S>;
export type ClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClientCountAggregateInputType | true;
};
export interface ClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Client'];
        meta: {
            name: 'Client';
        };
    };
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClientFindManyArgs>(args?: Prisma.SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     *
     */
    create<T extends ClientCreateArgs>(args: Prisma.SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClientCreateManyArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     *
     */
    delete<T extends ClientDeleteArgs>(args: Prisma.SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClientUpdateArgs>(args: Prisma.SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClientUpdateManyArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: Prisma.SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(args?: Prisma.Subset<T, ClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClientCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Prisma.Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>;
    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClientGroupByArgs['orderBy'];
    } : {
        orderBy?: ClientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Client model
     */
    readonly fields: ClientFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Client.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commercial<T extends Prisma.Client$commercialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$commercialArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    commandes<T extends Prisma.Client$commandesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    factures<T extends Prisma.Client$facturesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$facturesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salesRequests<T extends Prisma.Client$salesRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Client$salesRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalesRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Client model
 */
export interface ClientFieldRefs {
    readonly id: Prisma.FieldRef<"Client", 'String'>;
    readonly code: Prisma.FieldRef<"Client", 'String'>;
    readonly raison: Prisma.FieldRef<"Client", 'String'>;
    readonly contact: Prisma.FieldRef<"Client", 'String'>;
    readonly tel: Prisma.FieldRef<"Client", 'String'>;
    readonly email: Prisma.FieldRef<"Client", 'String'>;
    readonly adresse: Prisma.FieldRef<"Client", 'String'>;
    readonly ville: Prisma.FieldRef<"Client", 'String'>;
    readonly pays: Prisma.FieldRef<"Client", 'String'>;
    readonly zone: Prisma.FieldRef<"Client", 'String'>;
    readonly commercialId: Prisma.FieldRef<"Client", 'String'>;
    readonly conditions: Prisma.FieldRef<"Client", 'String'>;
    readonly plafond: Prisma.FieldRef<"Client", 'Float'>;
    readonly statut: Prisma.FieldRef<"Client", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Client", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Client", 'DateTime'>;
}
/**
 * Client findUnique
 */
export type ClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Client to fetch.
     */
    where: Prisma.ClientWhereUniqueInput;
};
/**
 * Client findUniqueOrThrow
 */
export type ClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Client to fetch.
     */
    where: Prisma.ClientWhereUniqueInput;
};
/**
 * Client findFirst
 */
export type ClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Client to fetch.
     */
    where?: Prisma.ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: Prisma.ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
/**
 * Client findFirstOrThrow
 */
export type ClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Client to fetch.
     */
    where?: Prisma.ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Clients.
     */
    cursor?: Prisma.ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
/**
 * Client findMany
 */
export type ClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Clients to fetch.
     */
    where?: Prisma.ClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Clients to fetch.
     */
    orderBy?: Prisma.ClientOrderByWithRelationInput | Prisma.ClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Clients.
     */
    cursor?: Prisma.ClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Clients.
     */
    distinct?: Prisma.ClientScalarFieldEnum | Prisma.ClientScalarFieldEnum[];
};
/**
 * Client create
 */
export type ClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Client.
     */
    data: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
};
/**
 * Client createMany
 */
export type ClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Client createManyAndReturn
 */
export type ClientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: Prisma.ClientSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    /**
     * The data used to create many Clients.
     */
    data: Prisma.ClientCreateManyInput | Prisma.ClientCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClientIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Client update
 */
export type ClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Client.
     */
    data: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
    /**
     * Choose, which Client to update.
     */
    where: Prisma.ClientWhereUniqueInput;
};
/**
 * Client updateMany
 */
export type ClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    /**
     * Filter which Clients to update
     */
    where?: Prisma.ClientWhereInput;
    /**
     * Limit how many Clients to update.
     */
    limit?: number;
};
/**
 * Client updateManyAndReturn
 */
export type ClientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: Prisma.ClientSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Client
     */
    omit?: Prisma.ClientOmit<ExtArgs> | null;
    /**
     * The data used to update Clients.
     */
    data: Prisma.XOR<Prisma.ClientUpdateManyMutationInput, Prisma.ClientUncheckedUpdateManyInput>;
    /**
     * Filter which Clients to update
     */
    where?: Prisma.ClientWhereInput;
    /**
     * Limit how many Clients to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ClientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Client upsert
 */
export type ClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: Prisma.ClientWhereUniqueInput;
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: Prisma.XOR<Prisma.ClientCreateInput, Prisma.ClientUncheckedCreateInput>;
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput>;
};
/**
 * Client delete
 */
export type ClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Client to delete.
     */
    where: Prisma.ClientWhereUniqueInput;
};
/**
 * Client deleteMany
 */
export type ClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: Prisma.ClientWhereInput;
    /**
     * Limit how many Clients to delete.
     */
    limit?: number;
};
/**
 * Client.commercial
 */
export type Client$commercialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.CommercialWhereInput;
};
/**
 * Client.commandes
 */
export type Client$commandesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Client.factures
 */
export type Client$facturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Client.salesRequests
 */
export type Client$salesRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Client without action
 */
export type ClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Client.d.ts.map