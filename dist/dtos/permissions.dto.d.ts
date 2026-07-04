import type { RolePermission } from "../generated/prisma/client.js";
/** `id` == `role` pour matcher exactement l'ancienne forme `administration.types.ts` RolePermissions. */
export declare function toPermissionDto(rolePermission: RolePermission): {
    id: import("../generated/prisma/enums.js").Role;
    role: import("../generated/prisma/enums.js").Role;
    modules: string[];
};
//# sourceMappingURL=permissions.dto.d.ts.map