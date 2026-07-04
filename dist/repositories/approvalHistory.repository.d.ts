import type { Prisma } from "../generated/prisma/client.js";
export declare const approvalHistoryRepository: {
    findMany(where: Prisma.ApprovalRecordWhereInput, opts: {
        skip: number;
        take: number;
    }): Prisma.PrismaPromise<({
        salesRequest: {
            id: string;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            date: Date;
            commercialId: string;
            num: string;
            clientId: string;
            montant: number;
            commentaire: string | null;
            produitId: string;
            qteDemandee: number;
            qteValidee: number | null;
            stockDispo: number | null;
            prixUnit: number;
            entrepot: string | null;
            observation: string | null;
            valideurId: string | null;
            dateValidation: Date | null;
        } | null;
        materialRequest: {
            id: string;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            date: Date;
            num: string;
            prodOrderId: string;
            qteDemandee: number;
            qteValidee: number | null;
            valideurId: string | null;
            dateValidation: Date | null;
            operateurId: string | null;
            ligne: string;
            matiereId: string;
            commentaires: string | null;
            docBC: string | null;
            docBL: string | null;
        } | null;
        valideur: {
            id: string;
            email: string;
            nom: string;
            tel: string | null;
            passwordHash: string;
            role: import("../generated/prisma/enums.js").Role;
            statut: string;
            lastLoginAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        type: string;
        date: Date;
        commentaire: string | null;
        salesRequestId: string | null;
        materialRequestId: string | null;
        valideurId: string;
        action: string;
        module: string;
        motifRefus: string | null;
    })[]>;
    count(where: Prisma.ApprovalRecordWhereInput): Prisma.PrismaPromise<number>;
};
//# sourceMappingURL=approvalHistory.repository.d.ts.map