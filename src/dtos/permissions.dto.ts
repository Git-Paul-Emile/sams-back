import type { RolePermission } from "../generated/prisma/client.js";

/** `id` == `role` pour matcher exactement l'ancienne forme `administration.types.ts` RolePermissions. */
export function toPermissionDto(rolePermission: RolePermission) {
  return {
    id: rolePermission.role,
    role: rolePermission.role,
    modules: rolePermission.modules,
  };
}
