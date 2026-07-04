import { prisma } from "../config/database.js";
const includeCommandeClient = {
    commande: { include: { client: true } },
};
export const commandesRentabiliteRepository = {
    findMany() {
        return prisma.commandeRentabilite.findMany({
            include: includeCommandeClient,
            orderBy: { createdAt: "desc" },
        });
    },
};
//# sourceMappingURL=commandesRentabilite.repository.js.map