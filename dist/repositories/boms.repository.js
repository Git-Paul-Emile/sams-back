import { prisma } from "../config/database.js";
const includeAll = {
    produit: true,
    items: { include: { matiere: true } },
};
export const bomsRepository = {
    findMany() {
        return prisma.bom.findMany({ include: includeAll });
    },
    findById(id) {
        return prisma.bom.findUnique({ where: { id }, include: includeAll });
    },
};
//# sourceMappingURL=boms.repository.js.map