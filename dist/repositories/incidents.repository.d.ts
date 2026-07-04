import type { Prisma } from "../generated/prisma/client.js";
export declare const incidentsRepository: {
    findMany(where: Prisma.IncidentWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.IncidentOrderByWithRelationInput;
    }): Prisma.PrismaPromise<({
        operateur: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            matricule: string;
            prenom: string;
            ligne: string | null;
            poste: string | null;
            embauche: Date | null;
        } | null;
        prodOrder: {
            id: string;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            num: string;
            produitId: string;
            ligne: string;
            qtePrev: number;
            qteReel: number;
            debut: Date;
            fin: Date;
            responsableId: string | null;
            rendement: number;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        date: Date;
        description: string;
        prodOrderId: string;
        operateurId: string | null;
        categorie: string;
        gravite: string;
    })[]>;
    count(where: Prisma.IncidentWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__IncidentClient<({
        operateur: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            matricule: string;
            prenom: string;
            ligne: string | null;
            poste: string | null;
            embauche: Date | null;
        } | null;
        prodOrder: {
            id: string;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            num: string;
            produitId: string;
            ligne: string;
            qtePrev: number;
            qteReel: number;
            debut: Date;
            fin: Date;
            responsableId: string | null;
            rendement: number;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        date: Date;
        description: string;
        prodOrderId: string;
        operateurId: string | null;
        categorie: string;
        gravite: string;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.IncidentUncheckedCreateInput): Prisma.Prisma__IncidentClient<{
        operateur: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            matricule: string;
            prenom: string;
            ligne: string | null;
            poste: string | null;
            embauche: Date | null;
        } | null;
        prodOrder: {
            id: string;
            statut: string;
            createdAt: Date;
            updatedAt: Date;
            num: string;
            produitId: string;
            ligne: string;
            qtePrev: number;
            qteReel: number;
            debut: Date;
            fin: Date;
            responsableId: string | null;
            rendement: number;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        date: Date;
        description: string;
        prodOrderId: string;
        operateurId: string | null;
        categorie: string;
        gravite: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=incidents.repository.d.ts.map