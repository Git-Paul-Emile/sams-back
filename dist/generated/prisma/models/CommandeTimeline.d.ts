import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CommandeTimeline
 *
 */
export type CommandeTimelineModel = runtime.Types.Result.DefaultSelection<Prisma.$CommandeTimelinePayload>;
export type AggregateCommandeTimeline = {
    _count: CommandeTimelineCountAggregateOutputType | null;
    _min: CommandeTimelineMinAggregateOutputType | null;
    _max: CommandeTimelineMaxAggregateOutputType | null;
};
export type CommandeTimelineMinAggregateOutputType = {
    id: string | null;
    commandeId: string | null;
    etat: string | null;
    date: Date | null;
    userId: string | null;
    commentaire: string | null;
};
export type CommandeTimelineMaxAggregateOutputType = {
    id: string | null;
    commandeId: string | null;
    etat: string | null;
    date: Date | null;
    userId: string | null;
    commentaire: string | null;
};
export type CommandeTimelineCountAggregateOutputType = {
    id: number;
    commandeId: number;
    etat: number;
    date: number;
    userId: number;
    commentaire: number;
    _all: number;
};
export type CommandeTimelineMinAggregateInputType = {
    id?: true;
    commandeId?: true;
    etat?: true;
    date?: true;
    userId?: true;
    commentaire?: true;
};
export type CommandeTimelineMaxAggregateInputType = {
    id?: true;
    commandeId?: true;
    etat?: true;
    date?: true;
    userId?: true;
    commentaire?: true;
};
export type CommandeTimelineCountAggregateInputType = {
    id?: true;
    commandeId?: true;
    etat?: true;
    date?: true;
    userId?: true;
    commentaire?: true;
    _all?: true;
};
export type CommandeTimelineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommandeTimeline to aggregate.
     */
    where?: Prisma.CommandeTimelineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeTimelines to fetch.
     */
    orderBy?: Prisma.CommandeTimelineOrderByWithRelationInput | Prisma.CommandeTimelineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommandeTimelineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeTimelines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeTimelines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CommandeTimelines
    **/
    _count?: true | CommandeTimelineCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommandeTimelineMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommandeTimelineMaxAggregateInputType;
};
export type GetCommandeTimelineAggregateType<T extends CommandeTimelineAggregateArgs> = {
    [P in keyof T & keyof AggregateCommandeTimeline]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommandeTimeline[P]> : Prisma.GetScalarType<T[P], AggregateCommandeTimeline[P]>;
};
export type CommandeTimelineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeTimelineWhereInput;
    orderBy?: Prisma.CommandeTimelineOrderByWithAggregationInput | Prisma.CommandeTimelineOrderByWithAggregationInput[];
    by: Prisma.CommandeTimelineScalarFieldEnum[] | Prisma.CommandeTimelineScalarFieldEnum;
    having?: Prisma.CommandeTimelineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommandeTimelineCountAggregateInputType | true;
    _min?: CommandeTimelineMinAggregateInputType;
    _max?: CommandeTimelineMaxAggregateInputType;
};
export type CommandeTimelineGroupByOutputType = {
    id: string;
    commandeId: string;
    etat: string;
    date: Date;
    userId: string | null;
    commentaire: string | null;
    _count: CommandeTimelineCountAggregateOutputType | null;
    _min: CommandeTimelineMinAggregateOutputType | null;
    _max: CommandeTimelineMaxAggregateOutputType | null;
};
export type GetCommandeTimelineGroupByPayload<T extends CommandeTimelineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommandeTimelineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommandeTimelineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommandeTimelineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommandeTimelineGroupByOutputType[P]>;
}>>;
export type CommandeTimelineWhereInput = {
    AND?: Prisma.CommandeTimelineWhereInput | Prisma.CommandeTimelineWhereInput[];
    OR?: Prisma.CommandeTimelineWhereInput[];
    NOT?: Prisma.CommandeTimelineWhereInput | Prisma.CommandeTimelineWhereInput[];
    id?: Prisma.StringFilter<"CommandeTimeline"> | string;
    commandeId?: Prisma.StringFilter<"CommandeTimeline"> | string;
    etat?: Prisma.StringFilter<"CommandeTimeline"> | string;
    date?: Prisma.DateTimeFilter<"CommandeTimeline"> | Date | string;
    userId?: Prisma.StringNullableFilter<"CommandeTimeline"> | string | null;
    commentaire?: Prisma.StringNullableFilter<"CommandeTimeline"> | string | null;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type CommandeTimelineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    commande?: Prisma.CommandeOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CommandeTimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CommandeTimelineWhereInput | Prisma.CommandeTimelineWhereInput[];
    OR?: Prisma.CommandeTimelineWhereInput[];
    NOT?: Prisma.CommandeTimelineWhereInput | Prisma.CommandeTimelineWhereInput[];
    commandeId?: Prisma.StringFilter<"CommandeTimeline"> | string;
    etat?: Prisma.StringFilter<"CommandeTimeline"> | string;
    date?: Prisma.DateTimeFilter<"CommandeTimeline"> | Date | string;
    userId?: Prisma.StringNullableFilter<"CommandeTimeline"> | string | null;
    commentaire?: Prisma.StringNullableFilter<"CommandeTimeline"> | string | null;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type CommandeTimelineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CommandeTimelineCountOrderByAggregateInput;
    _max?: Prisma.CommandeTimelineMaxOrderByAggregateInput;
    _min?: Prisma.CommandeTimelineMinOrderByAggregateInput;
};
export type CommandeTimelineScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommandeTimelineScalarWhereWithAggregatesInput | Prisma.CommandeTimelineScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommandeTimelineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommandeTimelineScalarWhereWithAggregatesInput | Prisma.CommandeTimelineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommandeTimeline"> | string;
    commandeId?: Prisma.StringWithAggregatesFilter<"CommandeTimeline"> | string;
    etat?: Prisma.StringWithAggregatesFilter<"CommandeTimeline"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"CommandeTimeline"> | Date | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"CommandeTimeline"> | string | null;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"CommandeTimeline"> | string | null;
};
export type CommandeTimelineCreateInput = {
    id?: string;
    etat: string;
    date?: Date | string;
    commentaire?: string | null;
    commande: Prisma.CommandeCreateNestedOneWithoutTimelineInput;
    user?: Prisma.UserCreateNestedOneWithoutCommandeTimelinesInput;
};
export type CommandeTimelineUncheckedCreateInput = {
    id?: string;
    commandeId: string;
    etat: string;
    date?: Date | string;
    userId?: string | null;
    commentaire?: string | null;
};
export type CommandeTimelineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commande?: Prisma.CommandeUpdateOneRequiredWithoutTimelineNestedInput;
    user?: Prisma.UserUpdateOneWithoutCommandeTimelinesNestedInput;
};
export type CommandeTimelineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeTimelineCreateManyInput = {
    id?: string;
    commandeId: string;
    etat: string;
    date?: Date | string;
    userId?: string | null;
    commentaire?: string | null;
};
export type CommandeTimelineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeTimelineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeTimelineListRelationFilter = {
    every?: Prisma.CommandeTimelineWhereInput;
    some?: Prisma.CommandeTimelineWhereInput;
    none?: Prisma.CommandeTimelineWhereInput;
};
export type CommandeTimelineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CommandeTimelineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type CommandeTimelineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type CommandeTimelineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    etat?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type CommandeTimelineCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutUserInput, Prisma.CommandeTimelineUncheckedCreateWithoutUserInput> | Prisma.CommandeTimelineCreateWithoutUserInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutUserInput | Prisma.CommandeTimelineCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CommandeTimelineCreateManyUserInputEnvelope;
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
};
export type CommandeTimelineUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutUserInput, Prisma.CommandeTimelineUncheckedCreateWithoutUserInput> | Prisma.CommandeTimelineCreateWithoutUserInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutUserInput | Prisma.CommandeTimelineCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CommandeTimelineCreateManyUserInputEnvelope;
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
};
export type CommandeTimelineUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutUserInput, Prisma.CommandeTimelineUncheckedCreateWithoutUserInput> | Prisma.CommandeTimelineCreateWithoutUserInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutUserInput | Prisma.CommandeTimelineCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutUserInput | Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CommandeTimelineCreateManyUserInputEnvelope;
    set?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    disconnect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    delete?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    update?: Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutUserInput | Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CommandeTimelineUpdateManyWithWhereWithoutUserInput | Prisma.CommandeTimelineUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CommandeTimelineScalarWhereInput | Prisma.CommandeTimelineScalarWhereInput[];
};
export type CommandeTimelineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutUserInput, Prisma.CommandeTimelineUncheckedCreateWithoutUserInput> | Prisma.CommandeTimelineCreateWithoutUserInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutUserInput | Prisma.CommandeTimelineCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutUserInput | Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CommandeTimelineCreateManyUserInputEnvelope;
    set?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    disconnect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    delete?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    update?: Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutUserInput | Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CommandeTimelineUpdateManyWithWhereWithoutUserInput | Prisma.CommandeTimelineUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CommandeTimelineScalarWhereInput | Prisma.CommandeTimelineScalarWhereInput[];
};
export type CommandeTimelineCreateNestedManyWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput> | Prisma.CommandeTimelineCreateWithoutCommandeInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput | Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput[];
    createMany?: Prisma.CommandeTimelineCreateManyCommandeInputEnvelope;
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
};
export type CommandeTimelineUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput> | Prisma.CommandeTimelineCreateWithoutCommandeInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput | Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput[];
    createMany?: Prisma.CommandeTimelineCreateManyCommandeInputEnvelope;
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
};
export type CommandeTimelineUpdateManyWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput> | Prisma.CommandeTimelineCreateWithoutCommandeInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput | Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput[];
    upsert?: Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutCommandeInput | Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutCommandeInput[];
    createMany?: Prisma.CommandeTimelineCreateManyCommandeInputEnvelope;
    set?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    disconnect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    delete?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    update?: Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutCommandeInput | Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutCommandeInput[];
    updateMany?: Prisma.CommandeTimelineUpdateManyWithWhereWithoutCommandeInput | Prisma.CommandeTimelineUpdateManyWithWhereWithoutCommandeInput[];
    deleteMany?: Prisma.CommandeTimelineScalarWhereInput | Prisma.CommandeTimelineScalarWhereInput[];
};
export type CommandeTimelineUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput> | Prisma.CommandeTimelineCreateWithoutCommandeInput[] | Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput[];
    connectOrCreate?: Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput | Prisma.CommandeTimelineCreateOrConnectWithoutCommandeInput[];
    upsert?: Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutCommandeInput | Prisma.CommandeTimelineUpsertWithWhereUniqueWithoutCommandeInput[];
    createMany?: Prisma.CommandeTimelineCreateManyCommandeInputEnvelope;
    set?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    disconnect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    delete?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    connect?: Prisma.CommandeTimelineWhereUniqueInput | Prisma.CommandeTimelineWhereUniqueInput[];
    update?: Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutCommandeInput | Prisma.CommandeTimelineUpdateWithWhereUniqueWithoutCommandeInput[];
    updateMany?: Prisma.CommandeTimelineUpdateManyWithWhereWithoutCommandeInput | Prisma.CommandeTimelineUpdateManyWithWhereWithoutCommandeInput[];
    deleteMany?: Prisma.CommandeTimelineScalarWhereInput | Prisma.CommandeTimelineScalarWhereInput[];
};
export type CommandeTimelineCreateWithoutUserInput = {
    id?: string;
    etat: string;
    date?: Date | string;
    commentaire?: string | null;
    commande: Prisma.CommandeCreateNestedOneWithoutTimelineInput;
};
export type CommandeTimelineUncheckedCreateWithoutUserInput = {
    id?: string;
    commandeId: string;
    etat: string;
    date?: Date | string;
    commentaire?: string | null;
};
export type CommandeTimelineCreateOrConnectWithoutUserInput = {
    where: Prisma.CommandeTimelineWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutUserInput, Prisma.CommandeTimelineUncheckedCreateWithoutUserInput>;
};
export type CommandeTimelineCreateManyUserInputEnvelope = {
    data: Prisma.CommandeTimelineCreateManyUserInput | Prisma.CommandeTimelineCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CommandeTimelineUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CommandeTimelineWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommandeTimelineUpdateWithoutUserInput, Prisma.CommandeTimelineUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutUserInput, Prisma.CommandeTimelineUncheckedCreateWithoutUserInput>;
};
export type CommandeTimelineUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CommandeTimelineWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommandeTimelineUpdateWithoutUserInput, Prisma.CommandeTimelineUncheckedUpdateWithoutUserInput>;
};
export type CommandeTimelineUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CommandeTimelineScalarWhereInput;
    data: Prisma.XOR<Prisma.CommandeTimelineUpdateManyMutationInput, Prisma.CommandeTimelineUncheckedUpdateManyWithoutUserInput>;
};
export type CommandeTimelineScalarWhereInput = {
    AND?: Prisma.CommandeTimelineScalarWhereInput | Prisma.CommandeTimelineScalarWhereInput[];
    OR?: Prisma.CommandeTimelineScalarWhereInput[];
    NOT?: Prisma.CommandeTimelineScalarWhereInput | Prisma.CommandeTimelineScalarWhereInput[];
    id?: Prisma.StringFilter<"CommandeTimeline"> | string;
    commandeId?: Prisma.StringFilter<"CommandeTimeline"> | string;
    etat?: Prisma.StringFilter<"CommandeTimeline"> | string;
    date?: Prisma.DateTimeFilter<"CommandeTimeline"> | Date | string;
    userId?: Prisma.StringNullableFilter<"CommandeTimeline"> | string | null;
    commentaire?: Prisma.StringNullableFilter<"CommandeTimeline"> | string | null;
};
export type CommandeTimelineCreateWithoutCommandeInput = {
    id?: string;
    etat: string;
    date?: Date | string;
    commentaire?: string | null;
    user?: Prisma.UserCreateNestedOneWithoutCommandeTimelinesInput;
};
export type CommandeTimelineUncheckedCreateWithoutCommandeInput = {
    id?: string;
    etat: string;
    date?: Date | string;
    userId?: string | null;
    commentaire?: string | null;
};
export type CommandeTimelineCreateOrConnectWithoutCommandeInput = {
    where: Prisma.CommandeTimelineWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput>;
};
export type CommandeTimelineCreateManyCommandeInputEnvelope = {
    data: Prisma.CommandeTimelineCreateManyCommandeInput | Prisma.CommandeTimelineCreateManyCommandeInput[];
    skipDuplicates?: boolean;
};
export type CommandeTimelineUpsertWithWhereUniqueWithoutCommandeInput = {
    where: Prisma.CommandeTimelineWhereUniqueInput;
    update: Prisma.XOR<Prisma.CommandeTimelineUpdateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedUpdateWithoutCommandeInput>;
    create: Prisma.XOR<Prisma.CommandeTimelineCreateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedCreateWithoutCommandeInput>;
};
export type CommandeTimelineUpdateWithWhereUniqueWithoutCommandeInput = {
    where: Prisma.CommandeTimelineWhereUniqueInput;
    data: Prisma.XOR<Prisma.CommandeTimelineUpdateWithoutCommandeInput, Prisma.CommandeTimelineUncheckedUpdateWithoutCommandeInput>;
};
export type CommandeTimelineUpdateManyWithWhereWithoutCommandeInput = {
    where: Prisma.CommandeTimelineScalarWhereInput;
    data: Prisma.XOR<Prisma.CommandeTimelineUpdateManyMutationInput, Prisma.CommandeTimelineUncheckedUpdateManyWithoutCommandeInput>;
};
export type CommandeTimelineCreateManyUserInput = {
    id?: string;
    commandeId: string;
    etat: string;
    date?: Date | string;
    commentaire?: string | null;
};
export type CommandeTimelineUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commande?: Prisma.CommandeUpdateOneRequiredWithoutTimelineNestedInput;
};
export type CommandeTimelineUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeTimelineUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeTimelineCreateManyCommandeInput = {
    id?: string;
    etat: string;
    date?: Date | string;
    userId?: string | null;
    commentaire?: string | null;
};
export type CommandeTimelineUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneWithoutCommandeTimelinesNestedInput;
};
export type CommandeTimelineUncheckedUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeTimelineUncheckedUpdateManyWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    etat?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommandeTimelineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commandeId?: boolean;
    etat?: boolean;
    date?: boolean;
    userId?: boolean;
    commentaire?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.CommandeTimeline$userArgs<ExtArgs>;
}, ExtArgs["result"]["commandeTimeline"]>;
export type CommandeTimelineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commandeId?: boolean;
    etat?: boolean;
    date?: boolean;
    userId?: boolean;
    commentaire?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.CommandeTimeline$userArgs<ExtArgs>;
}, ExtArgs["result"]["commandeTimeline"]>;
export type CommandeTimelineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commandeId?: boolean;
    etat?: boolean;
    date?: boolean;
    userId?: boolean;
    commentaire?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.CommandeTimeline$userArgs<ExtArgs>;
}, ExtArgs["result"]["commandeTimeline"]>;
export type CommandeTimelineSelectScalar = {
    id?: boolean;
    commandeId?: boolean;
    etat?: boolean;
    date?: boolean;
    userId?: boolean;
    commentaire?: boolean;
};
export type CommandeTimelineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "commandeId" | "etat" | "date" | "userId" | "commentaire", ExtArgs["result"]["commandeTimeline"]>;
export type CommandeTimelineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.CommandeTimeline$userArgs<ExtArgs>;
};
export type CommandeTimelineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.CommandeTimeline$userArgs<ExtArgs>;
};
export type CommandeTimelineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.CommandeTimeline$userArgs<ExtArgs>;
};
export type $CommandeTimelinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommandeTimeline";
    objects: {
        commande: Prisma.$CommandePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        commandeId: string;
        etat: string;
        date: Date;
        userId: string | null;
        commentaire: string | null;
    }, ExtArgs["result"]["commandeTimeline"]>;
    composites: {};
};
export type CommandeTimelineGetPayload<S extends boolean | null | undefined | CommandeTimelineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload, S>;
export type CommandeTimelineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommandeTimelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommandeTimelineCountAggregateInputType | true;
};
export interface CommandeTimelineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommandeTimeline'];
        meta: {
            name: 'CommandeTimeline';
        };
    };
    /**
     * Find zero or one CommandeTimeline that matches the filter.
     * @param {CommandeTimelineFindUniqueArgs} args - Arguments to find a CommandeTimeline
     * @example
     * // Get one CommandeTimeline
     * const commandeTimeline = await prisma.commandeTimeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeTimelineFindUniqueArgs>(args: Prisma.SelectSubset<T, CommandeTimelineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CommandeTimeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeTimelineFindUniqueOrThrowArgs} args - Arguments to find a CommandeTimeline
     * @example
     * // Get one CommandeTimeline
     * const commandeTimeline = await prisma.commandeTimeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeTimelineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommandeTimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommandeTimeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeTimelineFindFirstArgs} args - Arguments to find a CommandeTimeline
     * @example
     * // Get one CommandeTimeline
     * const commandeTimeline = await prisma.commandeTimeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeTimelineFindFirstArgs>(args?: Prisma.SelectSubset<T, CommandeTimelineFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommandeTimeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeTimelineFindFirstOrThrowArgs} args - Arguments to find a CommandeTimeline
     * @example
     * // Get one CommandeTimeline
     * const commandeTimeline = await prisma.commandeTimeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeTimelineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommandeTimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CommandeTimelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeTimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommandeTimelines
     * const commandeTimelines = await prisma.commandeTimeline.findMany()
     *
     * // Get first 10 CommandeTimelines
     * const commandeTimelines = await prisma.commandeTimeline.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commandeTimelineWithIdOnly = await prisma.commandeTimeline.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommandeTimelineFindManyArgs>(args?: Prisma.SelectSubset<T, CommandeTimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CommandeTimeline.
     * @param {CommandeTimelineCreateArgs} args - Arguments to create a CommandeTimeline.
     * @example
     * // Create one CommandeTimeline
     * const CommandeTimeline = await prisma.commandeTimeline.create({
     *   data: {
     *     // ... data to create a CommandeTimeline
     *   }
     * })
     *
     */
    create<T extends CommandeTimelineCreateArgs>(args: Prisma.SelectSubset<T, CommandeTimelineCreateArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CommandeTimelines.
     * @param {CommandeTimelineCreateManyArgs} args - Arguments to create many CommandeTimelines.
     * @example
     * // Create many CommandeTimelines
     * const commandeTimeline = await prisma.commandeTimeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommandeTimelineCreateManyArgs>(args?: Prisma.SelectSubset<T, CommandeTimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CommandeTimelines and returns the data saved in the database.
     * @param {CommandeTimelineCreateManyAndReturnArgs} args - Arguments to create many CommandeTimelines.
     * @example
     * // Create many CommandeTimelines
     * const commandeTimeline = await prisma.commandeTimeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CommandeTimelines and only return the `id`
     * const commandeTimelineWithIdOnly = await prisma.commandeTimeline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommandeTimelineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommandeTimelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CommandeTimeline.
     * @param {CommandeTimelineDeleteArgs} args - Arguments to delete one CommandeTimeline.
     * @example
     * // Delete one CommandeTimeline
     * const CommandeTimeline = await prisma.commandeTimeline.delete({
     *   where: {
     *     // ... filter to delete one CommandeTimeline
     *   }
     * })
     *
     */
    delete<T extends CommandeTimelineDeleteArgs>(args: Prisma.SelectSubset<T, CommandeTimelineDeleteArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CommandeTimeline.
     * @param {CommandeTimelineUpdateArgs} args - Arguments to update one CommandeTimeline.
     * @example
     * // Update one CommandeTimeline
     * const commandeTimeline = await prisma.commandeTimeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommandeTimelineUpdateArgs>(args: Prisma.SelectSubset<T, CommandeTimelineUpdateArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CommandeTimelines.
     * @param {CommandeTimelineDeleteManyArgs} args - Arguments to filter CommandeTimelines to delete.
     * @example
     * // Delete a few CommandeTimelines
     * const { count } = await prisma.commandeTimeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommandeTimelineDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommandeTimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommandeTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeTimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommandeTimelines
     * const commandeTimeline = await prisma.commandeTimeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommandeTimelineUpdateManyArgs>(args: Prisma.SelectSubset<T, CommandeTimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommandeTimelines and returns the data updated in the database.
     * @param {CommandeTimelineUpdateManyAndReturnArgs} args - Arguments to update many CommandeTimelines.
     * @example
     * // Update many CommandeTimelines
     * const commandeTimeline = await prisma.commandeTimeline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CommandeTimelines and only return the `id`
     * const commandeTimelineWithIdOnly = await prisma.commandeTimeline.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommandeTimelineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommandeTimelineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CommandeTimeline.
     * @param {CommandeTimelineUpsertArgs} args - Arguments to update or create a CommandeTimeline.
     * @example
     * // Update or create a CommandeTimeline
     * const commandeTimeline = await prisma.commandeTimeline.upsert({
     *   create: {
     *     // ... data to create a CommandeTimeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommandeTimeline we want to update
     *   }
     * })
     */
    upsert<T extends CommandeTimelineUpsertArgs>(args: Prisma.SelectSubset<T, CommandeTimelineUpsertArgs<ExtArgs>>): Prisma.Prisma__CommandeTimelineClient<runtime.Types.Result.GetResult<Prisma.$CommandeTimelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CommandeTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeTimelineCountArgs} args - Arguments to filter CommandeTimelines to count.
     * @example
     * // Count the number of CommandeTimelines
     * const count = await prisma.commandeTimeline.count({
     *   where: {
     *     // ... the filter for the CommandeTimelines we want to count
     *   }
     * })
    **/
    count<T extends CommandeTimelineCountArgs>(args?: Prisma.Subset<T, CommandeTimelineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommandeTimelineCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CommandeTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeTimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeTimelineAggregateArgs>(args: Prisma.Subset<T, CommandeTimelineAggregateArgs>): Prisma.PrismaPromise<GetCommandeTimelineAggregateType<T>>;
    /**
     * Group by CommandeTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeTimelineGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommandeTimelineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommandeTimelineGroupByArgs['orderBy'];
    } : {
        orderBy?: CommandeTimelineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommandeTimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CommandeTimeline model
     */
    readonly fields: CommandeTimelineFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CommandeTimeline.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommandeTimelineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commande<T extends Prisma.CommandeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommandeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.CommandeTimeline$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommandeTimeline$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CommandeTimeline model
 */
export interface CommandeTimelineFieldRefs {
    readonly id: Prisma.FieldRef<"CommandeTimeline", 'String'>;
    readonly commandeId: Prisma.FieldRef<"CommandeTimeline", 'String'>;
    readonly etat: Prisma.FieldRef<"CommandeTimeline", 'String'>;
    readonly date: Prisma.FieldRef<"CommandeTimeline", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"CommandeTimeline", 'String'>;
    readonly commentaire: Prisma.FieldRef<"CommandeTimeline", 'String'>;
}
/**
 * CommandeTimeline findUnique
 */
export type CommandeTimelineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeTimeline to fetch.
     */
    where: Prisma.CommandeTimelineWhereUniqueInput;
};
/**
 * CommandeTimeline findUniqueOrThrow
 */
export type CommandeTimelineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeTimeline to fetch.
     */
    where: Prisma.CommandeTimelineWhereUniqueInput;
};
/**
 * CommandeTimeline findFirst
 */
export type CommandeTimelineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeTimeline to fetch.
     */
    where?: Prisma.CommandeTimelineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeTimelines to fetch.
     */
    orderBy?: Prisma.CommandeTimelineOrderByWithRelationInput | Prisma.CommandeTimelineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommandeTimelines.
     */
    cursor?: Prisma.CommandeTimelineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeTimelines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeTimelines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandeTimelines.
     */
    distinct?: Prisma.CommandeTimelineScalarFieldEnum | Prisma.CommandeTimelineScalarFieldEnum[];
};
/**
 * CommandeTimeline findFirstOrThrow
 */
export type CommandeTimelineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeTimeline to fetch.
     */
    where?: Prisma.CommandeTimelineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeTimelines to fetch.
     */
    orderBy?: Prisma.CommandeTimelineOrderByWithRelationInput | Prisma.CommandeTimelineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommandeTimelines.
     */
    cursor?: Prisma.CommandeTimelineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeTimelines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeTimelines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandeTimelines.
     */
    distinct?: Prisma.CommandeTimelineScalarFieldEnum | Prisma.CommandeTimelineScalarFieldEnum[];
};
/**
 * CommandeTimeline findMany
 */
export type CommandeTimelineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeTimelines to fetch.
     */
    where?: Prisma.CommandeTimelineWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeTimelines to fetch.
     */
    orderBy?: Prisma.CommandeTimelineOrderByWithRelationInput | Prisma.CommandeTimelineOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CommandeTimelines.
     */
    cursor?: Prisma.CommandeTimelineWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeTimelines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeTimelines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandeTimelines.
     */
    distinct?: Prisma.CommandeTimelineScalarFieldEnum | Prisma.CommandeTimelineScalarFieldEnum[];
};
/**
 * CommandeTimeline create
 */
export type CommandeTimelineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CommandeTimeline.
     */
    data: Prisma.XOR<Prisma.CommandeTimelineCreateInput, Prisma.CommandeTimelineUncheckedCreateInput>;
};
/**
 * CommandeTimeline createMany
 */
export type CommandeTimelineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommandeTimelines.
     */
    data: Prisma.CommandeTimelineCreateManyInput | Prisma.CommandeTimelineCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CommandeTimeline createManyAndReturn
 */
export type CommandeTimelineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeTimeline
     */
    select?: Prisma.CommandeTimelineSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandeTimeline
     */
    omit?: Prisma.CommandeTimelineOmit<ExtArgs> | null;
    /**
     * The data used to create many CommandeTimelines.
     */
    data: Prisma.CommandeTimelineCreateManyInput | Prisma.CommandeTimelineCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeTimelineIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CommandeTimeline update
 */
export type CommandeTimelineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CommandeTimeline.
     */
    data: Prisma.XOR<Prisma.CommandeTimelineUpdateInput, Prisma.CommandeTimelineUncheckedUpdateInput>;
    /**
     * Choose, which CommandeTimeline to update.
     */
    where: Prisma.CommandeTimelineWhereUniqueInput;
};
/**
 * CommandeTimeline updateMany
 */
export type CommandeTimelineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CommandeTimelines.
     */
    data: Prisma.XOR<Prisma.CommandeTimelineUpdateManyMutationInput, Prisma.CommandeTimelineUncheckedUpdateManyInput>;
    /**
     * Filter which CommandeTimelines to update
     */
    where?: Prisma.CommandeTimelineWhereInput;
    /**
     * Limit how many CommandeTimelines to update.
     */
    limit?: number;
};
/**
 * CommandeTimeline updateManyAndReturn
 */
export type CommandeTimelineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeTimeline
     */
    select?: Prisma.CommandeTimelineSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandeTimeline
     */
    omit?: Prisma.CommandeTimelineOmit<ExtArgs> | null;
    /**
     * The data used to update CommandeTimelines.
     */
    data: Prisma.XOR<Prisma.CommandeTimelineUpdateManyMutationInput, Prisma.CommandeTimelineUncheckedUpdateManyInput>;
    /**
     * Filter which CommandeTimelines to update
     */
    where?: Prisma.CommandeTimelineWhereInput;
    /**
     * Limit how many CommandeTimelines to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeTimelineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CommandeTimeline upsert
 */
export type CommandeTimelineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CommandeTimeline to update in case it exists.
     */
    where: Prisma.CommandeTimelineWhereUniqueInput;
    /**
     * In case the CommandeTimeline found by the `where` argument doesn't exist, create a new CommandeTimeline with this data.
     */
    create: Prisma.XOR<Prisma.CommandeTimelineCreateInput, Prisma.CommandeTimelineUncheckedCreateInput>;
    /**
     * In case the CommandeTimeline was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommandeTimelineUpdateInput, Prisma.CommandeTimelineUncheckedUpdateInput>;
};
/**
 * CommandeTimeline delete
 */
export type CommandeTimelineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CommandeTimeline to delete.
     */
    where: Prisma.CommandeTimelineWhereUniqueInput;
};
/**
 * CommandeTimeline deleteMany
 */
export type CommandeTimelineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommandeTimelines to delete
     */
    where?: Prisma.CommandeTimelineWhereInput;
    /**
     * Limit how many CommandeTimelines to delete.
     */
    limit?: number;
};
/**
 * CommandeTimeline.user
 */
export type CommandeTimeline$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * CommandeTimeline without action
 */
export type CommandeTimelineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=CommandeTimeline.d.ts.map