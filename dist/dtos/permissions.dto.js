/** `id` == `role` pour matcher exactement l'ancienne forme `administration.types.ts` RolePermissions. */
export function toPermissionDto(rolePermission) {
    return {
        id: rolePermission.role,
        role: rolePermission.role,
        modules: rolePermission.modules,
    };
}
//# sourceMappingURL=permissions.dto.js.map