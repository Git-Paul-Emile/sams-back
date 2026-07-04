import type { Prisma } from "../generated/prisma/client.js";
export declare const permissionsRepository: {
    findMany(): Prisma.PrismaPromise<{
        role: import("../generated/prisma/enums.js").Role;
        updatedAt: Date;
        modules: string[];
    }[]>;
    findByRole(role: string): Prisma.Prisma__RolePermissionClient<{
        role: import("../generated/prisma/enums.js").Role;
        updatedAt: Date;
        modules: string[];
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(role: string, data: Prisma.RolePermissionUncheckedUpdateInput): Prisma.Prisma__RolePermissionClient<{
        role: import("../generated/prisma/enums.js").Role;
        updatedAt: Date;
        modules: string[];
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=permissions.repository.d.ts.map