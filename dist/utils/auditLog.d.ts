import type { Prisma, PrismaClient } from "../generated/prisma/client.js";
export interface AuditLogInput {
    action: string;
    module: string;
    ref?: string | null;
    userId?: string | null;
    ip?: string | null;
}
/**
 * Écrit une ligne d'audit. Appelé explicitement depuis les Services après une
 * mutation réussie (cf plan §2 — plus simple et plus fiable qu'un middleware
 * Prisma global). Peut être passé un client de transaction (`tx`) pour rester
 * atomique avec l'écriture métier.
 */
export declare function recordAuditLog(input: AuditLogInput, client?: PrismaClient | Prisma.TransactionClient): Promise<void>;
//# sourceMappingURL=auditLog.d.ts.map