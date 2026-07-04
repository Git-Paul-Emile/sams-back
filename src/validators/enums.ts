import { z } from "zod";

// Statuts métier (français, accentués) : conservés en `String` en base (voir
// plan §0.5) et validés ici en Zod plutôt qu'en enum Prisma natif.

export const ROLES = ["Direction", "Production", "Stock", "Commercial", "Finance", "Administrateur"] as const;
export const roleSchema = z.enum(ROLES);

export const ACTIVE_STATUTS = ["Actif", "Inactif"] as const;
export const activeStatutSchema = z.enum(ACTIVE_STATUTS);

export const OPERATEUR_STATUTS = ["Actif", "Inactif", "Congé"] as const;
export const operateurStatutSchema = z.enum(OPERATEUR_STATUTS);

export const COMMANDE_ETATS = [
  "Devis",
  "Commande reçue",
  "En attente stock",
  "En préparation",
  "En cours de livraison",
  "Livrée",
  "Facturée",
  "Payée",
] as const;
export const commandeEtatSchema = z.enum(COMMANDE_ETATS);

export const FACTURE_STATUTS = ["Brouillon", "Émise", "Partiellement payée", "Payée", "En retard"] as const;
export const factureStatutSchema = z.enum(FACTURE_STATUTS);

export const ACHAT_STATUTS = ["En attente", "En cours", "Partiellement reçu", "Reçu"] as const;
export const achatStatutSchema = z.enum(ACHAT_STATUTS);

export const PROD_ORDER_STATUTS = ["Planifié", "En cours", "Bloqué", "Terminé"] as const;
export const prodOrderStatutSchema = z.enum(PROD_ORDER_STATUTS);

export const VALIDATION_STATUTS = [
  "Brouillon",
  "En attente de validation",
  "Validé",
  "Refusé",
  "Distribué à la production",
] as const;
export const validationStatutSchema = z.enum(VALIDATION_STATUTS);

export const STOCK_ITEM_TYPES = ["MATIERE", "PRODUIT"] as const;
export const stockItemTypeSchema = z.enum(STOCK_ITEM_TYPES);

export const idSchema = z.string().min(1, "id requis");
