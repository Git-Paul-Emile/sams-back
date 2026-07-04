import type { ListAuditLogQuery } from "../validators/auditLog.validator.js";
export declare const auditLogService: {
    list(query: ListAuditLogQuery): Promise<{
        items: {
            id: string;
            date: string;
            action: string;
            module: string;
            ref: string | null;
            user: string | null;
            ip: string | null;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
};
//# sourceMappingURL=auditLog.service.d.ts.map