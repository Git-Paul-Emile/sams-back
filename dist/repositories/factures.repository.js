import { prisma } from "../config/database.js";
import { recordAuditLog } from "../utils/auditLog.js";
const includeRelations = { client: true, commercial: true };
export const facturesRepository = {
    findMany(where, opts) {
        return prisma.facture.findMany({ where, include: includeRelations, ...opts });
    },
    count(where) {
        return prisma.facture.count({ where });
    },
    countByNumPrefix(likePrefix) {
        return prisma.facture.count({ where: { num: { startsWith: likePrefix } } });
    },
    findById(id) {
        return prisma.facture.findUnique({ where: { id }, include: includeRelations });
    },
    create(data) {
        return prisma.facture.create({ data, include: includeRelations });
    },
    /**
     * Action dédiée `pay` : sémantique écrasante (`paye = montant`, pas
     * additif) conservée à l'identique du frontend d'origine. Fait dans une
     * transaction avec l'écriture de l'audit log pour rester atomique.
     */
    async pay(id, montant, auditLogInput) {
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
//# sourceMappingURL=factures.repository.js.map