import type { Prisma } from "../generated/prisma/client.js";
export declare const materialRequestsRepository: {
    findMany(where: Prisma.MaterialRequestWhereInput, opts: {
        skip: number;
        take: number;
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
            produit: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                min: number;
                type: import("../generated/prisma/enums.js").StockItemType;
                code: string;
                categorie: string;
                designation: string;
                unite: string;
                stock: number;
                critique: number;
                valeurUnit: number;
            };
        } & {
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
        } | null;
        matiere: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            min: number;
            type: import("../generated/prisma/enums.js").StockItemType;
            code: string;
            categorie: string;
            designation: string;
            unite: string;
            stock: number;
            critique: number;
            valeurUnit: number;
        };
    } & {
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
    })[]>;
    count(where: Prisma.MaterialRequestWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__MaterialRequestClient<({
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
            produit: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                min: number;
                type: import("../generated/prisma/enums.js").StockItemType;
                code: string;
                categorie: string;
                designation: string;
                unite: string;
                stock: number;
                critique: number;
                valeurUnit: number;
            };
        } & {
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
        } | null;
        matiere: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            min: number;
            type: import("../generated/prisma/enums.js").StockItemType;
            code: string;
            categorie: string;
            designation: string;
            unite: string;
            stock: number;
            critique: number;
            valeurUnit: number;
        };
    } & {
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    countThisMonth(likePrefix: string): Prisma.PrismaPromise<number>;
    create(data: Prisma.MaterialRequestUncheckedCreateInput): Prisma.Prisma__MaterialRequestClient<{
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
            produit: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                min: number;
                type: import("../generated/prisma/enums.js").StockItemType;
                code: string;
                categorie: string;
                designation: string;
                unite: string;
                stock: number;
                critique: number;
                valeurUnit: number;
            };
        } & {
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
        } | null;
        matiere: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            min: number;
            type: import("../generated/prisma/enums.js").StockItemType;
            code: string;
            categorie: string;
            designation: string;
            unite: string;
            stock: number;
            critique: number;
            valeurUnit: number;
        };
    } & {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=materialRequests.repository.d.ts.map