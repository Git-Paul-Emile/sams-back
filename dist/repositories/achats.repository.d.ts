import type { Prisma } from "../generated/prisma/client.js";
export declare const achatsRepository: {
    findMany(where: Prisma.AchatWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.AchatOrderByWithRelationInput;
    }): Prisma.PrismaPromise<({
        fournisseur: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            createdAt: Date;
            updatedAt: Date;
            contact: string | null;
            adresse: string | null;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        num: string;
        montant: number;
        fournisseurId: string;
        livraison: Date;
        articles: number;
    })[]>;
    count(where: Prisma.AchatWhereInput): Prisma.PrismaPromise<number>;
    countByNumPrefix(likePrefix: string): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__AchatClient<({
        fournisseur: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            createdAt: Date;
            updatedAt: Date;
            contact: string | null;
            adresse: string | null;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        num: string;
        montant: number;
        fournisseurId: string;
        livraison: Date;
        articles: number;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    /**
     * Résout un fournisseur par nom (insensible à la casse) ou le crée, puis
     * crée l'achat dans la même transaction — évite les doublons de fournisseur
     * et garantit l'atomicité résolution+écriture (cf plan).
     */
    createWithFournisseur(fournisseurNom: string, data: Omit<Prisma.AchatUncheckedCreateInput, "fournisseurId">): Promise<{
        fournisseur: {
            id: string;
            email: string | null;
            nom: string;
            tel: string | null;
            createdAt: Date;
            updatedAt: Date;
            contact: string | null;
            adresse: string | null;
        };
    } & {
        id: string;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        num: string;
        montant: number;
        fournisseurId: string;
        livraison: Date;
        articles: number;
    }>;
};
//# sourceMappingURL=achats.repository.d.ts.map