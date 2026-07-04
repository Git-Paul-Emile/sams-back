import type { Fournisseur } from "../generated/prisma/client.js";
/** Nouvelle entité (aucun écran frontend existant) — passthrough plat, pas d'agrégat. */
export declare function toFournisseurDto(fournisseur: Fournisseur): {
    id: string;
    nom: string;
    contact: string | null;
    tel: string | null;
    email: string | null;
    adresse: string | null;
};
//# sourceMappingURL=fournisseurs.dto.d.ts.map