import type { Prisma } from "../generated/prisma/client.js";
export declare const bomsRepository: {
    findMany(): Prisma.PrismaPromise<({
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
        items: ({
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
            qte: number;
            matiereId: string;
            unite: string;
            bomId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        produitId: string;
    })[]>;
    findById(id: string): Prisma.Prisma__BomClient<({
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
        items: ({
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
            qte: number;
            matiereId: string;
            unite: string;
            bomId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        produitId: string;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=boms.repository.d.ts.map