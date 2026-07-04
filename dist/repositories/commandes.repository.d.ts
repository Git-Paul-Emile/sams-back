import type { Prisma } from "../generated/prisma/client.js";
export declare const commandesRepository: {
    findMany(where: Prisma.CommandeWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.CommandeOrderByWithRelationInput;
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
        timeline: ({
            user: {
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
            } | null;
        } & {
            id: string;
            userId: string | null;
            date: Date;
            commandeId: string;
            etat: string;
            commentaire: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        statutActuel: string;
    })[]>;
    count(where: Prisma.CommandeWhereInput): Prisma.PrismaPromise<number>;
    countByNumPrefix(likePrefix: string): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__CommandeClient<({
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
        timeline: ({
            user: {
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
            } | null;
        } & {
            id: string;
            userId: string | null;
            date: Date;
            commandeId: string;
            etat: string;
            commentaire: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        statutActuel: string;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    /**
     * Crée la commande et sa première ligne de timeline dans la même
     * transaction interactive (atomicité requise par le plan).
     */
    createWithTimeline(data: Prisma.CommandeUncheckedCreateInput, userId: string): Promise<{
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
        timeline: ({
            user: {
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
            } | null;
        } & {
            id: string;
            userId: string | null;
            date: Date;
            commandeId: string;
            etat: string;
            commentaire: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        statutActuel: string;
    }>;
    /**
     * Ajoute un événement de timeline et met à jour `statutActuel` dans la même
     * transaction.
     */
    appendTimeline(commandeId: string, etat: string, userId: string, commentaire: string | undefined): Promise<{
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
        timeline: ({
            user: {
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
            } | null;
        } & {
            id: string;
            userId: string | null;
            date: Date;
            commandeId: string;
            etat: string;
            commentaire: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        commercialId: string;
        num: string;
        clientId: string;
        montant: number;
        statutActuel: string;
    }>;
};
//# sourceMappingURL=commandes.repository.d.ts.map