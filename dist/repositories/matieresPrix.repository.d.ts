import type { Prisma } from "../generated/prisma/client.js";
export declare const matieresPrixRepository: {
    findMany(): Prisma.PrismaPromise<({
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
        updatedAt: Date;
        matiereId: string;
        dernierPrix: number;
        prixMoyen: number;
        evolutionPct: number;
    })[]>;
    /**
     * Pour un lot de matières, renvoie la liste (dédupliquée) des désignations
     * de produits dont le BOM incorpore chacune de ces matières — une seule
     * requête (avec include), pas de N+1.
     */
    produitDesignationsByMatiereIds(matiereIds: string[]): Promise<Map<string, string[]>>;
};
//# sourceMappingURL=matieresPrix.repository.d.ts.map