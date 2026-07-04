import { z } from "zod";
export declare const listAuditLogQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    module: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListAuditLogQuery = z.infer<typeof listAuditLogQuerySchema>;
//# sourceMappingURL=auditLog.validator.d.ts.map