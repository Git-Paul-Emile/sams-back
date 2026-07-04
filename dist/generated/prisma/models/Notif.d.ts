import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Notif
 *
 */
export type NotifModel = runtime.Types.Result.DefaultSelection<Prisma.$NotifPayload>;
export type AggregateNotif = {
    _count: NotifCountAggregateOutputType | null;
    _min: NotifMinAggregateOutputType | null;
    _max: NotifMaxAggregateOutputType | null;
};
export type NotifMinAggregateOutputType = {
    id: string | null;
    type: string | null;
    titre: string | null;
    msg: string | null;
    lu: boolean | null;
    createdAt: Date | null;
};
export type NotifMaxAggregateOutputType = {
    id: string | null;
    type: string | null;
    titre: string | null;
    msg: string | null;
    lu: boolean | null;
    createdAt: Date | null;
};
export type NotifCountAggregateOutputType = {
    id: number;
    type: number;
    titre: number;
    msg: number;
    lu: number;
    createdAt: number;
    _all: number;
};
export type NotifMinAggregateInputType = {
    id?: true;
    type?: true;
    titre?: true;
    msg?: true;
    lu?: true;
    createdAt?: true;
};
export type NotifMaxAggregateInputType = {
    id?: true;
    type?: true;
    titre?: true;
    msg?: true;
    lu?: true;
    createdAt?: true;
};
export type NotifCountAggregateInputType = {
    id?: true;
    type?: true;
    titre?: true;
    msg?: true;
    lu?: true;
    createdAt?: true;
    _all?: true;
};
export type NotifAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Notif to aggregate.
     */
    where?: Prisma.NotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifs to fetch.
     */
    orderBy?: Prisma.NotifOrderByWithRelationInput | Prisma.NotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.NotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifs
    **/
    _count?: true | NotifCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NotifMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NotifMaxAggregateInputType;
};
export type GetNotifAggregateType<T extends NotifAggregateArgs> = {
    [P in keyof T & keyof AggregateNotif]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotif[P]> : Prisma.GetScalarType<T[P], AggregateNotif[P]>;
};
export type NotifGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotifWhereInput;
    orderBy?: Prisma.NotifOrderByWithAggregationInput | Prisma.NotifOrderByWithAggregationInput[];
    by: Prisma.NotifScalarFieldEnum[] | Prisma.NotifScalarFieldEnum;
    having?: Prisma.NotifScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotifCountAggregateInputType | true;
    _min?: NotifMinAggregateInputType;
    _max?: NotifMaxAggregateInputType;
};
export type NotifGroupByOutputType = {
    id: string;
    type: string;
    titre: string;
    msg: string;
    lu: boolean;
    createdAt: Date;
    _count: NotifCountAggregateOutputType | null;
    _min: NotifMinAggregateOutputType | null;
    _max: NotifMaxAggregateOutputType | null;
};
export type GetNotifGroupByPayload<T extends NotifGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotifGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotifGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotifGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotifGroupByOutputType[P]>;
}>>;
export type NotifWhereInput = {
    AND?: Prisma.NotifWhereInput | Prisma.NotifWhereInput[];
    OR?: Prisma.NotifWhereInput[];
    NOT?: Prisma.NotifWhereInput | Prisma.NotifWhereInput[];
    id?: Prisma.StringFilter<"Notif"> | string;
    type?: Prisma.StringFilter<"Notif"> | string;
    titre?: Prisma.StringFilter<"Notif"> | string;
    msg?: Prisma.StringFilter<"Notif"> | string;
    lu?: Prisma.BoolFilter<"Notif"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notif"> | Date | string;
};
export type NotifOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotifWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NotifWhereInput | Prisma.NotifWhereInput[];
    OR?: Prisma.NotifWhereInput[];
    NOT?: Prisma.NotifWhereInput | Prisma.NotifWhereInput[];
    type?: Prisma.StringFilter<"Notif"> | string;
    titre?: Prisma.StringFilter<"Notif"> | string;
    msg?: Prisma.StringFilter<"Notif"> | string;
    lu?: Prisma.BoolFilter<"Notif"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Notif"> | Date | string;
}, "id">;
export type NotifOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.NotifCountOrderByAggregateInput;
    _max?: Prisma.NotifMaxOrderByAggregateInput;
    _min?: Prisma.NotifMinOrderByAggregateInput;
};
export type NotifScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotifScalarWhereWithAggregatesInput | Prisma.NotifScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotifScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotifScalarWhereWithAggregatesInput | Prisma.NotifScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Notif"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Notif"> | string;
    titre?: Prisma.StringWithAggregatesFilter<"Notif"> | string;
    msg?: Prisma.StringWithAggregatesFilter<"Notif"> | string;
    lu?: Prisma.BoolWithAggregatesFilter<"Notif"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Notif"> | Date | string;
};
export type NotifCreateInput = {
    id?: string;
    type: string;
    titre: string;
    msg: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type NotifUncheckedCreateInput = {
    id?: string;
    type: string;
    titre: string;
    msg: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type NotifUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotifUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotifCreateManyInput = {
    id?: string;
    type: string;
    titre: string;
    msg: string;
    lu?: boolean;
    createdAt?: Date | string;
};
export type NotifUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotifUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    msg?: Prisma.StringFieldUpdateOperationsInput | string;
    lu?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotifCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotifMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotifMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    lu?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotifSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    titre?: boolean;
    msg?: boolean;
    lu?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["notif"]>;
export type NotifSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    titre?: boolean;
    msg?: boolean;
    lu?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["notif"]>;
export type NotifSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    titre?: boolean;
    msg?: boolean;
    lu?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["notif"]>;
export type NotifSelectScalar = {
    id?: boolean;
    type?: boolean;
    titre?: boolean;
    msg?: boolean;
    lu?: boolean;
    createdAt?: boolean;
};
export type NotifOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "titre" | "msg" | "lu" | "createdAt", ExtArgs["result"]["notif"]>;
export type $NotifPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notif";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: string;
        titre: string;
        msg: string;
        lu: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["notif"]>;
    composites: {};
};
export type NotifGetPayload<S extends boolean | null | undefined | NotifDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotifPayload, S>;
export type NotifCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotifFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotifCountAggregateInputType | true;
};
export interface NotifDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notif'];
        meta: {
            name: 'Notif';
        };
    };
    /**
     * Find zero or one Notif that matches the filter.
     * @param {NotifFindUniqueArgs} args - Arguments to find a Notif
     * @example
     * // Get one Notif
     * const notif = await prisma.notif.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotifFindUniqueArgs>(args: Prisma.SelectSubset<T, NotifFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Notif that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotifFindUniqueOrThrowArgs} args - Arguments to find a Notif
     * @example
     * // Get one Notif
     * const notif = await prisma.notif.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotifFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotifFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Notif that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifFindFirstArgs} args - Arguments to find a Notif
     * @example
     * // Get one Notif
     * const notif = await prisma.notif.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotifFindFirstArgs>(args?: Prisma.SelectSubset<T, NotifFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Notif that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifFindFirstOrThrowArgs} args - Arguments to find a Notif
     * @example
     * // Get one Notif
     * const notif = await prisma.notif.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotifFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotifFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Notifs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifs
     * const notifs = await prisma.notif.findMany()
     *
     * // Get first 10 Notifs
     * const notifs = await prisma.notif.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notifWithIdOnly = await prisma.notif.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotifFindManyArgs>(args?: Prisma.SelectSubset<T, NotifFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Notif.
     * @param {NotifCreateArgs} args - Arguments to create a Notif.
     * @example
     * // Create one Notif
     * const Notif = await prisma.notif.create({
     *   data: {
     *     // ... data to create a Notif
     *   }
     * })
     *
     */
    create<T extends NotifCreateArgs>(args: Prisma.SelectSubset<T, NotifCreateArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Notifs.
     * @param {NotifCreateManyArgs} args - Arguments to create many Notifs.
     * @example
     * // Create many Notifs
     * const notif = await prisma.notif.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotifCreateManyArgs>(args?: Prisma.SelectSubset<T, NotifCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Notifs and returns the data saved in the database.
     * @param {NotifCreateManyAndReturnArgs} args - Arguments to create many Notifs.
     * @example
     * // Create many Notifs
     * const notif = await prisma.notif.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifs and only return the `id`
     * const notifWithIdOnly = await prisma.notif.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotifCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotifCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Notif.
     * @param {NotifDeleteArgs} args - Arguments to delete one Notif.
     * @example
     * // Delete one Notif
     * const Notif = await prisma.notif.delete({
     *   where: {
     *     // ... filter to delete one Notif
     *   }
     * })
     *
     */
    delete<T extends NotifDeleteArgs>(args: Prisma.SelectSubset<T, NotifDeleteArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Notif.
     * @param {NotifUpdateArgs} args - Arguments to update one Notif.
     * @example
     * // Update one Notif
     * const notif = await prisma.notif.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotifUpdateArgs>(args: Prisma.SelectSubset<T, NotifUpdateArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Notifs.
     * @param {NotifDeleteManyArgs} args - Arguments to filter Notifs to delete.
     * @example
     * // Delete a few Notifs
     * const { count } = await prisma.notif.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotifDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotifDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Notifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifs
     * const notif = await prisma.notif.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotifUpdateManyArgs>(args: Prisma.SelectSubset<T, NotifUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Notifs and returns the data updated in the database.
     * @param {NotifUpdateManyAndReturnArgs} args - Arguments to update many Notifs.
     * @example
     * // Update many Notifs
     * const notif = await prisma.notif.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifs and only return the `id`
     * const notifWithIdOnly = await prisma.notif.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotifUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotifUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Notif.
     * @param {NotifUpsertArgs} args - Arguments to update or create a Notif.
     * @example
     * // Update or create a Notif
     * const notif = await prisma.notif.upsert({
     *   create: {
     *     // ... data to create a Notif
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notif we want to update
     *   }
     * })
     */
    upsert<T extends NotifUpsertArgs>(args: Prisma.SelectSubset<T, NotifUpsertArgs<ExtArgs>>): Prisma.Prisma__NotifClient<runtime.Types.Result.GetResult<Prisma.$NotifPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Notifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifCountArgs} args - Arguments to filter Notifs to count.
     * @example
     * // Count the number of Notifs
     * const count = await prisma.notif.count({
     *   where: {
     *     // ... the filter for the Notifs we want to count
     *   }
     * })
    **/
    count<T extends NotifCountArgs>(args?: Prisma.Subset<T, NotifCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotifCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Notif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotifAggregateArgs>(args: Prisma.Subset<T, NotifAggregateArgs>): Prisma.PrismaPromise<GetNotifAggregateType<T>>;
    /**
     * Group by Notif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifGroupByArgs} args - Group by arguments.
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
    groupBy<T extends NotifGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotifGroupByArgs['orderBy'];
    } : {
        orderBy?: NotifGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotifGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotifGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notif model
     */
    readonly fields: NotifFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Notif.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__NotifClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the Notif model
 */
export interface NotifFieldRefs {
    readonly id: Prisma.FieldRef<"Notif", 'String'>;
    readonly type: Prisma.FieldRef<"Notif", 'String'>;
    readonly titre: Prisma.FieldRef<"Notif", 'String'>;
    readonly msg: Prisma.FieldRef<"Notif", 'String'>;
    readonly lu: Prisma.FieldRef<"Notif", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Notif", 'DateTime'>;
}
/**
 * Notif findUnique
 */
export type NotifFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * Filter, which Notif to fetch.
     */
    where: Prisma.NotifWhereUniqueInput;
};
/**
 * Notif findUniqueOrThrow
 */
export type NotifFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * Filter, which Notif to fetch.
     */
    where: Prisma.NotifWhereUniqueInput;
};
/**
 * Notif findFirst
 */
export type NotifFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * Filter, which Notif to fetch.
     */
    where?: Prisma.NotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifs to fetch.
     */
    orderBy?: Prisma.NotifOrderByWithRelationInput | Prisma.NotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifs.
     */
    cursor?: Prisma.NotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifs.
     */
    distinct?: Prisma.NotifScalarFieldEnum | Prisma.NotifScalarFieldEnum[];
};
/**
 * Notif findFirstOrThrow
 */
export type NotifFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * Filter, which Notif to fetch.
     */
    where?: Prisma.NotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifs to fetch.
     */
    orderBy?: Prisma.NotifOrderByWithRelationInput | Prisma.NotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifs.
     */
    cursor?: Prisma.NotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifs.
     */
    distinct?: Prisma.NotifScalarFieldEnum | Prisma.NotifScalarFieldEnum[];
};
/**
 * Notif findMany
 */
export type NotifFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * Filter, which Notifs to fetch.
     */
    where?: Prisma.NotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifs to fetch.
     */
    orderBy?: Prisma.NotifOrderByWithRelationInput | Prisma.NotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifs.
     */
    cursor?: Prisma.NotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifs.
     */
    distinct?: Prisma.NotifScalarFieldEnum | Prisma.NotifScalarFieldEnum[];
};
/**
 * Notif create
 */
export type NotifCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * The data needed to create a Notif.
     */
    data: Prisma.XOR<Prisma.NotifCreateInput, Prisma.NotifUncheckedCreateInput>;
};
/**
 * Notif createMany
 */
export type NotifCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifs.
     */
    data: Prisma.NotifCreateManyInput | Prisma.NotifCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Notif createManyAndReturn
 */
export type NotifCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * The data used to create many Notifs.
     */
    data: Prisma.NotifCreateManyInput | Prisma.NotifCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Notif update
 */
export type NotifUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * The data needed to update a Notif.
     */
    data: Prisma.XOR<Prisma.NotifUpdateInput, Prisma.NotifUncheckedUpdateInput>;
    /**
     * Choose, which Notif to update.
     */
    where: Prisma.NotifWhereUniqueInput;
};
/**
 * Notif updateMany
 */
export type NotifUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifs.
     */
    data: Prisma.XOR<Prisma.NotifUpdateManyMutationInput, Prisma.NotifUncheckedUpdateManyInput>;
    /**
     * Filter which Notifs to update
     */
    where?: Prisma.NotifWhereInput;
    /**
     * Limit how many Notifs to update.
     */
    limit?: number;
};
/**
 * Notif updateManyAndReturn
 */
export type NotifUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * The data used to update Notifs.
     */
    data: Prisma.XOR<Prisma.NotifUpdateManyMutationInput, Prisma.NotifUncheckedUpdateManyInput>;
    /**
     * Filter which Notifs to update
     */
    where?: Prisma.NotifWhereInput;
    /**
     * Limit how many Notifs to update.
     */
    limit?: number;
};
/**
 * Notif upsert
 */
export type NotifUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * The filter to search for the Notif to update in case it exists.
     */
    where: Prisma.NotifWhereUniqueInput;
    /**
     * In case the Notif found by the `where` argument doesn't exist, create a new Notif with this data.
     */
    create: Prisma.XOR<Prisma.NotifCreateInput, Prisma.NotifUncheckedCreateInput>;
    /**
     * In case the Notif was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.NotifUpdateInput, Prisma.NotifUncheckedUpdateInput>;
};
/**
 * Notif delete
 */
export type NotifDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
    /**
     * Filter which Notif to delete.
     */
    where: Prisma.NotifWhereUniqueInput;
};
/**
 * Notif deleteMany
 */
export type NotifDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Notifs to delete
     */
    where?: Prisma.NotifWhereInput;
    /**
     * Limit how many Notifs to delete.
     */
    limit?: number;
};
/**
 * Notif without action
 */
export type NotifDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notif
     */
    select?: Prisma.NotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notif
     */
    omit?: Prisma.NotifOmit<ExtArgs> | null;
};
//# sourceMappingURL=Notif.d.ts.map