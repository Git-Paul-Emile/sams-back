export function toAuditLogDto(row) {
    return {
        id: row.id,
        date: row.createdAt.toISOString(),
        action: row.action,
        module: row.module,
        ref: row.ref,
        user: row.user?.nom ?? null,
        ip: row.ip,
    };
}
//# sourceMappingURL=auditLog.dto.js.map