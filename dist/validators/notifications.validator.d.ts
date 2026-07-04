import { z } from "zod";
export declare const createNotifSchema: z.ZodObject<{
    type: z.ZodString;
    titre: z.ZodString;
    msg: z.ZodString;
}, z.core.$strip>;
export declare const listNotifsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type CreateNotifInput = z.infer<typeof createNotifSchema>;
export type ListNotifsQuery = z.infer<typeof listNotifsQuerySchema>;
//# sourceMappingURL=notifications.validator.d.ts.map