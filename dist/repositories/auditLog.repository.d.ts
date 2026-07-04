import type { Prisma } from "../generated/prisma/client.js";
export declare const auditLogRepository: {
    findMany(where: Prisma.AuditLogWhereInput, opts: {
        skip: number;
        take: number;
    }): Prisma.PrismaPromise<({
        user: {
            id: string;
            email: string;
            nom: string;
            tel: string | null;
            passwordHash: string;
            role: import("../generated/prisma/enums.js").Role;
            statut: string;
            lastLoginAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        userId: string | null;
        action: string;
        module: string;
        ref: string | null;
        ip: string | null;
    })[]>;
    count(where: Prisma.AuditLogWhereInput): Prisma.PrismaPromise<number>;
};
//# sourceMappingURL=auditLog.repository.d.ts.map