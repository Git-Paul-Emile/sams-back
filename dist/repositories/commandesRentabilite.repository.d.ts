import type { Prisma } from "../generated/prisma/client.js";
export declare const commandesRentabiliteRepository: {
    findMany(): Prisma.PrismaPromise<({
        commande: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        montant: number;
        commandeId: string;
        coutProduits: number;
        marge: number;
        tauxMarge: number;
        niveau: string;
    })[]>;
};
//# sourceMappingURL=commandesRentabilite.repository.d.ts.map