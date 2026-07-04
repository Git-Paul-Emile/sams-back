import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CommandeRentabilite
 *
 */
export type CommandeRentabiliteModel = runtime.Types.Result.DefaultSelection<Prisma.$CommandeRentabilitePayload>;
export type AggregateCommandeRentabilite = {
    _count: CommandeRentabiliteCountAggregateOutputType | null;
    _avg: CommandeRentabiliteAvgAggregateOutputType | null;
    _sum: CommandeRentabiliteSumAggregateOutputType | null;
    _min: CommandeRentabiliteMinAggregateOutputType | null;
    _max: CommandeRentabiliteMaxAggregateOutputType | null;
};
export type CommandeRentabiliteAvgAggregateOutputType = {
    montant: number | null;
    coutProduits: number | null;
    marge: number | null;
    tauxMarge: number | null;
};
export type CommandeRentabiliteSumAggregateOutputType = {
    montant: number | null;
    coutProduits: number | null;
    marge: number | null;
    tauxMarge: number | null;
};
export type CommandeRentabiliteMinAggregateOutputType = {
    id: string | null;
    commandeId: string | null;
    montant: number | null;
    coutProduits: number | null;
    marge: number | null;
    tauxMarge: number | null;
    niveau: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CommandeRentabiliteMaxAggregateOutputType = {
    id: string | null;
    commandeId: string | null;
    montant: number | null;
    coutProduits: number | null;
    marge: number | null;
    tauxMarge: number | null;
    niveau: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CommandeRentabiliteCountAggregateOutputType = {
    id: number;
    commandeId: number;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CommandeRentabiliteAvgAggregateInputType = {
    montant?: true;
    coutProduits?: true;
    marge?: true;
    tauxMarge?: true;
};
export type CommandeRentabiliteSumAggregateInputType = {
    montant?: true;
    coutProduits?: true;
    marge?: true;
    tauxMarge?: true;
};
export type CommandeRentabiliteMinAggregateInputType = {
    id?: true;
    commandeId?: true;
    montant?: true;
    coutProduits?: true;
    marge?: true;
    tauxMarge?: true;
    niveau?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CommandeRentabiliteMaxAggregateInputType = {
    id?: true;
    commandeId?: true;
    montant?: true;
    coutProduits?: true;
    marge?: true;
    tauxMarge?: true;
    niveau?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CommandeRentabiliteCountAggregateInputType = {
    id?: true;
    commandeId?: true;
    montant?: true;
    coutProduits?: true;
    marge?: true;
    tauxMarge?: true;
    niveau?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CommandeRentabiliteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommandeRentabilite to aggregate.
     */
    where?: Prisma.CommandeRentabiliteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeRentabilites to fetch.
     */
    orderBy?: Prisma.CommandeRentabiliteOrderByWithRelationInput | Prisma.CommandeRentabiliteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommandeRentabiliteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeRentabilites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeRentabilites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CommandeRentabilites
    **/
    _count?: true | CommandeRentabiliteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CommandeRentabiliteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CommandeRentabiliteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommandeRentabiliteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommandeRentabiliteMaxAggregateInputType;
};
export type GetCommandeRentabiliteAggregateType<T extends CommandeRentabiliteAggregateArgs> = {
    [P in keyof T & keyof AggregateCommandeRentabilite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommandeRentabilite[P]> : Prisma.GetScalarType<T[P], AggregateCommandeRentabilite[P]>;
};
export type CommandeRentabiliteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandeRentabiliteWhereInput;
    orderBy?: Prisma.CommandeRentabiliteOrderByWithAggregationInput | Prisma.CommandeRentabiliteOrderByWithAggregationInput[];
    by: Prisma.CommandeRentabiliteScalarFieldEnum[] | Prisma.CommandeRentabiliteScalarFieldEnum;
    having?: Prisma.CommandeRentabiliteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommandeRentabiliteCountAggregateInputType | true;
    _avg?: CommandeRentabiliteAvgAggregateInputType;
    _sum?: CommandeRentabiliteSumAggregateInputType;
    _min?: CommandeRentabiliteMinAggregateInputType;
    _max?: CommandeRentabiliteMaxAggregateInputType;
};
export type CommandeRentabiliteGroupByOutputType = {
    id: string;
    commandeId: string;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CommandeRentabiliteCountAggregateOutputType | null;
    _avg: CommandeRentabiliteAvgAggregateOutputType | null;
    _sum: CommandeRentabiliteSumAggregateOutputType | null;
    _min: CommandeRentabiliteMinAggregateOutputType | null;
    _max: CommandeRentabiliteMaxAggregateOutputType | null;
};
export type GetCommandeRentabiliteGroupByPayload<T extends CommandeRentabiliteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommandeRentabiliteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommandeRentabiliteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommandeRentabiliteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommandeRentabiliteGroupByOutputType[P]>;
}>>;
export type CommandeRentabiliteWhereInput = {
    AND?: Prisma.CommandeRentabiliteWhereInput | Prisma.CommandeRentabiliteWhereInput[];
    OR?: Prisma.CommandeRentabiliteWhereInput[];
    NOT?: Prisma.CommandeRentabiliteWhereInput | Prisma.CommandeRentabiliteWhereInput[];
    id?: Prisma.StringFilter<"CommandeRentabilite"> | string;
    commandeId?: Prisma.StringFilter<"CommandeRentabilite"> | string;
    montant?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    coutProduits?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    marge?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    tauxMarge?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    niveau?: Prisma.StringFilter<"CommandeRentabilite"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommandeRentabilite"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CommandeRentabilite"> | Date | string;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
};
export type CommandeRentabiliteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    coutProduits?: Prisma.SortOrder;
    marge?: Prisma.SortOrder;
    tauxMarge?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    commande?: Prisma.CommandeOrderByWithRelationInput;
};
export type CommandeRentabiliteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    commandeId?: string;
    AND?: Prisma.CommandeRentabiliteWhereInput | Prisma.CommandeRentabiliteWhereInput[];
    OR?: Prisma.CommandeRentabiliteWhereInput[];
    NOT?: Prisma.CommandeRentabiliteWhereInput | Prisma.CommandeRentabiliteWhereInput[];
    montant?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    coutProduits?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    marge?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    tauxMarge?: Prisma.FloatFilter<"CommandeRentabilite"> | number;
    niveau?: Prisma.StringFilter<"CommandeRentabilite"> | string;
    createdAt?: Prisma.DateTimeFilter<"CommandeRentabilite"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CommandeRentabilite"> | Date | string;
    commande?: Prisma.XOR<Prisma.CommandeScalarRelationFilter, Prisma.CommandeWhereInput>;
}, "id" | "commandeId">;
export type CommandeRentabiliteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    coutProduits?: Prisma.SortOrder;
    marge?: Prisma.SortOrder;
    tauxMarge?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CommandeRentabiliteCountOrderByAggregateInput;
    _avg?: Prisma.CommandeRentabiliteAvgOrderByAggregateInput;
    _max?: Prisma.CommandeRentabiliteMaxOrderByAggregateInput;
    _min?: Prisma.CommandeRentabiliteMinOrderByAggregateInput;
    _sum?: Prisma.CommandeRentabiliteSumOrderByAggregateInput;
};
export type CommandeRentabiliteScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommandeRentabiliteScalarWhereWithAggregatesInput | Prisma.CommandeRentabiliteScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommandeRentabiliteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommandeRentabiliteScalarWhereWithAggregatesInput | Prisma.CommandeRentabiliteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommandeRentabilite"> | string;
    commandeId?: Prisma.StringWithAggregatesFilter<"CommandeRentabilite"> | string;
    montant?: Prisma.FloatWithAggregatesFilter<"CommandeRentabilite"> | number;
    coutProduits?: Prisma.FloatWithAggregatesFilter<"CommandeRentabilite"> | number;
    marge?: Prisma.FloatWithAggregatesFilter<"CommandeRentabilite"> | number;
    tauxMarge?: Prisma.FloatWithAggregatesFilter<"CommandeRentabilite"> | number;
    niveau?: Prisma.StringWithAggregatesFilter<"CommandeRentabilite"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CommandeRentabilite"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CommandeRentabilite"> | Date | string;
};
export type CommandeRentabiliteCreateInput = {
    id?: string;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    commande: Prisma.CommandeCreateNestedOneWithoutRentabiliteInput;
};
export type CommandeRentabiliteUncheckedCreateInput = {
    id?: string;
    commandeId: string;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommandeRentabiliteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutProduits?: Prisma.FloatFieldUpdateOperationsInput | number;
    marge?: Prisma.FloatFieldUpdateOperationsInput | number;
    tauxMarge?: Prisma.FloatFieldUpdateOperationsInput | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    commande?: Prisma.CommandeUpdateOneRequiredWithoutRentabiliteNestedInput;
};
export type CommandeRentabiliteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutProduits?: Prisma.FloatFieldUpdateOperationsInput | number;
    marge?: Prisma.FloatFieldUpdateOperationsInput | number;
    tauxMarge?: Prisma.FloatFieldUpdateOperationsInput | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeRentabiliteCreateManyInput = {
    id?: string;
    commandeId: string;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommandeRentabiliteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutProduits?: Prisma.FloatFieldUpdateOperationsInput | number;
    marge?: Prisma.FloatFieldUpdateOperationsInput | number;
    tauxMarge?: Prisma.FloatFieldUpdateOperationsInput | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeRentabiliteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    commandeId?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutProduits?: Prisma.FloatFieldUpdateOperationsInput | number;
    marge?: Prisma.FloatFieldUpdateOperationsInput | number;
    tauxMarge?: Prisma.FloatFieldUpdateOperationsInput | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeRentabiliteNullableScalarRelationFilter = {
    is?: Prisma.CommandeRentabiliteWhereInput | null;
    isNot?: Prisma.CommandeRentabiliteWhereInput | null;
};
export type CommandeRentabiliteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    coutProduits?: Prisma.SortOrder;
    marge?: Prisma.SortOrder;
    tauxMarge?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommandeRentabiliteAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    coutProduits?: Prisma.SortOrder;
    marge?: Prisma.SortOrder;
    tauxMarge?: Prisma.SortOrder;
};
export type CommandeRentabiliteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    coutProduits?: Prisma.SortOrder;
    marge?: Prisma.SortOrder;
    tauxMarge?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommandeRentabiliteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    commandeId?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    coutProduits?: Prisma.SortOrder;
    marge?: Prisma.SortOrder;
    tauxMarge?: Prisma.SortOrder;
    niveau?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CommandeRentabiliteSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
    coutProduits?: Prisma.SortOrder;
    marge?: Prisma.SortOrder;
    tauxMarge?: Prisma.SortOrder;
};
export type CommandeRentabiliteCreateNestedOneWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.CommandeRentabiliteCreateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.CommandeRentabiliteCreateOrConnectWithoutCommandeInput;
    connect?: Prisma.CommandeRentabiliteWhereUniqueInput;
};
export type CommandeRentabiliteUncheckedCreateNestedOneWithoutCommandeInput = {
    create?: Prisma.XOR<Prisma.CommandeRentabiliteCreateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.CommandeRentabiliteCreateOrConnectWithoutCommandeInput;
    connect?: Prisma.CommandeRentabiliteWhereUniqueInput;
};
export type CommandeRentabiliteUpdateOneWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeRentabiliteCreateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.CommandeRentabiliteCreateOrConnectWithoutCommandeInput;
    upsert?: Prisma.CommandeRentabiliteUpsertWithoutCommandeInput;
    disconnect?: Prisma.CommandeRentabiliteWhereInput | boolean;
    delete?: Prisma.CommandeRentabiliteWhereInput | boolean;
    connect?: Prisma.CommandeRentabiliteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeRentabiliteUpdateToOneWithWhereWithoutCommandeInput, Prisma.CommandeRentabiliteUpdateWithoutCommandeInput>, Prisma.CommandeRentabiliteUncheckedUpdateWithoutCommandeInput>;
};
export type CommandeRentabiliteUncheckedUpdateOneWithoutCommandeNestedInput = {
    create?: Prisma.XOR<Prisma.CommandeRentabiliteCreateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedCreateWithoutCommandeInput>;
    connectOrCreate?: Prisma.CommandeRentabiliteCreateOrConnectWithoutCommandeInput;
    upsert?: Prisma.CommandeRentabiliteUpsertWithoutCommandeInput;
    disconnect?: Prisma.CommandeRentabiliteWhereInput | boolean;
    delete?: Prisma.CommandeRentabiliteWhereInput | boolean;
    connect?: Prisma.CommandeRentabiliteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CommandeRentabiliteUpdateToOneWithWhereWithoutCommandeInput, Prisma.CommandeRentabiliteUpdateWithoutCommandeInput>, Prisma.CommandeRentabiliteUncheckedUpdateWithoutCommandeInput>;
};
export type CommandeRentabiliteCreateWithoutCommandeInput = {
    id?: string;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommandeRentabiliteUncheckedCreateWithoutCommandeInput = {
    id?: string;
    montant: number;
    coutProduits: number;
    marge: number;
    tauxMarge: number;
    niveau: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CommandeRentabiliteCreateOrConnectWithoutCommandeInput = {
    where: Prisma.CommandeRentabiliteWhereUniqueInput;
    create: Prisma.XOR<Prisma.CommandeRentabiliteCreateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedCreateWithoutCommandeInput>;
};
export type CommandeRentabiliteUpsertWithoutCommandeInput = {
    update: Prisma.XOR<Prisma.CommandeRentabiliteUpdateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedUpdateWithoutCommandeInput>;
    create: Prisma.XOR<Prisma.CommandeRentabiliteCreateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedCreateWithoutCommandeInput>;
    where?: Prisma.CommandeRentabiliteWhereInput;
};
export type CommandeRentabiliteUpdateToOneWithWhereWithoutCommandeInput = {
    where?: Prisma.CommandeRentabiliteWhereInput;
    data: Prisma.XOR<Prisma.CommandeRentabiliteUpdateWithoutCommandeInput, Prisma.CommandeRentabiliteUncheckedUpdateWithoutCommandeInput>;
};
export type CommandeRentabiliteUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutProduits?: Prisma.FloatFieldUpdateOperationsInput | number;
    marge?: Prisma.FloatFieldUpdateOperationsInput | number;
    tauxMarge?: Prisma.FloatFieldUpdateOperationsInput | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeRentabiliteUncheckedUpdateWithoutCommandeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.FloatFieldUpdateOperationsInput | number;
    coutProduits?: Prisma.FloatFieldUpdateOperationsInput | number;
    marge?: Prisma.FloatFieldUpdateOperationsInput | number;
    tauxMarge?: Prisma.FloatFieldUpdateOperationsInput | number;
    niveau?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandeRentabiliteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commandeId?: boolean;
    montant?: boolean;
    coutProduits?: boolean;
    marge?: boolean;
    tauxMarge?: boolean;
    niveau?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commandeRentabilite"]>;
export type CommandeRentabiliteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commandeId?: boolean;
    montant?: boolean;
    coutProduits?: boolean;
    marge?: boolean;
    tauxMarge?: boolean;
    niveau?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commandeRentabilite"]>;
export type CommandeRentabiliteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    commandeId?: boolean;
    montant?: boolean;
    coutProduits?: boolean;
    marge?: boolean;
    tauxMarge?: boolean;
    niveau?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["commandeRentabilite"]>;
export type CommandeRentabiliteSelectScalar = {
    id?: boolean;
    commandeId?: boolean;
    montant?: boolean;
    coutProduits?: boolean;
    marge?: boolean;
    tauxMarge?: boolean;
    niveau?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CommandeRentabiliteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "commandeId" | "montant" | "coutProduits" | "marge" | "tauxMarge" | "niveau" | "createdAt" | "updatedAt", ExtArgs["result"]["commandeRentabilite"]>;
export type CommandeRentabiliteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
};
export type CommandeRentabiliteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
};
export type CommandeRentabiliteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    commande?: boolean | Prisma.CommandeDefaultArgs<ExtArgs>;
};
export type $CommandeRentabilitePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommandeRentabilite";
    objects: {
        commande: Prisma.$CommandePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        commandeId: string;
        montant: number;
        coutProduits: number;
        marge: number;
        tauxMarge: number;
        niveau: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["commandeRentabilite"]>;
    composites: {};
};
export type CommandeRentabiliteGetPayload<S extends boolean | null | undefined | CommandeRentabiliteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload, S>;
export type CommandeRentabiliteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommandeRentabiliteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommandeRentabiliteCountAggregateInputType | true;
};
export interface CommandeRentabiliteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommandeRentabilite'];
        meta: {
            name: 'CommandeRentabilite';
        };
    };
    /**
     * Find zero or one CommandeRentabilite that matches the filter.
     * @param {CommandeRentabiliteFindUniqueArgs} args - Arguments to find a CommandeRentabilite
     * @example
     * // Get one CommandeRentabilite
     * const commandeRentabilite = await prisma.commandeRentabilite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeRentabiliteFindUniqueArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CommandeRentabilite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeRentabiliteFindUniqueOrThrowArgs} args - Arguments to find a CommandeRentabilite
     * @example
     * // Get one CommandeRentabilite
     * const commandeRentabilite = await prisma.commandeRentabilite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeRentabiliteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommandeRentabilite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeRentabiliteFindFirstArgs} args - Arguments to find a CommandeRentabilite
     * @example
     * // Get one CommandeRentabilite
     * const commandeRentabilite = await prisma.commandeRentabilite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeRentabiliteFindFirstArgs>(args?: Prisma.SelectSubset<T, CommandeRentabiliteFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommandeRentabilite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeRentabiliteFindFirstOrThrowArgs} args - Arguments to find a CommandeRentabilite
     * @example
     * // Get one CommandeRentabilite
     * const commandeRentabilite = await prisma.commandeRentabilite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeRentabiliteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommandeRentabiliteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CommandeRentabilites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeRentabiliteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommandeRentabilites
     * const commandeRentabilites = await prisma.commandeRentabilite.findMany()
     *
     * // Get first 10 CommandeRentabilites
     * const commandeRentabilites = await prisma.commandeRentabilite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commandeRentabiliteWithIdOnly = await prisma.commandeRentabilite.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommandeRentabiliteFindManyArgs>(args?: Prisma.SelectSubset<T, CommandeRentabiliteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CommandeRentabilite.
     * @param {CommandeRentabiliteCreateArgs} args - Arguments to create a CommandeRentabilite.
     * @example
     * // Create one CommandeRentabilite
     * const CommandeRentabilite = await prisma.commandeRentabilite.create({
     *   data: {
     *     // ... data to create a CommandeRentabilite
     *   }
     * })
     *
     */
    create<T extends CommandeRentabiliteCreateArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteCreateArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CommandeRentabilites.
     * @param {CommandeRentabiliteCreateManyArgs} args - Arguments to create many CommandeRentabilites.
     * @example
     * // Create many CommandeRentabilites
     * const commandeRentabilite = await prisma.commandeRentabilite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommandeRentabiliteCreateManyArgs>(args?: Prisma.SelectSubset<T, CommandeRentabiliteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CommandeRentabilites and returns the data saved in the database.
     * @param {CommandeRentabiliteCreateManyAndReturnArgs} args - Arguments to create many CommandeRentabilites.
     * @example
     * // Create many CommandeRentabilites
     * const commandeRentabilite = await prisma.commandeRentabilite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CommandeRentabilites and only return the `id`
     * const commandeRentabiliteWithIdOnly = await prisma.commandeRentabilite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommandeRentabiliteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommandeRentabiliteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CommandeRentabilite.
     * @param {CommandeRentabiliteDeleteArgs} args - Arguments to delete one CommandeRentabilite.
     * @example
     * // Delete one CommandeRentabilite
     * const CommandeRentabilite = await prisma.commandeRentabilite.delete({
     *   where: {
     *     // ... filter to delete one CommandeRentabilite
     *   }
     * })
     *
     */
    delete<T extends CommandeRentabiliteDeleteArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteDeleteArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CommandeRentabilite.
     * @param {CommandeRentabiliteUpdateArgs} args - Arguments to update one CommandeRentabilite.
     * @example
     * // Update one CommandeRentabilite
     * const commandeRentabilite = await prisma.commandeRentabilite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommandeRentabiliteUpdateArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteUpdateArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CommandeRentabilites.
     * @param {CommandeRentabiliteDeleteManyArgs} args - Arguments to filter CommandeRentabilites to delete.
     * @example
     * // Delete a few CommandeRentabilites
     * const { count } = await prisma.commandeRentabilite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommandeRentabiliteDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommandeRentabiliteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommandeRentabilites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeRentabiliteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommandeRentabilites
     * const commandeRentabilite = await prisma.commandeRentabilite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommandeRentabiliteUpdateManyArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommandeRentabilites and returns the data updated in the database.
     * @param {CommandeRentabiliteUpdateManyAndReturnArgs} args - Arguments to update many CommandeRentabilites.
     * @example
     * // Update many CommandeRentabilites
     * const commandeRentabilite = await prisma.commandeRentabilite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CommandeRentabilites and only return the `id`
     * const commandeRentabiliteWithIdOnly = await prisma.commandeRentabilite.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommandeRentabiliteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CommandeRentabilite.
     * @param {CommandeRentabiliteUpsertArgs} args - Arguments to update or create a CommandeRentabilite.
     * @example
     * // Update or create a CommandeRentabilite
     * const commandeRentabilite = await prisma.commandeRentabilite.upsert({
     *   create: {
     *     // ... data to create a CommandeRentabilite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommandeRentabilite we want to update
     *   }
     * })
     */
    upsert<T extends CommandeRentabiliteUpsertArgs>(args: Prisma.SelectSubset<T, CommandeRentabiliteUpsertArgs<ExtArgs>>): Prisma.Prisma__CommandeRentabiliteClient<runtime.Types.Result.GetResult<Prisma.$CommandeRentabilitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CommandeRentabilites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeRentabiliteCountArgs} args - Arguments to filter CommandeRentabilites to count.
     * @example
     * // Count the number of CommandeRentabilites
     * const count = await prisma.commandeRentabilite.count({
     *   where: {
     *     // ... the filter for the CommandeRentabilites we want to count
     *   }
     * })
    **/
    count<T extends CommandeRentabiliteCountArgs>(args?: Prisma.Subset<T, CommandeRentabiliteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommandeRentabiliteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CommandeRentabilite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeRentabiliteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeRentabiliteAggregateArgs>(args: Prisma.Subset<T, CommandeRentabiliteAggregateArgs>): Prisma.PrismaPromise<GetCommandeRentabiliteAggregateType<T>>;
    /**
     * Group by CommandeRentabilite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeRentabiliteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommandeRentabiliteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommandeRentabiliteGroupByArgs['orderBy'];
    } : {
        orderBy?: CommandeRentabiliteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommandeRentabiliteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeRentabiliteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CommandeRentabilite model
     */
    readonly fields: CommandeRentabiliteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CommandeRentabilite.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommandeRentabiliteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    commande<T extends Prisma.CommandeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CommandeDefaultArgs<ExtArgs>>): Prisma.Prisma__CommandeClient<runtime.Types.Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CommandeRentabilite model
 */
export interface CommandeRentabiliteFieldRefs {
    readonly id: Prisma.FieldRef<"CommandeRentabilite", 'String'>;
    readonly commandeId: Prisma.FieldRef<"CommandeRentabilite", 'String'>;
    readonly montant: Prisma.FieldRef<"CommandeRentabilite", 'Float'>;
    readonly coutProduits: Prisma.FieldRef<"CommandeRentabilite", 'Float'>;
    readonly marge: Prisma.FieldRef<"CommandeRentabilite", 'Float'>;
    readonly tauxMarge: Prisma.FieldRef<"CommandeRentabilite", 'Float'>;
    readonly niveau: Prisma.FieldRef<"CommandeRentabilite", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CommandeRentabilite", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CommandeRentabilite", 'DateTime'>;
}
/**
 * CommandeRentabilite findUnique
 */
export type CommandeRentabiliteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeRentabilite to fetch.
     */
    where: Prisma.CommandeRentabiliteWhereUniqueInput;
};
/**
 * CommandeRentabilite findUniqueOrThrow
 */
export type CommandeRentabiliteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeRentabilite to fetch.
     */
    where: Prisma.CommandeRentabiliteWhereUniqueInput;
};
/**
 * CommandeRentabilite findFirst
 */
export type CommandeRentabiliteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeRentabilite to fetch.
     */
    where?: Prisma.CommandeRentabiliteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeRentabilites to fetch.
     */
    orderBy?: Prisma.CommandeRentabiliteOrderByWithRelationInput | Prisma.CommandeRentabiliteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommandeRentabilites.
     */
    cursor?: Prisma.CommandeRentabiliteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeRentabilites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeRentabilites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandeRentabilites.
     */
    distinct?: Prisma.CommandeRentabiliteScalarFieldEnum | Prisma.CommandeRentabiliteScalarFieldEnum[];
};
/**
 * CommandeRentabilite findFirstOrThrow
 */
export type CommandeRentabiliteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeRentabilite to fetch.
     */
    where?: Prisma.CommandeRentabiliteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeRentabilites to fetch.
     */
    orderBy?: Prisma.CommandeRentabiliteOrderByWithRelationInput | Prisma.CommandeRentabiliteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommandeRentabilites.
     */
    cursor?: Prisma.CommandeRentabiliteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeRentabilites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeRentabilites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandeRentabilites.
     */
    distinct?: Prisma.CommandeRentabiliteScalarFieldEnum | Prisma.CommandeRentabiliteScalarFieldEnum[];
};
/**
 * CommandeRentabilite findMany
 */
export type CommandeRentabiliteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CommandeRentabilites to fetch.
     */
    where?: Prisma.CommandeRentabiliteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandeRentabilites to fetch.
     */
    orderBy?: Prisma.CommandeRentabiliteOrderByWithRelationInput | Prisma.CommandeRentabiliteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CommandeRentabilites.
     */
    cursor?: Prisma.CommandeRentabiliteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandeRentabilites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandeRentabilites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandeRentabilites.
     */
    distinct?: Prisma.CommandeRentabiliteScalarFieldEnum | Prisma.CommandeRentabiliteScalarFieldEnum[];
};
/**
 * CommandeRentabilite create
 */
export type CommandeRentabiliteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CommandeRentabilite.
     */
    data: Prisma.XOR<Prisma.CommandeRentabiliteCreateInput, Prisma.CommandeRentabiliteUncheckedCreateInput>;
};
/**
 * CommandeRentabilite createMany
 */
export type CommandeRentabiliteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommandeRentabilites.
     */
    data: Prisma.CommandeRentabiliteCreateManyInput | Prisma.CommandeRentabiliteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CommandeRentabilite createManyAndReturn
 */
export type CommandeRentabiliteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeRentabilite
     */
    select?: Prisma.CommandeRentabiliteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandeRentabilite
     */
    omit?: Prisma.CommandeRentabiliteOmit<ExtArgs> | null;
    /**
     * The data used to create many CommandeRentabilites.
     */
    data: Prisma.CommandeRentabiliteCreateManyInput | Prisma.CommandeRentabiliteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeRentabiliteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CommandeRentabilite update
 */
export type CommandeRentabiliteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CommandeRentabilite.
     */
    data: Prisma.XOR<Prisma.CommandeRentabiliteUpdateInput, Prisma.CommandeRentabiliteUncheckedUpdateInput>;
    /**
     * Choose, which CommandeRentabilite to update.
     */
    where: Prisma.CommandeRentabiliteWhereUniqueInput;
};
/**
 * CommandeRentabilite updateMany
 */
export type CommandeRentabiliteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CommandeRentabilites.
     */
    data: Prisma.XOR<Prisma.CommandeRentabiliteUpdateManyMutationInput, Prisma.CommandeRentabiliteUncheckedUpdateManyInput>;
    /**
     * Filter which CommandeRentabilites to update
     */
    where?: Prisma.CommandeRentabiliteWhereInput;
    /**
     * Limit how many CommandeRentabilites to update.
     */
    limit?: number;
};
/**
 * CommandeRentabilite updateManyAndReturn
 */
export type CommandeRentabiliteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeRentabilite
     */
    select?: Prisma.CommandeRentabiliteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandeRentabilite
     */
    omit?: Prisma.CommandeRentabiliteOmit<ExtArgs> | null;
    /**
     * The data used to update CommandeRentabilites.
     */
    data: Prisma.XOR<Prisma.CommandeRentabiliteUpdateManyMutationInput, Prisma.CommandeRentabiliteUncheckedUpdateManyInput>;
    /**
     * Filter which CommandeRentabilites to update
     */
    where?: Prisma.CommandeRentabiliteWhereInput;
    /**
     * Limit how many CommandeRentabilites to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommandeRentabiliteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CommandeRentabilite upsert
 */
export type CommandeRentabiliteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CommandeRentabilite to update in case it exists.
     */
    where: Prisma.CommandeRentabiliteWhereUniqueInput;
    /**
     * In case the CommandeRentabilite found by the `where` argument doesn't exist, create a new CommandeRentabilite with this data.
     */
    create: Prisma.XOR<Prisma.CommandeRentabiliteCreateInput, Prisma.CommandeRentabiliteUncheckedCreateInput>;
    /**
     * In case the CommandeRentabilite was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommandeRentabiliteUpdateInput, Prisma.CommandeRentabiliteUncheckedUpdateInput>;
};
/**
 * CommandeRentabilite delete
 */
export type CommandeRentabiliteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CommandeRentabilite to delete.
     */
    where: Prisma.CommandeRentabiliteWhereUniqueInput;
};
/**
 * CommandeRentabilite deleteMany
 */
export type CommandeRentabiliteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommandeRentabilites to delete
     */
    where?: Prisma.CommandeRentabiliteWhereInput;
    /**
     * Limit how many CommandeRentabilites to delete.
     */
    limit?: number;
};
/**
 * CommandeRentabilite without action
 */
export type CommandeRentabiliteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=CommandeRentabilite.d.ts.map