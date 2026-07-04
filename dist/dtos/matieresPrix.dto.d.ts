import type { MatierePrixStat, StockItem } from "../generated/prisma/client.js";
type MatierePrixStatWithMatiere = MatierePrixStat & {
    matiere: StockItem;
};
/**
 * Remappe une ligne `MatierePrixStat` (hybride stocké/calculé, cf plan §0.2 et
 * §1) vers la forme `MatierePrix` déjà consommée par le frontend.
 */
export declare function toMatierePrixDto(row: MatierePrixStatWithMatiere, produits: string[]): {
    id: string;
    mat: string;
    prixActuel: number;
    dernierPrix: number;
    prixMoyen: number;
    evolution: string;
    up: boolean;
    produits: string[];
};
export {};
//# sourceMappingURL=matieresPrix.dto.d.ts.map