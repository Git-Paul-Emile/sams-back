/**
 * Remappe une ligne Prisma (avec relation `fournisseur`) vers la forme plate
 * `Achat` attendue par le frontend (`fournisseur` = nom en clair, pas un id).
 */
export function toAchatDto(achat) {
    return {
        id: achat.id,
        num: achat.num,
        fournisseur: achat.fournisseur.nom,
        date: achat.date.toISOString(),
        livraison: achat.livraison.toISOString(),
        montant: achat.montant,
        statut: achat.statut,
        articles: achat.articles,
    };
}
//# sourceMappingURL=achats.dto.js.map