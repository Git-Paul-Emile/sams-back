import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model RolePermission
 *
 */
export type RolePermission = Prisma.RolePermissionModel;
/**
 * Model Settings
 *
 */
export type Settings = Prisma.SettingsModel;
/**
 * Model Commercial
 *
 */
export type Commercial = Prisma.CommercialModel;
/**
 * Model Operateur
 *
 */
export type Operateur = Prisma.OperateurModel;
/**
 * Model Fournisseur
 *
 */
export type Fournisseur = Prisma.FournisseurModel;
/**
 * Model Achat
 *
 */
export type Achat = Prisma.AchatModel;
/**
 * Model Client
 *
 */
export type Client = Prisma.ClientModel;
/**
 * Model Commande
 *
 */
export type Commande = Prisma.CommandeModel;
/**
 * Model CommandeTimeline
 *
 */
export type CommandeTimeline = Prisma.CommandeTimelineModel;
/**
 * Model Facture
 *
 */
export type Facture = Prisma.FactureModel;
/**
 * Model StockItem
 *
 */
export type StockItem = Prisma.StockItemModel;
/**
 * Model Mouvement
 *
 */
export type Mouvement = Prisma.MouvementModel;
/**
 * Model Bom
 *
 */
export type Bom = Prisma.BomModel;
/**
 * Model BomLine
 *
 */
export type BomLine = Prisma.BomLineModel;
/**
 * Model ProdOrder
 *
 */
export type ProdOrder = Prisma.ProdOrderModel;
/**
 * Model Incident
 *
 */
export type Incident = Prisma.IncidentModel;
/**
 * Model SalesRequest
 *
 */
export type SalesRequest = Prisma.SalesRequestModel;
/**
 * Model MaterialRequest
 *
 */
export type MaterialRequest = Prisma.MaterialRequestModel;
/**
 * Model ApprovalRecord
 *
 */
export type ApprovalRecord = Prisma.ApprovalRecordModel;
/**
 * Model Notif
 *
 */
export type Notif = Prisma.NotifModel;
/**
 * Model EmailNotif
 *
 */
export type EmailNotif = Prisma.EmailNotifModel;
/**
 * Model WhatsAppNotif
 *
 */
export type WhatsAppNotif = Prisma.WhatsAppNotifModel;
/**
 * Model AuditLog
 *
 */
export type AuditLog = Prisma.AuditLogModel;
/**
 * Model ProductCost
 *
 */
export type ProductCost = Prisma.ProductCostModel;
/**
 * Model ProductCostBomLine
 *
 */
export type ProductCostBomLine = Prisma.ProductCostBomLineModel;
/**
 * Model ProductCostEmballage
 *
 */
export type ProductCostEmballage = Prisma.ProductCostEmballageModel;
/**
 * Model MatierePrixStat
 *
 */
export type MatierePrixStat = Prisma.MatierePrixStatModel;
/**
 * Model CommandeRentabilite
 *
 */
export type CommandeRentabilite = Prisma.CommandeRentabiliteModel;
/**
 * Model VenteSegment
 *
 */
export type VenteSegment = Prisma.VenteSegmentModel;
//# sourceMappingURL=client.d.ts.map