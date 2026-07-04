import type { AuditLog, User } from "../generated/prisma/client.js";
type AuditLogWithUser = AuditLog & {
    user: User | null;
};
export declare function toAuditLogDto(row: AuditLogWithUser): {
    id: string;
    date: string;
    action: string;
    module: string;
    ref: string | null;
    user: string | null;
    ip: string | null;
};
export {};
//# sourceMappingURL=auditLog.dto.d.ts.map