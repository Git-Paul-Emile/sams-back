/**
 * Modules valides pour RolePermission.modules — doit rester synchronisé avec
 * tous les `requirePermission("...")` de back/src/routes/*.routes.ts (source
 * de la casse/orthographe exacte attendue par le middleware). Une régression
 * de casse ici a déjà cassé l'accès de rôles entiers, voir
 * back/src/routes/permissions.integration.test.ts.
 */
export const MODULES = [
  "Achats",
  "Admin",
  "Clients",
  "Couts",
  "Dashboard",
  "Facturation",
  "Finance",
  "Production",
  "Rapports",
  "Sorties",
  "Stocks",
  "Validations",
  "Ventes",
] as const;

export type ModuleName = (typeof MODULES)[number];
