import type { Prisma } from "../generated/prisma/client.js";
export declare const commerciauxRepository: {
    findMany(where: Prisma.CommercialWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.CommercialOrderByWithRelationInput;
    }): Prisma.PrismaPromise<{
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
    }[]>;
    count(where: Prisma.CommercialWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__CommercialClient<{
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
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.CommercialUncheckedCreateInput): Prisma.Prisma__CommercialClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(id: string, data: Prisma.CommercialUncheckedUpdateInput): Prisma.Prisma__CommercialClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    countAll(): Prisma.PrismaPromise<number>;
    /**
     * Agrégats CA réalisé (année civile en cours) / nb clients distincts / nb
     * commandes pour un lot de commerciaux (batch groupBy, pas de N+1) — copie
     * le pattern de `clientsRepository.aggregatesForClients`.
     */
    aggregatesForCommerciaux(commercialIds: string[]): Promise<Map<string, {
        caRealise: number;
        nbClients: number;
        nbCmd: number;
    }>>;
};
//# sourceMappingURL=commerciaux.repository.d.ts.map