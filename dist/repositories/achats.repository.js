import { prisma } from "../config/database.js";
const includeFournisseur = { fournisseur: true };
export const achatsRepository = {
    findMany(where, opts) {
        return prisma.achat.findMany({ where, include: includeFournisseur, ...opts });
    },
    count(where) {
        return prisma.achat.count({ where });
    },
    countByNumPrefix(likePrefix) {
        return prisma.achat.count({ where: { num: { startsWith: likePrefix } } });
    },
    findById(id) {
        return prisma.achat.findUnique({ where: { id }, include: includeFournisseur });
    },
    /**
     * Résout un fournisseur par nom (insensible à la casse) ou le crée, puis
     * crée l'achat dans la même transaction — évite les doublons de fournisseur
     * et garantit l'atomicité résolution+écriture (cf plan).
     */
    async createWithFournisseur(fournisseurNom, data) {
        return prisma.$transaction(async (tx) => {
            let fournisseur = await tx.fournisseur.findFirst({
                where: { nom: { equals: fournisseurNom, mode: "insensitive" } },
            });
            if (!fournisseur) {
                fournisseur = await tx.fournisseur.create({ data: { nom: fournisseurNom } });
            }
            const achat = await tx.achat.create({
                data: { ...data, fournisseurId: fournisseur.id },
                include: includeFournisseur,
            });
            return achat;
        });
    },
};
//# sourceMappingURL=achats.repository.js.map