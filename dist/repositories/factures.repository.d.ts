import { type AuditLogInput } from "../utils/auditLog.js";
import type { Prisma } from "../generated/prisma/client.js";
export declare const facturesRepository: {
    findMany(where: Prisma.FactureWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.FactureOrderByWithRelationInput;
    }): Prisma.PrismaPromise<({
        client: {
            id: string;
            email: string | null;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            raison: string;
            contact: string | null;
            adresse: string | null;
            ville: string | null;
            pays: string | null;
            zone: string | null;
            commercialId: string | null;
            conditions: string | null;
            plafond: number;
        };
        commercial: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            zone: string | null;
            matricule: string;
            prenom: string;
            objectif: number;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        commandeId: string | null;
        echeance: Date;
        paye: number;
        mode: string;
        dateReglPrev: Date | null;
        dateReglEff: Date | null;
    })[]>;
    count(where: Prisma.FactureWhereInput): Prisma.PrismaPromise<number>;
    countByNumPrefix(likePrefix: string): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__FactureClient<({
        client: {
            id: string;
            email: string | null;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            raison: string;
            contact: string | null;
            adresse: string | null;
            ville: string | null;
            pays: string | null;
            zone: string | null;
            commercialId: string | null;
            conditions: string | null;
            plafond: number;
        };
        commercial: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            zone: string | null;
            matricule: string;
            prenom: string;
            objectif: number;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        commandeId: string | null;
        echeance: Date;
        paye: number;
        mode: string;
        dateReglPrev: Date | null;
        dateReglEff: Date | null;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.FactureUncheckedCreateInput): Prisma.Prisma__FactureClient<{
        client: {
            id: string;
            email: string | null;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            raison: string;
            contact: string | null;
            adresse: string | null;
            ville: string | null;
            pays: string | null;
            zone: string | null;
            commercialId: string | null;
            conditions: string | null;
            plafond: number;
        };
        commercial: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            zone: string | null;
            matricule: string;
            prenom: string;
            objectif: number;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        commandeId: string | null;
        echeance: Date;
        paye: number;
        mode: string;
        dateReglPrev: Date | null;
        dateReglEff: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    /**
     * Action dédiée `pay` : sémantique écrasante (`paye = montant`, pas
     * additif) conservée à l'identique du frontend d'origine. Fait dans une
     * transaction avec l'écriture de l'audit log pour rester atomique.
     */
    pay(id: string, montant: number, auditLogInput: AuditLogInput): Promise<{
        client: {
            id: string;
            email: string | null;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            raison: string;
            contact: string | null;
            adresse: string | null;
            ville: string | null;
            pays: string | null;
            zone: string | null;
            commercialId: string | null;
            conditions: string | null;
            plafond: number;
        };
        commercial: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            zone: string | null;
            matricule: string;
            prenom: string;
            objectif: number;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        commandeId: string | null;
        echeance: Date;
        paye: number;
        mode: string;
        dateReglPrev: Date | null;
        dateReglEff: Date | null;
    }>;
};
//# sourceMappingURL=factures.repository.d.ts.map