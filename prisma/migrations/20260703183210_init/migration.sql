-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Direction', 'Production', 'Stock', 'Commercial', 'Finance', 'Administrateur');

-- CreateEnum
CREATE TYPE "StockItemType" AS ENUM ('MATIERE', 'PRODUIT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT,
    "passwordHash" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'Actif',
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolePermission" (
    "role" "Role" NOT NULL,
    "modules" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("role")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "notifErpEnabled" BOOLEAN NOT NULL DEFAULT true,
    "notifEmailEnabled" BOOLEAN NOT NULL DEFAULT true,
    "notifWhatsappEnabled" BOOLEAN NOT NULL DEFAULT true,
    "alertRuptureEnabled" BOOLEAN NOT NULL DEFAULT true,
    "alertValidationEnabled" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commercial" (
    "id" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "tel" TEXT,
    "email" TEXT,
    "zone" TEXT,
    "objectif" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "statut" TEXT NOT NULL DEFAULT 'Actif',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commercial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operateur" (
    "id" TEXT NOT NULL,
    "matricule" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "tel" TEXT,
    "email" TEXT,
    "poste" TEXT,
    "ligne" TEXT,
    "embauche" TIMESTAMP(3),
    "statut" TEXT NOT NULL DEFAULT 'Actif',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Operateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fournisseur" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "contact" TEXT,
    "tel" TEXT,
    "email" TEXT,
    "adresse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fournisseur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achat" (
    "id" TEXT NOT NULL,
    "num" TEXT NOT NULL,
    "fournisseurId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "livraison" TIMESTAMP(3) NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "statut" TEXT NOT NULL DEFAULT 'En attente',
    "articles" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Achat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "raison" TEXT NOT NULL,
    "contact" TEXT,
    "tel" TEXT,
    "email" TEXT,
    "adresse" TEXT,
    "ville" TEXT,
    "pays" TEXT,
    "zone" TEXT,
    "commercialId" TEXT,
    "conditions" TEXT,
    "plafond" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "statut" TEXT NOT NULL DEFAULT 'Actif',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" TEXT NOT NULL,
    "num" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "montant" DOUBLE PRECISION NOT NULL,
    "commercialId" TEXT NOT NULL,
    "statutActuel" TEXT NOT NULL DEFAULT 'Devis',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandeTimeline" (
    "id" TEXT NOT NULL,
    "commandeId" TEXT NOT NULL,
    "etat" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "commentaire" TEXT,

    CONSTRAINT "CommandeTimeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facture" (
    "id" TEXT NOT NULL,
    "num" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "commercialId" TEXT NOT NULL,
    "commandeId" TEXT,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "echeance" TIMESTAMP(3) NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "paye" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "statut" TEXT NOT NULL DEFAULT 'Émise',
    "mode" TEXT NOT NULL DEFAULT '—',
    "dateReglPrev" TIMESTAMP(3),
    "dateReglEff" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockItem" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "type" "StockItemType" NOT NULL,
    "categorie" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "stock" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "min" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "critique" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valeurUnit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StockItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouvement" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "stockItemId" TEXT NOT NULL,
    "qte" DOUBLE PRECISION NOT NULL,
    "userId" TEXT,
    "motif" TEXT,
    "commandeId" TEXT,
    "achatId" TEXT,
    "prodOrderId" TEXT,
    "salesRequestId" TEXT,
    "materialRequestId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mouvement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bom" (
    "id" TEXT NOT NULL,
    "produitId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BomLine" (
    "id" TEXT NOT NULL,
    "bomId" TEXT NOT NULL,
    "matiereId" TEXT NOT NULL,
    "qte" DOUBLE PRECISION NOT NULL,
    "unite" TEXT NOT NULL,

    CONSTRAINT "BomLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdOrder" (
    "id" TEXT NOT NULL,
    "num" TEXT NOT NULL,
    "produitId" TEXT NOT NULL,
    "ligne" TEXT NOT NULL,
    "qtePrev" DOUBLE PRECISION NOT NULL,
    "qteReel" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "debut" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "responsableId" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'Planifié',
    "rendement" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProdOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "prodOrderId" TEXT NOT NULL,
    "operateurId" TEXT,
    "categorie" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statut" TEXT NOT NULL DEFAULT 'Ouvert',
    "gravite" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalesRequest" (
    "id" TEXT NOT NULL,
    "num" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    "commercialId" TEXT NOT NULL,
    "produitId" TEXT NOT NULL,
    "qteDemandee" DOUBLE PRECISION NOT NULL,
    "qteValidee" DOUBLE PRECISION,
    "stockDispo" DOUBLE PRECISION,
    "prixUnit" DOUBLE PRECISION NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "entrepot" TEXT,
    "observation" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'En attente de validation',
    "valideurId" TEXT,
    "dateValidation" TIMESTAMP(3),
    "commentaire" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialRequest" (
    "id" TEXT NOT NULL,
    "num" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prodOrderId" TEXT NOT NULL,
    "operateurId" TEXT,
    "ligne" TEXT NOT NULL,
    "matiereId" TEXT NOT NULL,
    "qteDemandee" DOUBLE PRECISION NOT NULL,
    "qteValidee" DOUBLE PRECISION,
    "commentaires" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'En attente de validation',
    "valideurId" TEXT,
    "dateValidation" TIMESTAMP(3),
    "docBC" TEXT,
    "docBL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaterialRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalRecord" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valideurId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "commentaire" TEXT,
    "motifRefus" TEXT,
    "salesRequestId" TEXT,
    "materialRequestId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApprovalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notif" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "msg" TEXT NOT NULL,
    "lu" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailNotif" (
    "id" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "corps" TEXT,
    "statut" TEXT NOT NULL DEFAULT 'Envoyé',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailNotif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhatsAppNotif" (
    "id" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "msg" TEXT NOT NULL,
    "eventType" TEXT,
    "category" TEXT,
    "deepLink" TEXT,
    "statut" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WhatsAppNotif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "ref" TEXT,
    "userId" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCost" (
    "id" TEXT NOT NULL,
    "produitId" TEXT NOT NULL,
    "prixVente" DOUBLE PRECISION NOT NULL,
    "qteVendue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "qteProduite" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "qteReel" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coutMO" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coutEnergie" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coutConsommables" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coutIndirects" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fraisLogistiques" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fraisCommerciaux" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fraisAdmin" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "coutTheoriqueUnit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductCost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCostBomLine" (
    "id" TEXT NOT NULL,
    "productCostId" TEXT NOT NULL,
    "matiereId" TEXT NOT NULL,
    "incorpPct" DOUBLE PRECISION NOT NULL,
    "qteKg" DOUBLE PRECISION NOT NULL,
    "prixAchat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductCostBomLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCostEmballage" (
    "id" TEXT NOT NULL,
    "productCostId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "qte" DOUBLE PRECISION NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductCostEmballage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatierePrixStat" (
    "id" TEXT NOT NULL,
    "matiereId" TEXT NOT NULL,
    "dernierPrix" DOUBLE PRECISION NOT NULL,
    "prixMoyen" DOUBLE PRECISION NOT NULL,
    "evolutionPct" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MatierePrixStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommandeRentabilite" (
    "id" TEXT NOT NULL,
    "commandeId" TEXT NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "coutProduits" DOUBLE PRECISION NOT NULL,
    "marge" DOUBLE PRECISION NOT NULL,
    "tauxMarge" DOUBLE PRECISION NOT NULL,
    "niveau" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommandeRentabilite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VenteSegment" (
    "id" TEXT NOT NULL,
    "segment" TEXT NOT NULL,
    "ca" DOUBLE PRECISION NOT NULL,
    "pct" DOUBLE PRECISION NOT NULL,
    "couleur" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VenteSegment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_tokenHash_key" ON "RefreshToken"("tokenHash");

-- CreateIndex
CREATE INDEX "RefreshToken_userId_idx" ON "RefreshToken"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Commercial_matricule_key" ON "Commercial"("matricule");

-- CreateIndex
CREATE UNIQUE INDEX "Commercial_email_key" ON "Commercial"("email");

-- CreateIndex
CREATE INDEX "Commercial_statut_idx" ON "Commercial"("statut");

-- CreateIndex
CREATE UNIQUE INDEX "Operateur_matricule_key" ON "Operateur"("matricule");

-- CreateIndex
CREATE INDEX "Operateur_ligne_idx" ON "Operateur"("ligne");

-- CreateIndex
CREATE UNIQUE INDEX "Fournisseur_nom_key" ON "Fournisseur"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Achat_num_key" ON "Achat"("num");

-- CreateIndex
CREATE INDEX "Achat_fournisseurId_idx" ON "Achat"("fournisseurId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_code_key" ON "Client"("code");

-- CreateIndex
CREATE INDEX "Client_commercialId_idx" ON "Client"("commercialId");

-- CreateIndex
CREATE INDEX "Client_raison_idx" ON "Client"("raison");

-- CreateIndex
CREATE UNIQUE INDEX "Commande_num_key" ON "Commande"("num");

-- CreateIndex
CREATE INDEX "Commande_clientId_date_idx" ON "Commande"("clientId", "date");

-- CreateIndex
CREATE INDEX "Commande_commercialId_idx" ON "Commande"("commercialId");

-- CreateIndex
CREATE INDEX "CommandeTimeline_commandeId_idx" ON "CommandeTimeline"("commandeId");

-- CreateIndex
CREATE UNIQUE INDEX "Facture_num_key" ON "Facture"("num");

-- CreateIndex
CREATE INDEX "Facture_clientId_idx" ON "Facture"("clientId");

-- CreateIndex
CREATE INDEX "Facture_commandeId_idx" ON "Facture"("commandeId");

-- CreateIndex
CREATE UNIQUE INDEX "StockItem_code_key" ON "StockItem"("code");

-- CreateIndex
CREATE INDEX "StockItem_type_categorie_idx" ON "StockItem"("type", "categorie");

-- CreateIndex
CREATE INDEX "Mouvement_stockItemId_date_idx" ON "Mouvement"("stockItemId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Bom_produitId_key" ON "Bom"("produitId");

-- CreateIndex
CREATE INDEX "BomLine_bomId_idx" ON "BomLine"("bomId");

-- CreateIndex
CREATE INDEX "BomLine_matiereId_idx" ON "BomLine"("matiereId");

-- CreateIndex
CREATE UNIQUE INDEX "ProdOrder_num_key" ON "ProdOrder"("num");

-- CreateIndex
CREATE INDEX "ProdOrder_produitId_statut_idx" ON "ProdOrder"("produitId", "statut");

-- CreateIndex
CREATE INDEX "Incident_prodOrderId_idx" ON "Incident"("prodOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "SalesRequest_num_key" ON "SalesRequest"("num");

-- CreateIndex
CREATE INDEX "SalesRequest_statut_idx" ON "SalesRequest"("statut");

-- CreateIndex
CREATE INDEX "SalesRequest_clientId_idx" ON "SalesRequest"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialRequest_num_key" ON "MaterialRequest"("num");

-- CreateIndex
CREATE INDEX "MaterialRequest_statut_idx" ON "MaterialRequest"("statut");

-- CreateIndex
CREATE INDEX "MaterialRequest_prodOrderId_idx" ON "MaterialRequest"("prodOrderId");

-- CreateIndex
CREATE INDEX "ApprovalRecord_salesRequestId_idx" ON "ApprovalRecord"("salesRequestId");

-- CreateIndex
CREATE INDEX "ApprovalRecord_materialRequestId_idx" ON "ApprovalRecord"("materialRequestId");

-- CreateIndex
CREATE INDEX "AuditLog_module_createdAt_idx" ON "AuditLog"("module", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCost_produitId_key" ON "ProductCost"("produitId");

-- CreateIndex
CREATE INDEX "ProductCostBomLine_productCostId_idx" ON "ProductCostBomLine"("productCostId");

-- CreateIndex
CREATE INDEX "ProductCostEmballage_productCostId_idx" ON "ProductCostEmballage"("productCostId");

-- CreateIndex
CREATE UNIQUE INDEX "MatierePrixStat_matiereId_key" ON "MatierePrixStat"("matiereId");

-- CreateIndex
CREATE UNIQUE INDEX "CommandeRentabilite_commandeId_key" ON "CommandeRentabilite"("commandeId");

-- CreateIndex
CREATE UNIQUE INDEX "VenteSegment_segment_key" ON "VenteSegment"("segment");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achat" ADD CONSTRAINT "Achat_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "Fournisseur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_commercialId_fkey" FOREIGN KEY ("commercialId") REFERENCES "Commercial"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_commercialId_fkey" FOREIGN KEY ("commercialId") REFERENCES "Commercial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeTimeline" ADD CONSTRAINT "CommandeTimeline_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeTimeline" ADD CONSTRAINT "CommandeTimeline_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facture" ADD CONSTRAINT "Facture_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facture" ADD CONSTRAINT "Facture_commercialId_fkey" FOREIGN KEY ("commercialId") REFERENCES "Commercial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Facture" ADD CONSTRAINT "Facture_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouvement" ADD CONSTRAINT "Mouvement_stockItemId_fkey" FOREIGN KEY ("stockItemId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouvement" ADD CONSTRAINT "Mouvement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouvement" ADD CONSTRAINT "Mouvement_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouvement" ADD CONSTRAINT "Mouvement_achatId_fkey" FOREIGN KEY ("achatId") REFERENCES "Achat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouvement" ADD CONSTRAINT "Mouvement_prodOrderId_fkey" FOREIGN KEY ("prodOrderId") REFERENCES "ProdOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouvement" ADD CONSTRAINT "Mouvement_salesRequestId_fkey" FOREIGN KEY ("salesRequestId") REFERENCES "SalesRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouvement" ADD CONSTRAINT "Mouvement_materialRequestId_fkey" FOREIGN KEY ("materialRequestId") REFERENCES "MaterialRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bom" ADD CONSTRAINT "Bom_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BomLine" ADD CONSTRAINT "BomLine_bomId_fkey" FOREIGN KEY ("bomId") REFERENCES "Bom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BomLine" ADD CONSTRAINT "BomLine_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdOrder" ADD CONSTRAINT "ProdOrder_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdOrder" ADD CONSTRAINT "ProdOrder_responsableId_fkey" FOREIGN KEY ("responsableId") REFERENCES "Operateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_prodOrderId_fkey" FOREIGN KEY ("prodOrderId") REFERENCES "ProdOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_operateurId_fkey" FOREIGN KEY ("operateurId") REFERENCES "Operateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesRequest" ADD CONSTRAINT "SalesRequest_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesRequest" ADD CONSTRAINT "SalesRequest_commercialId_fkey" FOREIGN KEY ("commercialId") REFERENCES "Commercial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesRequest" ADD CONSTRAINT "SalesRequest_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesRequest" ADD CONSTRAINT "SalesRequest_valideurId_fkey" FOREIGN KEY ("valideurId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialRequest" ADD CONSTRAINT "MaterialRequest_prodOrderId_fkey" FOREIGN KEY ("prodOrderId") REFERENCES "ProdOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialRequest" ADD CONSTRAINT "MaterialRequest_operateurId_fkey" FOREIGN KEY ("operateurId") REFERENCES "Operateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialRequest" ADD CONSTRAINT "MaterialRequest_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialRequest" ADD CONSTRAINT "MaterialRequest_valideurId_fkey" FOREIGN KEY ("valideurId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalRecord" ADD CONSTRAINT "ApprovalRecord_valideurId_fkey" FOREIGN KEY ("valideurId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalRecord" ADD CONSTRAINT "ApprovalRecord_salesRequestId_fkey" FOREIGN KEY ("salesRequestId") REFERENCES "SalesRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalRecord" ADD CONSTRAINT "ApprovalRecord_materialRequestId_fkey" FOREIGN KEY ("materialRequestId") REFERENCES "MaterialRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCost" ADD CONSTRAINT "ProductCost_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCostBomLine" ADD CONSTRAINT "ProductCostBomLine_productCostId_fkey" FOREIGN KEY ("productCostId") REFERENCES "ProductCost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCostBomLine" ADD CONSTRAINT "ProductCostBomLine_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCostEmballage" ADD CONSTRAINT "ProductCostEmballage_productCostId_fkey" FOREIGN KEY ("productCostId") REFERENCES "ProductCost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatierePrixStat" ADD CONSTRAINT "MatierePrixStat_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "StockItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandeRentabilite" ADD CONSTRAINT "CommandeRentabilite_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
