import type { Client, Commande, CommandeRentabilite } from "../generated/prisma/client.js";

type CommandeRentabiliteWithRelations = CommandeRentabilite & {
  commande: Commande & { client: Client };
};

/**
 * Remappe une ligne `CommandeRentabilite` (stockée, cf plan §0.2 — aucune
 * ligne de commande source n'existe dans le modèle pour la recalculer) vers
 * la forme `CommandeRentabilite` déjà consommée par le frontend.
 */
export function toCommandeRentabiliteDto(row: CommandeRentabiliteWithRelations) {
  return {
    id: row.id,
    num: row.commande.num,
    client: row.commande.client.raison,
    montant: row.montant,
    coutProduits: row.coutProduits,
    marge: row.marge,
    tauxMarge: row.tauxMarge,
    niveau: row.niveau,
  };
}
