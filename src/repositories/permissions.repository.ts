import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

export const permissionsRepository = {
  findMany() {
    return prisma.rolePermission.findMany();
  },

  findByRole(role: string) {
    return prisma.rolePermission.findUnique({ where: { role: role as never } });
  },

  update(role: string, data: Prisma.RolePermissionUncheckedUpdateInput) {
    return prisma.rolePermission.update({ where: { role: role as never }, data });
  },
};
