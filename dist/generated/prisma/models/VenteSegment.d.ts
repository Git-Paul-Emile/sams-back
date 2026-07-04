import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model VenteSegment
 *
 */
export type VenteSegmentModel = runtime.Types.Result.DefaultSelection<Prisma.$VenteSegmentPayload>;
export type AggregateVenteSegment = {
    _count: VenteSegmentCountAggregateOutputType | null;
    _avg: VenteSegmentAvgAggregateOutputType | null;
    _sum: VenteSegmentSumAggregateOutputType | null;
    _min: VenteSegmentMinAggregateOutputType | null;
    _max: VenteSegmentMaxAggregateOutputType | null;
};
export type VenteSegmentAvgAggregateOutputType = {
    ca: number | null;
    pct: number | null;
};
export type VenteSegmentSumAggregateOutputType = {
    ca: number | null;
    pct: number | null;
};
export type VenteSegmentMinAggregateOutputType = {
    id: string | null;
    segment: string | null;
    ca: number | null;
    pct: number | null;
    couleur: string | null;
    updatedAt: Date | null;
};
export type VenteSegmentMaxAggregateOutputType = {
    id: string | null;
    segment: string | null;
    ca: number | null;
    pct: number | null;
    couleur: string | null;
    updatedAt: Date | null;
};
export type VenteSegmentCountAggregateOutputType = {
    id: number;
    segment: number;
    ca: number;
    pct: number;
    couleur: number;
    updatedAt: number;
    _all: number;
};
export type VenteSegmentAvgAggregateInputType = {
    ca?: true;
    pct?: true;
};
export type VenteSegmentSumAggregateInputType = {
    ca?: true;
    pct?: true;
};
export type VenteSegmentMinAggregateInputType = {
    id?: true;
    segment?: true;
    ca?: true;
    pct?: true;
    couleur?: true;
    updatedAt?: true;
};
export type VenteSegmentMaxAggregateInputType = {
    id?: true;
    segment?: true;
    ca?: true;
    pct?: true;
    couleur?: true;
    updatedAt?: true;
};
export type VenteSegmentCountAggregateInputType = {
    id?: true;
    segment?: true;
    ca?: true;
    pct?: true;
    couleur?: true;
    updatedAt?: true;
    _all?: true;
};
export type VenteSegmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VenteSegment to aggregate.
     */
    where?: Prisma.VenteSegmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VenteSegments to fetch.
     */
    orderBy?: Prisma.VenteSegmentOrderByWithRelationInput | Prisma.VenteSegmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VenteSegmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VenteSegments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VenteSegments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VenteSegments
    **/
    _count?: true | VenteSegmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: VenteSegmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: VenteSegmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VenteSegmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VenteSegmentMaxAggregateInputType;
};
export type GetVenteSegmentAggregateType<T extends VenteSegmentAggregateArgs> = {
    [P in keyof T & keyof AggregateVenteSegment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVenteSegment[P]> : Prisma.GetScalarType<T[P], AggregateVenteSegment[P]>;
};
export type VenteSegmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VenteSegmentWhereInput;
    orderBy?: Prisma.VenteSegmentOrderByWithAggregationInput | Prisma.VenteSegmentOrderByWithAggregationInput[];
    by: Prisma.VenteSegmentScalarFieldEnum[] | Prisma.VenteSegmentScalarFieldEnum;
    having?: Prisma.VenteSegmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VenteSegmentCountAggregateInputType | true;
    _avg?: VenteSegmentAvgAggregateInputType;
    _sum?: VenteSegmentSumAggregateInputType;
    _min?: VenteSegmentMinAggregateInputType;
    _max?: VenteSegmentMaxAggregateInputType;
};
export type VenteSegmentGroupByOutputType = {
    id: string;
    segment: string;
    ca: number;
    pct: number;
    couleur: string;
    updatedAt: Date;
    _count: VenteSegmentCountAggregateOutputType | null;
    _avg: VenteSegmentAvgAggregateOutputType | null;
    _sum: VenteSegmentSumAggregateOutputType | null;
    _min: VenteSegmentMinAggregateOutputType | null;
    _max: VenteSegmentMaxAggregateOutputType | null;
};
export type GetVenteSegmentGroupByPayload<T extends VenteSegmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VenteSegmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VenteSegmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VenteSegmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VenteSegmentGroupByOutputType[P]>;
}>>;
export type VenteSegmentWhereInput = {
    AND?: Prisma.VenteSegmentWhereInput | Prisma.VenteSegmentWhereInput[];
    OR?: Prisma.VenteSegmentWhereInput[];
    NOT?: Prisma.VenteSegmentWhereInput | Prisma.VenteSegmentWhereInput[];
    id?: Prisma.StringFilter<"VenteSegment"> | string;
    segment?: Prisma.StringFilter<"VenteSegment"> | string;
    ca?: Prisma.FloatFilter<"VenteSegment"> | number;
    pct?: Prisma.FloatFilter<"VenteSegment"> | number;
    couleur?: Prisma.StringFilter<"VenteSegment"> | string;
    updatedAt?: Prisma.DateTimeFilter<"VenteSegment"> | Date | string;
};
export type VenteSegmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    segment?: Prisma.SortOrder;
    ca?: Prisma.SortOrder;
    pct?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VenteSegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    segment?: string;
    AND?: Prisma.VenteSegmentWhereInput | Prisma.VenteSegmentWhereInput[];
    OR?: Prisma.VenteSegmentWhereInput[];
    NOT?: Prisma.VenteSegmentWhereInput | Prisma.VenteSegmentWhereInput[];
    ca?: Prisma.FloatFilter<"VenteSegment"> | number;
    pct?: Prisma.FloatFilter<"VenteSegment"> | number;
    couleur?: Prisma.StringFilter<"VenteSegment"> | string;
    updatedAt?: Prisma.DateTimeFilter<"VenteSegment"> | Date | string;
}, "id" | "segment">;
export type VenteSegmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    segment?: Prisma.SortOrder;
    ca?: Prisma.SortOrder;
    pct?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VenteSegmentCountOrderByAggregateInput;
    _avg?: Prisma.VenteSegmentAvgOrderByAggregateInput;
    _max?: Prisma.VenteSegmentMaxOrderByAggregateInput;
    _min?: Prisma.VenteSegmentMinOrderByAggregateInput;
    _sum?: Prisma.VenteSegmentSumOrderByAggregateInput;
};
export type VenteSegmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.VenteSegmentScalarWhereWithAggregatesInput | Prisma.VenteSegmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.VenteSegmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VenteSegmentScalarWhereWithAggregatesInput | Prisma.VenteSegmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VenteSegment"> | string;
    segment?: Prisma.StringWithAggregatesFilter<"VenteSegment"> | string;
    ca?: Prisma.FloatWithAggregatesFilter<"VenteSegment"> | number;
    pct?: Prisma.FloatWithAggregatesFilter<"VenteSegment"> | number;
    couleur?: Prisma.StringWithAggregatesFilter<"VenteSegment"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VenteSegment"> | Date | string;
};
export type VenteSegmentCreateInput = {
    id?: string;
    segment: string;
    ca: number;
    pct: number;
    couleur: string;
    updatedAt?: Date | string;
};
export type VenteSegmentUncheckedCreateInput = {
    id?: string;
    segment: string;
    ca: number;
    pct: number;
    couleur: string;
    updatedAt?: Date | string;
};
export type VenteSegmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment?: Prisma.StringFieldUpdateOperationsInput | string;
    ca?: Prisma.FloatFieldUpdateOperationsInput | number;
    pct?: Prisma.FloatFieldUpdateOperationsInput | number;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenteSegmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment?: Prisma.StringFieldUpdateOperationsInput | string;
    ca?: Prisma.FloatFieldUpdateOperationsInput | number;
    pct?: Prisma.FloatFieldUpdateOperationsInput | number;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenteSegmentCreateManyInput = {
    id?: string;
    segment: string;
    ca: number;
    pct: number;
    couleur: string;
    updatedAt?: Date | string;
};
export type VenteSegmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment?: Prisma.StringFieldUpdateOperationsInput | string;
    ca?: Prisma.FloatFieldUpdateOperationsInput | number;
    pct?: Prisma.FloatFieldUpdateOperationsInput | number;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenteSegmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment?: Prisma.StringFieldUpdateOperationsInput | string;
    ca?: Prisma.FloatFieldUpdateOperationsInput | number;
    pct?: Prisma.FloatFieldUpdateOperationsInput | number;
    couleur?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenteSegmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    segment?: Prisma.SortOrder;
    ca?: Prisma.SortOrder;
    pct?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VenteSegmentAvgOrderByAggregateInput = {
    ca?: Prisma.SortOrder;
    pct?: Prisma.SortOrder;
};
export type VenteSegmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    segment?: Prisma.SortOrder;
    ca?: Prisma.SortOrder;
    pct?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VenteSegmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    segment?: Prisma.SortOrder;
    ca?: Prisma.SortOrder;
    pct?: Prisma.SortOrder;
    couleur?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VenteSegmentSumOrderByAggregateInput = {
    ca?: Prisma.SortOrder;
    pct?: Prisma.SortOrder;
};
export type VenteSegmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    segment?: boolean;
    ca?: boolean;
    pct?: boolean;
    couleur?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["venteSegment"]>;
export type VenteSegmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    segment?: boolean;
    ca?: boolean;
    pct?: boolean;
    couleur?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["venteSegment"]>;
export type VenteSegmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    segment?: boolean;
    ca?: boolean;
    pct?: boolean;
    couleur?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["venteSegment"]>;
export type VenteSegmentSelectScalar = {
    id?: boolean;
    segment?: boolean;
    ca?: boolean;
    pct?: boolean;
    couleur?: boolean;
    updatedAt?: boolean;
};
export type VenteSegmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "segment" | "ca" | "pct" | "couleur" | "updatedAt", ExtArgs["result"]["venteSegment"]>;
export type $VenteSegmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VenteSegment";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        segment: string;
        ca: number;
        pct: number;
        couleur: string;
        updatedAt: Date;
    }, ExtArgs["result"]["venteSegment"]>;
    composites: {};
};
export type VenteSegmentGetPayload<S extends boolean | null | undefined | VenteSegmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload, S>;
export type VenteSegmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VenteSegmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VenteSegmentCountAggregateInputType | true;
};
export interface VenteSegmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VenteSegment'];
        meta: {
            name: 'VenteSegment';
        };
    };
    /**
     * Find zero or one VenteSegment that matches the filter.
     * @param {VenteSegmentFindUniqueArgs} args - Arguments to find a VenteSegment
     * @example
     * // Get one VenteSegment
     * const venteSegment = await prisma.venteSegment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenteSegmentFindUniqueArgs>(args: Prisma.SelectSubset<T, VenteSegmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VenteSegment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenteSegmentFindUniqueOrThrowArgs} args - Arguments to find a VenteSegment
     * @example
     * // Get one VenteSegment
     * const venteSegment = await prisma.venteSegment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenteSegmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VenteSegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VenteSegment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteSegmentFindFirstArgs} args - Arguments to find a VenteSegment
     * @example
     * // Get one VenteSegment
     * const venteSegment = await prisma.venteSegment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenteSegmentFindFirstArgs>(args?: Prisma.SelectSubset<T, VenteSegmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VenteSegment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteSegmentFindFirstOrThrowArgs} args - Arguments to find a VenteSegment
     * @example
     * // Get one VenteSegment
     * const venteSegment = await prisma.venteSegment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenteSegmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VenteSegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VenteSegments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteSegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenteSegments
     * const venteSegments = await prisma.venteSegment.findMany()
     *
     * // Get first 10 VenteSegments
     * const venteSegments = await prisma.venteSegment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const venteSegmentWithIdOnly = await prisma.venteSegment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VenteSegmentFindManyArgs>(args?: Prisma.SelectSubset<T, VenteSegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VenteSegment.
     * @param {VenteSegmentCreateArgs} args - Arguments to create a VenteSegment.
     * @example
     * // Create one VenteSegment
     * const VenteSegment = await prisma.venteSegment.create({
     *   data: {
     *     // ... data to create a VenteSegment
     *   }
     * })
     *
     */
    create<T extends VenteSegmentCreateArgs>(args: Prisma.SelectSubset<T, VenteSegmentCreateArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VenteSegments.
     * @param {VenteSegmentCreateManyArgs} args - Arguments to create many VenteSegments.
     * @example
     * // Create many VenteSegments
     * const venteSegment = await prisma.venteSegment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VenteSegmentCreateManyArgs>(args?: Prisma.SelectSubset<T, VenteSegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VenteSegments and returns the data saved in the database.
     * @param {VenteSegmentCreateManyAndReturnArgs} args - Arguments to create many VenteSegments.
     * @example
     * // Create many VenteSegments
     * const venteSegment = await prisma.venteSegment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VenteSegments and only return the `id`
     * const venteSegmentWithIdOnly = await prisma.venteSegment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VenteSegmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VenteSegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VenteSegment.
     * @param {VenteSegmentDeleteArgs} args - Arguments to delete one VenteSegment.
     * @example
     * // Delete one VenteSegment
     * const VenteSegment = await prisma.venteSegment.delete({
     *   where: {
     *     // ... filter to delete one VenteSegment
     *   }
     * })
     *
     */
    delete<T extends VenteSegmentDeleteArgs>(args: Prisma.SelectSubset<T, VenteSegmentDeleteArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VenteSegment.
     * @param {VenteSegmentUpdateArgs} args - Arguments to update one VenteSegment.
     * @example
     * // Update one VenteSegment
     * const venteSegment = await prisma.venteSegment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VenteSegmentUpdateArgs>(args: Prisma.SelectSubset<T, VenteSegmentUpdateArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VenteSegments.
     * @param {VenteSegmentDeleteManyArgs} args - Arguments to filter VenteSegments to delete.
     * @example
     * // Delete a few VenteSegments
     * const { count } = await prisma.venteSegment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VenteSegmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, VenteSegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VenteSegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteSegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenteSegments
     * const venteSegment = await prisma.venteSegment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VenteSegmentUpdateManyArgs>(args: Prisma.SelectSubset<T, VenteSegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VenteSegments and returns the data updated in the database.
     * @param {VenteSegmentUpdateManyAndReturnArgs} args - Arguments to update many VenteSegments.
     * @example
     * // Update many VenteSegments
     * const venteSegment = await prisma.venteSegment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VenteSegments and only return the `id`
     * const venteSegmentWithIdOnly = await prisma.venteSegment.updateManyAndReturn({
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
    updateManyAndReturn<T extends VenteSegmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VenteSegmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VenteSegment.
     * @param {VenteSegmentUpsertArgs} args - Arguments to update or create a VenteSegment.
     * @example
     * // Update or create a VenteSegment
     * const venteSegment = await prisma.venteSegment.upsert({
     *   create: {
     *     // ... data to create a VenteSegment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenteSegment we want to update
     *   }
     * })
     */
    upsert<T extends VenteSegmentUpsertArgs>(args: Prisma.SelectSubset<T, VenteSegmentUpsertArgs<ExtArgs>>): Prisma.Prisma__VenteSegmentClient<runtime.Types.Result.GetResult<Prisma.$VenteSegmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VenteSegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteSegmentCountArgs} args - Arguments to filter VenteSegments to count.
     * @example
     * // Count the number of VenteSegments
     * const count = await prisma.venteSegment.count({
     *   where: {
     *     // ... the filter for the VenteSegments we want to count
     *   }
     * })
    **/
    count<T extends VenteSegmentCountArgs>(args?: Prisma.Subset<T, VenteSegmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VenteSegmentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VenteSegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteSegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenteSegmentAggregateArgs>(args: Prisma.Subset<T, VenteSegmentAggregateArgs>): Prisma.PrismaPromise<GetVenteSegmentAggregateType<T>>;
    /**
     * Group by VenteSegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteSegmentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VenteSegmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VenteSegmentGroupByArgs['orderBy'];
    } : {
        orderBy?: VenteSegmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VenteSegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenteSegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VenteSegment model
     */
    readonly fields: VenteSegmentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VenteSegment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VenteSegmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the VenteSegment model
 */
export interface VenteSegmentFieldRefs {
    readonly id: Prisma.FieldRef<"VenteSegment", 'String'>;
    readonly segment: Prisma.FieldRef<"VenteSegment", 'String'>;
    readonly ca: Prisma.FieldRef<"VenteSegment", 'Float'>;
    readonly pct: Prisma.FieldRef<"VenteSegment", 'Float'>;
    readonly couleur: Prisma.FieldRef<"VenteSegment", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"VenteSegment", 'DateTime'>;
}
/**
 * VenteSegment findUnique
 */
export type VenteSegmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * Filter, which VenteSegment to fetch.
     */
    where: Prisma.VenteSegmentWhereUniqueInput;
};
/**
 * VenteSegment findUniqueOrThrow
 */
export type VenteSegmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * Filter, which VenteSegment to fetch.
     */
    where: Prisma.VenteSegmentWhereUniqueInput;
};
/**
 * VenteSegment findFirst
 */
export type VenteSegmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * Filter, which VenteSegment to fetch.
     */
    where?: Prisma.VenteSegmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VenteSegments to fetch.
     */
    orderBy?: Prisma.VenteSegmentOrderByWithRelationInput | Prisma.VenteSegmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VenteSegments.
     */
    cursor?: Prisma.VenteSegmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VenteSegments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VenteSegments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VenteSegments.
     */
    distinct?: Prisma.VenteSegmentScalarFieldEnum | Prisma.VenteSegmentScalarFieldEnum[];
};
/**
 * VenteSegment findFirstOrThrow
 */
export type VenteSegmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * Filter, which VenteSegment to fetch.
     */
    where?: Prisma.VenteSegmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VenteSegments to fetch.
     */
    orderBy?: Prisma.VenteSegmentOrderByWithRelationInput | Prisma.VenteSegmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VenteSegments.
     */
    cursor?: Prisma.VenteSegmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VenteSegments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VenteSegments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VenteSegments.
     */
    distinct?: Prisma.VenteSegmentScalarFieldEnum | Prisma.VenteSegmentScalarFieldEnum[];
};
/**
 * VenteSegment findMany
 */
export type VenteSegmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * Filter, which VenteSegments to fetch.
     */
    where?: Prisma.VenteSegmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VenteSegments to fetch.
     */
    orderBy?: Prisma.VenteSegmentOrderByWithRelationInput | Prisma.VenteSegmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VenteSegments.
     */
    cursor?: Prisma.VenteSegmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VenteSegments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VenteSegments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VenteSegments.
     */
    distinct?: Prisma.VenteSegmentScalarFieldEnum | Prisma.VenteSegmentScalarFieldEnum[];
};
/**
 * VenteSegment create
 */
export type VenteSegmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * The data needed to create a VenteSegment.
     */
    data: Prisma.XOR<Prisma.VenteSegmentCreateInput, Prisma.VenteSegmentUncheckedCreateInput>;
};
/**
 * VenteSegment createMany
 */
export type VenteSegmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenteSegments.
     */
    data: Prisma.VenteSegmentCreateManyInput | Prisma.VenteSegmentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VenteSegment createManyAndReturn
 */
export type VenteSegmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * The data used to create many VenteSegments.
     */
    data: Prisma.VenteSegmentCreateManyInput | Prisma.VenteSegmentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VenteSegment update
 */
export type VenteSegmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * The data needed to update a VenteSegment.
     */
    data: Prisma.XOR<Prisma.VenteSegmentUpdateInput, Prisma.VenteSegmentUncheckedUpdateInput>;
    /**
     * Choose, which VenteSegment to update.
     */
    where: Prisma.VenteSegmentWhereUniqueInput;
};
/**
 * VenteSegment updateMany
 */
export type VenteSegmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VenteSegments.
     */
    data: Prisma.XOR<Prisma.VenteSegmentUpdateManyMutationInput, Prisma.VenteSegmentUncheckedUpdateManyInput>;
    /**
     * Filter which VenteSegments to update
     */
    where?: Prisma.VenteSegmentWhereInput;
    /**
     * Limit how many VenteSegments to update.
     */
    limit?: number;
};
/**
 * VenteSegment updateManyAndReturn
 */
export type VenteSegmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * The data used to update VenteSegments.
     */
    data: Prisma.XOR<Prisma.VenteSegmentUpdateManyMutationInput, Prisma.VenteSegmentUncheckedUpdateManyInput>;
    /**
     * Filter which VenteSegments to update
     */
    where?: Prisma.VenteSegmentWhereInput;
    /**
     * Limit how many VenteSegments to update.
     */
    limit?: number;
};
/**
 * VenteSegment upsert
 */
export type VenteSegmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * The filter to search for the VenteSegment to update in case it exists.
     */
    where: Prisma.VenteSegmentWhereUniqueInput;
    /**
     * In case the VenteSegment found by the `where` argument doesn't exist, create a new VenteSegment with this data.
     */
    create: Prisma.XOR<Prisma.VenteSegmentCreateInput, Prisma.VenteSegmentUncheckedCreateInput>;
    /**
     * In case the VenteSegment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VenteSegmentUpdateInput, Prisma.VenteSegmentUncheckedUpdateInput>;
};
/**
 * VenteSegment delete
 */
export type VenteSegmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
    /**
     * Filter which VenteSegment to delete.
     */
    where: Prisma.VenteSegmentWhereUniqueInput;
};
/**
 * VenteSegment deleteMany
 */
export type VenteSegmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VenteSegments to delete
     */
    where?: Prisma.VenteSegmentWhereInput;
    /**
     * Limit how many VenteSegments to delete.
     */
    limit?: number;
};
/**
 * VenteSegment without action
 */
export type VenteSegmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenteSegment
     */
    select?: Prisma.VenteSegmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VenteSegment
     */
    omit?: Prisma.VenteSegmentOmit<ExtArgs> | null;
};
//# sourceMappingURL=VenteSegment.d.ts.map