import type { Prisma } from "../generated/prisma/client.js";
export declare const productCostsRepository: {
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
        bomLines: ({
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
            matiereId: string;
            productCostId: string;
            incorpPct: number;
            qteKg: number;
            prixAchat: number;
        })[];
        emballages: {
            id: string;
            type: string;
            qte: number;
            productCostId: string;
            prix: number;
        }[];
    } & {
        id: string;
        updatedAt: Date;
        produitId: string;
        qteReel: number;
        prixVente: number;
        qteVendue: number;
        qteProduite: number;
        coutMO: number;
        coutEnergie: number;
        coutConsommables: number;
        coutIndirects: number;
        fraisLogistiques: number;
        fraisCommerciaux: number;
        fraisAdmin: number;
        coutTheoriqueUnit: number;
        calculatedAt: Date;
    })[]>;
};
//# sourceMappingURL=productCosts.repository.d.ts.map