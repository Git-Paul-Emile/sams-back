import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
    readonly RolePermission: "RolePermission";
    readonly Settings: "Settings";
    readonly Commercial: "Commercial";
    readonly Operateur: "Operateur";
    readonly Fournisseur: "Fournisseur";
    readonly Achat: "Achat";
    readonly Client: "Client";
    readonly Commande: "Commande";
    readonly CommandeTimeline: "CommandeTimeline";
    readonly Facture: "Facture";
    readonly StockItem: "StockItem";
    readonly Mouvement: "Mouvement";
    readonly Bom: "Bom";
    readonly BomLine: "BomLine";
    readonly ProdOrder: "ProdOrder";
    readonly Incident: "Incident";
    readonly SalesRequest: "SalesRequest";
    readonly MaterialRequest: "MaterialRequest";
    readonly ApprovalRecord: "ApprovalRecord";
    readonly Notif: "Notif";
    readonly EmailNotif: "EmailNotif";
    readonly WhatsAppNotif: "WhatsAppNotif";
    readonly AuditLog: "AuditLog";
    readonly ProductCost: "ProductCost";
    readonly ProductCostBomLine: "ProductCostBomLine";
    readonly ProductCostEmballage: "ProductCostEmballage";
    readonly MatierePrixStat: "MatierePrixStat";
    readonly CommandeRentabilite: "CommandeRentabilite";
    readonly VenteSegment: "VenteSegment";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly email: "email";
    readonly tel: "tel";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly statut: "statut";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly role: "role";
    readonly modules: "modules";
    readonly updatedAt: "updatedAt";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const SettingsScalarFieldEnum: {
    readonly id: "id";
    readonly notifErpEnabled: "notifErpEnabled";
    readonly notifEmailEnabled: "notifEmailEnabled";
    readonly notifWhatsappEnabled: "notifWhatsappEnabled";
    readonly alertRuptureEnabled: "alertRuptureEnabled";
    readonly alertValidationEnabled: "alertValidationEnabled";
    readonly updatedAt: "updatedAt";
};
export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum];
export declare const CommercialScalarFieldEnum: {
    readonly id: "id";
    readonly matricule: "matricule";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly tel: "tel";
    readonly email: "email";
    readonly zone: "zone";
    readonly objectif: "objectif";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CommercialScalarFieldEnum = (typeof CommercialScalarFieldEnum)[keyof typeof CommercialScalarFieldEnum];
export declare const OperateurScalarFieldEnum: {
    readonly id: "id";
    readonly matricule: "matricule";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly tel: "tel";
    readonly email: "email";
    readonly poste: "poste";
    readonly ligne: "ligne";
    readonly embauche: "embauche";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OperateurScalarFieldEnum = (typeof OperateurScalarFieldEnum)[keyof typeof OperateurScalarFieldEnum];
export declare const FournisseurScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly contact: "contact";
    readonly tel: "tel";
    readonly email: "email";
    readonly adresse: "adresse";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FournisseurScalarFieldEnum = (typeof FournisseurScalarFieldEnum)[keyof typeof FournisseurScalarFieldEnum];
export declare const AchatScalarFieldEnum: {
    readonly id: "id";
    readonly num: "num";
    readonly fournisseurId: "fournisseurId";
    readonly date: "date";
    readonly livraison: "livraison";
    readonly montant: "montant";
    readonly statut: "statut";
    readonly articles: "articles";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AchatScalarFieldEnum = (typeof AchatScalarFieldEnum)[keyof typeof AchatScalarFieldEnum];
export declare const ClientScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly raison: "raison";
    readonly contact: "contact";
    readonly tel: "tel";
    readonly email: "email";
    readonly adresse: "adresse";
    readonly ville: "ville";
    readonly pays: "pays";
    readonly zone: "zone";
    readonly commercialId: "commercialId";
    readonly conditions: "conditions";
    readonly plafond: "plafond";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];
export declare const CommandeScalarFieldEnum: {
    readonly id: "id";
    readonly num: "num";
    readonly clientId: "clientId";
    readonly date: "date";
    readonly montant: "montant";
    readonly commercialId: "commercialId";
    readonly statutActuel: "statutActuel";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum];
export declare const CommandeTimelineScalarFieldEnum: {
    readonly id: "id";
    readonly commandeId: "commandeId";
    readonly etat: "etat";
    readonly date: "date";
    readonly userId: "userId";
    readonly commentaire: "commentaire";
};
export type CommandeTimelineScalarFieldEnum = (typeof CommandeTimelineScalarFieldEnum)[keyof typeof CommandeTimelineScalarFieldEnum];
export declare const FactureScalarFieldEnum: {
    readonly id: "id";
    readonly num: "num";
    readonly clientId: "clientId";
    readonly commercialId: "commercialId";
    readonly commandeId: "commandeId";
    readonly type: "type";
    readonly date: "date";
    readonly echeance: "echeance";
    readonly montant: "montant";
    readonly paye: "paye";
    readonly statut: "statut";
    readonly mode: "mode";
    readonly dateReglPrev: "dateReglPrev";
    readonly dateReglEff: "dateReglEff";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum];
export declare const StockItemScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly designation: "designation";
    readonly type: "type";
    readonly categorie: "categorie";
    readonly unite: "unite";
    readonly stock: "stock";
    readonly min: "min";
    readonly critique: "critique";
    readonly valeurUnit: "valeurUnit";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StockItemScalarFieldEnum = (typeof StockItemScalarFieldEnum)[keyof typeof StockItemScalarFieldEnum];
export declare const MouvementScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly type: "type";
    readonly stockItemId: "stockItemId";
    readonly qte: "qte";
    readonly userId: "userId";
    readonly motif: "motif";
    readonly commandeId: "commandeId";
    readonly achatId: "achatId";
    readonly prodOrderId: "prodOrderId";
    readonly salesRequestId: "salesRequestId";
    readonly materialRequestId: "materialRequestId";
    readonly createdAt: "createdAt";
};
export type MouvementScalarFieldEnum = (typeof MouvementScalarFieldEnum)[keyof typeof MouvementScalarFieldEnum];
export declare const BomScalarFieldEnum: {
    readonly id: "id";
    readonly produitId: "produitId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BomScalarFieldEnum = (typeof BomScalarFieldEnum)[keyof typeof BomScalarFieldEnum];
export declare const BomLineScalarFieldEnum: {
    readonly id: "id";
    readonly bomId: "bomId";
    readonly matiereId: "matiereId";
    readonly qte: "qte";
    readonly unite: "unite";
};
export type BomLineScalarFieldEnum = (typeof BomLineScalarFieldEnum)[keyof typeof BomLineScalarFieldEnum];
export declare const ProdOrderScalarFieldEnum: {
    readonly id: "id";
    readonly num: "num";
    readonly produitId: "produitId";
    readonly ligne: "ligne";
    readonly qtePrev: "qtePrev";
    readonly qteReel: "qteReel";
    readonly debut: "debut";
    readonly fin: "fin";
    readonly responsableId: "responsableId";
    readonly statut: "statut";
    readonly rendement: "rendement";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProdOrderScalarFieldEnum = (typeof ProdOrderScalarFieldEnum)[keyof typeof ProdOrderScalarFieldEnum];
export declare const IncidentScalarFieldEnum: {
    readonly id: "id";
    readonly prodOrderId: "prodOrderId";
    readonly operateurId: "operateurId";
    readonly categorie: "categorie";
    readonly description: "description";
    readonly date: "date";
    readonly statut: "statut";
    readonly gravite: "gravite";
    readonly createdAt: "createdAt";
};
export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum];
export declare const SalesRequestScalarFieldEnum: {
    readonly id: "id";
    readonly num: "num";
    readonly date: "date";
    readonly clientId: "clientId";
    readonly commercialId: "commercialId";
    readonly produitId: "produitId";
    readonly qteDemandee: "qteDemandee";
    readonly qteValidee: "qteValidee";
    readonly stockDispo: "stockDispo";
    readonly prixUnit: "prixUnit";
    readonly montant: "montant";
    readonly entrepot: "entrepot";
    readonly observation: "observation";
    readonly statut: "statut";
    readonly valideurId: "valideurId";
    readonly dateValidation: "dateValidation";
    readonly commentaire: "commentaire";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SalesRequestScalarFieldEnum = (typeof SalesRequestScalarFieldEnum)[keyof typeof SalesRequestScalarFieldEnum];
export declare const MaterialRequestScalarFieldEnum: {
    readonly id: "id";
    readonly num: "num";
    readonly date: "date";
    readonly prodOrderId: "prodOrderId";
    readonly operateurId: "operateurId";
    readonly ligne: "ligne";
    readonly matiereId: "matiereId";
    readonly qteDemandee: "qteDemandee";
    readonly qteValidee: "qteValidee";
    readonly commentaires: "commentaires";
    readonly statut: "statut";
    readonly valideurId: "valideurId";
    readonly dateValidation: "dateValidation";
    readonly docBC: "docBC";
    readonly docBL: "docBL";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MaterialRequestScalarFieldEnum = (typeof MaterialRequestScalarFieldEnum)[keyof typeof MaterialRequestScalarFieldEnum];
export declare const ApprovalRecordScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly valideurId: "valideurId";
    readonly action: "action";
    readonly type: "type";
    readonly module: "module";
    readonly commentaire: "commentaire";
    readonly motifRefus: "motifRefus";
    readonly salesRequestId: "salesRequestId";
    readonly materialRequestId: "materialRequestId";
    readonly createdAt: "createdAt";
};
export type ApprovalRecordScalarFieldEnum = (typeof ApprovalRecordScalarFieldEnum)[keyof typeof ApprovalRecordScalarFieldEnum];
export declare const NotifScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly titre: "titre";
    readonly msg: "msg";
    readonly lu: "lu";
    readonly createdAt: "createdAt";
};
export type NotifScalarFieldEnum = (typeof NotifScalarFieldEnum)[keyof typeof NotifScalarFieldEnum];
export declare const EmailNotifScalarFieldEnum: {
    readonly id: "id";
    readonly to: "to";
    readonly sujet: "sujet";
    readonly corps: "corps";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
};
export type EmailNotifScalarFieldEnum = (typeof EmailNotifScalarFieldEnum)[keyof typeof EmailNotifScalarFieldEnum];
export declare const WhatsAppNotifScalarFieldEnum: {
    readonly id: "id";
    readonly to: "to";
    readonly msg: "msg";
    readonly eventType: "eventType";
    readonly category: "category";
    readonly deepLink: "deepLink";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
};
export type WhatsAppNotifScalarFieldEnum = (typeof WhatsAppNotifScalarFieldEnum)[keyof typeof WhatsAppNotifScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly action: "action";
    readonly module: "module";
    readonly ref: "ref";
    readonly userId: "userId";
    readonly ip: "ip";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const ProductCostScalarFieldEnum: {
    readonly id: "id";
    readonly produitId: "produitId";
    readonly prixVente: "prixVente";
    readonly qteVendue: "qteVendue";
    readonly qteProduite: "qteProduite";
    readonly qteReel: "qteReel";
    readonly coutMO: "coutMO";
    readonly coutEnergie: "coutEnergie";
    readonly coutConsommables: "coutConsommables";
    readonly coutIndirects: "coutIndirects";
    readonly fraisLogistiques: "fraisLogistiques";
    readonly fraisCommerciaux: "fraisCommerciaux";
    readonly fraisAdmin: "fraisAdmin";
    readonly coutTheoriqueUnit: "coutTheoriqueUnit";
    readonly calculatedAt: "calculatedAt";
    readonly updatedAt: "updatedAt";
};
export type ProductCostScalarFieldEnum = (typeof ProductCostScalarFieldEnum)[keyof typeof ProductCostScalarFieldEnum];
export declare const ProductCostBomLineScalarFieldEnum: {
    readonly id: "id";
    readonly productCostId: "productCostId";
    readonly matiereId: "matiereId";
    readonly incorpPct: "incorpPct";
    readonly qteKg: "qteKg";
    readonly prixAchat: "prixAchat";
};
export type ProductCostBomLineScalarFieldEnum = (typeof ProductCostBomLineScalarFieldEnum)[keyof typeof ProductCostBomLineScalarFieldEnum];
export declare const ProductCostEmballageScalarFieldEnum: {
    readonly id: "id";
    readonly productCostId: "productCostId";
    readonly type: "type";
    readonly qte: "qte";
    readonly prix: "prix";
};
export type ProductCostEmballageScalarFieldEnum = (typeof ProductCostEmballageScalarFieldEnum)[keyof typeof ProductCostEmballageScalarFieldEnum];
export declare const MatierePrixStatScalarFieldEnum: {
    readonly id: "id";
    readonly matiereId: "matiereId";
    readonly dernierPrix: "dernierPrix";
    readonly prixMoyen: "prixMoyen";
    readonly evolutionPct: "evolutionPct";
    readonly updatedAt: "updatedAt";
};
export type MatierePrixStatScalarFieldEnum = (typeof MatierePrixStatScalarFieldEnum)[keyof typeof MatierePrixStatScalarFieldEnum];
export declare const CommandeRentabiliteScalarFieldEnum: {
    readonly id: "id";
    readonly commandeId: "commandeId";
    readonly montant: "montant";
    readonly coutProduits: "coutProduits";
    readonly marge: "marge";
    readonly tauxMarge: "tauxMarge";
    readonly niveau: "niveau";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CommandeRentabiliteScalarFieldEnum = (typeof CommandeRentabiliteScalarFieldEnum)[keyof typeof CommandeRentabiliteScalarFieldEnum];
export declare const VenteSegmentScalarFieldEnum: {
    readonly id: "id";
    readonly segment: "segment";
    readonly ca: "ca";
    readonly pct: "pct";
    readonly couleur: "couleur";
    readonly updatedAt: "updatedAt";
};
export type VenteSegmentScalarFieldEnum = (typeof VenteSegmentScalarFieldEnum)[keyof typeof VenteSegmentScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map