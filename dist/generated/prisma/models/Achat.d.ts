import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Achat
 *
 */
export type AchatModel = runtime.Types.Result.DefaultSelection<Prisma.$AchatPayload>;
export type AggregateAchat = {
    _count: AchatCountAggregateOutputType | null;
    _avg: AchatAvgAggregateOutputType | null;
    _sum: AchatSumAggregateOutputType | null;
    _min: AchatMinAggregateOutputType | null;
    _max: AchatMaxAggregateOutputType | null;
};
export type AchatAvgAggregateOutputType = {
    montant: number | null;
    articles: number | null;
};
export type AchatSumAggregateOutputType = {
    montant: number | null;
    articles: number | null;
};
export type AchatMinAggregateOutputType = {
    id: string | null;
    num: string | null;
    fournisseurId: string | null;
    date: Date | null;
    livraison: Date | null;
    montant: number | null;
    statut: string | null;
    articles: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AchatMaxAggregateOutputType = {
    id: string | null;
    num: string | null;
    fournisseurId: string | null;
    date: Date | null;
    livraison: Date | null;
    montant: number | null;
    statut: string | null;
    articles: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AchatCountAggregateOutputType = {
    id: number;
    num: number;
    fournisseurId: number;
    date: number;
    livraison: number;
    montant: number;
    statut: number;
    articles: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AchatAvgAggregateInputType = {
    montant?: true;
    articles?: true;
};
export type AchatSumAggregateInputType = {
    montant?: true;
    articles?: true;
};
export type AchatMinAggregateInputType = {
    id?: true;
    num?: true;
    fournisseurId?: true;
    date?: true;
    livraison?: true;
    montant?: true;
    statut?: true;
    articles?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AchatMaxAggregateInputType = {
    id?: true;
    num?: true;
    fournisseurId?: true;
    date?: true;
    livraison?: true;
    montant?: true;
    statut?: true;
    articles?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AchatCountAggregateInputType = {
    id?: true;
    num?: true;
    fournisseurId?: true;
    date?: true;
    livraison?: true;
    montant?: true;
    statut?: true;
    articles?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AchatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Achat to aggregate.
     */
    where?: Prisma.AchatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achats to fetch.
     */
    orderBy?: Prisma.AchatOrderByWithRelationInput | Prisma.AchatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AchatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Achats
    **/
    _count?: true | AchatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AchatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AchatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AchatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AchatMaxAggregateInputType;
};
export type GetAchatAggregateType<T extends AchatAggregateArgs> = {
    [P in keyof T & keyof AggregateAchat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAchat[P]> : Prisma.GetScalarType<T[P], AggregateAchat[P]>;
};
export type AchatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AchatWhereInput;
    orderBy?: Prisma.AchatOrderByWithAggregationInput | Prisma.AchatOrderByWithAggregationInput[];
    by: Prisma.AchatScalarFieldEnum[] | Prisma.AchatScalarFieldEnum;
    having?: Prisma.AchatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AchatCountAggregateInputType | true;
    _avg?: AchatAvgAggregateInputType;
    _sum?: AchatSumAggregateInputType;
    _min?: AchatMinAggregateInputType;
    _max?: AchatMaxAggregateInputType;
};
export type AchatGroupByOutputType = {
    id: string;
    num: string;
    fournisseurId: string;
    date: Date;
    livraison: Date;
    montant: number;
    statut: string;
    articles: number;
    createdAt: Date;
    updatedAt: Date;
    _count: AchatCountAggregateOutputType | null;
    _avg: AchatAvgAggregateOutputType | null;
    _sum: AchatSumAggregateOutputType | null;
    _min: AchatMinAggregateOutputType | null;
    _max: AchatMaxAggregateOutputType | null;
};
export type GetAchatGroupByPayload<T extends AchatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AchatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AchatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AchatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AchatGroupByOutputType[P]>;
}>>;
export type AchatWhereInput = {
    AND?: Prisma.AchatWhereInput | Prisma.AchatWhereInput[];
    OR?: Prisma.AchatWhereInput[];
    NOT?: Prisma.AchatWhereInput | Prisma.AchatWhereInput[];
    id?: Prisma.StringFilter<"Achat"> | string;
    num?: Prisma.StringFilter<"Achat"> | string;
    fournisseurId?: Prisma.StringFilter<"Achat"> | string;
    date?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    livraison?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    montant?: Prisma.FloatFilter<"Achat"> | number;
    statut?: Prisma.StringFilter<"Achat"> | string;
    articles?: Prisma.IntFilter<"Achat"> | number;
    createdAt?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    fournisseur?: Prisma.XOR<Prisma.FournisseurScalarRelationFilter, Prisma.FournisseurWhereInput>;
    mouvements?: Prisma.MouvementListRelationFilter;
};
export type AchatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    fournisseurId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    livraison?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    articles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fournisseur?: Prisma.FournisseurOrderByWithRelationInput;
    mouvements?: Prisma.MouvementOrderByRelationAggregateInput;
};
export type AchatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    num?: string;
    AND?: Prisma.AchatWhereInput | Prisma.AchatWhereInput[];
    OR?: Prisma.AchatWhereInput[];
    NOT?: Prisma.AchatWhereInput | Prisma.AchatWhereInput[];
    fournisseurId?: Prisma.StringFilter<"Achat"> | string;
    date?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    livraison?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    montant?: Prisma.FloatFilter<"Achat"> | number;
    statut?: Prisma.StringFilter<"Achat"> | string;
    articles?: Prisma.IntFilter<"Achat"> | number;
    createdAt?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    fournisseur?: Prisma.XOR<Prisma.FournisseurScalarRelationFilter, Prisma.FournisseurWhereInput>;
    mouvements?: Prisma.MouvementListRelationFilter;
}, "id" | "num">;
export type AchatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    fournisseurId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    livraison?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    articles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AchatCountOrderByAggregateInput;
    _avg?: Prisma.AchatAvgOrderByAggregateInput;
    _max?: Prisma.AchatMaxOrderByAggregateInput;
    _min?: Prisma.AchatMinOrderByAggregateInput;
    _sum?: Prisma.AchatSumOrderByAggregateInput;
};
export type AchatScalarWhereWithAggregatesInput = {
    AND?: Prisma.AchatScalarWhereWithAggregatesInput | Prisma.AchatScalarWhereWithAggregatesInput[];
    OR?: Prisma.AchatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AchatScalarWhereWithAggregatesInput | Prisma.AchatScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Achat"> | string;
    num?: Prisma.StringWithAggregatesFilter<"Achat"> | string;
    fournisseurId?: Prisma.StringWithAggregatesFilter<"Achat"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Achat"> | Date | string;
    livraison?: Prisma.DateTimeWithAggregatesFilter<"Achat"> | Date | string;
    montant?: Prisma.FloatWithAggregatesFilter<"Achat"> | number;
    statut?: Prisma.StringWithAggregatesFilter<"Achat"> | string;
    articles?: Prisma.IntWithAggregatesFilter<"Achat"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Achat"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Achat"> | Date | string;
};
export type AchatCreateInput = {
    id?: string;
    num: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fournisseur: Prisma.FournisseurCreateNestedOneWithoutAchatsInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutAchatInput;
};
export type AchatUncheckedCreateInput = {
    id?: string;
    num: string;
    fournisseurId: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutAchatInput;
};
export type AchatUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fournisseur?: Prisma.FournisseurUpdateOneRequiredWithoutAchatsNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutAchatNestedInput;
};
export type AchatUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    fournisseurId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutAchatNestedInput;
};
export type AchatCreateManyInput = {
    id?: string;
    num: string;
    fournisseurId: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AchatUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AchatUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    fournisseurId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AchatListRelationFilter = {
    every?: Prisma.AchatWhereInput;
    some?: Prisma.AchatWhereInput;
    none?: Prisma.AchatWhereInput;
};
export type AchatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AchatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    fournisseurId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    livraison?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    articles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AchatAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    articles?: Prisma.SortOrder;
};
export type AchatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    fournisseurId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    livraison?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    articles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AchatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    fournisseurId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    livraison?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    articles?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AchatSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    articles?: Prisma.SortOrder;
};
export type AchatNullableScalarRelationFilter = {
    is?: Prisma.AchatWhereInput | null;
    isNot?: Prisma.AchatWhereInput | null;
};
export type AchatCreateNestedManyWithoutFournisseurInput = {
    create?: Prisma.XOR<Prisma.AchatCreateWithoutFournisseurInput, Prisma.AchatUncheckedCreateWithoutFournisseurInput> | Prisma.AchatCreateWithoutFournisseurInput[] | Prisma.AchatUncheckedCreateWithoutFournisseurInput[];
    connectOrCreate?: Prisma.AchatCreateOrConnectWithoutFournisseurInput | Prisma.AchatCreateOrConnectWithoutFournisseurInput[];
    createMany?: Prisma.AchatCreateManyFournisseurInputEnvelope;
    connect?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
};
export type AchatUncheckedCreateNestedManyWithoutFournisseurInput = {
    create?: Prisma.XOR<Prisma.AchatCreateWithoutFournisseurInput, Prisma.AchatUncheckedCreateWithoutFournisseurInput> | Prisma.AchatCreateWithoutFournisseurInput[] | Prisma.AchatUncheckedCreateWithoutFournisseurInput[];
    connectOrCreate?: Prisma.AchatCreateOrConnectWithoutFournisseurInput | Prisma.AchatCreateOrConnectWithoutFournisseurInput[];
    createMany?: Prisma.AchatCreateManyFournisseurInputEnvelope;
    connect?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
};
export type AchatUpdateManyWithoutFournisseurNestedInput = {
    create?: Prisma.XOR<Prisma.AchatCreateWithoutFournisseurInput, Prisma.AchatUncheckedCreateWithoutFournisseurInput> | Prisma.AchatCreateWithoutFournisseurInput[] | Prisma.AchatUncheckedCreateWithoutFournisseurInput[];
    connectOrCreate?: Prisma.AchatCreateOrConnectWithoutFournisseurInput | Prisma.AchatCreateOrConnectWithoutFournisseurInput[];
    upsert?: Prisma.AchatUpsertWithWhereUniqueWithoutFournisseurInput | Prisma.AchatUpsertWithWhereUniqueWithoutFournisseurInput[];
    createMany?: Prisma.AchatCreateManyFournisseurInputEnvelope;
    set?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    disconnect?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    delete?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    connect?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    update?: Prisma.AchatUpdateWithWhereUniqueWithoutFournisseurInput | Prisma.AchatUpdateWithWhereUniqueWithoutFournisseurInput[];
    updateMany?: Prisma.AchatUpdateManyWithWhereWithoutFournisseurInput | Prisma.AchatUpdateManyWithWhereWithoutFournisseurInput[];
    deleteMany?: Prisma.AchatScalarWhereInput | Prisma.AchatScalarWhereInput[];
};
export type AchatUncheckedUpdateManyWithoutFournisseurNestedInput = {
    create?: Prisma.XOR<Prisma.AchatCreateWithoutFournisseurInput, Prisma.AchatUncheckedCreateWithoutFournisseurInput> | Prisma.AchatCreateWithoutFournisseurInput[] | Prisma.AchatUncheckedCreateWithoutFournisseurInput[];
    connectOrCreate?: Prisma.AchatCreateOrConnectWithoutFournisseurInput | Prisma.AchatCreateOrConnectWithoutFournisseurInput[];
    upsert?: Prisma.AchatUpsertWithWhereUniqueWithoutFournisseurInput | Prisma.AchatUpsertWithWhereUniqueWithoutFournisseurInput[];
    createMany?: Prisma.AchatCreateManyFournisseurInputEnvelope;
    set?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    disconnect?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    delete?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    connect?: Prisma.AchatWhereUniqueInput | Prisma.AchatWhereUniqueInput[];
    update?: Prisma.AchatUpdateWithWhereUniqueWithoutFournisseurInput | Prisma.AchatUpdateWithWhereUniqueWithoutFournisseurInput[];
    updateMany?: Prisma.AchatUpdateManyWithWhereWithoutFournisseurInput | Prisma.AchatUpdateManyWithWhereWithoutFournisseurInput[];
    deleteMany?: Prisma.AchatScalarWhereInput | Prisma.AchatScalarWhereInput[];
};
export type AchatCreateNestedOneWithoutMouvementsInput = {
    create?: Prisma.XOR<Prisma.AchatCreateWithoutMouvementsInput, Prisma.AchatUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.AchatCreateOrConnectWithoutMouvementsInput;
    connect?: Prisma.AchatWhereUniqueInput;
};
export type AchatUpdateOneWithoutMouvementsNestedInput = {
    create?: Prisma.XOR<Prisma.AchatCreateWithoutMouvementsInput, Prisma.AchatUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.AchatCreateOrConnectWithoutMouvementsInput;
    upsert?: Prisma.AchatUpsertWithoutMouvementsInput;
    disconnect?: Prisma.AchatWhereInput | boolean;
    delete?: Prisma.AchatWhereInput | boolean;
    connect?: Prisma.AchatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AchatUpdateToOneWithWhereWithoutMouvementsInput, Prisma.AchatUpdateWithoutMouvementsInput>, Prisma.AchatUncheckedUpdateWithoutMouvementsInput>;
};
export type AchatCreateWithoutFournisseurInput = {
    id?: string;
    num: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutAchatInput;
};
export type AchatUncheckedCreateWithoutFournisseurInput = {
    id?: string;
    num: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutAchatInput;
};
export type AchatCreateOrConnectWithoutFournisseurInput = {
    where: Prisma.AchatWhereUniqueInput;
    create: Prisma.XOR<Prisma.AchatCreateWithoutFournisseurInput, Prisma.AchatUncheckedCreateWithoutFournisseurInput>;
};
export type AchatCreateManyFournisseurInputEnvelope = {
    data: Prisma.AchatCreateManyFournisseurInput | Prisma.AchatCreateManyFournisseurInput[];
    skipDuplicates?: boolean;
};
export type AchatUpsertWithWhereUniqueWithoutFournisseurInput = {
    where: Prisma.AchatWhereUniqueInput;
    update: Prisma.XOR<Prisma.AchatUpdateWithoutFournisseurInput, Prisma.AchatUncheckedUpdateWithoutFournisseurInput>;
    create: Prisma.XOR<Prisma.AchatCreateWithoutFournisseurInput, Prisma.AchatUncheckedCreateWithoutFournisseurInput>;
};
export type AchatUpdateWithWhereUniqueWithoutFournisseurInput = {
    where: Prisma.AchatWhereUniqueInput;
    data: Prisma.XOR<Prisma.AchatUpdateWithoutFournisseurInput, Prisma.AchatUncheckedUpdateWithoutFournisseurInput>;
};
export type AchatUpdateManyWithWhereWithoutFournisseurInput = {
    where: Prisma.AchatScalarWhereInput;
    data: Prisma.XOR<Prisma.AchatUpdateManyMutationInput, Prisma.AchatUncheckedUpdateManyWithoutFournisseurInput>;
};
export type AchatScalarWhereInput = {
    AND?: Prisma.AchatScalarWhereInput | Prisma.AchatScalarWhereInput[];
    OR?: Prisma.AchatScalarWhereInput[];
    NOT?: Prisma.AchatScalarWhereInput | Prisma.AchatScalarWhereInput[];
    id?: Prisma.StringFilter<"Achat"> | string;
    num?: Prisma.StringFilter<"Achat"> | string;
    fournisseurId?: Prisma.StringFilter<"Achat"> | string;
    date?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    livraison?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    montant?: Prisma.FloatFilter<"Achat"> | number;
    statut?: Prisma.StringFilter<"Achat"> | string;
    articles?: Prisma.IntFilter<"Achat"> | number;
    createdAt?: Prisma.DateTimeFilter<"Achat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Achat"> | Date | string;
};
export type AchatCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fournisseur: Prisma.FournisseurCreateNestedOneWithoutAchatsInput;
};
export type AchatUncheckedCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    fournisseurId: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AchatCreateOrConnectWithoutMouvementsInput = {
    where: Prisma.AchatWhereUniqueInput;
    create: Prisma.XOR<Prisma.AchatCreateWithoutMouvementsInput, Prisma.AchatUncheckedCreateWithoutMouvementsInput>;
};
export type AchatUpsertWithoutMouvementsInput = {
    update: Prisma.XOR<Prisma.AchatUpdateWithoutMouvementsInput, Prisma.AchatUncheckedUpdateWithoutMouvementsInput>;
    create: Prisma.XOR<Prisma.AchatCreateWithoutMouvementsInput, Prisma.AchatUncheckedCreateWithoutMouvementsInput>;
    where?: Prisma.AchatWhereInput;
};
export type AchatUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: Prisma.AchatWhereInput;
    data: Prisma.XOR<Prisma.AchatUpdateWithoutMouvementsInput, Prisma.AchatUncheckedUpdateWithoutMouvementsInput>;
};
export type AchatUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fournisseur?: Prisma.FournisseurUpdateOneRequiredWithoutAchatsNestedInput;
};
export type AchatUncheckedUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    fournisseurId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AchatCreateManyFournisseurInput = {
    id?: string;
    num: string;
    date: Date | string;
    livraison: Date | string;
    montant: number;
    statut?: string;
    articles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AchatUpdateWithoutFournisseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUpdateManyWithoutAchatNestedInput;
};
export type AchatUncheckedUpdateWithoutFournisseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutAchatNestedInput;
};
export type AchatUncheckedUpdateManyWithoutFournisseurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    livraison?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    articles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AchatCountOutputType
 */
export type AchatCountOutputType = {
    mouvements: number;
};
export type AchatCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mouvements?: boolean | AchatCountOutputTypeCountMouvementsArgs;
};
/**
 * AchatCountOutputType without action
 */
export type AchatCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchatCountOutputType
     */
    select?: Prisma.AchatCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AchatCountOutputType without action
 */
export type AchatCountOutputTypeCountMouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MouvementWhereInput;
};
export type AchatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    fournisseurId?: boolean;
    date?: boolean;
    livraison?: boolean;
    montant?: boolean;
    statut?: boolean;
    articles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fournisseur?: boolean | Prisma.FournisseurDefaultArgs<ExtArgs>;
    mouvements?: boolean | Prisma.Achat$mouvementsArgs<ExtArgs>;
    _count?: boolean | Prisma.AchatCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["achat"]>;
export type AchatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    fournisseurId?: boolean;
    date?: boolean;
    livraison?: boolean;
    montant?: boolean;
    statut?: boolean;
    articles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fournisseur?: boolean | Prisma.FournisseurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["achat"]>;
export type AchatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    fournisseurId?: boolean;
    date?: boolean;
    livraison?: boolean;
    montant?: boolean;
    statut?: boolean;
    articles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fournisseur?: boolean | Prisma.FournisseurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["achat"]>;
export type AchatSelectScalar = {
    id?: boolean;
    num?: boolean;
    fournisseurId?: boolean;
    date?: boolean;
    livraison?: boolean;
    montant?: boolean;
    statut?: boolean;
    articles?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AchatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "num" | "fournisseurId" | "date" | "livraison" | "montant" | "statut" | "articles" | "createdAt" | "updatedAt", ExtArgs["result"]["achat"]>;
export type AchatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fournisseur?: boolean | Prisma.FournisseurDefaultArgs<ExtArgs>;
    mouvements?: boolean | Prisma.Achat$mouvementsArgs<ExtArgs>;
    _count?: boolean | Prisma.AchatCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AchatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fournisseur?: boolean | Prisma.FournisseurDefaultArgs<ExtArgs>;
};
export type AchatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fournisseur?: boolean | Prisma.FournisseurDefaultArgs<ExtArgs>;
};
export type $AchatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Achat";
    objects: {
        fournisseur: Prisma.$FournisseurPayload<ExtArgs>;
        mouvements: Prisma.$MouvementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        num: string;
        fournisseurId: string;
        date: Date;
        livraison: Date;
        montant: number;
        statut: string;
        articles: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["achat"]>;
    composites: {};
};
export type AchatGetPayload<S extends boolean | null | undefined | AchatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AchatPayload, S>;
export type AchatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AchatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AchatCountAggregateInputType | true;
};
export interface AchatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Achat'];
        meta: {
            name: 'Achat';
        };
    };
    /**
     * Find zero or one Achat that matches the filter.
     * @param {AchatFindUniqueArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchatFindUniqueArgs>(args: Prisma.SelectSubset<T, AchatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Achat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchatFindUniqueOrThrowArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AchatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Achat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatFindFirstArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchatFindFirstArgs>(args?: Prisma.SelectSubset<T, AchatFindFirstArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Achat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatFindFirstOrThrowArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AchatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Achats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achats
     * const achats = await prisma.achat.findMany()
     *
     * // Get first 10 Achats
     * const achats = await prisma.achat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const achatWithIdOnly = await prisma.achat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AchatFindManyArgs>(args?: Prisma.SelectSubset<T, AchatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Achat.
     * @param {AchatCreateArgs} args - Arguments to create a Achat.
     * @example
     * // Create one Achat
     * const Achat = await prisma.achat.create({
     *   data: {
     *     // ... data to create a Achat
     *   }
     * })
     *
     */
    create<T extends AchatCreateArgs>(args: Prisma.SelectSubset<T, AchatCreateArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Achats.
     * @param {AchatCreateManyArgs} args - Arguments to create many Achats.
     * @example
     * // Create many Achats
     * const achat = await prisma.achat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AchatCreateManyArgs>(args?: Prisma.SelectSubset<T, AchatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Achats and returns the data saved in the database.
     * @param {AchatCreateManyAndReturnArgs} args - Arguments to create many Achats.
     * @example
     * // Create many Achats
     * const achat = await prisma.achat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Achats and only return the `id`
     * const achatWithIdOnly = await prisma.achat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AchatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AchatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Achat.
     * @param {AchatDeleteArgs} args - Arguments to delete one Achat.
     * @example
     * // Delete one Achat
     * const Achat = await prisma.achat.delete({
     *   where: {
     *     // ... filter to delete one Achat
     *   }
     * })
     *
     */
    delete<T extends AchatDeleteArgs>(args: Prisma.SelectSubset<T, AchatDeleteArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Achat.
     * @param {AchatUpdateArgs} args - Arguments to update one Achat.
     * @example
     * // Update one Achat
     * const achat = await prisma.achat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AchatUpdateArgs>(args: Prisma.SelectSubset<T, AchatUpdateArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Achats.
     * @param {AchatDeleteManyArgs} args - Arguments to filter Achats to delete.
     * @example
     * // Delete a few Achats
     * const { count } = await prisma.achat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AchatDeleteManyArgs>(args?: Prisma.SelectSubset<T, AchatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Achats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achats
     * const achat = await prisma.achat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AchatUpdateManyArgs>(args: Prisma.SelectSubset<T, AchatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Achats and returns the data updated in the database.
     * @param {AchatUpdateManyAndReturnArgs} args - Arguments to update many Achats.
     * @example
     * // Update many Achats
     * const achat = await prisma.achat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Achats and only return the `id`
     * const achatWithIdOnly = await prisma.achat.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AchatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Achat.
     * @param {AchatUpsertArgs} args - Arguments to update or create a Achat.
     * @example
     * // Update or create a Achat
     * const achat = await prisma.achat.upsert({
     *   create: {
     *     // ... data to create a Achat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achat we want to update
     *   }
     * })
     */
    upsert<T extends AchatUpsertArgs>(args: Prisma.SelectSubset<T, AchatUpsertArgs<ExtArgs>>): Prisma.Prisma__AchatClient<runtime.Types.Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Achats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatCountArgs} args - Arguments to filter Achats to count.
     * @example
     * // Count the number of Achats
     * const count = await prisma.achat.count({
     *   where: {
     *     // ... the filter for the Achats we want to count
     *   }
     * })
    **/
    count<T extends AchatCountArgs>(args?: Prisma.Subset<T, AchatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AchatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Achat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchatAggregateArgs>(args: Prisma.Subset<T, AchatAggregateArgs>): Prisma.PrismaPromise<GetAchatAggregateType<T>>;
    /**
     * Group by Achat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AchatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AchatGroupByArgs['orderBy'];
    } : {
        orderBy?: AchatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AchatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Achat model
     */
    readonly fields: AchatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Achat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AchatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fournisseur<T extends Prisma.FournisseurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FournisseurDefaultArgs<ExtArgs>>): Prisma.Prisma__FournisseurClient<runtime.Types.Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mouvements<T extends Prisma.Achat$mouvementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Achat$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Achat model
 */
export interface AchatFieldRefs {
    readonly id: Prisma.FieldRef<"Achat", 'String'>;
    readonly num: Prisma.FieldRef<"Achat", 'String'>;
    readonly fournisseurId: Prisma.FieldRef<"Achat", 'String'>;
    readonly date: Prisma.FieldRef<"Achat", 'DateTime'>;
    readonly livraison: Prisma.FieldRef<"Achat", 'DateTime'>;
    readonly montant: Prisma.FieldRef<"Achat", 'Float'>;
    readonly statut: Prisma.FieldRef<"Achat", 'String'>;
    readonly articles: Prisma.FieldRef<"Achat", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Achat", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Achat", 'DateTime'>;
}
/**
 * Achat findUnique
 */
export type AchatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Achat to fetch.
     */
    where: Prisma.AchatWhereUniqueInput;
};
/**
 * Achat findUniqueOrThrow
 */
export type AchatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Achat to fetch.
     */
    where: Prisma.AchatWhereUniqueInput;
};
/**
 * Achat findFirst
 */
export type AchatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Achat to fetch.
     */
    where?: Prisma.AchatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achats to fetch.
     */
    orderBy?: Prisma.AchatOrderByWithRelationInput | Prisma.AchatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Achats.
     */
    cursor?: Prisma.AchatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Achats.
     */
    distinct?: Prisma.AchatScalarFieldEnum | Prisma.AchatScalarFieldEnum[];
};
/**
 * Achat findFirstOrThrow
 */
export type AchatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Achat to fetch.
     */
    where?: Prisma.AchatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achats to fetch.
     */
    orderBy?: Prisma.AchatOrderByWithRelationInput | Prisma.AchatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Achats.
     */
    cursor?: Prisma.AchatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Achats.
     */
    distinct?: Prisma.AchatScalarFieldEnum | Prisma.AchatScalarFieldEnum[];
};
/**
 * Achat findMany
 */
export type AchatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Achats to fetch.
     */
    where?: Prisma.AchatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Achats to fetch.
     */
    orderBy?: Prisma.AchatOrderByWithRelationInput | Prisma.AchatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Achats.
     */
    cursor?: Prisma.AchatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Achats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Achats.
     */
    distinct?: Prisma.AchatScalarFieldEnum | Prisma.AchatScalarFieldEnum[];
};
/**
 * Achat create
 */
export type AchatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Achat.
     */
    data: Prisma.XOR<Prisma.AchatCreateInput, Prisma.AchatUncheckedCreateInput>;
};
/**
 * Achat createMany
 */
export type AchatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achats.
     */
    data: Prisma.AchatCreateManyInput | Prisma.AchatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Achat createManyAndReturn
 */
export type AchatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: Prisma.AchatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Achat
     */
    omit?: Prisma.AchatOmit<ExtArgs> | null;
    /**
     * The data used to create many Achats.
     */
    data: Prisma.AchatCreateManyInput | Prisma.AchatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AchatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Achat update
 */
export type AchatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Achat.
     */
    data: Prisma.XOR<Prisma.AchatUpdateInput, Prisma.AchatUncheckedUpdateInput>;
    /**
     * Choose, which Achat to update.
     */
    where: Prisma.AchatWhereUniqueInput;
};
/**
 * Achat updateMany
 */
export type AchatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Achats.
     */
    data: Prisma.XOR<Prisma.AchatUpdateManyMutationInput, Prisma.AchatUncheckedUpdateManyInput>;
    /**
     * Filter which Achats to update
     */
    where?: Prisma.AchatWhereInput;
    /**
     * Limit how many Achats to update.
     */
    limit?: number;
};
/**
 * Achat updateManyAndReturn
 */
export type AchatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: Prisma.AchatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Achat
     */
    omit?: Prisma.AchatOmit<ExtArgs> | null;
    /**
     * The data used to update Achats.
     */
    data: Prisma.XOR<Prisma.AchatUpdateManyMutationInput, Prisma.AchatUncheckedUpdateManyInput>;
    /**
     * Filter which Achats to update
     */
    where?: Prisma.AchatWhereInput;
    /**
     * Limit how many Achats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AchatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Achat upsert
 */
export type AchatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Achat to update in case it exists.
     */
    where: Prisma.AchatWhereUniqueInput;
    /**
     * In case the Achat found by the `where` argument doesn't exist, create a new Achat with this data.
     */
    create: Prisma.XOR<Prisma.AchatCreateInput, Prisma.AchatUncheckedCreateInput>;
    /**
     * In case the Achat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AchatUpdateInput, Prisma.AchatUncheckedUpdateInput>;
};
/**
 * Achat delete
 */
export type AchatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Achat to delete.
     */
    where: Prisma.AchatWhereUniqueInput;
};
/**
 * Achat deleteMany
 */
export type AchatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Achats to delete
     */
    where?: Prisma.AchatWhereInput;
    /**
     * Limit how many Achats to delete.
     */
    limit?: number;
};
/**
 * Achat.mouvements
 */
export type Achat$mouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Achat without action
 */
export type AchatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Achat.d.ts.map