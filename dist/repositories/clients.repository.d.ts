import type { Prisma } from "../generated/prisma/client.js";
export declare const clientsRepository: {
    findMany(where: Prisma.ClientWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.ClientOrderByWithRelationInput;
    }): Prisma.PrismaPromise<({
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
        } | null;
    } & {
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
    })[]>;
    count(where: Prisma.ClientWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__ClientClient<({
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
        } | null;
    } & {
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.ClientUncheckedCreateInput): Prisma.Prisma__ClientClient<{
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
        } | null;
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(id: string, data: Prisma.ClientUncheckedUpdateInput): Prisma.Prisma__ClientClient<{
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
        } | null;
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    countAll(): Prisma.PrismaPromise<number>;
    /** Agrégats commandes/factures pour un lot de clients (une seule requête par table, pas de N+1). */
    aggregatesForClients(clientIds: string[]): Promise<Map<string, {
        nbCmd: number;
        caYtd: number;
        encours: number;
    }>>;
};
//# sourceMappingURL=clients.repository.d.ts.map