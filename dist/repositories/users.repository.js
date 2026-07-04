import { prisma } from "../config/database.js";
export const usersRepository = {
    findMany(where, opts) {
        return prisma.user.findMany({ where, ...opts });
    },
    count(where) {
        return prisma.user.count({ where });
    },
    findById(id) {
        return prisma.user.findUnique({ where: { id } });
    },
    findByEmail(email) {
        return prisma.user.findUnique({ where: { email } });
    },
    create(data) {
        return prisma.user.create({ data });
    },
    update(id, data) {
        return prisma.user.update({ where: { id }, data });
    },
};
//# sourceMappingURL=users.repository.js.map