import type { Prisma } from "../generated/prisma/client.js";
export declare const stockItemsRepository: {
    findMany(where: Prisma.StockItemWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.StockItemOrderByWithRelationInput;
    }): Prisma.PrismaPromise<{
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
    }[]>;
    count(where: Prisma.StockItemWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__StockItemClient<{
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
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    updateStock(id: string, stock: number): Prisma.Prisma__StockItemClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=stockItems.repository.d.ts.map