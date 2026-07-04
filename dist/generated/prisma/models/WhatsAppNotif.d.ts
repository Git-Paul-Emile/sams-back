import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model WhatsAppNotif
 *
 */
export type WhatsAppNotifModel = runtime.Types.Result.DefaultSelection<Prisma.$WhatsAppNotifPayload>;
export type AggregateWhatsAppNotif = {
    _count: WhatsAppNotifCountAggregateOutputType | null;
    _min: WhatsAppNotifMinAggregateOutputType | null;
    _max: WhatsAppNotifMaxAggregateOutputType | null;
};
export type WhatsAppNotifMinAggregateOutputType = {
    id: string | null;
    to: string | null;
    msg: string | null;
    eventType: string | null;
    category: string | null;
    deepLink: string | null;
    statut: string | null;
    createdAt: Date | null;
};
export type WhatsAppNotifMaxAggregateOutputType = {
    id: string | null;
    to: string | null;
    msg: string | null;
    eventType: string | null;
    category: string | null;
    deepLink: string | null;
    statut: string | null;
    createdAt: Date | null;
};
export type WhatsAppNotifCountAggregateOutputType = {
    id: number;
    to: number;
    msg: number;
    eventType: number;
    category: number;
    deepLink: number;
    statut: number;
    createdAt: number;
    _all: number;
};
export type WhatsAppNotifMinAggregateInputType = {
    id?: true;
    to?: true;
    msg?: true;
    eventType?: true;
    category?: true;
    deepLink?: true;
    statut?: true;
    createdAt?: true;
};
export type WhatsAppNotifMaxAggregateInputType = {
    id?: true;
    to?: true;
    msg?: true;
    eventType?: true;
    category?: true;
    deepLink?: true;
    statut?: true;
    createdAt?: true;
};
export type WhatsAppNotifCountAggregateInputType = {
    id?: true;
    to?: true;
    msg?: true;
    eventType?: true;
    category?: true;
    deepLink?: true;
    statut?: true;
    createdAt?: true;
    _all?: true;
};
export type WhatsAppNotifAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppNotif to aggregate.
     */
    where?: Prisma.WhatsAppNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WhatsAppNotifs to fetch.
     */
    orderBy?: Prisma.WhatsAppNotifOrderByWithRelationInput | Prisma.WhatsAppNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WhatsAppNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WhatsAppNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WhatsAppNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WhatsAppNotifs
    **/
    _count?: true | WhatsAppNotifCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppNotifMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppNotifMaxAggregateInputType;
};
export type GetWhatsAppNotifAggregateType<T extends WhatsAppNotifAggregateArgs> = {
    [P in keyof T & keyof AggregateWhatsAppNotif]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWhatsAppNotif[P]> : Prisma.GetScalarType<T[P], AggregateWhatsAppNotif[P]>;
};
export type WhatsAppNotifGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WhatsAppNotifWhereInput;
    orderBy?: Prisma.WhatsAppNotifOrderByWithAggregationInput | Prisma.WhatsAppNotifOrderByWithAggregationInput[];
    by: Prisma.WhatsAppNotifScalarFieldEnum[] | Prisma.WhatsAppNotifScalarFieldEnum;
    having?: Prisma.WhatsAppNotifScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WhatsAppNotifCountAggregateInputType | true;
    _min?: WhatsAppNotifMinAggregateInputType;
    _max?: WhatsAppNotifMaxAggregateInputType;
};
export type WhatsAppNotifGroupByOutputType = {
    id: string;
    to: string;
    msg: string;
    eventType: string | null;
    category: string | null;
    deepLink: string | null;
    statut: string | null;
    createdAt: Date;
    _count: WhatsAppNotifCountAggregateOutputType | null;
    _min: WhatsAppNotifMinAggregateOutputType | null;
    _max: WhatsAppNotifMaxAggregateOutputType | null;
};
export type GetWhatsAppNotifGroupByPayload<T extends WhatsAppNotifGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WhatsAppNotifGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WhatsAppNotifGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WhatsAppNotifGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WhatsAppNotifGroupByOutputType[P]>;
}>>;
export type WhatsAppNotifWhereInput = {
    AND?: Prisma.WhatsAppNotifWhereInput | Prisma.WhatsAppNotifWhereInput[];
    OR?: Prisma.WhatsAppNotifWhereInput[];
    NOT?: Prisma.WhatsAppNotifWhereInput | Prisma.WhatsAppNotifWhereInput[];
    id?: Prisma.StringFilter<"WhatsAppNotif"> | string;
    to?: Prisma.StringFilter<"WhatsAppNotif"> | string;
    msg?: Prisma.StringFilter<"WhatsAppNotif"> | string;
    eventType?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    category?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    deepLink?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    statut?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppNotif"> | Date | string;
};
export type WhatsAppNotifOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    eventType?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    deepLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsAppNotifWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WhatsAppNotifWhereInput | Prisma.WhatsAppNotifWhereInput[];
    OR?: Prisma.WhatsAppNotifWhereInput[];
    NOT?: Prisma.WhatsAppNotifWhereInput | Prisma.WhatsAppNotifWhereInput[];
    to?: Prisma.StringFilter<"WhatsAppNotif"> | string;
    msg?: Prisma.StringFilter<"WhatsAppNotif"> | string;
    eventType?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    category?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    deepLink?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    statut?: Prisma.StringNullableFilter<"WhatsAppNotif"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WhatsAppNotif"> | Date | string;
}, "id">;
export type WhatsAppNotifOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    eventType?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    deepLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WhatsAppNotifCountOrderByAggregateInput;
    _max?: Prisma.WhatsAppNotifMaxOrderByAggregateInput;
    _min?: Prisma.WhatsAppNotifMinOrderByAggregateInput;
};
export type WhatsAppNotifScalarWhereWithAggregatesInput = {
    AND?: Prisma.WhatsAppNotifScalarWhereWithAggregatesInput | Prisma.WhatsAppNotifScalarWhereWithAggregatesInput[];
    OR?: Prisma.WhatsAppNotifScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WhatsAppNotifScalarWhereWithAggregatesInput | Prisma.WhatsAppNotifScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WhatsAppNotif"> | string;
    to?: Prisma.StringWithAggregatesFilter<"WhatsAppNotif"> | string;
    msg?: Prisma.StringWithAggregatesFilter<"WhatsAppNotif"> | string;
    eventType?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppNotif"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppNotif"> | string | null;
    deepLink?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppNotif"> | string | null;
    statut?: Prisma.StringNullableWithAggregatesFilter<"WhatsAppNotif"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WhatsAppNotif"> | Date | string;
};
export type WhatsAppNotifCreateInput = {
    id?: string;
    to: string;
    msg: string;
    eventType?: string | null;
    category?: string | null;
    deepLink?: string | null;
    statut?: string | null;
    createdAt?: Date | string;
};
export type WhatsAppNotifUncheckedCreateInput = {
    id?: string;
    to: string;
    msg: string;
    eventType?: string | null;
    category?: string | null;
    deepLink?: string | null;
    statut?: string | null;
    createdAt?: Date | string;
};
export type WhatsAppNotifUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deepLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppNotifUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deepLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppNotifCreateManyInput = {
    id?: string;
    to: string;
    msg: string;
    eventType?: string | null;
    category?: string | null;
    deepLink?: string | null;
    statut?: string | null;
    createdAt?: Date | string;
};
export type WhatsAppNotifUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deepLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppNotifUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deepLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WhatsAppNotifCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    deepLink?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsAppNotifMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    deepLink?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsAppNotifMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    deepLink?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WhatsAppNotifSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    to?: boolean;
    msg?: boolean;
    eventType?: boolean;
    category?: boolean;
    deepLink?: boolean;
    statut?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["whatsAppNotif"]>;
export type WhatsAppNotifSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    to?: boolean;
    msg?: boolean;
    eventType?: boolean;
    category?: boolean;
    deepLink?: boolean;
    statut?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["whatsAppNotif"]>;
export type WhatsAppNotifSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    to?: boolean;
    msg?: boolean;
    eventType?: boolean;
    category?: boolean;
    deepLink?: boolean;
    statut?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["whatsAppNotif"]>;
export type WhatsAppNotifSelectScalar = {
    id?: boolean;
    to?: boolean;
    msg?: boolean;
    eventType?: boolean;
    category?: boolean;
    deepLink?: boolean;
    statut?: boolean;
    createdAt?: boolean;
};
export type WhatsAppNotifOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "to" | "msg" | "eventType" | "category" | "deepLink" | "statut" | "createdAt", ExtArgs["result"]["whatsAppNotif"]>;
export type $WhatsAppNotifPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WhatsAppNotif";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        to: string;
        msg: string;
        eventType: string | null;
        category: string | null;
        deepLink: string | null;
        statut: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["whatsAppNotif"]>;
    composites: {};
};
export type WhatsAppNotifGetPayload<S extends boolean | null | undefined | WhatsAppNotifDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload, S>;
export type WhatsAppNotifCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WhatsAppNotifFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WhatsAppNotifCountAggregateInputType | true;
};
export interface WhatsAppNotifDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppNotif'];
        meta: {
            name: 'WhatsAppNotif';
        };
    };
    /**
     * Find zero or one WhatsAppNotif that matches the filter.
     * @param {WhatsAppNotifFindUniqueArgs} args - Arguments to find a WhatsAppNotif
     * @example
     * // Get one WhatsAppNotif
     * const whatsAppNotif = await prisma.whatsAppNotif.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppNotifFindUniqueArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WhatsAppNotif that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppNotifFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppNotif
     * @example
     * // Get one WhatsAppNotif
     * const whatsAppNotif = await prisma.whatsAppNotif.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppNotifFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WhatsAppNotif that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNotifFindFirstArgs} args - Arguments to find a WhatsAppNotif
     * @example
     * // Get one WhatsAppNotif
     * const whatsAppNotif = await prisma.whatsAppNotif.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppNotifFindFirstArgs>(args?: Prisma.SelectSubset<T, WhatsAppNotifFindFirstArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WhatsAppNotif that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNotifFindFirstOrThrowArgs} args - Arguments to find a WhatsAppNotif
     * @example
     * // Get one WhatsAppNotif
     * const whatsAppNotif = await prisma.whatsAppNotif.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppNotifFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WhatsAppNotifFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WhatsAppNotifs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNotifFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppNotifs
     * const whatsAppNotifs = await prisma.whatsAppNotif.findMany()
     *
     * // Get first 10 WhatsAppNotifs
     * const whatsAppNotifs = await prisma.whatsAppNotif.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const whatsAppNotifWithIdOnly = await prisma.whatsAppNotif.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WhatsAppNotifFindManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppNotifFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WhatsAppNotif.
     * @param {WhatsAppNotifCreateArgs} args - Arguments to create a WhatsAppNotif.
     * @example
     * // Create one WhatsAppNotif
     * const WhatsAppNotif = await prisma.whatsAppNotif.create({
     *   data: {
     *     // ... data to create a WhatsAppNotif
     *   }
     * })
     *
     */
    create<T extends WhatsAppNotifCreateArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifCreateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WhatsAppNotifs.
     * @param {WhatsAppNotifCreateManyArgs} args - Arguments to create many WhatsAppNotifs.
     * @example
     * // Create many WhatsAppNotifs
     * const whatsAppNotif = await prisma.whatsAppNotif.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WhatsAppNotifCreateManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppNotifCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WhatsAppNotifs and returns the data saved in the database.
     * @param {WhatsAppNotifCreateManyAndReturnArgs} args - Arguments to create many WhatsAppNotifs.
     * @example
     * // Create many WhatsAppNotifs
     * const whatsAppNotif = await prisma.whatsAppNotif.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WhatsAppNotifs and only return the `id`
     * const whatsAppNotifWithIdOnly = await prisma.whatsAppNotif.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WhatsAppNotifCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WhatsAppNotifCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WhatsAppNotif.
     * @param {WhatsAppNotifDeleteArgs} args - Arguments to delete one WhatsAppNotif.
     * @example
     * // Delete one WhatsAppNotif
     * const WhatsAppNotif = await prisma.whatsAppNotif.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppNotif
     *   }
     * })
     *
     */
    delete<T extends WhatsAppNotifDeleteArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifDeleteArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WhatsAppNotif.
     * @param {WhatsAppNotifUpdateArgs} args - Arguments to update one WhatsAppNotif.
     * @example
     * // Update one WhatsAppNotif
     * const whatsAppNotif = await prisma.whatsAppNotif.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WhatsAppNotifUpdateArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifUpdateArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WhatsAppNotifs.
     * @param {WhatsAppNotifDeleteManyArgs} args - Arguments to filter WhatsAppNotifs to delete.
     * @example
     * // Delete a few WhatsAppNotifs
     * const { count } = await prisma.whatsAppNotif.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WhatsAppNotifDeleteManyArgs>(args?: Prisma.SelectSubset<T, WhatsAppNotifDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WhatsAppNotifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNotifUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppNotifs
     * const whatsAppNotif = await prisma.whatsAppNotif.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WhatsAppNotifUpdateManyArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WhatsAppNotifs and returns the data updated in the database.
     * @param {WhatsAppNotifUpdateManyAndReturnArgs} args - Arguments to update many WhatsAppNotifs.
     * @example
     * // Update many WhatsAppNotifs
     * const whatsAppNotif = await prisma.whatsAppNotif.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WhatsAppNotifs and only return the `id`
     * const whatsAppNotifWithIdOnly = await prisma.whatsAppNotif.updateManyAndReturn({
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
    updateManyAndReturn<T extends WhatsAppNotifUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WhatsAppNotif.
     * @param {WhatsAppNotifUpsertArgs} args - Arguments to update or create a WhatsAppNotif.
     * @example
     * // Update or create a WhatsAppNotif
     * const whatsAppNotif = await prisma.whatsAppNotif.upsert({
     *   create: {
     *     // ... data to create a WhatsAppNotif
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppNotif we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppNotifUpsertArgs>(args: Prisma.SelectSubset<T, WhatsAppNotifUpsertArgs<ExtArgs>>): Prisma.Prisma__WhatsAppNotifClient<runtime.Types.Result.GetResult<Prisma.$WhatsAppNotifPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WhatsAppNotifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNotifCountArgs} args - Arguments to filter WhatsAppNotifs to count.
     * @example
     * // Count the number of WhatsAppNotifs
     * const count = await prisma.whatsAppNotif.count({
     *   where: {
     *     // ... the filter for the WhatsAppNotifs we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppNotifCountArgs>(args?: Prisma.Subset<T, WhatsAppNotifCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WhatsAppNotifCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WhatsAppNotif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNotifAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhatsAppNotifAggregateArgs>(args: Prisma.Subset<T, WhatsAppNotifAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppNotifAggregateType<T>>;
    /**
     * Group by WhatsAppNotif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppNotifGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WhatsAppNotifGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WhatsAppNotifGroupByArgs['orderBy'];
    } : {
        orderBy?: WhatsAppNotifGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WhatsAppNotifGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppNotifGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WhatsAppNotif model
     */
    readonly fields: WhatsAppNotifFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WhatsAppNotif.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WhatsAppNotifClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the WhatsAppNotif model
 */
export interface WhatsAppNotifFieldRefs {
    readonly id: Prisma.FieldRef<"WhatsAppNotif", 'String'>;
    readonly to: Prisma.FieldRef<"WhatsAppNotif", 'String'>;
    readonly msg: Prisma.FieldRef<"WhatsAppNotif", 'String'>;
    readonly eventType: Prisma.FieldRef<"WhatsAppNotif", 'String'>;
    readonly category: Prisma.FieldRef<"WhatsAppNotif", 'String'>;
    readonly deepLink: Prisma.FieldRef<"WhatsAppNotif", 'String'>;
    readonly statut: Prisma.FieldRef<"WhatsAppNotif", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WhatsAppNotif", 'DateTime'>;
}
/**
 * WhatsAppNotif findUnique
 */
export type WhatsAppNotifFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * Filter, which WhatsAppNotif to fetch.
     */
    where: Prisma.WhatsAppNotifWhereUniqueInput;
};
/**
 * WhatsAppNotif findUniqueOrThrow
 */
export type WhatsAppNotifFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * Filter, which WhatsAppNotif to fetch.
     */
    where: Prisma.WhatsAppNotifWhereUniqueInput;
};
/**
 * WhatsAppNotif findFirst
 */
export type WhatsAppNotifFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * Filter, which WhatsAppNotif to fetch.
     */
    where?: Prisma.WhatsAppNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WhatsAppNotifs to fetch.
     */
    orderBy?: Prisma.WhatsAppNotifOrderByWithRelationInput | Prisma.WhatsAppNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WhatsAppNotifs.
     */
    cursor?: Prisma.WhatsAppNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WhatsAppNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WhatsAppNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WhatsAppNotifs.
     */
    distinct?: Prisma.WhatsAppNotifScalarFieldEnum | Prisma.WhatsAppNotifScalarFieldEnum[];
};
/**
 * WhatsAppNotif findFirstOrThrow
 */
export type WhatsAppNotifFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * Filter, which WhatsAppNotif to fetch.
     */
    where?: Prisma.WhatsAppNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WhatsAppNotifs to fetch.
     */
    orderBy?: Prisma.WhatsAppNotifOrderByWithRelationInput | Prisma.WhatsAppNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WhatsAppNotifs.
     */
    cursor?: Prisma.WhatsAppNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WhatsAppNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WhatsAppNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WhatsAppNotifs.
     */
    distinct?: Prisma.WhatsAppNotifScalarFieldEnum | Prisma.WhatsAppNotifScalarFieldEnum[];
};
/**
 * WhatsAppNotif findMany
 */
export type WhatsAppNotifFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * Filter, which WhatsAppNotifs to fetch.
     */
    where?: Prisma.WhatsAppNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WhatsAppNotifs to fetch.
     */
    orderBy?: Prisma.WhatsAppNotifOrderByWithRelationInput | Prisma.WhatsAppNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WhatsAppNotifs.
     */
    cursor?: Prisma.WhatsAppNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WhatsAppNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WhatsAppNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WhatsAppNotifs.
     */
    distinct?: Prisma.WhatsAppNotifScalarFieldEnum | Prisma.WhatsAppNotifScalarFieldEnum[];
};
/**
 * WhatsAppNotif create
 */
export type WhatsAppNotifCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * The data needed to create a WhatsAppNotif.
     */
    data: Prisma.XOR<Prisma.WhatsAppNotifCreateInput, Prisma.WhatsAppNotifUncheckedCreateInput>;
};
/**
 * WhatsAppNotif createMany
 */
export type WhatsAppNotifCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppNotifs.
     */
    data: Prisma.WhatsAppNotifCreateManyInput | Prisma.WhatsAppNotifCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WhatsAppNotif createManyAndReturn
 */
export type WhatsAppNotifCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * The data used to create many WhatsAppNotifs.
     */
    data: Prisma.WhatsAppNotifCreateManyInput | Prisma.WhatsAppNotifCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WhatsAppNotif update
 */
export type WhatsAppNotifUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * The data needed to update a WhatsAppNotif.
     */
    data: Prisma.XOR<Prisma.WhatsAppNotifUpdateInput, Prisma.WhatsAppNotifUncheckedUpdateInput>;
    /**
     * Choose, which WhatsAppNotif to update.
     */
    where: Prisma.WhatsAppNotifWhereUniqueInput;
};
/**
 * WhatsAppNotif updateMany
 */
export type WhatsAppNotifUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppNotifs.
     */
    data: Prisma.XOR<Prisma.WhatsAppNotifUpdateManyMutationInput, Prisma.WhatsAppNotifUncheckedUpdateManyInput>;
    /**
     * Filter which WhatsAppNotifs to update
     */
    where?: Prisma.WhatsAppNotifWhereInput;
    /**
     * Limit how many WhatsAppNotifs to update.
     */
    limit?: number;
};
/**
 * WhatsAppNotif updateManyAndReturn
 */
export type WhatsAppNotifUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * The data used to update WhatsAppNotifs.
     */
    data: Prisma.XOR<Prisma.WhatsAppNotifUpdateManyMutationInput, Prisma.WhatsAppNotifUncheckedUpdateManyInput>;
    /**
     * Filter which WhatsAppNotifs to update
     */
    where?: Prisma.WhatsAppNotifWhereInput;
    /**
     * Limit how many WhatsAppNotifs to update.
     */
    limit?: number;
};
/**
 * WhatsAppNotif upsert
 */
export type WhatsAppNotifUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * The filter to search for the WhatsAppNotif to update in case it exists.
     */
    where: Prisma.WhatsAppNotifWhereUniqueInput;
    /**
     * In case the WhatsAppNotif found by the `where` argument doesn't exist, create a new WhatsAppNotif with this data.
     */
    create: Prisma.XOR<Prisma.WhatsAppNotifCreateInput, Prisma.WhatsAppNotifUncheckedCreateInput>;
    /**
     * In case the WhatsAppNotif was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WhatsAppNotifUpdateInput, Prisma.WhatsAppNotifUncheckedUpdateInput>;
};
/**
 * WhatsAppNotif delete
 */
export type WhatsAppNotifDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
    /**
     * Filter which WhatsAppNotif to delete.
     */
    where: Prisma.WhatsAppNotifWhereUniqueInput;
};
/**
 * WhatsAppNotif deleteMany
 */
export type WhatsAppNotifDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppNotifs to delete
     */
    where?: Prisma.WhatsAppNotifWhereInput;
    /**
     * Limit how many WhatsAppNotifs to delete.
     */
    limit?: number;
};
/**
 * WhatsAppNotif without action
 */
export type WhatsAppNotifDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppNotif
     */
    select?: Prisma.WhatsAppNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WhatsAppNotif
     */
    omit?: Prisma.WhatsAppNotifOmit<ExtArgs> | null;
};
//# sourceMappingURL=WhatsAppNotif.d.ts.map