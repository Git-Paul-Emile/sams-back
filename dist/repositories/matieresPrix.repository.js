import { prisma } from "../config/database.js";
const includeMatiere = { matiere: true };
export const matieresPrixRepository = {
    findMany() {
        return prisma.matierePrixStat.findMany({ include: includeMatiere, orderBy: { updatedAt: "desc" } });
    },
    /**
     * Pour un lot de matières, renvoie la liste (dédupliquée) des désignations
     * de produits dont le BOM incorpore chacune de ces matières — une seule
     * requête (avec include), pas de N+1.
     */
    async produitDesignationsByMatiereIds(matiereIds) {
        const result = new Map();
        for (const id of matiereIds)
            result.set(id, []);
        if (matiereIds.length === 0)
            return result;
        const bomLines = await prisma.bomLine.findMany({
            where: { matiereId: { in: matiereIds } },
            include: { bom: { include: { produit: true } } },
        });
        for (const line of bomLines) {
            const designations = result.get(line.matiereId);
            const produitDesignation = line.bom.produit.designation;
            if (designations && !designations.includes(produitDesignation)) {
                designations.push(produitDesignation);
            }
        }
        return result;
    },
};
//# sourceMappingURL=matieresPrix.repository.js.map