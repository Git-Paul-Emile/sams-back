import { prisma } from "../config/database.js";
const includeAll = {
    produit: true,
    bomLines: { include: { matiere: true } },
    emballages: true,
};
export const productCostsRepository = {
    findMany() {
        return prisma.productCost.findMany({ include: includeAll, orderBy: { calculatedAt: "desc" } });
    },
};
//# sourceMappingURL=productCosts.repository.js.map