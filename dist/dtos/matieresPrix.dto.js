function formatEvolution(evolutionPct) {
    return evolutionPct >= 0 ? `+${evolutionPct.toFixed(1)}%` : `${evolutionPct.toFixed(1)}%`;
}
/**
 * Remappe une ligne `MatierePrixStat` (hybride stocké/calculé, cf plan §0.2 et
 * §1) vers la forme `MatierePrix` déjà consommée par le frontend.
 */
export function toMatierePrixDto(row, produits) {
    return {
        id: row.id,
        mat: row.matiere.designation,
        prixActuel: row.matiere.valeurUnit,
        dernierPrix: row.dernierPrix,
        prixMoyen: row.prixMoyen,
        evolution: formatEvolution(row.evolutionPct),
        up: row.evolutionPct > 0,
        produits,
    };
}
//# sourceMappingURL=matieresPrix.dto.js.map