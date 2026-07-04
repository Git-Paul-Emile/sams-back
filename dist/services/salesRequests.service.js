import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { salesRequestsRepository } from "../repositories/salesRequests.repository.js";
import { toSalesRequestDto } from "../dtos/salesRequests.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { createWithSequenceNumber } from "../utils/sequence.js";
import { recordAuditLog } from "../utils/auditLog.js";
import { notificationService } from "./notification.service.js";
const PENDING_STATUT = "En attente de validation";
export const salesRequestsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.statut ? { statut: query.statut } : {}),
            ...(query.search
                ? {
                    OR: [
                        { num: { contains: query.search, mode: "insensitive" } },
                        { client: { raison: { contains: query.search, mode: "insensitive" } } },
                        { commercial: { nom: { contains: query.search, mode: "insensitive" } } },
                        { produit: { designation: { contains: query.search, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };
        const [rows, total] = await Promise.all([
            salesRequestsRepository.findMany(where, { skip, take }),
            salesRequestsRepository.count(where),
        ]);
        return { items: rows.map(toSalesRequestDto), total, page, pageSize };
    },
    async get(id) {
        const sr = await salesRequestsRepository.findById(id);
        if (!sr)
            throw new AppError("Demande de sortie introuvable", StatusCodes.NOT_FOUND);
        return toSalesRequestDto(sr);
    },
    async create(input, ctx) {
        const produit = await prisma.stockItem.findUnique({ where: { id: input.produitId } });
        if (!produit)
            throw new AppError("Produit introuvable", StatusCodes.NOT_FOUND);
        const created = await createWithSequenceNumber("SSV", (likePrefix) => salesRequestsRepository.countThisMonth(likePrefix), (num) => salesRequestsRepository.create({
            num,
            clientId: input.clientId,
            commercialId: input.commercialId,
            produitId: input.produitId,
            qteDemandee: input.qteDemandee,
            stockDispo: produit.stock,
            prixUnit: input.prixUnit,
            montant: input.qteDemandee * input.prixUnit,
            entrepot: input.entrepot,
            observation: input.observation,
            statut: PENDING_STATUT,
        }));
        await recordAuditLog({ action: "Création", module: "Sorties", ref: created.num, userId: ctx.userId, ip: ctx.ip });
        // Fire-and-forget : l'envoi email/WhatsApp ne doit jamais retarder la réponse HTTP
        // (le SMTP/l'API WhatsApp peuvent prendre plusieurs secondes) — notifyDirection()
        // journalise déjà ses propres échecs en interne, rien à traiter ici.
        void notificationService.notifyDirection({
            eventType: "sales-request-created",
            category: "authorization",
            icon: "📦",
            title: "Nouvelle demande de sortie vente",
            lines: [`${created.num} — ${produit.designation} (${input.qteDemandee} ${produit.unite})`],
            deepLinkPath: "/validations",
            linkLabel: "Voir la demande :",
        });
        return toSalesRequestDto(created);
    },
    async approve(id, input, ctx) {
        const result = await prisma.$transaction(async (tx) => {
            const sr = await tx.salesRequest.findUnique({ where: { id }, include: { produit: true } });
            if (!sr)
                throw new AppError("Demande de sortie introuvable", StatusCodes.NOT_FOUND);
            if (sr.statut !== PENDING_STATUT)
                throw new AppError("Cette demande a déjà été traitée", StatusCodes.CONFLICT);
            const qteValidee = input.qteValidee ?? sr.qteDemandee;
            if (qteValidee > sr.produit.stock) {
                throw new AppError("Stock insuffisant", StatusCodes.BAD_REQUEST);
            }
            await tx.stockItem.update({ where: { id: sr.produitId }, data: { stock: { decrement: qteValidee } } });
            const updated = await tx.salesRequest.update({
                where: { id },
                data: {
                    statut: "Validé",
                    qteValidee,
                    valideurId: ctx.userId,
                    dateValidation: new Date(),
                    commentaire: input.commentaire,
                },
            });
            await tx.mouvement.create({
                data: {
                    type: "Sortie vente",
                    stockItemId: sr.produitId,
                    qte: -qteValidee,
                    userId: ctx.userId,
                    motif: `Validation ${sr.num}`,
                    salesRequestId: sr.id,
                },
            });
            await tx.approvalRecord.create({
                data: {
                    valideurId: ctx.userId,
                    action: "Validé",
                    type: "Sortie vente",
                    module: "Stock",
                    commentaire: input.commentaire,
                    salesRequestId: sr.id,
                },
            });
            await recordAuditLog({ action: "Validation", module: "Validations", ref: sr.num, userId: ctx.userId, ip: ctx.ip }, tx);
            return updated;
        });
        const dto = await this.get(result.id);
        void notificationService.notifyDirection({
            eventType: "sales-request-approved",
            category: "information",
            icon: "✅",
            title: "Demande de sortie validée",
            lines: [`${dto.num} validée`],
            deepLinkPath: "/validations",
            linkLabel: "Voir :",
        });
        return dto;
    },
    async reject(id, input, ctx) {
        const result = await prisma.$transaction(async (tx) => {
            const sr = await tx.salesRequest.findUnique({ where: { id } });
            if (!sr)
                throw new AppError("Demande de sortie introuvable", StatusCodes.NOT_FOUND);
            if (sr.statut !== PENDING_STATUT)
                throw new AppError("Cette demande a déjà été traitée", StatusCodes.CONFLICT);
            const updated = await tx.salesRequest.update({
                where: { id },
                data: {
                    statut: "Refusé",
                    valideurId: ctx.userId,
                    dateValidation: new Date(),
                    commentaire: input.motifRefus,
                },
            });
            await tx.approvalRecord.create({
                data: {
                    valideurId: ctx.userId,
                    action: "Refusé",
                    type: "Sortie vente",
                    module: "Stock",
                    commentaire: input.motifRefus,
                    motifRefus: input.motifRefus,
                    salesRequestId: sr.id,
                },
            });
            await recordAuditLog({ action: "Refus", module: "Validations", ref: sr.num, userId: ctx.userId, ip: ctx.ip }, tx);
            return updated;
        });
        return this.get(result.id);
    },
};
//# sourceMappingURL=salesRequests.service.js.map