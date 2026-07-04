import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { materialRequestsRepository } from "../repositories/materialRequests.repository.js";
import { toMaterialRequestDto } from "../dtos/materialRequests.dto.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination } from "../utils/pagination.js";
import { createWithSequenceNumber } from "../utils/sequence.js";
import { recordAuditLog } from "../utils/auditLog.js";
import { notificationService } from "./notification.service.js";
const PENDING_STATUT = "En attente de validation";
export const materialRequestsService = {
    async list(query) {
        const { page, pageSize, skip, take } = parsePagination(query);
        const where = {
            ...(query.statut ? { statut: query.statut } : {}),
            ...(query.search
                ? {
                    OR: [
                        { num: { contains: query.search, mode: "insensitive" } },
                        { matiere: { designation: { contains: query.search, mode: "insensitive" } } },
                        { prodOrder: { num: { contains: query.search, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };
        const [rows, total] = await Promise.all([
            materialRequestsRepository.findMany(where, { skip, take }),
            materialRequestsRepository.count(where),
        ]);
        return { items: rows.map(toMaterialRequestDto), total, page, pageSize };
    },
    async get(id) {
        const mr = await materialRequestsRepository.findById(id);
        if (!mr)
            throw new AppError("Demande de matières introuvable", StatusCodes.NOT_FOUND);
        return toMaterialRequestDto(mr);
    },
    async create(input, ctx) {
        const prodOrder = await prisma.prodOrder.findUnique({ where: { id: input.prodOrderId } });
        if (!prodOrder)
            throw new AppError("Ordre de fabrication introuvable", StatusCodes.NOT_FOUND);
        const matiere = await prisma.stockItem.findUnique({ where: { id: input.matiereId } });
        if (!matiere)
            throw new AppError("Matière introuvable", StatusCodes.NOT_FOUND);
        const created = await createWithSequenceNumber("SMR", (likePrefix) => materialRequestsRepository.countThisMonth(likePrefix), (num) => materialRequestsRepository.create({
            num,
            prodOrderId: input.prodOrderId,
            operateurId: input.operateurId,
            ligne: input.ligne,
            matiereId: input.matiereId,
            qteDemandee: input.qteDemandee,
            commentaires: input.commentaires,
            statut: PENDING_STATUT,
        }));
        await recordAuditLog({ action: "Création", module: "Production", ref: created.num, userId: ctx.userId, ip: ctx.ip });
        // Fire-and-forget : voir le commentaire équivalent dans salesRequests.service.ts.
        void notificationService.notifyDirection({
            eventType: "material-request-created",
            category: "authorization",
            icon: "🧪",
            title: "Nouvelle demande de sortie matières",
            lines: [`${created.num} — ${matiere.designation} (${input.qteDemandee} ${matiere.unite}) pour ${prodOrder.num}`],
            deepLinkPath: "/validations",
            linkLabel: "Voir la demande :",
        });
        return toMaterialRequestDto(created);
    },
    async approve(id, input, ctx) {
        const result = await prisma.$transaction(async (tx) => {
            const mr = await tx.materialRequest.findUnique({ where: { id }, include: { matiere: true, prodOrder: true } });
            if (!mr)
                throw new AppError("Demande de matières introuvable", StatusCodes.NOT_FOUND);
            if (mr.statut !== PENDING_STATUT)
                throw new AppError("Cette demande a déjà été traitée", StatusCodes.CONFLICT);
            const qteValidee = input.qteValidee ?? mr.qteDemandee;
            if (qteValidee > mr.matiere.stock) {
                throw new AppError("Stock insuffisant", StatusCodes.BAD_REQUEST);
            }
            await tx.stockItem.update({ where: { id: mr.matiereId }, data: { stock: { decrement: qteValidee } } });
            const updated = await tx.materialRequest.update({
                where: { id },
                data: {
                    statut: "Distribué à la production",
                    qteValidee,
                    valideurId: ctx.userId,
                    dateValidation: new Date(),
                    commentaires: input.commentaires ?? mr.commentaires,
                },
            });
            await tx.mouvement.create({
                data: {
                    type: "Sortie production",
                    stockItemId: mr.matiereId,
                    qte: -qteValidee,
                    userId: ctx.userId,
                    motif: `Validation ${mr.num}`,
                    materialRequestId: mr.id,
                    prodOrderId: mr.prodOrderId,
                },
            });
            await tx.approvalRecord.create({
                data: {
                    valideurId: ctx.userId,
                    action: "Validé",
                    type: "Sortie matières",
                    module: "Production",
                    commentaire: input.commentaires,
                    materialRequestId: mr.id,
                },
            });
            await recordAuditLog({ action: "Validation", module: "Validations", ref: mr.num, userId: ctx.userId, ip: ctx.ip }, tx);
            return updated;
        });
        const dto = await this.get(result.id);
        void notificationService.notifyDirection({
            eventType: "material-request-approved",
            category: "information",
            icon: "✅",
            title: "Demande de sortie matières validée",
            lines: [`${dto.num} validée`],
            deepLinkPath: "/validations",
            linkLabel: "Voir :",
        });
        return dto;
    },
    async reject(id, input, ctx) {
        const result = await prisma.$transaction(async (tx) => {
            const mr = await tx.materialRequest.findUnique({ where: { id } });
            if (!mr)
                throw new AppError("Demande de matières introuvable", StatusCodes.NOT_FOUND);
            if (mr.statut !== PENDING_STATUT)
                throw new AppError("Cette demande a déjà été traitée", StatusCodes.CONFLICT);
            const updated = await tx.materialRequest.update({
                where: { id },
                data: {
                    statut: "Refusé",
                    valideurId: ctx.userId,
                    dateValidation: new Date(),
                    commentaires: input.motifRefus,
                },
            });
            await tx.approvalRecord.create({
                data: {
                    valideurId: ctx.userId,
                    action: "Refusé",
                    type: "Sortie matières",
                    module: "Production",
                    commentaire: input.motifRefus,
                    motifRefus: input.motifRefus,
                    materialRequestId: mr.id,
                },
            });
            await recordAuditLog({ action: "Refus", module: "Validations", ref: mr.num, userId: ctx.userId, ip: ctx.ip }, tx);
            return updated;
        });
        return this.get(result.id);
    },
};
//# sourceMappingURL=materialRequests.service.js.map