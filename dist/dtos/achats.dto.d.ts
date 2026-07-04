import type { Achat, Fournisseur } from "../generated/prisma/client.js";
type AchatWithFournisseur = Achat & {
    fournisseur: Fournisseur;
};
/**
 * Remappe une ligne Prisma (avec relation `fournisseur`) vers la forme plate
 * `Achat` attendue par le frontend (`fournisseur` = nom en clair, pas un id).
 */
export declare function toAchatDto(achat: AchatWithFournisseur): {
    id: string;
    num: string;
    fournisseur: string;
    date: string;
    livraison: string;
    montant: number;
    statut: string;
    articles: number;
};
export {};
//# sourceMappingURL=achats.dto.d.ts.map