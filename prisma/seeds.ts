import "dotenv/config";

const seedModules = [
  "./seeds/settingsAndPermissions.seed.js",
  "./seeds/users.seed.js",
  "./seeds/fournisseurs.seed.js",
  "./seeds/commerciaux.seed.js",
  "./seeds/operateurs.seed.js",
  "./seeds/clients.seed.js",
  "./seeds/stockItems.seed.js",
  "./seeds/boms.seed.js",
  "./seeds/prodOrders.seed.js",
  "./seeds/incidents.seed.js",
  "./seeds/commandes.seed.js",
  "./seeds/factures.seed.js",
  "./seeds/achats.seed.js",
  "./seeds/mouvements.seed.js",
  "./seeds/salesRequests.seed.js",
  "./seeds/materialRequests.seed.js",
  "./seeds/approvalHistory.seed.js",
  "./seeds/notifications.seed.js",
  "./seeds/auditLog.seed.js",
  "./seeds/productCosts.seed.js",
  "./seeds/matierePrix.seed.js",
  "./seeds/commandeRentabilite.seed.js",
  "./seeds/venteSegments.seed.js",
];

// Chaque seed dépend des enregistrements créés par les précédents (ex: ProdOrder, Client).
// Les imports statiques n'attendent pas le top-level await des modules frères entre eux :
// seul ce module attend la fin globale, mais leurs opérations internes se chevauchent.
// L'import dynamique séquentiel garantit qu'un seed est entièrement terminé avant que le suivant démarre.
for (const modulePath of seedModules) {
  await import(modulePath);
}

console.log("✅ Seed complet terminé avec succès");
