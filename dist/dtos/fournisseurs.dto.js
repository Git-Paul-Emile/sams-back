/** Nouvelle entité (aucun écran frontend existant) — passthrough plat, pas d'agrégat. */
export function toFournisseurDto(fournisseur) {
    return {
        id: fournisseur.id,
        nom: fournisseur.nom,
        contact: fournisseur.contact,
        tel: fournisseur.tel,
        email: fournisseur.email,
        adresse: fournisseur.adresse,
    };
}
//# sourceMappingURL=fournisseurs.dto.js.map