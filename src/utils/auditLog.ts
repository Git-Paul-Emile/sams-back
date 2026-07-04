import type { Prisma, PrismaClient } from "../generated/prisma/client.js";
import { prisma } from "../config/database.js";

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
export async function recordAuditLog(
  input: AuditLogInput,
  client: PrismaClient | Prisma.TransactionClient = prisma
): Promise<void> {
  await client.auditLog.create({
    data: {
      action: input.action,
      module: input.module,
      ref: input.ref ?? null,
      userId: input.userId ?? null,
      ip: input.ip ?? null,
    },
  });
}
