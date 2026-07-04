export declare const emailNotifsRepository: {
    findMany(opts: {
        skip: number;
        take: number;
    }): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        statut: string;
        createdAt: Date;
        to: string;
        sujet: string;
        corps: string | null;
    }[]>;
    count(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<number>;
};
//# sourceMappingURL=emailNotifs.repository.d.ts.map