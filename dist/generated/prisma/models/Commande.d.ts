import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Commande
 *
 */
export type CommandeModel = runtime.Types.Result.DefaultSelection<Prisma.$CommandePayload>;
export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null;
    _avg: CommandeAvgAggregateOutputType | null;
    _sum: CommandeSumAggregateOutputType | null;
    _min: CommandeMinAggregateOutputType | null;
    _max: CommandeMaxAggregateOutputType | null;
};
export type CommandeAvgAggregateOutputType = {
    montant: number | null;
};
export type CommandeSumAggregateOutputType = {
    montant: number | null;
};
export type CommandeMinAggregateOutputType = {
    id: string | null;
    num: string | null;
    clientId: string | null;
    date: Date | null;
    montant: number | null;
    commercialId: string | null;
    statutActuel: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CommandeMaxAggregateOutputType = {
    id: string | null;
    num: string | null;
    clientId: string | null;
    date: Date | null;
    montant: number | null;
    commercialId: string | null;
    statutActuel: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CommandeCountAggregateOutputType = {
    id: number;
    num: number;
    clientId: number;
    date: number;
    montant: number;
    commercialId: number;
    statutActuel: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CommandeAvgAggregateInputType = {
    montant?: true;
};
export type CommandeSumAggregateInputType = {
    montant?: true;
};
export type CommandeMinAggregateInputType = {
    id?: true;
    num?: true;
    clientId?: true;
    date?: true;
    montant?: true;
    commercialId?: true;
    statutActuel?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CommandeMaxAggregateInputType = {
    id?: true;
    num?: true;
    clientId?: true;
    date?: true;
    montant?: true;
    commercialId?: true;
    statutActuel?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CommandeCountAggregateInputType = {
    id?: true;
    num?: true;
    clientId?: true;
    date?: true;
    montant?: true;
    commercialId?: true;
    statutActuel?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CommandeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Commande to aggregate.
     */
    where?: Prisma.CommandeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commandes to fetch.
     */
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommandeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commandes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType;
};
export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
    [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommande[P]> : Prisma.GetScalarType<T[P], AggregateCommande[P]>;
};
export type CommandeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeWhereInput;
    orderBy?: Prisma.CommandeOrderByWithAggregationInput | Prisma.CommandeOrderByWithAggregationInput[];
    by: Prisma.CommandeScalarFieldEnum[] | Prisma.CommandeScalarFieldEnum;
    having?: Prisma.CommandeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommandeCountAggregateInputType | true;
    _avg?: CommandeAvgAggregateInputType;
    _sum?: CommandeSumAggregateInputType;
    _min?: CommandeMinAggregateInputType;
    _max?: CommandeMaxAggregateInputType;
};
export type CommandeGroupByOutputType = {
    id: string;
    num: string;
    clientId: string;
    date: Date;
    montant: number;
    commercialId: string;
    statutActuel: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CommandeCountAggregateOutputType | null;
    _avg: CommandeAvgAggregateOutputType | null;
    _sum: CommandeSumAggregateOutputType | null;
    _min: CommandeMinAggregateOutputType | null;
    _max: CommandeMaxAggregateOutputType | null;
};
export type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommandeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommandeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommandeGroupByOutputType[P]>;
}>>;
export type CommandeWhereInput = {
    AND?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    OR?: Prisma.CommandeWhereInput[];
    NOT?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    id?: Prisma.StringFilter<"Commande"> | string;
    num?: Prisma.StringFilter<"Commande"> | string;
    clientId?: Prisma.StringFilter<"Commande"> | string;
    date?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    montant?: Prisma.FloatFilter<"Commande"> | number;
    commercialId?: Prisma.StringFilter<"Commande"> | string;
    statutActuel?: Prisma.StringFilter<"Commande"> | string;
    createdAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    commercial?: Prisma.XOR<Prisma.CommercialScalarRelationFilter, Prisma.CommercialWhereInput>;
    timeline?: Prisma.CommandeTimelineListRelationFilter;
    factures?: Prisma.FactureListRelationFilter;
    mouvements?: Prisma.MouvementListRelationFilter;
    rentabilite?: Prisma.XOR<Prisma.CommandeRentabiliteNullableScalarRelationFilter, Prisma.CommandeRentabiliteWhereInput> | null;
};
export type CommandeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    statutActuel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    client?: Prisma.ClientOrderByWithRelationInput;
    commercial?: Prisma.CommercialOrderByWithRelationInput;
    timeline?: Prisma.CommandeTimelineOrderByRelationAggregateInput;
    factures?: Prisma.FactureOrderByRelationAggregateInput;
    mouvements?: Prisma.MouvementOrderByRelationAggregateInput;
    rentabilite?: Prisma.CommandeRentabiliteOrderByWithRelationInput;
};
export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    num?: string;
    AND?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    OR?: Prisma.CommandeWhereInput[];
    NOT?: Prisma.CommandeWhereInput | Prisma.CommandeWhereInput[];
    clientId?: Prisma.StringFilter<"Commande"> | string;
    date?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    montant?: Prisma.FloatFilter<"Commande"> | number;
    commercialId?: Prisma.StringFilter<"Commande"> | string;
    statutActuel?: Prisma.StringFilter<"Commande"> | string;
    createdAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    client?: Prisma.XOR<Prisma.ClientScalarRelationFilter, Prisma.ClientWhereInput>;
    commercial?: Prisma.XOR<Prisma.CommercialScalarRelationFilter, Prisma.CommercialWhereInput>;
    timeline?: Prisma.CommandeTimelineListRelationFilter;
    factures?: Prisma.FactureListRelationFilter;
    mouvements?: Prisma.MouvementListRelationFilter;
    rentabilite?: Prisma.XOR<Prisma.CommandeRentabiliteNullableScalarRelationFilter, Prisma.CommandeRentabiliteWhereInput> | null;
}, "id" | "num">;
export type CommandeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    statutActuel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CommandeCountOrderByAggregateInput;
    _avg?: Prisma.CommandeAvgOrderByAggregateInput;
    _max?: Prisma.CommandeMaxOrderByAggregateInput;
    _min?: Prisma.CommandeMinOrderByAggregateInput;
    _sum?: Prisma.CommandeSumOrderByAggregateInput;
};
export type CommandeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommandeScalarWhereWithAggregatesInput | Prisma.CommandeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommandeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommandeScalarWhereWithAggregatesInput | Prisma.CommandeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    num?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    clientId?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"Commande"> | Date | string;
    montant?: Prisma.FloatWithAggregatesFilter<"Commande"> | number;
    commercialId?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    statutActuel?: Prisma.StringWithAggregatesFilter<"Commande"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Commande"> | Date | string;
};
export type CommandeCreateInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutCommandesInput;
    timeline?: Prisma.CommandeTimelineCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteCreateNestedOneWithoutCommandeInput;
};
export type CommandeUncheckedCreateInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedCreateNestedOneWithoutCommandeInput;
};
export type CommandeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutCommandesNestedInput;
    timeline?: Prisma.CommandeTimelineUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedUpdateOneWithoutCommandeNestedInput;
};
export type CommandeCreateManyInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommandeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeListRelationFilter = {
    every?: Prisma.CommandeWhereInput;
    some?: Prisma.CommandeWhereInput;
    none?: Prisma.CommandeWhereInput;
};
export type CommandeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommandeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    statutActuel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommandeAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
};
export type CommandeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    statutActuel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommandeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    num?: Prisma.SortOrder;
    clientId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    commercialId?: Prisma.SortOrder;
    statutActuel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommandeSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
};
export type CommandeScalarRelationFilter = {
    is?: Prisma.CommandeWhereInput;
    isNot?: Prisma.CommandeWhereInput;
};
export type CommandeNullableScalarRelationFilter = {
    is?: Prisma.CommandeWhereInput | null;
    isNot?: Prisma.CommandeWhereInput | null;
};
export type CommandeCreateNestedManyWithoutCommercialInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutCommercialInput, Prisma.CommandeUncheckedCreateWithoutCommercialInput> | Prisma.CommandeCreateWithoutCommercialInput[] | Prisma.CommandeUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutCommercialInput | Prisma.CommandeCreateOrConnectWithoutCommercialInput[];
    createMany?: Prisma.CommandeCreateManyCommercialInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUncheckedCreateNestedManyWithoutCommercialInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutCommercialInput, Prisma.CommandeUncheckedCreateWithoutCommercialInput> | Prisma.CommandeCreateWithoutCommercialInput[] | Prisma.CommandeUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutCommercialInput | Prisma.CommandeCreateOrConnectWithoutCommercialInput[];
    createMany?: Prisma.CommandeCreateManyCommercialInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUpdateManyWithoutCommercialNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutCommercialInput, Prisma.CommandeUncheckedCreateWithoutCommercialInput> | Prisma.CommandeCreateWithoutCommercialInput[] | Prisma.CommandeUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutCommercialInput | Prisma.CommandeCreateOrConnectWithoutCommercialInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutCommercialInput | Prisma.CommandeUpsertWithWhereUniqueWithoutCommercialInput[];
    createMany?: Prisma.CommandeCreateManyCommercialInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutCommercialInput | Prisma.CommandeUpdateWithWhereUniqueWithoutCommercialInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutCommercialInput | Prisma.CommandeUpdateManyWithWhereWithoutCommercialInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeUncheckedUpdateManyWithoutCommercialNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutCommercialInput, Prisma.CommandeUncheckedCreateWithoutCommercialInput> | Prisma.CommandeCreateWithoutCommercialInput[] | Prisma.CommandeUncheckedCreateWithoutCommercialInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutCommercialInput | Prisma.CommandeCreateOrConnectWithoutCommercialInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutCommercialInput | Prisma.CommandeUpsertWithWhereUniqueWithoutCommercialInput[];
    createMany?: Prisma.CommandeCreateManyCommercialInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutCommercialInput | Prisma.CommandeUpdateWithWhereUniqueWithoutCommercialInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutCommercialInput | Prisma.CommandeUpdateManyWithWhereWithoutCommercialInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
};
export type CommandeUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput | Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput | Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutClientInput | Prisma.CommandeUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput> | Prisma.CommandeCreateWithoutClientInput[] | Prisma.CommandeUncheckedCreateWithoutClientInput[];
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutClientInput | Prisma.CommandeCreateOrConnectWithoutClientInput[];
    upsert?: Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput | Prisma.CommandeUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: Prisma.CommandeCreateManyClientInputEnvelope;
    set?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    disconnect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    delete?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    connect?: Prisma.CommandeWhereUniqueInput | Prisma.CommandeWhereUniqueInput[];
    update?: Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput | Prisma.CommandeUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: Prisma.CommandeUpdateManyWithWhereWithoutClientInput | Prisma.CommandeUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
};
export type CommandeCreateNestedOneWithoutTimelineInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutTimelineInput, Prisma.CommandeUncheckedCreateWithoutTimelineInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutTimelineInput;
    connect?: Prisma.CommandeWhereUniqueInput;
};
export type CommandeUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutTimelineInput, Prisma.CommandeUncheckedCreateWithoutTimelineInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutTimelineInput;
    upsert?: Prisma.CommandeUpsertWithoutTimelineInput;
    connect?: Prisma.CommandeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeUpdateToOneWithWhereWithoutTimelineInput, Prisma.CommandeUpdateWithoutTimelineInput>, Prisma.CommandeUncheckedUpdateWithoutTimelineInput>;
};
export type CommandeCreateNestedOneWithoutFacturesInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutFacturesInput, Prisma.CommandeUncheckedCreateWithoutFacturesInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutFacturesInput;
    connect?: Prisma.CommandeWhereUniqueInput;
};
export type CommandeUpdateOneWithoutFacturesNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutFacturesInput, Prisma.CommandeUncheckedCreateWithoutFacturesInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutFacturesInput;
    upsert?: Prisma.CommandeUpsertWithoutFacturesInput;
    disconnect?: Prisma.CommandeWhereInput | boolean;
    delete?: Prisma.CommandeWhereInput | boolean;
    connect?: Prisma.CommandeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeUpdateToOneWithWhereWithoutFacturesInput, Prisma.CommandeUpdateWithoutFacturesInput>, Prisma.CommandeUncheckedUpdateWithoutFacturesInput>;
};
export type CommandeCreateNestedOneWithoutMouvementsInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutMouvementsInput, Prisma.CommandeUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutMouvementsInput;
    connect?: Prisma.CommandeWhereUniqueInput;
};
export type CommandeUpdateOneWithoutMouvementsNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutMouvementsInput, Prisma.CommandeUncheckedCreateWithoutMouvementsInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutMouvementsInput;
    upsert?: Prisma.CommandeUpsertWithoutMouvementsInput;
    disconnect?: Prisma.CommandeWhereInput | boolean;
    delete?: Prisma.CommandeWhereInput | boolean;
    connect?: Prisma.CommandeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeUpdateToOneWithWhereWithoutMouvementsInput, Prisma.CommandeUpdateWithoutMouvementsInput>, Prisma.CommandeUncheckedUpdateWithoutMouvementsInput>;
};
export type CommandeCreateNestedOneWithoutRentabiliteInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutRentabiliteInput, Prisma.CommandeUncheckedCreateWithoutRentabiliteInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutRentabiliteInput;
    connect?: Prisma.CommandeWhereUniqueInput;
};
export type CommandeUpdateOneRequiredWithoutRentabiliteNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeCreateWithoutRentabiliteInput, Prisma.CommandeUncheckedCreateWithoutRentabiliteInput>;
    connectOrCreate?: Prisma.CommandeCreateOrConnectWithoutRentabiliteInput;
    upsert?: Prisma.CommandeUpsertWithoutRentabiliteInput;
    connect?: Prisma.CommandeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeUpdateToOneWithWhereWithoutRentabiliteInput, Prisma.CommandeUpdateWithoutRentabiliteInput>, Prisma.CommandeUncheckedUpdateWithoutRentabiliteInput>;
};
export type CommandeCreateWithoutCommercialInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    timeline?: Prisma.CommandeTimelineCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteCreateNestedOneWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutCommercialInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedCreateNestedOneWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutCommercialInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutCommercialInput, Prisma.CommandeUncheckedCreateWithoutCommercialInput>;
};
export type CommandeCreateManyCommercialInputEnvelope = {
    data: Prisma.CommandeCreateManyCommercialInput | Prisma.CommandeCreateManyCommercialInput[];
    skipDuplicates?: boolean;
};
export type CommandeUpsertWithWhereUniqueWithoutCommercialInput = {
    where: Prisma.CommandeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutCommercialInput, Prisma.CommandeUncheckedUpdateWithoutCommercialInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutCommercialInput, Prisma.CommandeUncheckedCreateWithoutCommercialInput>;
};
export type CommandeUpdateWithWhereUniqueWithoutCommercialInput = {
    where: Prisma.CommandeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutCommercialInput, Prisma.CommandeUncheckedUpdateWithoutCommercialInput>;
};
export type CommandeUpdateManyWithWhereWithoutCommercialInput = {
    where: Prisma.CommandeScalarWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyWithoutCommercialInput>;
};
export type CommandeScalarWhereInput = {
    AND?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
    OR?: Prisma.CommandeScalarWhereInput[];
    NOT?: Prisma.CommandeScalarWhereInput | Prisma.CommandeScalarWhereInput[];
    id?: Prisma.StringFilter<"Commande"> | string;
    num?: Prisma.StringFilter<"Commande"> | string;
    clientId?: Prisma.StringFilter<"Commande"> | string;
    date?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    montant?: Prisma.FloatFilter<"Commande"> | number;
    commercialId?: Prisma.StringFilter<"Commande"> | string;
    statutActuel?: Prisma.StringFilter<"Commande"> | string;
    createdAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Commande"> | Date | string;
};
export type CommandeCreateWithoutClientInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commercial: Prisma.CommercialCreateNestedOneWithoutCommandesInput;
    timeline?: Prisma.CommandeTimelineCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteCreateNestedOneWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutClientInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedCreateNestedOneWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutClientInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput>;
};
export type CommandeCreateManyClientInputEnvelope = {
    data: Prisma.CommandeCreateManyClientInput | Prisma.CommandeCreateManyClientInput[];
    skipDuplicates?: boolean;
};
export type CommandeUpsertWithWhereUniqueWithoutClientInput = {
    where: Prisma.CommandeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutClientInput, Prisma.CommandeUncheckedUpdateWithoutClientInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutClientInput, Prisma.CommandeUncheckedCreateWithoutClientInput>;
};
export type CommandeUpdateWithWhereUniqueWithoutClientInput = {
    where: Prisma.CommandeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutClientInput, Prisma.CommandeUncheckedUpdateWithoutClientInput>;
};
export type CommandeUpdateManyWithWhereWithoutClientInput = {
    where: Prisma.CommandeScalarWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyWithoutClientInput>;
};
export type CommandeCreateWithoutTimelineInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutCommandesInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteCreateNestedOneWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutTimelineInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedCreateNestedOneWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutTimelineInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutTimelineInput, Prisma.CommandeUncheckedCreateWithoutTimelineInput>;
};
export type CommandeUpsertWithoutTimelineInput = {
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutTimelineInput, Prisma.CommandeUncheckedUpdateWithoutTimelineInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutTimelineInput, Prisma.CommandeUncheckedCreateWithoutTimelineInput>;
    where?: Prisma.CommandeWhereInput;
};
export type CommandeUpdateToOneWithWhereWithoutTimelineInput = {
    where?: Prisma.CommandeWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutTimelineInput, Prisma.CommandeUncheckedUpdateWithoutTimelineInput>;
};
export type CommandeUpdateWithoutTimelineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutCommandesNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutTimelineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedUpdateOneWithoutCommandeNestedInput;
};
export type CommandeCreateWithoutFacturesInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutCommandesInput;
    timeline?: Prisma.CommandeTimelineCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteCreateNestedOneWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutFacturesInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedCreateNestedOneWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutFacturesInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutFacturesInput, Prisma.CommandeUncheckedCreateWithoutFacturesInput>;
};
export type CommandeUpsertWithoutFacturesInput = {
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutFacturesInput, Prisma.CommandeUncheckedUpdateWithoutFacturesInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutFacturesInput, Prisma.CommandeUncheckedCreateWithoutFacturesInput>;
    where?: Prisma.CommandeWhereInput;
};
export type CommandeUpdateToOneWithWhereWithoutFacturesInput = {
    where?: Prisma.CommandeWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutFacturesInput, Prisma.CommandeUncheckedUpdateWithoutFacturesInput>;
};
export type CommandeUpdateWithoutFacturesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutCommandesNestedInput;
    timeline?: Prisma.CommandeTimelineUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutFacturesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedUpdateOneWithoutCommandeNestedInput;
};
export type CommandeCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutCommandesInput;
    timeline?: Prisma.CommandeTimelineCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteCreateNestedOneWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutMouvementsInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommandeInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedCreateNestedOneWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutMouvementsInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutMouvementsInput, Prisma.CommandeUncheckedCreateWithoutMouvementsInput>;
};
export type CommandeUpsertWithoutMouvementsInput = {
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutMouvementsInput, Prisma.CommandeUncheckedUpdateWithoutMouvementsInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutMouvementsInput, Prisma.CommandeUncheckedCreateWithoutMouvementsInput>;
    where?: Prisma.CommandeWhereInput;
};
export type CommandeUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: Prisma.CommandeWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutMouvementsInput, Prisma.CommandeUncheckedUpdateWithoutMouvementsInput>;
};
export type CommandeUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutCommandesNestedInput;
    timeline?: Prisma.CommandeTimelineUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutMouvementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedUpdateOneWithoutCommandeNestedInput;
};
export type CommandeCreateWithoutRentabiliteInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    client: Prisma.ClientCreateNestedOneWithoutCommandesInput;
    commercial: Prisma.CommercialCreateNestedOneWithoutCommandesInput;
    timeline?: Prisma.CommandeTimelineCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementCreateNestedManyWithoutCommandeInput;
};
export type CommandeUncheckedCreateWithoutRentabiliteInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedCreateNestedManyWithoutCommandeInput;
    factures?: Prisma.FactureUncheckedCreateNestedManyWithoutCommandeInput;
    mouvements?: Prisma.MouvementUncheckedCreateNestedManyWithoutCommandeInput;
};
export type CommandeCreateOrConnectWithoutRentabiliteInput = {
    where: Prisma.CommandeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutRentabiliteInput, Prisma.CommandeUncheckedCreateWithoutRentabiliteInput>;
};
export type CommandeUpsertWithoutRentabiliteInput = {
    update: Prisma.XOR<Prisma.CommandeUpdateWithoutRentabiliteInput, Prisma.CommandeUncheckedUpdateWithoutRentabiliteInput>;
    create: Prisma.XOR<Prisma.CommandeCreateWithoutRentabiliteInput, Prisma.CommandeUncheckedCreateWithoutRentabiliteInput>;
    where?: Prisma.CommandeWhereInput;
};
export type CommandeUpdateToOneWithWhereWithoutRentabiliteInput = {
    where?: Prisma.CommandeWhereInput;
    data: Prisma.XOR<Prisma.CommandeUpdateWithoutRentabiliteInput, Prisma.CommandeUncheckedUpdateWithoutRentabiliteInput>;
};
export type CommandeUpdateWithoutRentabiliteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutCommandesNestedInput;
    timeline?: Prisma.CommandeTimelineUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutRentabiliteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutCommandeNestedInput;
};
export type CommandeCreateManyCommercialInput = {
    id?: string;
    num: string;
    clientId: string;
    date?: Date | string;
    montant: number;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommandeUpdateWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    client?: Prisma.ClientUpdateOneRequiredWithoutCommandesNestedInput;
    timeline?: Prisma.CommandeTimelineUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateManyWithoutCommercialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    clientId?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeCreateManyClientInput = {
    id?: string;
    num: string;
    date?: Date | string;
    montant: number;
    commercialId: string;
    statutActuel?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommandeUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commercial?: Prisma.CommercialUpdateOneRequiredWithoutCommandesNestedInput;
    timeline?: Prisma.CommandeTimelineUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    timeline?: Prisma.CommandeTimelineUncheckedUpdateManyWithoutCommandeNestedInput;
    factures?: Prisma.FactureUncheckedUpdateManyWithoutCommandeNestedInput;
    mouvements?: Prisma.MouvementUncheckedUpdateManyWithoutCommandeNestedInput;
    rentabilite?: Prisma.CommandeRentabiliteUncheckedUpdateOneWithoutCommandeNestedInput;
};
export type CommandeUncheckedUpdateManyWithoutClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    num?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    commercialId?: Prisma.StringFieldUpdateOperationsInput | string;
    statutActuel?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CommandeCountOutputType
 */
export type CommandeCountOutputType = {
    timeline: number;
    factures: number;
    mouvements: number;
};
export type CommandeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    timeline?: boolean | CommandeCountOutputTypeCountTimelineArgs;
    factures?: boolean | CommandeCountOutputTypeCountFacturesArgs;
    mouvements?: boolean | CommandeCountOutputTypeCountMouvementsArgs;
};
/**
 * CommandeCountOutputType without action
 */
export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeCountOutputType
     */
    select?: Prisma.CommandeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CommandeCountOutputType without action
 */
export type CommandeCountOutputTypeCountTimelineArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeTimelineWhereInput;
};
/**
 * CommandeCountOutputType without action
 */
export type CommandeCountOutputTypeCountFacturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactureWhereInput;
};
/**
 * CommandeCountOutputType without action
 */
export type CommandeCountOutputTypeCountMouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MouvementWhereInput;
};
export type CommandeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    clientId?: boolean;
    date?: boolean;
    montant?: boolean;
    commercialId?: boolean;
    statutActuel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    timeline?: boolean | Prisma.Commande$timelineArgs<ExtArgs>;
    factures?: boolean | Prisma.Commande$facturesArgs<ExtArgs>;
    mouvements?: boolean | Prisma.Commande$mouvementsArgs<ExtArgs>;
    rentabilite?: boolean | Prisma.Commande$rentabiliteArgs<ExtArgs>;
    _count?: boolean | Prisma.CommandeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commande"]>;
export type CommandeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    clientId?: boolean;
    date?: boolean;
    montant?: boolean;
    commercialId?: boolean;
    statutActuel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commande"]>;
export type CommandeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    num?: boolean;
    clientId?: boolean;
    date?: boolean;
    montant?: boolean;
    commercialId?: boolean;
    statutActuel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commande"]>;
export type CommandeSelectScalar = {
    id?: boolean;
    num?: boolean;
    clientId?: boolean;
    date?: boolean;
    montant?: boolean;
    commercialId?: boolean;
    statutActuel?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CommandeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "num" | "clientId" | "date" | "montant" | "commercialId" | "statutActuel" | "createdAt" | "updatedAt", ExtArgs["result"]["commande"]>;
export type CommandeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
    timeline?: boolean | Prisma.Commande$timelineArgs<ExtArgs>;
    factures?: boolean | Prisma.Commande$facturesArgs<ExtArgs>;
    mouvements?: boolean | Prisma.Commande$mouvementsArgs<ExtArgs>;
    rentabilite?: boolean | Prisma.Commande$rentabiliteArgs<ExtArgs>;
    _count?: boolean | Prisma.CommandeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CommandeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
};
export type CommandeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    client?: boolean | Prisma.ClientDefaultArgs<ExtArgs>;
    commercial?: boolean | Prisma.CommercialDefaultArgs<ExtArgs>;
};
export type $CommandePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Commande";
    objects: {
        client: Prisma.$ClientPayload<ExtArgs>;
        commercial: Prisma.$CommercialPayload<ExtArgs>;
        timeline: Prisma.$CommandeTimelinePayload<ExtArgs>[];
        factures: Prisma.$FacturePayload<ExtArgs>[];
        mouvements: Prisma.$MouvementPayload<ExtArgs>[];
        rentabilite: Prisma.$CommandeRentabilitePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        num: string;
        clientId: string;
        date: Date;
        montant: number;
        commercialId: string;
        statutActuel: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["commande"]>;
    composites: {};
};
export type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommandePayload, S>;
export type CommandeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommandeCountAggregateInputType | true;
};
export interface CommandeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Commande'];
        meta: {
            name: 'Commande';
        };
    };
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeFindUniqueArgs>(args: Prisma.SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeFindFirstArgs>(args?: Prisma.SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     *
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commandeWithIdOnly = await prisma.commande.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommandeFindManyArgs>(args?: Prisma.SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     *
     */
    create<T extends CommandeCreateArgs>(args: Prisma.SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Commandes.
     * @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommandeCreateManyArgs>(args?: Prisma.SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Commandes and returns the data saved in the database.
     * @param {CommandeCreateManyAndReturnArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Commandes and only return the `id`
     * const commandeWithIdOnly = await prisma.commande.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommandeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     *
     */
    delete<T extends CommandeDeleteArgs>(args: Prisma.SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommandeUpdateArgs>(args: Prisma.SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommandeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommandeUpdateManyArgs>(args: Prisma.SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Commandes and returns the data updated in the database.
     * @param {CommandeUpdateManyAndReturnArgs} args - Arguments to update many Commandes.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Commandes and only return the `id`
     * const commandeWithIdOnly = await prisma.commande.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommandeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends CommandeUpsertArgs>(args: Prisma.SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(args?: Prisma.Subset<T, CommandeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommandeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeAggregateArgs>(args: Prisma.Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>;
    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommandeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommandeGroupByArgs['orderBy'];
    } : {
        orderBy?: CommandeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Commande model
     */
    readonly fields: CommandeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Commande.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    client<T extends Prisma.ClientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClientDefaultArgs<ExtArgs>>): Prisma.Prisma__ClientClient<runtime.Types.Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    commercial<T extends Prisma.CommercialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommercialDefaultArgs<ExtArgs>>): Prisma.Prisma__CommercialClient<runtime.Types.Result.GetResult<Prisma.$CommercialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    timeline<T extends Prisma.Commande$timelineArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$timelineArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    factures<T extends Prisma.Commande$facturesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$facturesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mouvements<T extends Prisma.Commande$mouvementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MouvementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rentabilite<T extends Prisma.Commande$rentabiliteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Commande$rentabiliteArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Commande model
 */
export interface CommandeFieldRefs {
    readonly id: Prisma.FieldRef<"Commande", 'String'>;
    readonly num: Prisma.FieldRef<"Commande", 'String'>;
    readonly clientId: Prisma.FieldRef<"Commande", 'String'>;
    readonly date: Prisma.FieldRef<"Commande", 'DateTime'>;
    readonly montant: Prisma.FieldRef<"Commande", 'Float'>;
    readonly commercialId: Prisma.FieldRef<"Commande", 'String'>;
    readonly statutActuel: Prisma.FieldRef<"Commande", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Commande", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Commande", 'DateTime'>;
}
/**
 * Commande findUnique
 */
export type CommandeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Commande to fetch.
     */
    where: Prisma.CommandeWhereUniqueInput;
};
/**
 * Commande findUniqueOrThrow
 */
export type CommandeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Commande to fetch.
     */
    where: Prisma.CommandeWhereUniqueInput;
};
/**
 * Commande findFirst
 */
export type CommandeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Commande to fetch.
     */
    where?: Prisma.CommandeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commandes to fetch.
     */
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Commandes.
     */
    cursor?: Prisma.CommandeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commandes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Commandes.
     */
    distinct?: Prisma.CommandeScalarFieldEnum | Prisma.CommandeScalarFieldEnum[];
};
/**
 * Commande findFirstOrThrow
 */
export type CommandeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Commande to fetch.
     */
    where?: Prisma.CommandeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commandes to fetch.
     */
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Commandes.
     */
    cursor?: Prisma.CommandeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commandes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Commandes.
     */
    distinct?: Prisma.CommandeScalarFieldEnum | Prisma.CommandeScalarFieldEnum[];
};
/**
 * Commande findMany
 */
export type CommandeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Commandes to fetch.
     */
    where?: Prisma.CommandeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Commandes to fetch.
     */
    orderBy?: Prisma.CommandeOrderByWithRelationInput | Prisma.CommandeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Commandes.
     */
    cursor?: Prisma.CommandeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Commandes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Commandes.
     */
    distinct?: Prisma.CommandeScalarFieldEnum | Prisma.CommandeScalarFieldEnum[];
};
/**
 * Commande create
 */
export type CommandeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Commande.
     */
    data: Prisma.XOR<Prisma.CommandeCreateInput, Prisma.CommandeUncheckedCreateInput>;
};
/**
 * Commande createMany
 */
export type CommandeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commandes.
     */
    data: Prisma.CommandeCreateManyInput | Prisma.CommandeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Commande createManyAndReturn
 */
export type CommandeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: Prisma.CommandeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Commande
     */
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    /**
     * The data used to create many Commandes.
     */
    data: Prisma.CommandeCreateManyInput | Prisma.CommandeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Commande update
 */
export type CommandeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Commande.
     */
    data: Prisma.XOR<Prisma.CommandeUpdateInput, Prisma.CommandeUncheckedUpdateInput>;
    /**
     * Choose, which Commande to update.
     */
    where: Prisma.CommandeWhereUniqueInput;
};
/**
 * Commande updateMany
 */
export type CommandeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Commandes.
     */
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyInput>;
    /**
     * Filter which Commandes to update
     */
    where?: Prisma.CommandeWhereInput;
    /**
     * Limit how many Commandes to update.
     */
    limit?: number;
};
/**
 * Commande updateManyAndReturn
 */
export type CommandeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: Prisma.CommandeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Commande
     */
    omit?: Prisma.CommandeOmit<ExtArgs> | null;
    /**
     * The data used to update Commandes.
     */
    data: Prisma.XOR<Prisma.CommandeUpdateManyMutationInput, Prisma.CommandeUncheckedUpdateManyInput>;
    /**
     * Filter which Commandes to update
     */
    where?: Prisma.CommandeWhereInput;
    /**
     * Limit how many Commandes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Commande upsert
 */
export type CommandeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Commande to update in case it exists.
     */
    where: Prisma.CommandeWhereUniqueInput;
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     */
    create: Prisma.XOR<Prisma.CommandeCreateInput, Prisma.CommandeUncheckedCreateInput>;
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommandeUpdateInput, Prisma.CommandeUncheckedUpdateInput>;
};
/**
 * Commande delete
 */
export type CommandeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Commande to delete.
     */
    where: Prisma.CommandeWhereUniqueInput;
};
/**
 * Commande deleteMany
 */
export type CommandeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Commandes to delete
     */
    where?: Prisma.CommandeWhereInput;
    /**
     * Limit how many Commandes to delete.
     */
    limit?: number;
};
/**
 * Commande.timeline
 */
export type Commande$timelineArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeTimeline
     */
    select?: Prisma.CommandeTimelineSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandeTimeline
     */
    omit?: Prisma.CommandeTimelineOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeTimelineInclude<ExtArgs> | null;
    where?: Prisma.CommandeTimelineWhereInput;
    orderBy?: Prisma.CommandeTimelineOrderByWithRelationInput | Prisma.CommandeTimelineOrderByWithRelationInput[];
    cursor?: Prisma.CommandeTimelineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommandeTimelineScalarFieldEnum | Prisma.CommandeTimelineScalarFieldEnum[];
};
/**
 * Commande.factures
 */
export type Commande$facturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Commande.mouvements
 */
export type Commande$mouvementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Commande.rentabilite
 */
export type Commande$rentabiliteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeRentabilite
     */
    select?: Prisma.CommandeRentabiliteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandeRentabilite
     */
    omit?: Prisma.CommandeRentabiliteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeRentabiliteInclude<ExtArgs> | null;
    where?: Prisma.CommandeRentabiliteWhereInput;
};
/**
 * Commande without action
 */
export type CommandeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Commande.d.ts.map