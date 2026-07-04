import type { Prisma } from "../generated/prisma/client.js";
export declare const usersRepository: {
    findMany(where: Prisma.UserWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.UserOrderByWithRelationInput;
    }): Prisma.PrismaPromise<{
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
    }[]>;
    count(where: Prisma.UserWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__UserClient<{
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
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findByEmail(email: string): Prisma.Prisma__UserClient<{
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
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.UserUncheckedCreateInput): Prisma.Prisma__UserClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(id: string, data: Prisma.UserUncheckedUpdateInput): Prisma.Prisma__UserClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=users.repository.d.ts.map