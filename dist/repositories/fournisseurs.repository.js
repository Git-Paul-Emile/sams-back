import { prisma } from "../config/database.js";
export const fournisseursRepository = {
    findMany(where, opts) {
        return prisma.fournisseur.findMany({ where, ...opts });
    },
    count(where) {
        return prisma.fournisseur.count({ where });
    },
    findById(id) {
        return prisma.fournisseur.findUnique({ where: { id } });
    },
    create(data) {
        return prisma.fournisseur.create({ data });
    },
    update(id, data) {
        return prisma.fournisseur.update({ where: { id }, data });
    },
};
//# sourceMappingURL=fournisseurs.repository.js.map