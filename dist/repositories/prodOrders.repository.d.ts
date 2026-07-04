import type { Prisma } from "../generated/prisma/client.js";
export declare const prodOrdersRepository: {
    findMany(where: Prisma.ProdOrderWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.ProdOrderOrderByWithRelationInput;
    }): Prisma.PrismaPromise<({
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
        responsable: {
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
    })[]>;
    count(where: Prisma.ProdOrderWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__ProdOrderClient<({
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
        responsable: {
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.ProdOrderUncheckedCreateInput): Prisma.Prisma__ProdOrderClient<{
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
        responsable: {
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    countByNumPrefix(likePrefix: string): Prisma.PrismaPromise<number>;
    /** Lignes brutes pour l'agrégation mensuelle de `/chart` — dataset borné (§ compute-on-read). */
    findAllForChart(): Prisma.PrismaPromise<{
        qtePrev: number;
        qteReel: number;
        debut: Date;
    }[]>;
};
//# sourceMappingURL=prodOrders.repository.d.ts.map