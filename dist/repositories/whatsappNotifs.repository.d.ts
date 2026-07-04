export declare const whatsappNotifsRepository: {
    findMany(opts: {
        skip: number;
        take: number;
    }): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        statut: string | null;
        createdAt: Date;
        to: string;
        deepLink: string | null;
        msg: string;
        eventType: string | null;
        category: string | null;
    }[]>;
    count(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<number>;
};
//# sourceMappingURL=whatsappNotifs.repository.d.ts.map