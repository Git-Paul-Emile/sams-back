import { z } from "zod";
export declare const globalSearchQuerySchema: z.ZodObject<{
    q: z.ZodString;
}, z.core.$strip>;
export type GlobalSearchQuery = z.infer<typeof globalSearchQuerySchema>;
//# sourceMappingURL=search.validator.d.ts.map