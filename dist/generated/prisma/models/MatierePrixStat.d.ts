import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MatierePrixStat
 *
 */
export type MatierePrixStatModel = runtime.Types.Result.DefaultSelection<Prisma.$MatierePrixStatPayload>;
export type AggregateMatierePrixStat = {
    _count: MatierePrixStatCountAggregateOutputType | null;
    _avg: MatierePrixStatAvgAggregateOutputType | null;
    _sum: MatierePrixStatSumAggregateOutputType | null;
    _min: MatierePrixStatMinAggregateOutputType | null;
    _max: MatierePrixStatMaxAggregateOutputType | null;
};
export type MatierePrixStatAvgAggregateOutputType = {
    dernierPrix: number | null;
    prixMoyen: number | null;
    evolutionPct: number | null;
};
export type MatierePrixStatSumAggregateOutputType = {
    dernierPrix: number | null;
    prixMoyen: number | null;
    evolutionPct: number | null;
};
export type MatierePrixStatMinAggregateOutputType = {
    id: string | null;
    matiereId: string | null;
    dernierPrix: number | null;
    prixMoyen: number | null;
    evolutionPct: number | null;
    updatedAt: Date | null;
};
export type MatierePrixStatMaxAggregateOutputType = {
    id: string | null;
    matiereId: string | null;
    dernierPrix: number | null;
    prixMoyen: number | null;
    evolutionPct: number | null;
    updatedAt: Date | null;
};
export type MatierePrixStatCountAggregateOutputType = {
    id: number;
    matiereId: number;
    dernierPrix: number;
    prixMoyen: number;
    evolutionPct: number;
    updatedAt: number;
    _all: number;
};
export type MatierePrixStatAvgAggregateInputType = {
    dernierPrix?: true;
    prixMoyen?: true;
    evolutionPct?: true;
};
export type MatierePrixStatSumAggregateInputType = {
    dernierPrix?: true;
    prixMoyen?: true;
    evolutionPct?: true;
};
export type MatierePrixStatMinAggregateInputType = {
    id?: true;
    matiereId?: true;
    dernierPrix?: true;
    prixMoyen?: true;
    evolutionPct?: true;
    updatedAt?: true;
};
export type MatierePrixStatMaxAggregateInputType = {
    id?: true;
    matiereId?: true;
    dernierPrix?: true;
    prixMoyen?: true;
    evolutionPct?: true;
    updatedAt?: true;
};
export type MatierePrixStatCountAggregateInputType = {
    id?: true;
    matiereId?: true;
    dernierPrix?: true;
    prixMoyen?: true;
    evolutionPct?: true;
    updatedAt?: true;
    _all?: true;
};
export type MatierePrixStatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MatierePrixStat to aggregate.
     */
    where?: Prisma.MatierePrixStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatierePrixStats to fetch.
     */
    orderBy?: Prisma.MatierePrixStatOrderByWithRelationInput | Prisma.MatierePrixStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MatierePrixStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatierePrixStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatierePrixStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MatierePrixStats
    **/
    _count?: true | MatierePrixStatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MatierePrixStatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MatierePrixStatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MatierePrixStatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MatierePrixStatMaxAggregateInputType;
};
export type GetMatierePrixStatAggregateType<T extends MatierePrixStatAggregateArgs> = {
    [P in keyof T & keyof AggregateMatierePrixStat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatierePrixStat[P]> : Prisma.GetScalarType<T[P], AggregateMatierePrixStat[P]>;
};
export type MatierePrixStatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatierePrixStatWhereInput;
    orderBy?: Prisma.MatierePrixStatOrderByWithAggregationInput | Prisma.MatierePrixStatOrderByWithAggregationInput[];
    by: Prisma.MatierePrixStatScalarFieldEnum[] | Prisma.MatierePrixStatScalarFieldEnum;
    having?: Prisma.MatierePrixStatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatierePrixStatCountAggregateInputType | true;
    _avg?: MatierePrixStatAvgAggregateInputType;
    _sum?: MatierePrixStatSumAggregateInputType;
    _min?: MatierePrixStatMinAggregateInputType;
    _max?: MatierePrixStatMaxAggregateInputType;
};
export type MatierePrixStatGroupByOutputType = {
    id: string;
    matiereId: string;
    dernierPrix: number;
    prixMoyen: number;
    evolutionPct: number;
    updatedAt: Date;
    _count: MatierePrixStatCountAggregateOutputType | null;
    _avg: MatierePrixStatAvgAggregateOutputType | null;
    _sum: MatierePrixStatSumAggregateOutputType | null;
    _min: MatierePrixStatMinAggregateOutputType | null;
    _max: MatierePrixStatMaxAggregateOutputType | null;
};
export type GetMatierePrixStatGroupByPayload<T extends MatierePrixStatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatierePrixStatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatierePrixStatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatierePrixStatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatierePrixStatGroupByOutputType[P]>;
}>>;
export type MatierePrixStatWhereInput = {
    AND?: Prisma.MatierePrixStatWhereInput | Prisma.MatierePrixStatWhereInput[];
    OR?: Prisma.MatierePrixStatWhereInput[];
    NOT?: Prisma.MatierePrixStatWhereInput | Prisma.MatierePrixStatWhereInput[];
    id?: Prisma.StringFilter<"MatierePrixStat"> | string;
    matiereId?: Prisma.StringFilter<"MatierePrixStat"> | string;
    dernierPrix?: Prisma.FloatFilter<"MatierePrixStat"> | number;
    prixMoyen?: Prisma.FloatFilter<"MatierePrixStat"> | number;
    evolutionPct?: Prisma.FloatFilter<"MatierePrixStat"> | number;
    updatedAt?: Prisma.DateTimeFilter<"MatierePrixStat"> | Date | string;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
};
export type MatierePrixStatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    dernierPrix?: Prisma.SortOrder;
    prixMoyen?: Prisma.SortOrder;
    evolutionPct?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    matiere?: Prisma.StockItemOrderByWithRelationInput;
};
export type MatierePrixStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    matiereId?: string;
    AND?: Prisma.MatierePrixStatWhereInput | Prisma.MatierePrixStatWhereInput[];
    OR?: Prisma.MatierePrixStatWhereInput[];
    NOT?: Prisma.MatierePrixStatWhereInput | Prisma.MatierePrixStatWhereInput[];
    dernierPrix?: Prisma.FloatFilter<"MatierePrixStat"> | number;
    prixMoyen?: Prisma.FloatFilter<"MatierePrixStat"> | number;
    evolutionPct?: Prisma.FloatFilter<"MatierePrixStat"> | number;
    updatedAt?: Prisma.DateTimeFilter<"MatierePrixStat"> | Date | string;
    matiere?: Prisma.XOR<Prisma.StockItemScalarRelationFilter, Prisma.StockItemWhereInput>;
}, "id" | "matiereId">;
export type MatierePrixStatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    dernierPrix?: Prisma.SortOrder;
    prixMoyen?: Prisma.SortOrder;
    evolutionPct?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MatierePrixStatCountOrderByAggregateInput;
    _avg?: Prisma.MatierePrixStatAvgOrderByAggregateInput;
    _max?: Prisma.MatierePrixStatMaxOrderByAggregateInput;
    _min?: Prisma.MatierePrixStatMinOrderByAggregateInput;
    _sum?: Prisma.MatierePrixStatSumOrderByAggregateInput;
};
export type MatierePrixStatScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatierePrixStatScalarWhereWithAggregatesInput | Prisma.MatierePrixStatScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatierePrixStatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatierePrixStatScalarWhereWithAggregatesInput | Prisma.MatierePrixStatScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MatierePrixStat"> | string;
    matiereId?: Prisma.StringWithAggregatesFilter<"MatierePrixStat"> | string;
    dernierPrix?: Prisma.FloatWithAggregatesFilter<"MatierePrixStat"> | number;
    prixMoyen?: Prisma.FloatWithAggregatesFilter<"MatierePrixStat"> | number;
    evolutionPct?: Prisma.FloatWithAggregatesFilter<"MatierePrixStat"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MatierePrixStat"> | Date | string;
};
export type MatierePrixStatCreateInput = {
    id?: string;
    dernierPrix: number;
    prixMoyen: number;
    evolutionPct?: number;
    updatedAt?: Date | string;
    matiere: Prisma.StockItemCreateNestedOneWithoutMatierePrixStatInput;
};
export type MatierePrixStatUncheckedCreateInput = {
    id?: string;
    matiereId: string;
    dernierPrix: number;
    prixMoyen: number;
    evolutionPct?: number;
    updatedAt?: Date | string;
};
export type MatierePrixStatUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dernierPrix?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixMoyen?: Prisma.FloatFieldUpdateOperationsInput | number;
    evolutionPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    matiere?: Prisma.StockItemUpdateOneRequiredWithoutMatierePrixStatNestedInput;
};
export type MatierePrixStatUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    dernierPrix?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixMoyen?: Prisma.FloatFieldUpdateOperationsInput | number;
    evolutionPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatierePrixStatCreateManyInput = {
    id?: string;
    matiereId: string;
    dernierPrix: number;
    prixMoyen: number;
    evolutionPct?: number;
    updatedAt?: Date | string;
};
export type MatierePrixStatUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dernierPrix?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixMoyen?: Prisma.FloatFieldUpdateOperationsInput | number;
    evolutionPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatierePrixStatUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matiereId?: Prisma.StringFieldUpdateOperationsInput | string;
    dernierPrix?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixMoyen?: Prisma.FloatFieldUpdateOperationsInput | number;
    evolutionPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatierePrixStatNullableScalarRelationFilter = {
    is?: Prisma.MatierePrixStatWhereInput | null;
    isNot?: Prisma.MatierePrixStatWhereInput | null;
};
export type MatierePrixStatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    dernierPrix?: Prisma.SortOrder;
    prixMoyen?: Prisma.SortOrder;
    evolutionPct?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatierePrixStatAvgOrderByAggregateInput = {
    dernierPrix?: Prisma.SortOrder;
    prixMoyen?: Prisma.SortOrder;
    evolutionPct?: Prisma.SortOrder;
};
export type MatierePrixStatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    dernierPrix?: Prisma.SortOrder;
    prixMoyen?: Prisma.SortOrder;
    evolutionPct?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatierePrixStatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matiereId?: Prisma.SortOrder;
    dernierPrix?: Prisma.SortOrder;
    prixMoyen?: Prisma.SortOrder;
    evolutionPct?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatierePrixStatSumOrderByAggregateInput = {
    dernierPrix?: Prisma.SortOrder;
    prixMoyen?: Prisma.SortOrder;
    evolutionPct?: Prisma.SortOrder;
};
export type MatierePrixStatCreateNestedOneWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.MatierePrixStatCreateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedCreateWithoutMatiereInput>;
    connectOrCreate?: Prisma.MatierePrixStatCreateOrConnectWithoutMatiereInput;
    connect?: Prisma.MatierePrixStatWhereUniqueInput;
};
export type MatierePrixStatUncheckedCreateNestedOneWithoutMatiereInput = {
    create?: Prisma.XOR<Prisma.MatierePrixStatCreateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedCreateWithoutMatiereInput>;
    connectOrCreate?: Prisma.MatierePrixStatCreateOrConnectWithoutMatiereInput;
    connect?: Prisma.MatierePrixStatWhereUniqueInput;
};
export type MatierePrixStatUpdateOneWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.MatierePrixStatCreateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedCreateWithoutMatiereInput>;
    connectOrCreate?: Prisma.MatierePrixStatCreateOrConnectWithoutMatiereInput;
    upsert?: Prisma.MatierePrixStatUpsertWithoutMatiereInput;
    disconnect?: Prisma.MatierePrixStatWhereInput | boolean;
    delete?: Prisma.MatierePrixStatWhereInput | boolean;
    connect?: Prisma.MatierePrixStatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MatierePrixStatUpdateToOneWithWhereWithoutMatiereInput, Prisma.MatierePrixStatUpdateWithoutMatiereInput>, Prisma.MatierePrixStatUncheckedUpdateWithoutMatiereInput>;
};
export type MatierePrixStatUncheckedUpdateOneWithoutMatiereNestedInput = {
    create?: Prisma.XOR<Prisma.MatierePrixStatCreateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedCreateWithoutMatiereInput>;
    connectOrCreate?: Prisma.MatierePrixStatCreateOrConnectWithoutMatiereInput;
    upsert?: Prisma.MatierePrixStatUpsertWithoutMatiereInput;
    disconnect?: Prisma.MatierePrixStatWhereInput | boolean;
    delete?: Prisma.MatierePrixStatWhereInput | boolean;
    connect?: Prisma.MatierePrixStatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MatierePrixStatUpdateToOneWithWhereWithoutMatiereInput, Prisma.MatierePrixStatUpdateWithoutMatiereInput>, Prisma.MatierePrixStatUncheckedUpdateWithoutMatiereInput>;
};
export type MatierePrixStatCreateWithoutMatiereInput = {
    id?: string;
    dernierPrix: number;
    prixMoyen: number;
    evolutionPct?: number;
    updatedAt?: Date | string;
};
export type MatierePrixStatUncheckedCreateWithoutMatiereInput = {
    id?: string;
    dernierPrix: number;
    prixMoyen: number;
    evolutionPct?: number;
    updatedAt?: Date | string;
};
export type MatierePrixStatCreateOrConnectWithoutMatiereInput = {
    where: Prisma.MatierePrixStatWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatierePrixStatCreateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedCreateWithoutMatiereInput>;
};
export type MatierePrixStatUpsertWithoutMatiereInput = {
    update: Prisma.XOR<Prisma.MatierePrixStatUpdateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedUpdateWithoutMatiereInput>;
    create: Prisma.XOR<Prisma.MatierePrixStatCreateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedCreateWithoutMatiereInput>;
    where?: Prisma.MatierePrixStatWhereInput;
};
export type MatierePrixStatUpdateToOneWithWhereWithoutMatiereInput = {
    where?: Prisma.MatierePrixStatWhereInput;
    data: Prisma.XOR<Prisma.MatierePrixStatUpdateWithoutMatiereInput, Prisma.MatierePrixStatUncheckedUpdateWithoutMatiereInput>;
};
export type MatierePrixStatUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dernierPrix?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixMoyen?: Prisma.FloatFieldUpdateOperationsInput | number;
    evolutionPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatierePrixStatUncheckedUpdateWithoutMatiereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dernierPrix?: Prisma.FloatFieldUpdateOperationsInput | number;
    prixMoyen?: Prisma.FloatFieldUpdateOperationsInput | number;
    evolutionPct?: Prisma.FloatFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatierePrixStatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matiereId?: boolean;
    dernierPrix?: boolean;
    prixMoyen?: boolean;
    evolutionPct?: boolean;
    updatedAt?: boolean;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matierePrixStat"]>;
export type MatierePrixStatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matiereId?: boolean;
    dernierPrix?: boolean;
    prixMoyen?: boolean;
    evolutionPct?: boolean;
    updatedAt?: boolean;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matierePrixStat"]>;
export type MatierePrixStatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matiereId?: boolean;
    dernierPrix?: boolean;
    prixMoyen?: boolean;
    evolutionPct?: boolean;
    updatedAt?: boolean;
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matierePrixStat"]>;
export type MatierePrixStatSelectScalar = {
    id?: boolean;
    matiereId?: boolean;
    dernierPrix?: boolean;
    prixMoyen?: boolean;
    evolutionPct?: boolean;
    updatedAt?: boolean;
};
export type MatierePrixStatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "matiereId" | "dernierPrix" | "prixMoyen" | "evolutionPct" | "updatedAt", ExtArgs["result"]["matierePrixStat"]>;
export type MatierePrixStatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type MatierePrixStatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type MatierePrixStatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    matiere?: boolean | Prisma.StockItemDefaultArgs<ExtArgs>;
};
export type $MatierePrixStatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MatierePrixStat";
    objects: {
        matiere: Prisma.$StockItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        matiereId: string;
        dernierPrix: number;
        prixMoyen: number;
        evolutionPct: number;
        updatedAt: Date;
    }, ExtArgs["result"]["matierePrixStat"]>;
    composites: {};
};
export type MatierePrixStatGetPayload<S extends boolean | null | undefined | MatierePrixStatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload, S>;
export type MatierePrixStatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatierePrixStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatierePrixStatCountAggregateInputType | true;
};
export interface MatierePrixStatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MatierePrixStat'];
        meta: {
            name: 'MatierePrixStat';
        };
    };
    /**
     * Find zero or one MatierePrixStat that matches the filter.
     * @param {MatierePrixStatFindUniqueArgs} args - Arguments to find a MatierePrixStat
     * @example
     * // Get one MatierePrixStat
     * const matierePrixStat = await prisma.matierePrixStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatierePrixStatFindUniqueArgs>(args: Prisma.SelectSubset<T, MatierePrixStatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MatierePrixStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatierePrixStatFindUniqueOrThrowArgs} args - Arguments to find a MatierePrixStat
     * @example
     * // Get one MatierePrixStat
     * const matierePrixStat = await prisma.matierePrixStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatierePrixStatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatierePrixStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MatierePrixStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatierePrixStatFindFirstArgs} args - Arguments to find a MatierePrixStat
     * @example
     * // Get one MatierePrixStat
     * const matierePrixStat = await prisma.matierePrixStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatierePrixStatFindFirstArgs>(args?: Prisma.SelectSubset<T, MatierePrixStatFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MatierePrixStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatierePrixStatFindFirstOrThrowArgs} args - Arguments to find a MatierePrixStat
     * @example
     * // Get one MatierePrixStat
     * const matierePrixStat = await prisma.matierePrixStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatierePrixStatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatierePrixStatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MatierePrixStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatierePrixStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatierePrixStats
     * const matierePrixStats = await prisma.matierePrixStat.findMany()
     *
     * // Get first 10 MatierePrixStats
     * const matierePrixStats = await prisma.matierePrixStat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const matierePrixStatWithIdOnly = await prisma.matierePrixStat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MatierePrixStatFindManyArgs>(args?: Prisma.SelectSubset<T, MatierePrixStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MatierePrixStat.
     * @param {MatierePrixStatCreateArgs} args - Arguments to create a MatierePrixStat.
     * @example
     * // Create one MatierePrixStat
     * const MatierePrixStat = await prisma.matierePrixStat.create({
     *   data: {
     *     // ... data to create a MatierePrixStat
     *   }
     * })
     *
     */
    create<T extends MatierePrixStatCreateArgs>(args: Prisma.SelectSubset<T, MatierePrixStatCreateArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MatierePrixStats.
     * @param {MatierePrixStatCreateManyArgs} args - Arguments to create many MatierePrixStats.
     * @example
     * // Create many MatierePrixStats
     * const matierePrixStat = await prisma.matierePrixStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MatierePrixStatCreateManyArgs>(args?: Prisma.SelectSubset<T, MatierePrixStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MatierePrixStats and returns the data saved in the database.
     * @param {MatierePrixStatCreateManyAndReturnArgs} args - Arguments to create many MatierePrixStats.
     * @example
     * // Create many MatierePrixStats
     * const matierePrixStat = await prisma.matierePrixStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MatierePrixStats and only return the `id`
     * const matierePrixStatWithIdOnly = await prisma.matierePrixStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MatierePrixStatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatierePrixStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MatierePrixStat.
     * @param {MatierePrixStatDeleteArgs} args - Arguments to delete one MatierePrixStat.
     * @example
     * // Delete one MatierePrixStat
     * const MatierePrixStat = await prisma.matierePrixStat.delete({
     *   where: {
     *     // ... filter to delete one MatierePrixStat
     *   }
     * })
     *
     */
    delete<T extends MatierePrixStatDeleteArgs>(args: Prisma.SelectSubset<T, MatierePrixStatDeleteArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MatierePrixStat.
     * @param {MatierePrixStatUpdateArgs} args - Arguments to update one MatierePrixStat.
     * @example
     * // Update one MatierePrixStat
     * const matierePrixStat = await prisma.matierePrixStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MatierePrixStatUpdateArgs>(args: Prisma.SelectSubset<T, MatierePrixStatUpdateArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MatierePrixStats.
     * @param {MatierePrixStatDeleteManyArgs} args - Arguments to filter MatierePrixStats to delete.
     * @example
     * // Delete a few MatierePrixStats
     * const { count } = await prisma.matierePrixStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MatierePrixStatDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatierePrixStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MatierePrixStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatierePrixStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatierePrixStats
     * const matierePrixStat = await prisma.matierePrixStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MatierePrixStatUpdateManyArgs>(args: Prisma.SelectSubset<T, MatierePrixStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MatierePrixStats and returns the data updated in the database.
     * @param {MatierePrixStatUpdateManyAndReturnArgs} args - Arguments to update many MatierePrixStats.
     * @example
     * // Update many MatierePrixStats
     * const matierePrixStat = await prisma.matierePrixStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MatierePrixStats and only return the `id`
     * const matierePrixStatWithIdOnly = await prisma.matierePrixStat.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatierePrixStatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatierePrixStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MatierePrixStat.
     * @param {MatierePrixStatUpsertArgs} args - Arguments to update or create a MatierePrixStat.
     * @example
     * // Update or create a MatierePrixStat
     * const matierePrixStat = await prisma.matierePrixStat.upsert({
     *   create: {
     *     // ... data to create a MatierePrixStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatierePrixStat we want to update
     *   }
     * })
     */
    upsert<T extends MatierePrixStatUpsertArgs>(args: Prisma.SelectSubset<T, MatierePrixStatUpsertArgs<ExtArgs>>): Prisma.Prisma__MatierePrixStatClient<runtime.Types.Result.GetResult<Prisma.$MatierePrixStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MatierePrixStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatierePrixStatCountArgs} args - Arguments to filter MatierePrixStats to count.
     * @example
     * // Count the number of MatierePrixStats
     * const count = await prisma.matierePrixStat.count({
     *   where: {
     *     // ... the filter for the MatierePrixStats we want to count
     *   }
     * })
    **/
    count<T extends MatierePrixStatCountArgs>(args?: Prisma.Subset<T, MatierePrixStatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatierePrixStatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MatierePrixStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatierePrixStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatierePrixStatAggregateArgs>(args: Prisma.Subset<T, MatierePrixStatAggregateArgs>): Prisma.PrismaPromise<GetMatierePrixStatAggregateType<T>>;
    /**
     * Group by MatierePrixStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatierePrixStatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MatierePrixStatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatierePrixStatGroupByArgs['orderBy'];
    } : {
        orderBy?: MatierePrixStatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatierePrixStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatierePrixStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MatierePrixStat model
     */
    readonly fields: MatierePrixStatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MatierePrixStat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MatierePrixStatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    matiere<T extends Prisma.StockItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StockItemDefaultArgs<ExtArgs>>): Prisma.Prisma__StockItemClient<runtime.Types.Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the MatierePrixStat model
 */
export interface MatierePrixStatFieldRefs {
    readonly id: Prisma.FieldRef<"MatierePrixStat", 'String'>;
    readonly matiereId: Prisma.FieldRef<"MatierePrixStat", 'String'>;
    readonly dernierPrix: Prisma.FieldRef<"MatierePrixStat", 'Float'>;
    readonly prixMoyen: Prisma.FieldRef<"MatierePrixStat", 'Float'>;
    readonly evolutionPct: Prisma.FieldRef<"MatierePrixStat", 'Float'>;
    readonly updatedAt: Prisma.FieldRef<"MatierePrixStat", 'DateTime'>;
}
/**
 * MatierePrixStat findUnique
 */
export type MatierePrixStatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * Filter, which MatierePrixStat to fetch.
     */
    where: Prisma.MatierePrixStatWhereUniqueInput;
};
/**
 * MatierePrixStat findUniqueOrThrow
 */
export type MatierePrixStatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * Filter, which MatierePrixStat to fetch.
     */
    where: Prisma.MatierePrixStatWhereUniqueInput;
};
/**
 * MatierePrixStat findFirst
 */
export type MatierePrixStatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * Filter, which MatierePrixStat to fetch.
     */
    where?: Prisma.MatierePrixStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatierePrixStats to fetch.
     */
    orderBy?: Prisma.MatierePrixStatOrderByWithRelationInput | Prisma.MatierePrixStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MatierePrixStats.
     */
    cursor?: Prisma.MatierePrixStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatierePrixStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatierePrixStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatierePrixStats.
     */
    distinct?: Prisma.MatierePrixStatScalarFieldEnum | Prisma.MatierePrixStatScalarFieldEnum[];
};
/**
 * MatierePrixStat findFirstOrThrow
 */
export type MatierePrixStatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * Filter, which MatierePrixStat to fetch.
     */
    where?: Prisma.MatierePrixStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatierePrixStats to fetch.
     */
    orderBy?: Prisma.MatierePrixStatOrderByWithRelationInput | Prisma.MatierePrixStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MatierePrixStats.
     */
    cursor?: Prisma.MatierePrixStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatierePrixStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatierePrixStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatierePrixStats.
     */
    distinct?: Prisma.MatierePrixStatScalarFieldEnum | Prisma.MatierePrixStatScalarFieldEnum[];
};
/**
 * MatierePrixStat findMany
 */
export type MatierePrixStatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * Filter, which MatierePrixStats to fetch.
     */
    where?: Prisma.MatierePrixStatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatierePrixStats to fetch.
     */
    orderBy?: Prisma.MatierePrixStatOrderByWithRelationInput | Prisma.MatierePrixStatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MatierePrixStats.
     */
    cursor?: Prisma.MatierePrixStatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatierePrixStats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatierePrixStats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatierePrixStats.
     */
    distinct?: Prisma.MatierePrixStatScalarFieldEnum | Prisma.MatierePrixStatScalarFieldEnum[];
};
/**
 * MatierePrixStat create
 */
export type MatierePrixStatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * The data needed to create a MatierePrixStat.
     */
    data: Prisma.XOR<Prisma.MatierePrixStatCreateInput, Prisma.MatierePrixStatUncheckedCreateInput>;
};
/**
 * MatierePrixStat createMany
 */
export type MatierePrixStatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatierePrixStats.
     */
    data: Prisma.MatierePrixStatCreateManyInput | Prisma.MatierePrixStatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MatierePrixStat createManyAndReturn
 */
export type MatierePrixStatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * The data used to create many MatierePrixStats.
     */
    data: Prisma.MatierePrixStatCreateManyInput | Prisma.MatierePrixStatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MatierePrixStat update
 */
export type MatierePrixStatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * The data needed to update a MatierePrixStat.
     */
    data: Prisma.XOR<Prisma.MatierePrixStatUpdateInput, Prisma.MatierePrixStatUncheckedUpdateInput>;
    /**
     * Choose, which MatierePrixStat to update.
     */
    where: Prisma.MatierePrixStatWhereUniqueInput;
};
/**
 * MatierePrixStat updateMany
 */
export type MatierePrixStatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MatierePrixStats.
     */
    data: Prisma.XOR<Prisma.MatierePrixStatUpdateManyMutationInput, Prisma.MatierePrixStatUncheckedUpdateManyInput>;
    /**
     * Filter which MatierePrixStats to update
     */
    where?: Prisma.MatierePrixStatWhereInput;
    /**
     * Limit how many MatierePrixStats to update.
     */
    limit?: number;
};
/**
 * MatierePrixStat updateManyAndReturn
 */
export type MatierePrixStatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * The data used to update MatierePrixStats.
     */
    data: Prisma.XOR<Prisma.MatierePrixStatUpdateManyMutationInput, Prisma.MatierePrixStatUncheckedUpdateManyInput>;
    /**
     * Filter which MatierePrixStats to update
     */
    where?: Prisma.MatierePrixStatWhereInput;
    /**
     * Limit how many MatierePrixStats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MatierePrixStat upsert
 */
export type MatierePrixStatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * The filter to search for the MatierePrixStat to update in case it exists.
     */
    where: Prisma.MatierePrixStatWhereUniqueInput;
    /**
     * In case the MatierePrixStat found by the `where` argument doesn't exist, create a new MatierePrixStat with this data.
     */
    create: Prisma.XOR<Prisma.MatierePrixStatCreateInput, Prisma.MatierePrixStatUncheckedCreateInput>;
    /**
     * In case the MatierePrixStat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MatierePrixStatUpdateInput, Prisma.MatierePrixStatUncheckedUpdateInput>;
};
/**
 * MatierePrixStat delete
 */
export type MatierePrixStatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
    /**
     * Filter which MatierePrixStat to delete.
     */
    where: Prisma.MatierePrixStatWhereUniqueInput;
};
/**
 * MatierePrixStat deleteMany
 */
export type MatierePrixStatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MatierePrixStats to delete
     */
    where?: Prisma.MatierePrixStatWhereInput;
    /**
     * Limit how many MatierePrixStats to delete.
     */
    limit?: number;
};
/**
 * MatierePrixStat without action
 */
export type MatierePrixStatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatierePrixStat
     */
    select?: Prisma.MatierePrixStatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatierePrixStat
     */
    omit?: Prisma.MatierePrixStatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MatierePrixStatInclude<ExtArgs> | null;
};
//# sourceMappingURL=MatierePrixStat.d.ts.map