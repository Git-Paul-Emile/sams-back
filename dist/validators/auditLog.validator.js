import { z } from "zod";
export const listAuditLogQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
    module: z.string().optional(),
    search: z.string().optional(),
});
//# sourceMappingURL=auditLog.validator.js.map