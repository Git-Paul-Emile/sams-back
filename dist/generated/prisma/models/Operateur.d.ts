import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Operateur
 *
 */
export type OperateurModel = runtime.Types.Result.DefaultSelection<Prisma.$OperateurPayload>;
export type AggregateOperateur = {
    _count: OperateurCountAggregateOutputType | null;
    _min: OperateurMinAggregateOutputType | null;
    _max: OperateurMaxAggregateOutputType | null;
};
export type OperateurMinAggregateOutputType = {
    id: string | null;
    matricule: string | null;
    nom: string | null;
    prenom: string | null;
    tel: string | null;
    email: string | null;
    poste: string | null;
    ligne: string | null;
    embauche: Date | null;
    statut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OperateurMaxAggregateOutputType = {
    id: string | null;
    matricule: string | null;
    nom: string | null;
    prenom: string | null;
    tel: string | null;
    email: string | null;
    poste: string | null;
    ligne: string | null;
    embauche: Date | null;
    statut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OperateurCountAggregateOutputType = {
    id: number;
    matricule: number;
    nom: number;
    prenom: number;
    tel: number;
    email: number;
    poste: number;
    ligne: number;
    embauche: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OperateurMinAggregateInputType = {
    id?: true;
    matricule?: true;
    nom?: true;
    prenom?: true;
    tel?: true;
    email?: true;
    poste?: true;
    ligne?: true;
    embauche?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OperateurMaxAggregateInputType = {
    id?: true;
    matricule?: true;
    nom?: true;
    prenom?: true;
    tel?: true;
    email?: true;
    poste?: true;
    ligne?: true;
    embauche?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OperateurCountAggregateInputType = {
    id?: true;
    matricule?: true;
    nom?: true;
    prenom?: true;
    tel?: true;
    email?: true;
    poste?: true;
    ligne?: true;
    embauche?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OperateurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Operateur to aggregate.
     */
    where?: Prisma.OperateurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Operateurs to fetch.
     */
    orderBy?: Prisma.OperateurOrderByWithRelationInput | Prisma.OperateurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OperateurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Operateurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Operateurs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Operateurs
    **/
    _count?: true | OperateurCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OperateurMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OperateurMaxAggregateInputType;
};
export type GetOperateurAggregateType<T extends OperateurAggregateArgs> = {
    [P in keyof T & keyof AggregateOperateur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOperateur[P]> : Prisma.GetScalarType<T[P], AggregateOperateur[P]>;
};
export type OperateurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperateurWhereInput;
    orderBy?: Prisma.OperateurOrderByWithAggregationInput | Prisma.OperateurOrderByWithAggregationInput[];
    by: Prisma.OperateurScalarFieldEnum[] | Prisma.OperateurScalarFieldEnum;
    having?: Prisma.OperateurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OperateurCountAggregateInputType | true;
    _min?: OperateurMinAggregateInputType;
    _max?: OperateurMaxAggregateInputType;
};
export type OperateurGroupByOutputType = {
    id: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel: string | null;
    email: string | null;
    poste: string | null;
    ligne: string | null;
    embauche: Date | null;
    statut: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OperateurCountAggregateOutputType | null;
    _min: OperateurMinAggregateOutputType | null;
    _max: OperateurMaxAggregateOutputType | null;
};
export type GetOperateurGroupByPayload<T extends OperateurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OperateurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OperateurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OperateurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OperateurGroupByOutputType[P]>;
}>>;
export type OperateurWhereInput = {
    AND?: Prisma.OperateurWhereInput | Prisma.OperateurWhereInput[];
    OR?: Prisma.OperateurWhereInput[];
    NOT?: Prisma.OperateurWhereInput | Prisma.OperateurWhereInput[];
    id?: Prisma.StringFilter<"Operateur"> | string;
    matricule?: Prisma.StringFilter<"Operateur"> | string;
    nom?: Prisma.StringFilter<"Operateur"> | string;
    prenom?: Prisma.StringFilter<"Operateur"> | string;
    tel?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    email?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    poste?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    ligne?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    embauche?: Prisma.DateTimeNullableFilter<"Operateur"> | Date | string | null;
    statut?: Prisma.StringFilter<"Operateur"> | string;
    createdAt?: Prisma.DateTimeFilter<"Operateur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Operateur"> | Date | string;
    prodOrders?: Prisma.ProdOrderListRelationFilter;
    incidents?: Prisma.IncidentListRelationFilter;
    materialRequests?: Prisma.MaterialRequestListRelationFilter;
};
export type OperateurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    poste?: Prisma.SortOrderInput | Prisma.SortOrder;
    ligne?: Prisma.SortOrderInput | Prisma.SortOrder;
    embauche?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    prodOrders?: Prisma.ProdOrderOrderByRelationAggregateInput;
    incidents?: Prisma.IncidentOrderByRelationAggregateInput;
    materialRequests?: Prisma.MaterialRequestOrderByRelationAggregateInput;
};
export type OperateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    matricule?: string;
    AND?: Prisma.OperateurWhereInput | Prisma.OperateurWhereInput[];
    OR?: Prisma.OperateurWhereInput[];
    NOT?: Prisma.OperateurWhereInput | Prisma.OperateurWhereInput[];
    nom?: Prisma.StringFilter<"Operateur"> | string;
    prenom?: Prisma.StringFilter<"Operateur"> | string;
    tel?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    email?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    poste?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    ligne?: Prisma.StringNullableFilter<"Operateur"> | string | null;
    embauche?: Prisma.DateTimeNullableFilter<"Operateur"> | Date | string | null;
    statut?: Prisma.StringFilter<"Operateur"> | string;
    createdAt?: Prisma.DateTimeFilter<"Operateur"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Operateur"> | Date | string;
    prodOrders?: Prisma.ProdOrderListRelationFilter;
    incidents?: Prisma.IncidentListRelationFilter;
    materialRequests?: Prisma.MaterialRequestListRelationFilter;
}, "id" | "matricule">;
export type OperateurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    poste?: Prisma.SortOrderInput | Prisma.SortOrder;
    ligne?: Prisma.SortOrderInput | Prisma.SortOrder;
    embauche?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OperateurCountOrderByAggregateInput;
    _max?: Prisma.OperateurMaxOrderByAggregateInput;
    _min?: Prisma.OperateurMinOrderByAggregateInput;
};
export type OperateurScalarWhereWithAggregatesInput = {
    AND?: Prisma.OperateurScalarWhereWithAggregatesInput | Prisma.OperateurScalarWhereWithAggregatesInput[];
    OR?: Prisma.OperateurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OperateurScalarWhereWithAggregatesInput | Prisma.OperateurScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Operateur"> | string;
    matricule?: Prisma.StringWithAggregatesFilter<"Operateur"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Operateur"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Operateur"> | string;
    tel?: Prisma.StringNullableWithAggregatesFilter<"Operateur"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Operateur"> | string | null;
    poste?: Prisma.StringNullableWithAggregatesFilter<"Operateur"> | string | null;
    ligne?: Prisma.StringNullableWithAggregatesFilter<"Operateur"> | string | null;
    embauche?: Prisma.DateTimeNullableWithAggregatesFilter<"Operateur"> | Date | string | null;
    statut?: Prisma.StringWithAggregatesFilter<"Operateur"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Operateur"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Operateur"> | Date | string;
};
export type OperateurCreateInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutResponsableInput;
    incidents?: Prisma.IncidentCreateNestedManyWithoutOperateurInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutOperateurInput;
};
export type OperateurUncheckedCreateInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutResponsableInput;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutOperateurInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutOperateurInput;
};
export type OperateurUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutResponsableNestedInput;
    incidents?: Prisma.IncidentUpdateManyWithoutOperateurNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutOperateurNestedInput;
};
export type OperateurUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutResponsableNestedInput;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutOperateurNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutOperateurNestedInput;
};
export type OperateurCreateManyInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OperateurUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OperateurUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OperateurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    poste?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    embauche?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OperateurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    poste?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    embauche?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OperateurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matricule?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    tel?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    poste?: Prisma.SortOrder;
    ligne?: Prisma.SortOrder;
    embauche?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OperateurNullableScalarRelationFilter = {
    is?: Prisma.OperateurWhereInput | null;
    isNot?: Prisma.OperateurWhereInput | null;
};
export type OperateurCreateNestedOneWithoutProdOrdersInput = {
    create?: Prisma.XOR<Prisma.OperateurCreateWithoutProdOrdersInput, Prisma.OperateurUncheckedCreateWithoutProdOrdersInput>;
    connectOrCreate?: Prisma.OperateurCreateOrConnectWithoutProdOrdersInput;
    connect?: Prisma.OperateurWhereUniqueInput;
};
export type OperateurUpdateOneWithoutProdOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.OperateurCreateWithoutProdOrdersInput, Prisma.OperateurUncheckedCreateWithoutProdOrdersInput>;
    connectOrCreate?: Prisma.OperateurCreateOrConnectWithoutProdOrdersInput;
    upsert?: Prisma.OperateurUpsertWithoutProdOrdersInput;
    disconnect?: Prisma.OperateurWhereInput | boolean;
    delete?: Prisma.OperateurWhereInput | boolean;
    connect?: Prisma.OperateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperateurUpdateToOneWithWhereWithoutProdOrdersInput, Prisma.OperateurUpdateWithoutProdOrdersInput>, Prisma.OperateurUncheckedUpdateWithoutProdOrdersInput>;
};
export type OperateurCreateNestedOneWithoutIncidentsInput = {
    create?: Prisma.XOR<Prisma.OperateurCreateWithoutIncidentsInput, Prisma.OperateurUncheckedCreateWithoutIncidentsInput>;
    connectOrCreate?: Prisma.OperateurCreateOrConnectWithoutIncidentsInput;
    connect?: Prisma.OperateurWhereUniqueInput;
};
export type OperateurUpdateOneWithoutIncidentsNestedInput = {
    create?: Prisma.XOR<Prisma.OperateurCreateWithoutIncidentsInput, Prisma.OperateurUncheckedCreateWithoutIncidentsInput>;
    connectOrCreate?: Prisma.OperateurCreateOrConnectWithoutIncidentsInput;
    upsert?: Prisma.OperateurUpsertWithoutIncidentsInput;
    disconnect?: Prisma.OperateurWhereInput | boolean;
    delete?: Prisma.OperateurWhereInput | boolean;
    connect?: Prisma.OperateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperateurUpdateToOneWithWhereWithoutIncidentsInput, Prisma.OperateurUpdateWithoutIncidentsInput>, Prisma.OperateurUncheckedUpdateWithoutIncidentsInput>;
};
export type OperateurCreateNestedOneWithoutMaterialRequestsInput = {
    create?: Prisma.XOR<Prisma.OperateurCreateWithoutMaterialRequestsInput, Prisma.OperateurUncheckedCreateWithoutMaterialRequestsInput>;
    connectOrCreate?: Prisma.OperateurCreateOrConnectWithoutMaterialRequestsInput;
    connect?: Prisma.OperateurWhereUniqueInput;
};
export type OperateurUpdateOneWithoutMaterialRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.OperateurCreateWithoutMaterialRequestsInput, Prisma.OperateurUncheckedCreateWithoutMaterialRequestsInput>;
    connectOrCreate?: Prisma.OperateurCreateOrConnectWithoutMaterialRequestsInput;
    upsert?: Prisma.OperateurUpsertWithoutMaterialRequestsInput;
    disconnect?: Prisma.OperateurWhereInput | boolean;
    delete?: Prisma.OperateurWhereInput | boolean;
    connect?: Prisma.OperateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperateurUpdateToOneWithWhereWithoutMaterialRequestsInput, Prisma.OperateurUpdateWithoutMaterialRequestsInput>, Prisma.OperateurUncheckedUpdateWithoutMaterialRequestsInput>;
};
export type OperateurCreateWithoutProdOrdersInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incidents?: Prisma.IncidentCreateNestedManyWithoutOperateurInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutOperateurInput;
};
export type OperateurUncheckedCreateWithoutProdOrdersInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutOperateurInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutOperateurInput;
};
export type OperateurCreateOrConnectWithoutProdOrdersInput = {
    where: Prisma.OperateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperateurCreateWithoutProdOrdersInput, Prisma.OperateurUncheckedCreateWithoutProdOrdersInput>;
};
export type OperateurUpsertWithoutProdOrdersInput = {
    update: Prisma.XOR<Prisma.OperateurUpdateWithoutProdOrdersInput, Prisma.OperateurUncheckedUpdateWithoutProdOrdersInput>;
    create: Prisma.XOR<Prisma.OperateurCreateWithoutProdOrdersInput, Prisma.OperateurUncheckedCreateWithoutProdOrdersInput>;
    where?: Prisma.OperateurWhereInput;
};
export type OperateurUpdateToOneWithWhereWithoutProdOrdersInput = {
    where?: Prisma.OperateurWhereInput;
    data: Prisma.XOR<Prisma.OperateurUpdateWithoutProdOrdersInput, Prisma.OperateurUncheckedUpdateWithoutProdOrdersInput>;
};
export type OperateurUpdateWithoutProdOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incidents?: Prisma.IncidentUpdateManyWithoutOperateurNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutOperateurNestedInput;
};
export type OperateurUncheckedUpdateWithoutProdOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutOperateurNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutOperateurNestedInput;
};
export type OperateurCreateWithoutIncidentsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutResponsableInput;
    materialRequests?: Prisma.MaterialRequestCreateNestedManyWithoutOperateurInput;
};
export type OperateurUncheckedCreateWithoutIncidentsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutResponsableInput;
    materialRequests?: Prisma.MaterialRequestUncheckedCreateNestedManyWithoutOperateurInput;
};
export type OperateurCreateOrConnectWithoutIncidentsInput = {
    where: Prisma.OperateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperateurCreateWithoutIncidentsInput, Prisma.OperateurUncheckedCreateWithoutIncidentsInput>;
};
export type OperateurUpsertWithoutIncidentsInput = {
    update: Prisma.XOR<Prisma.OperateurUpdateWithoutIncidentsInput, Prisma.OperateurUncheckedUpdateWithoutIncidentsInput>;
    create: Prisma.XOR<Prisma.OperateurCreateWithoutIncidentsInput, Prisma.OperateurUncheckedCreateWithoutIncidentsInput>;
    where?: Prisma.OperateurWhereInput;
};
export type OperateurUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: Prisma.OperateurWhereInput;
    data: Prisma.XOR<Prisma.OperateurUpdateWithoutIncidentsInput, Prisma.OperateurUncheckedUpdateWithoutIncidentsInput>;
};
export type OperateurUpdateWithoutIncidentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutResponsableNestedInput;
    materialRequests?: Prisma.MaterialRequestUpdateManyWithoutOperateurNestedInput;
};
export type OperateurUncheckedUpdateWithoutIncidentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutResponsableNestedInput;
    materialRequests?: Prisma.MaterialRequestUncheckedUpdateManyWithoutOperateurNestedInput;
};
export type OperateurCreateWithoutMaterialRequestsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrders?: Prisma.ProdOrderCreateNestedManyWithoutResponsableInput;
    incidents?: Prisma.IncidentCreateNestedManyWithoutOperateurInput;
};
export type OperateurUncheckedCreateWithoutMaterialRequestsInput = {
    id?: string;
    matricule: string;
    nom: string;
    prenom: string;
    tel?: string | null;
    email?: string | null;
    poste?: string | null;
    ligne?: string | null;
    embauche?: Date | string | null;
    statut?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    prodOrders?: Prisma.ProdOrderUncheckedCreateNestedManyWithoutResponsableInput;
    incidents?: Prisma.IncidentUncheckedCreateNestedManyWithoutOperateurInput;
};
export type OperateurCreateOrConnectWithoutMaterialRequestsInput = {
    where: Prisma.OperateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperateurCreateWithoutMaterialRequestsInput, Prisma.OperateurUncheckedCreateWithoutMaterialRequestsInput>;
};
export type OperateurUpsertWithoutMaterialRequestsInput = {
    update: Prisma.XOR<Prisma.OperateurUpdateWithoutMaterialRequestsInput, Prisma.OperateurUncheckedUpdateWithoutMaterialRequestsInput>;
    create: Prisma.XOR<Prisma.OperateurCreateWithoutMaterialRequestsInput, Prisma.OperateurUncheckedCreateWithoutMaterialRequestsInput>;
    where?: Prisma.OperateurWhereInput;
};
export type OperateurUpdateToOneWithWhereWithoutMaterialRequestsInput = {
    where?: Prisma.OperateurWhereInput;
    data: Prisma.XOR<Prisma.OperateurUpdateWithoutMaterialRequestsInput, Prisma.OperateurUncheckedUpdateWithoutMaterialRequestsInput>;
};
export type OperateurUpdateWithoutMaterialRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrders?: Prisma.ProdOrderUpdateManyWithoutResponsableNestedInput;
    incidents?: Prisma.IncidentUpdateManyWithoutOperateurNestedInput;
};
export type OperateurUncheckedUpdateWithoutMaterialRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matricule?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    tel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ligne?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embauche?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prodOrders?: Prisma.ProdOrderUncheckedUpdateManyWithoutResponsableNestedInput;
    incidents?: Prisma.IncidentUncheckedUpdateManyWithoutOperateurNestedInput;
};
/**
 * Count Type OperateurCountOutputType
 */
export type OperateurCountOutputType = {
    prodOrders: number;
    incidents: number;
    materialRequests: number;
};
export type OperateurCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prodOrders?: boolean | OperateurCountOutputTypeCountProdOrdersArgs;
    incidents?: boolean | OperateurCountOutputTypeCountIncidentsArgs;
    materialRequests?: boolean | OperateurCountOutputTypeCountMaterialRequestsArgs;
};
/**
 * OperateurCountOutputType without action
 */
export type OperateurCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperateurCountOutputType
     */
    select?: Prisma.OperateurCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * OperateurCountOutputType without action
 */
export type OperateurCountOutputTypeCountProdOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProdOrderWhereInput;
};
/**
 * OperateurCountOutputType without action
 */
export type OperateurCountOutputTypeCountIncidentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncidentWhereInput;
};
/**
 * OperateurCountOutputType without action
 */
export type OperateurCountOutputTypeCountMaterialRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialRequestWhereInput;
};
export type OperateurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    poste?: boolean;
    ligne?: boolean;
    embauche?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    prodOrders?: boolean | Prisma.Operateur$prodOrdersArgs<ExtArgs>;
    incidents?: boolean | Prisma.Operateur$incidentsArgs<ExtArgs>;
    materialRequests?: boolean | Prisma.Operateur$materialRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.OperateurCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["operateur"]>;
export type OperateurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    poste?: boolean;
    ligne?: boolean;
    embauche?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["operateur"]>;
export type OperateurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    poste?: boolean;
    ligne?: boolean;
    embauche?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["operateur"]>;
export type OperateurSelectScalar = {
    id?: boolean;
    matricule?: boolean;
    nom?: boolean;
    prenom?: boolean;
    tel?: boolean;
    email?: boolean;
    poste?: boolean;
    ligne?: boolean;
    embauche?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OperateurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "matricule" | "nom" | "prenom" | "tel" | "email" | "poste" | "ligne" | "embauche" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["operateur"]>;
export type OperateurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prodOrders?: boolean | Prisma.Operateur$prodOrdersArgs<ExtArgs>;
    incidents?: boolean | Prisma.Operateur$incidentsArgs<ExtArgs>;
    materialRequests?: boolean | Prisma.Operateur$materialRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.OperateurCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OperateurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OperateurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OperateurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Operateur";
    objects: {
        prodOrders: Prisma.$ProdOrderPayload<ExtArgs>[];
        incidents: Prisma.$IncidentPayload<ExtArgs>[];
        materialRequests: Prisma.$MaterialRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        matricule: string;
        nom: string;
        prenom: string;
        tel: string | null;
        email: string | null;
        poste: string | null;
        ligne: string | null;
        embauche: Date | null;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["operateur"]>;
    composites: {};
};
export type OperateurGetPayload<S extends boolean | null | undefined | OperateurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OperateurPayload, S>;
export type OperateurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OperateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OperateurCountAggregateInputType | true;
};
export interface OperateurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Operateur'];
        meta: {
            name: 'Operateur';
        };
    };
    /**
     * Find zero or one Operateur that matches the filter.
     * @param {OperateurFindUniqueArgs} args - Arguments to find a Operateur
     * @example
     * // Get one Operateur
     * const operateur = await prisma.operateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperateurFindUniqueArgs>(args: Prisma.SelectSubset<T, OperateurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Operateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperateurFindUniqueOrThrowArgs} args - Arguments to find a Operateur
     * @example
     * // Get one Operateur
     * const operateur = await prisma.operateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperateurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OperateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Operateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperateurFindFirstArgs} args - Arguments to find a Operateur
     * @example
     * // Get one Operateur
     * const operateur = await prisma.operateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperateurFindFirstArgs>(args?: Prisma.SelectSubset<T, OperateurFindFirstArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Operateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperateurFindFirstOrThrowArgs} args - Arguments to find a Operateur
     * @example
     * // Get one Operateur
     * const operateur = await prisma.operateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperateurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OperateurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Operateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operateurs
     * const operateurs = await prisma.operateur.findMany()
     *
     * // Get first 10 Operateurs
     * const operateurs = await prisma.operateur.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const operateurWithIdOnly = await prisma.operateur.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OperateurFindManyArgs>(args?: Prisma.SelectSubset<T, OperateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Operateur.
     * @param {OperateurCreateArgs} args - Arguments to create a Operateur.
     * @example
     * // Create one Operateur
     * const Operateur = await prisma.operateur.create({
     *   data: {
     *     // ... data to create a Operateur
     *   }
     * })
     *
     */
    create<T extends OperateurCreateArgs>(args: Prisma.SelectSubset<T, OperateurCreateArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Operateurs.
     * @param {OperateurCreateManyArgs} args - Arguments to create many Operateurs.
     * @example
     * // Create many Operateurs
     * const operateur = await prisma.operateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OperateurCreateManyArgs>(args?: Prisma.SelectSubset<T, OperateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Operateurs and returns the data saved in the database.
     * @param {OperateurCreateManyAndReturnArgs} args - Arguments to create many Operateurs.
     * @example
     * // Create many Operateurs
     * const operateur = await prisma.operateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Operateurs and only return the `id`
     * const operateurWithIdOnly = await prisma.operateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OperateurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OperateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Operateur.
     * @param {OperateurDeleteArgs} args - Arguments to delete one Operateur.
     * @example
     * // Delete one Operateur
     * const Operateur = await prisma.operateur.delete({
     *   where: {
     *     // ... filter to delete one Operateur
     *   }
     * })
     *
     */
    delete<T extends OperateurDeleteArgs>(args: Prisma.SelectSubset<T, OperateurDeleteArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Operateur.
     * @param {OperateurUpdateArgs} args - Arguments to update one Operateur.
     * @example
     * // Update one Operateur
     * const operateur = await prisma.operateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OperateurUpdateArgs>(args: Prisma.SelectSubset<T, OperateurUpdateArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Operateurs.
     * @param {OperateurDeleteManyArgs} args - Arguments to filter Operateurs to delete.
     * @example
     * // Delete a few Operateurs
     * const { count } = await prisma.operateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OperateurDeleteManyArgs>(args?: Prisma.SelectSubset<T, OperateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Operateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operateurs
     * const operateur = await prisma.operateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OperateurUpdateManyArgs>(args: Prisma.SelectSubset<T, OperateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Operateurs and returns the data updated in the database.
     * @param {OperateurUpdateManyAndReturnArgs} args - Arguments to update many Operateurs.
     * @example
     * // Update many Operateurs
     * const operateur = await prisma.operateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Operateurs and only return the `id`
     * const operateurWithIdOnly = await prisma.operateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends OperateurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OperateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Operateur.
     * @param {OperateurUpsertArgs} args - Arguments to update or create a Operateur.
     * @example
     * // Update or create a Operateur
     * const operateur = await prisma.operateur.upsert({
     *   create: {
     *     // ... data to create a Operateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operateur we want to update
     *   }
     * })
     */
    upsert<T extends OperateurUpsertArgs>(args: Prisma.SelectSubset<T, OperateurUpsertArgs<ExtArgs>>): Prisma.Prisma__OperateurClient<runtime.Types.Result.GetResult<Prisma.$OperateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Operateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperateurCountArgs} args - Arguments to filter Operateurs to count.
     * @example
     * // Count the number of Operateurs
     * const count = await prisma.operateur.count({
     *   where: {
     *     // ... the filter for the Operateurs we want to count
     *   }
     * })
    **/
    count<T extends OperateurCountArgs>(args?: Prisma.Subset<T, OperateurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OperateurCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Operateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperateurAggregateArgs>(args: Prisma.Subset<T, OperateurAggregateArgs>): Prisma.PrismaPromise<GetOperateurAggregateType<T>>;
    /**
     * Group by Operateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperateurGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OperateurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OperateurGroupByArgs['orderBy'];
    } : {
        orderBy?: OperateurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OperateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Operateur model
     */
    readonly fields: OperateurFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Operateur.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OperateurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prodOrders<T extends Prisma.Operateur$prodOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Operateur$prodOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProdOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    incidents<T extends Prisma.Operateur$incidentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Operateur$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materialRequests<T extends Prisma.Operateur$materialRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Operateur$materialRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Operateur model
 */
export interface OperateurFieldRefs {
    readonly id: Prisma.FieldRef<"Operateur", 'String'>;
    readonly matricule: Prisma.FieldRef<"Operateur", 'String'>;
    readonly nom: Prisma.FieldRef<"Operateur", 'String'>;
    readonly prenom: Prisma.FieldRef<"Operateur", 'String'>;
    readonly tel: Prisma.FieldRef<"Operateur", 'String'>;
    readonly email: Prisma.FieldRef<"Operateur", 'String'>;
    readonly poste: Prisma.FieldRef<"Operateur", 'String'>;
    readonly ligne: Prisma.FieldRef<"Operateur", 'String'>;
    readonly embauche: Prisma.FieldRef<"Operateur", 'DateTime'>;
    readonly statut: Prisma.FieldRef<"Operateur", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Operateur", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Operateur", 'DateTime'>;
}
/**
 * Operateur findUnique
 */
export type OperateurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Operateur to fetch.
     */
    where: Prisma.OperateurWhereUniqueInput;
};
/**
 * Operateur findUniqueOrThrow
 */
export type OperateurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Operateur to fetch.
     */
    where: Prisma.OperateurWhereUniqueInput;
};
/**
 * Operateur findFirst
 */
export type OperateurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Operateur to fetch.
     */
    where?: Prisma.OperateurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Operateurs to fetch.
     */
    orderBy?: Prisma.OperateurOrderByWithRelationInput | Prisma.OperateurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Operateurs.
     */
    cursor?: Prisma.OperateurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Operateurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Operateurs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Operateurs.
     */
    distinct?: Prisma.OperateurScalarFieldEnum | Prisma.OperateurScalarFieldEnum[];
};
/**
 * Operateur findFirstOrThrow
 */
export type OperateurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Operateur to fetch.
     */
    where?: Prisma.OperateurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Operateurs to fetch.
     */
    orderBy?: Prisma.OperateurOrderByWithRelationInput | Prisma.OperateurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Operateurs.
     */
    cursor?: Prisma.OperateurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Operateurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Operateurs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Operateurs.
     */
    distinct?: Prisma.OperateurScalarFieldEnum | Prisma.OperateurScalarFieldEnum[];
};
/**
 * Operateur findMany
 */
export type OperateurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Operateurs to fetch.
     */
    where?: Prisma.OperateurWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Operateurs to fetch.
     */
    orderBy?: Prisma.OperateurOrderByWithRelationInput | Prisma.OperateurOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Operateurs.
     */
    cursor?: Prisma.OperateurWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Operateurs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Operateurs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Operateurs.
     */
    distinct?: Prisma.OperateurScalarFieldEnum | Prisma.OperateurScalarFieldEnum[];
};
/**
 * Operateur create
 */
export type OperateurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Operateur.
     */
    data: Prisma.XOR<Prisma.OperateurCreateInput, Prisma.OperateurUncheckedCreateInput>;
};
/**
 * Operateur createMany
 */
export type OperateurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operateurs.
     */
    data: Prisma.OperateurCreateManyInput | Prisma.OperateurCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Operateur createManyAndReturn
 */
export type OperateurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operateur
     */
    select?: Prisma.OperateurSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Operateur
     */
    omit?: Prisma.OperateurOmit<ExtArgs> | null;
    /**
     * The data used to create many Operateurs.
     */
    data: Prisma.OperateurCreateManyInput | Prisma.OperateurCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Operateur update
 */
export type OperateurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Operateur.
     */
    data: Prisma.XOR<Prisma.OperateurUpdateInput, Prisma.OperateurUncheckedUpdateInput>;
    /**
     * Choose, which Operateur to update.
     */
    where: Prisma.OperateurWhereUniqueInput;
};
/**
 * Operateur updateMany
 */
export type OperateurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Operateurs.
     */
    data: Prisma.XOR<Prisma.OperateurUpdateManyMutationInput, Prisma.OperateurUncheckedUpdateManyInput>;
    /**
     * Filter which Operateurs to update
     */
    where?: Prisma.OperateurWhereInput;
    /**
     * Limit how many Operateurs to update.
     */
    limit?: number;
};
/**
 * Operateur updateManyAndReturn
 */
export type OperateurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operateur
     */
    select?: Prisma.OperateurSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Operateur
     */
    omit?: Prisma.OperateurOmit<ExtArgs> | null;
    /**
     * The data used to update Operateurs.
     */
    data: Prisma.XOR<Prisma.OperateurUpdateManyMutationInput, Prisma.OperateurUncheckedUpdateManyInput>;
    /**
     * Filter which Operateurs to update
     */
    where?: Prisma.OperateurWhereInput;
    /**
     * Limit how many Operateurs to update.
     */
    limit?: number;
};
/**
 * Operateur upsert
 */
export type OperateurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Operateur to update in case it exists.
     */
    where: Prisma.OperateurWhereUniqueInput;
    /**
     * In case the Operateur found by the `where` argument doesn't exist, create a new Operateur with this data.
     */
    create: Prisma.XOR<Prisma.OperateurCreateInput, Prisma.OperateurUncheckedCreateInput>;
    /**
     * In case the Operateur was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OperateurUpdateInput, Prisma.OperateurUncheckedUpdateInput>;
};
/**
 * Operateur delete
 */
export type OperateurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Operateur to delete.
     */
    where: Prisma.OperateurWhereUniqueInput;
};
/**
 * Operateur deleteMany
 */
export type OperateurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Operateurs to delete
     */
    where?: Prisma.OperateurWhereInput;
    /**
     * Limit how many Operateurs to delete.
     */
    limit?: number;
};
/**
 * Operateur.prodOrders
 */
export type Operateur$prodOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Operateur.incidents
 */
export type Operateur$incidentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Operateur.materialRequests
 */
export type Operateur$materialRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Operateur without action
 */
export type OperateurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Operateur.d.ts.map