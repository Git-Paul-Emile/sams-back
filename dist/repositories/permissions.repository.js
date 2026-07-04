import { prisma } from "../config/database.js";
export const permissionsRepository = {
    findMany() {
        return prisma.rolePermission.findMany();
    },
    findByRole(role) {
        return prisma.rolePermission.findUnique({ where: { role: role } });
    },
    update(role, data) {
        return prisma.rolePermission.update({ where: { role: role }, data });
    },
};
//# sourceMappingURL=permissions.repository.js.map