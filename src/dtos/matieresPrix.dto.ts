import type { MatierePrixStat, StockItem } from "../generated/prisma/client.js";

type MatierePrixStatWithMatiere = MatierePrixStat & { matiere: StockItem };

function formatEvolution(evolutionPct: number): string {
  return evolutionPct >= 0 ? `+${evolutionPct.toFixed(1)}%` : `${evolutionPct.toFixed(1)}%`;
}

/**
 * Remappe une ligne `MatierePrixStat` (hybride stocké/calculé, cf plan §0.2 et
 * §1) vers la forme `MatierePrix` déjà consommée par le frontend.
 */
export function toMatierePrixDto(row: MatierePrixStatWithMatiere, produits: string[]) {
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
