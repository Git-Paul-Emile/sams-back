export declare const authRepository: {
    findUserByEmail(email: string): import("../generated/prisma/models.js").Prisma__UserClient<{
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
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    findUserById(id: string): import("../generated/prisma/models.js").Prisma__UserClient<{
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
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    findModulesForRole(role: string): import("../generated/prisma/models.js").Prisma__RolePermissionClient<{
        role: import("../generated/prisma/enums.js").Role;
        updatedAt: Date;
        modules: string[];
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    touchLastLogin(userId: string): import("../generated/prisma/models.js").Prisma__UserClient<{
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
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    createRefreshToken(data: {
        userId: string;
        tokenHash: string;
        expiresAt: Date;
    }): import("../generated/prisma/models.js").Prisma__RefreshTokenClient<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    findActiveRefreshTokenByHash(tokenHash: string): import("../generated/prisma/models.js").Prisma__RefreshTokenClient<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userId: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    revokeRefreshToken(id: string): import("../generated/prisma/models.js").Prisma__RefreshTokenClient<{
        id: string;
        createdAt: Date;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=auth.repository.d.ts.map