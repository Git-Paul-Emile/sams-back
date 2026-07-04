import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EmailNotif
 *
 */
export type EmailNotifModel = runtime.Types.Result.DefaultSelection<Prisma.$EmailNotifPayload>;
export type AggregateEmailNotif = {
    _count: EmailNotifCountAggregateOutputType | null;
    _min: EmailNotifMinAggregateOutputType | null;
    _max: EmailNotifMaxAggregateOutputType | null;
};
export type EmailNotifMinAggregateOutputType = {
    id: string | null;
    to: string | null;
    sujet: string | null;
    corps: string | null;
    statut: string | null;
    createdAt: Date | null;
};
export type EmailNotifMaxAggregateOutputType = {
    id: string | null;
    to: string | null;
    sujet: string | null;
    corps: string | null;
    statut: string | null;
    createdAt: Date | null;
};
export type EmailNotifCountAggregateOutputType = {
    id: number;
    to: number;
    sujet: number;
    corps: number;
    statut: number;
    createdAt: number;
    _all: number;
};
export type EmailNotifMinAggregateInputType = {
    id?: true;
    to?: true;
    sujet?: true;
    corps?: true;
    statut?: true;
    createdAt?: true;
};
export type EmailNotifMaxAggregateInputType = {
    id?: true;
    to?: true;
    sujet?: true;
    corps?: true;
    statut?: true;
    createdAt?: true;
};
export type EmailNotifCountAggregateInputType = {
    id?: true;
    to?: true;
    sujet?: true;
    corps?: true;
    statut?: true;
    createdAt?: true;
    _all?: true;
};
export type EmailNotifAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotif to aggregate.
     */
    where?: Prisma.EmailNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifs to fetch.
     */
    orderBy?: Prisma.EmailNotifOrderByWithRelationInput | Prisma.EmailNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EmailNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EmailNotifs
    **/
    _count?: true | EmailNotifCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EmailNotifMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EmailNotifMaxAggregateInputType;
};
export type GetEmailNotifAggregateType<T extends EmailNotifAggregateArgs> = {
    [P in keyof T & keyof AggregateEmailNotif]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmailNotif[P]> : Prisma.GetScalarType<T[P], AggregateEmailNotif[P]>;
};
export type EmailNotifGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailNotifWhereInput;
    orderBy?: Prisma.EmailNotifOrderByWithAggregationInput | Prisma.EmailNotifOrderByWithAggregationInput[];
    by: Prisma.EmailNotifScalarFieldEnum[] | Prisma.EmailNotifScalarFieldEnum;
    having?: Prisma.EmailNotifScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmailNotifCountAggregateInputType | true;
    _min?: EmailNotifMinAggregateInputType;
    _max?: EmailNotifMaxAggregateInputType;
};
export type EmailNotifGroupByOutputType = {
    id: string;
    to: string;
    sujet: string;
    corps: string | null;
    statut: string;
    createdAt: Date;
    _count: EmailNotifCountAggregateOutputType | null;
    _min: EmailNotifMinAggregateOutputType | null;
    _max: EmailNotifMaxAggregateOutputType | null;
};
export type GetEmailNotifGroupByPayload<T extends EmailNotifGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmailNotifGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmailNotifGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmailNotifGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmailNotifGroupByOutputType[P]>;
}>>;
export type EmailNotifWhereInput = {
    AND?: Prisma.EmailNotifWhereInput | Prisma.EmailNotifWhereInput[];
    OR?: Prisma.EmailNotifWhereInput[];
    NOT?: Prisma.EmailNotifWhereInput | Prisma.EmailNotifWhereInput[];
    id?: Prisma.StringFilter<"EmailNotif"> | string;
    to?: Prisma.StringFilter<"EmailNotif"> | string;
    sujet?: Prisma.StringFilter<"EmailNotif"> | string;
    corps?: Prisma.StringNullableFilter<"EmailNotif"> | string | null;
    statut?: Prisma.StringFilter<"EmailNotif"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmailNotif"> | Date | string;
};
export type EmailNotifOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    sujet?: Prisma.SortOrder;
    corps?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmailNotifWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EmailNotifWhereInput | Prisma.EmailNotifWhereInput[];
    OR?: Prisma.EmailNotifWhereInput[];
    NOT?: Prisma.EmailNotifWhereInput | Prisma.EmailNotifWhereInput[];
    to?: Prisma.StringFilter<"EmailNotif"> | string;
    sujet?: Prisma.StringFilter<"EmailNotif"> | string;
    corps?: Prisma.StringNullableFilter<"EmailNotif"> | string | null;
    statut?: Prisma.StringFilter<"EmailNotif"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmailNotif"> | Date | string;
}, "id">;
export type EmailNotifOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    sujet?: Prisma.SortOrder;
    corps?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmailNotifCountOrderByAggregateInput;
    _max?: Prisma.EmailNotifMaxOrderByAggregateInput;
    _min?: Prisma.EmailNotifMinOrderByAggregateInput;
};
export type EmailNotifScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmailNotifScalarWhereWithAggregatesInput | Prisma.EmailNotifScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmailNotifScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmailNotifScalarWhereWithAggregatesInput | Prisma.EmailNotifScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EmailNotif"> | string;
    to?: Prisma.StringWithAggregatesFilter<"EmailNotif"> | string;
    sujet?: Prisma.StringWithAggregatesFilter<"EmailNotif"> | string;
    corps?: Prisma.StringNullableWithAggregatesFilter<"EmailNotif"> | string | null;
    statut?: Prisma.StringWithAggregatesFilter<"EmailNotif"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmailNotif"> | Date | string;
};
export type EmailNotifCreateInput = {
    id?: string;
    to: string;
    sujet: string;
    corps?: string | null;
    statut?: string;
    createdAt?: Date | string;
};
export type EmailNotifUncheckedCreateInput = {
    id?: string;
    to: string;
    sujet: string;
    corps?: string | null;
    statut?: string;
    createdAt?: Date | string;
};
export type EmailNotifUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    sujet?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailNotifUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    sujet?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailNotifCreateManyInput = {
    id?: string;
    to: string;
    sujet: string;
    corps?: string | null;
    statut?: string;
    createdAt?: Date | string;
};
export type EmailNotifUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    sujet?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailNotifUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    to?: Prisma.StringFieldUpdateOperationsInput | string;
    sujet?: Prisma.StringFieldUpdateOperationsInput | string;
    corps?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailNotifCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    sujet?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmailNotifMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    sujet?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmailNotifMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    to?: Prisma.SortOrder;
    sujet?: Prisma.SortOrder;
    corps?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmailNotifSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    to?: boolean;
    sujet?: boolean;
    corps?: boolean;
    statut?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["emailNotif"]>;
export type EmailNotifSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    to?: boolean;
    sujet?: boolean;
    corps?: boolean;
    statut?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["emailNotif"]>;
export type EmailNotifSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    to?: boolean;
    sujet?: boolean;
    corps?: boolean;
    statut?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["emailNotif"]>;
export type EmailNotifSelectScalar = {
    id?: boolean;
    to?: boolean;
    sujet?: boolean;
    corps?: boolean;
    statut?: boolean;
    createdAt?: boolean;
};
export type EmailNotifOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "to" | "sujet" | "corps" | "statut" | "createdAt", ExtArgs["result"]["emailNotif"]>;
export type $EmailNotifPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmailNotif";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        to: string;
        sujet: string;
        corps: string | null;
        statut: string;
        createdAt: Date;
    }, ExtArgs["result"]["emailNotif"]>;
    composites: {};
};
export type EmailNotifGetPayload<S extends boolean | null | undefined | EmailNotifDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload, S>;
export type EmailNotifCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmailNotifFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmailNotifCountAggregateInputType | true;
};
export interface EmailNotifDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmailNotif'];
        meta: {
            name: 'EmailNotif';
        };
    };
    /**
     * Find zero or one EmailNotif that matches the filter.
     * @param {EmailNotifFindUniqueArgs} args - Arguments to find a EmailNotif
     * @example
     * // Get one EmailNotif
     * const emailNotif = await prisma.emailNotif.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailNotifFindUniqueArgs>(args: Prisma.SelectSubset<T, EmailNotifFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EmailNotif that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailNotifFindUniqueOrThrowArgs} args - Arguments to find a EmailNotif
     * @example
     * // Get one EmailNotif
     * const emailNotif = await prisma.emailNotif.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailNotifFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmailNotifFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EmailNotif that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotifFindFirstArgs} args - Arguments to find a EmailNotif
     * @example
     * // Get one EmailNotif
     * const emailNotif = await prisma.emailNotif.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailNotifFindFirstArgs>(args?: Prisma.SelectSubset<T, EmailNotifFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EmailNotif that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotifFindFirstOrThrowArgs} args - Arguments to find a EmailNotif
     * @example
     * // Get one EmailNotif
     * const emailNotif = await prisma.emailNotif.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailNotifFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmailNotifFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EmailNotifs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotifFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailNotifs
     * const emailNotifs = await prisma.emailNotif.findMany()
     *
     * // Get first 10 EmailNotifs
     * const emailNotifs = await prisma.emailNotif.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const emailNotifWithIdOnly = await prisma.emailNotif.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmailNotifFindManyArgs>(args?: Prisma.SelectSubset<T, EmailNotifFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EmailNotif.
     * @param {EmailNotifCreateArgs} args - Arguments to create a EmailNotif.
     * @example
     * // Create one EmailNotif
     * const EmailNotif = await prisma.emailNotif.create({
     *   data: {
     *     // ... data to create a EmailNotif
     *   }
     * })
     *
     */
    create<T extends EmailNotifCreateArgs>(args: Prisma.SelectSubset<T, EmailNotifCreateArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EmailNotifs.
     * @param {EmailNotifCreateManyArgs} args - Arguments to create many EmailNotifs.
     * @example
     * // Create many EmailNotifs
     * const emailNotif = await prisma.emailNotif.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmailNotifCreateManyArgs>(args?: Prisma.SelectSubset<T, EmailNotifCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EmailNotifs and returns the data saved in the database.
     * @param {EmailNotifCreateManyAndReturnArgs} args - Arguments to create many EmailNotifs.
     * @example
     * // Create many EmailNotifs
     * const emailNotif = await prisma.emailNotif.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EmailNotifs and only return the `id`
     * const emailNotifWithIdOnly = await prisma.emailNotif.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmailNotifCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmailNotifCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EmailNotif.
     * @param {EmailNotifDeleteArgs} args - Arguments to delete one EmailNotif.
     * @example
     * // Delete one EmailNotif
     * const EmailNotif = await prisma.emailNotif.delete({
     *   where: {
     *     // ... filter to delete one EmailNotif
     *   }
     * })
     *
     */
    delete<T extends EmailNotifDeleteArgs>(args: Prisma.SelectSubset<T, EmailNotifDeleteArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EmailNotif.
     * @param {EmailNotifUpdateArgs} args - Arguments to update one EmailNotif.
     * @example
     * // Update one EmailNotif
     * const emailNotif = await prisma.emailNotif.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmailNotifUpdateArgs>(args: Prisma.SelectSubset<T, EmailNotifUpdateArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EmailNotifs.
     * @param {EmailNotifDeleteManyArgs} args - Arguments to filter EmailNotifs to delete.
     * @example
     * // Delete a few EmailNotifs
     * const { count } = await prisma.emailNotif.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmailNotifDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmailNotifDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EmailNotifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotifUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailNotifs
     * const emailNotif = await prisma.emailNotif.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmailNotifUpdateManyArgs>(args: Prisma.SelectSubset<T, EmailNotifUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EmailNotifs and returns the data updated in the database.
     * @param {EmailNotifUpdateManyAndReturnArgs} args - Arguments to update many EmailNotifs.
     * @example
     * // Update many EmailNotifs
     * const emailNotif = await prisma.emailNotif.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EmailNotifs and only return the `id`
     * const emailNotifWithIdOnly = await prisma.emailNotif.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailNotifUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmailNotifUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EmailNotif.
     * @param {EmailNotifUpsertArgs} args - Arguments to update or create a EmailNotif.
     * @example
     * // Update or create a EmailNotif
     * const emailNotif = await prisma.emailNotif.upsert({
     *   create: {
     *     // ... data to create a EmailNotif
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailNotif we want to update
     *   }
     * })
     */
    upsert<T extends EmailNotifUpsertArgs>(args: Prisma.SelectSubset<T, EmailNotifUpsertArgs<ExtArgs>>): Prisma.Prisma__EmailNotifClient<runtime.Types.Result.GetResult<Prisma.$EmailNotifPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EmailNotifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotifCountArgs} args - Arguments to filter EmailNotifs to count.
     * @example
     * // Count the number of EmailNotifs
     * const count = await prisma.emailNotif.count({
     *   where: {
     *     // ... the filter for the EmailNotifs we want to count
     *   }
     * })
    **/
    count<T extends EmailNotifCountArgs>(args?: Prisma.Subset<T, EmailNotifCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmailNotifCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EmailNotif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotifAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailNotifAggregateArgs>(args: Prisma.Subset<T, EmailNotifAggregateArgs>): Prisma.PrismaPromise<GetEmailNotifAggregateType<T>>;
    /**
     * Group by EmailNotif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotifGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EmailNotifGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmailNotifGroupByArgs['orderBy'];
    } : {
        orderBy?: EmailNotifGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmailNotifGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailNotifGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EmailNotif model
     */
    readonly fields: EmailNotifFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EmailNotif.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EmailNotifClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the EmailNotif model
 */
export interface EmailNotifFieldRefs {
    readonly id: Prisma.FieldRef<"EmailNotif", 'String'>;
    readonly to: Prisma.FieldRef<"EmailNotif", 'String'>;
    readonly sujet: Prisma.FieldRef<"EmailNotif", 'String'>;
    readonly corps: Prisma.FieldRef<"EmailNotif", 'String'>;
    readonly statut: Prisma.FieldRef<"EmailNotif", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmailNotif", 'DateTime'>;
}
/**
 * EmailNotif findUnique
 */
export type EmailNotifFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotif to fetch.
     */
    where: Prisma.EmailNotifWhereUniqueInput;
};
/**
 * EmailNotif findUniqueOrThrow
 */
export type EmailNotifFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotif to fetch.
     */
    where: Prisma.EmailNotifWhereUniqueInput;
};
/**
 * EmailNotif findFirst
 */
export type EmailNotifFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotif to fetch.
     */
    where?: Prisma.EmailNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifs to fetch.
     */
    orderBy?: Prisma.EmailNotifOrderByWithRelationInput | Prisma.EmailNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailNotifs.
     */
    cursor?: Prisma.EmailNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailNotifs.
     */
    distinct?: Prisma.EmailNotifScalarFieldEnum | Prisma.EmailNotifScalarFieldEnum[];
};
/**
 * EmailNotif findFirstOrThrow
 */
export type EmailNotifFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotif to fetch.
     */
    where?: Prisma.EmailNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifs to fetch.
     */
    orderBy?: Prisma.EmailNotifOrderByWithRelationInput | Prisma.EmailNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmailNotifs.
     */
    cursor?: Prisma.EmailNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailNotifs.
     */
    distinct?: Prisma.EmailNotifScalarFieldEnum | Prisma.EmailNotifScalarFieldEnum[];
};
/**
 * EmailNotif findMany
 */
export type EmailNotifFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * Filter, which EmailNotifs to fetch.
     */
    where?: Prisma.EmailNotifWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmailNotifs to fetch.
     */
    orderBy?: Prisma.EmailNotifOrderByWithRelationInput | Prisma.EmailNotifOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EmailNotifs.
     */
    cursor?: Prisma.EmailNotifWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmailNotifs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmailNotifs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmailNotifs.
     */
    distinct?: Prisma.EmailNotifScalarFieldEnum | Prisma.EmailNotifScalarFieldEnum[];
};
/**
 * EmailNotif create
 */
export type EmailNotifCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * The data needed to create a EmailNotif.
     */
    data: Prisma.XOR<Prisma.EmailNotifCreateInput, Prisma.EmailNotifUncheckedCreateInput>;
};
/**
 * EmailNotif createMany
 */
export type EmailNotifCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailNotifs.
     */
    data: Prisma.EmailNotifCreateManyInput | Prisma.EmailNotifCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EmailNotif createManyAndReturn
 */
export type EmailNotifCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * The data used to create many EmailNotifs.
     */
    data: Prisma.EmailNotifCreateManyInput | Prisma.EmailNotifCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EmailNotif update
 */
export type EmailNotifUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * The data needed to update a EmailNotif.
     */
    data: Prisma.XOR<Prisma.EmailNotifUpdateInput, Prisma.EmailNotifUncheckedUpdateInput>;
    /**
     * Choose, which EmailNotif to update.
     */
    where: Prisma.EmailNotifWhereUniqueInput;
};
/**
 * EmailNotif updateMany
 */
export type EmailNotifUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailNotifs.
     */
    data: Prisma.XOR<Prisma.EmailNotifUpdateManyMutationInput, Prisma.EmailNotifUncheckedUpdateManyInput>;
    /**
     * Filter which EmailNotifs to update
     */
    where?: Prisma.EmailNotifWhereInput;
    /**
     * Limit how many EmailNotifs to update.
     */
    limit?: number;
};
/**
 * EmailNotif updateManyAndReturn
 */
export type EmailNotifUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * The data used to update EmailNotifs.
     */
    data: Prisma.XOR<Prisma.EmailNotifUpdateManyMutationInput, Prisma.EmailNotifUncheckedUpdateManyInput>;
    /**
     * Filter which EmailNotifs to update
     */
    where?: Prisma.EmailNotifWhereInput;
    /**
     * Limit how many EmailNotifs to update.
     */
    limit?: number;
};
/**
 * EmailNotif upsert
 */
export type EmailNotifUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * The filter to search for the EmailNotif to update in case it exists.
     */
    where: Prisma.EmailNotifWhereUniqueInput;
    /**
     * In case the EmailNotif found by the `where` argument doesn't exist, create a new EmailNotif with this data.
     */
    create: Prisma.XOR<Prisma.EmailNotifCreateInput, Prisma.EmailNotifUncheckedCreateInput>;
    /**
     * In case the EmailNotif was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EmailNotifUpdateInput, Prisma.EmailNotifUncheckedUpdateInput>;
};
/**
 * EmailNotif delete
 */
export type EmailNotifDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
    /**
     * Filter which EmailNotif to delete.
     */
    where: Prisma.EmailNotifWhereUniqueInput;
};
/**
 * EmailNotif deleteMany
 */
export type EmailNotifDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotifs to delete
     */
    where?: Prisma.EmailNotifWhereInput;
    /**
     * Limit how many EmailNotifs to delete.
     */
    limit?: number;
};
/**
 * EmailNotif without action
 */
export type EmailNotifDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotif
     */
    select?: Prisma.EmailNotifSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmailNotif
     */
    omit?: Prisma.EmailNotifOmit<ExtArgs> | null;
};
//# sourceMappingURL=EmailNotif.d.ts.map