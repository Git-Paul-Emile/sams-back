import type { AuditLog, User } from "../generated/prisma/client.js";

type AuditLogWithUser = AuditLog & { user: User | null };

export function toAuditLogDto(row: AuditLogWithUser) {
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
