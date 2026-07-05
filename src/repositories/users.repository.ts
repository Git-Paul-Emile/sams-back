import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

export const usersRepository = {
  findMany(
    where: Prisma.UserWhereInput,
    opts: { skip: number; take: number; orderBy: Prisma.UserOrderByWithRelationInput }
  ) {
    return prisma.user.findMany({ where, ...opts });
  },

  count(where: Prisma.UserWhereInput) {
    return prisma.user.count({ where });
  },

  findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },

  findByTel(tel: string) {
    return prisma.user.findUnique({ where: { tel } });
  },

  create(data: Prisma.UserUncheckedCreateInput) {
    return prisma.user.create({ data });
  },

  update(id: string, data: Prisma.UserUncheckedUpdateInput) {
    return prisma.user.update({ where: { id }, data });
  },
};
