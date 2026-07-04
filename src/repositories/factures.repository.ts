import { prisma } from "../config/database.js";
import { recordAuditLog, type AuditLogInput } from "../utils/auditLog.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeRelations = { client: true, commercial: true } satisfies Prisma.FactureInclude;

export const facturesRepository = {
  findMany(where: Prisma.FactureWhereInput, opts: { skip: number; take: number; orderBy: Prisma.FactureOrderByWithRelationInput }) {
    return prisma.facture.findMany({ where, include: includeRelations, ...opts });
  },

  count(where: Prisma.FactureWhereInput) {
    return prisma.facture.count({ where });
  },

  countByNumPrefix(likePrefix: string) {
    return prisma.facture.count({ where: { num: { startsWith: likePrefix } } });
  },

  findById(id: string) {
    return prisma.facture.findUnique({ where: { id }, include: includeRelations });
  },

  create(data: Prisma.FactureUncheckedCreateInput) {
    return prisma.facture.create({ data, include: includeRelations });
  },

  /**
   * Action dédiée `pay` : sémantique écrasante (`paye = montant`, pas
   * additif) conservée à l'identique du frontend d'origine. Fait dans une
   * transaction avec l'écriture de l'audit log pour rester atomique.
   */
  async pay(id: string, montant: number, auditLogInput: AuditLogInput) {
    return prisma.$transaction(async (tx) => {
      const updated = await tx.facture.update({
        where: { id },
        data: { paye: montant, statut: "Payée", dateReglEff: new Date() },
        include: includeRelations,
      });
      await recordAuditLog(auditLogInput, tx);
      return updated;
    });
  },
};
