import type { Express } from "express";
import authRoutes from "./auth.routes.js";
import clientsRoutes from "./clients.routes.js";
import commerciauxRoutes from "./commerciaux.routes.js";
import operateursRoutes from "./operateurs.routes.js";
import fournisseursRoutes from "./fournisseurs.routes.js";
import usersRoutes from "./users.routes.js";
import permissionsRoutes from "./permissions.routes.js";
import settingsRoutes from "./settings.routes.js";
import stockItemsRoutes from "./stockItems.routes.js";
import stockMovementsRoutes from "./stockMovements.routes.js";
import bomsRoutes from "./boms.routes.js";
import prodOrdersRoutes from "./prodOrders.routes.js";
import incidentsRoutes from "./incidents.routes.js";
import achatsRoutes from "./achats.routes.js";
import commandesRoutes from "./commandes.routes.js";
import facturesRoutes from "./factures.routes.js";
import salesRequestsRoutes from "./salesRequests.routes.js";
import materialRequestsRoutes from "./materialRequests.routes.js";
import approvalHistoryRoutes from "./approvalHistory.routes.js";
import productCostsRoutes from "./productCosts.routes.js";
import matieresPrixRoutes from "./matieresPrix.routes.js";
import commandesRentabiliteRoutes from "./commandesRentabilite.routes.js";
import notificationsRoutes from "./notifications.routes.js";
import emailNotifsRoutes from "./emailNotifs.routes.js";
import whatsappNotifsRoutes from "./whatsappNotifs.routes.js";
import auditLogRoutes from "./auditLog.routes.js";
import financeRoutes from "./finance.routes.js";
import searchRoutes from "./search.routes.js";

/**
 * Point de montage unique de toutes les routes `/api/v1/*`. Chaque feature
 * ajoute sa ligne ici (remplace le `// TODO: brancher les routes` historique
 * de app.ts).
 */
export function mountRoutes(app: Express): void {
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/clients", clientsRoutes);
  app.use("/api/v1/commerciaux", commerciauxRoutes);
  app.use("/api/v1/operateurs", operateursRoutes);
  app.use("/api/v1/fournisseurs", fournisseursRoutes);
  app.use("/api/v1/users", usersRoutes);
  app.use("/api/v1/permissions", permissionsRoutes);
  app.use("/api/v1/settings", settingsRoutes);
  app.use("/api/v1/stock-items", stockItemsRoutes);
  app.use("/api/v1/stock-movements", stockMovementsRoutes);
  app.use("/api/v1/boms", bomsRoutes);
  app.use("/api/v1/prod-orders", prodOrdersRoutes);
  app.use("/api/v1/incidents", incidentsRoutes);
  app.use("/api/v1/achats", achatsRoutes);
  app.use("/api/v1/commandes", commandesRoutes);
  app.use("/api/v1/factures", facturesRoutes);
  app.use("/api/v1/sales-requests", salesRequestsRoutes);
  app.use("/api/v1/material-requests", materialRequestsRoutes);
  app.use("/api/v1/approval-history", approvalHistoryRoutes);
  app.use("/api/v1/product-costs", productCostsRoutes);
  app.use("/api/v1/matieres-prix", matieresPrixRoutes);
  app.use("/api/v1/commandes-rentabilite", commandesRentabiliteRoutes);
  app.use("/api/v1/notifications", notificationsRoutes);
  app.use("/api/v1/email-notifs", emailNotifsRoutes);
  app.use("/api/v1/whatsapp-notifs", whatsappNotifsRoutes);
  app.use("/api/v1/audit-log", auditLogRoutes);
  app.use("/api/v1/finance", financeRoutes);
  app.use("/api/v1/search", searchRoutes);
}
