import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RefreshTokens
      * const refreshTokens = await prisma.refreshToken.findMany()
      * ```
      */
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RolePermissions
      * const rolePermissions = await prisma.rolePermission.findMany()
      * ```
      */
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Settings
      * const settings = await prisma.settings.findMany()
      * ```
      */
    get settings(): Prisma.SettingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.commercial`: Exposes CRUD operations for the **Commercial** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Commercials
      * const commercials = await prisma.commercial.findMany()
      * ```
      */
    get commercial(): Prisma.CommercialDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.operateur`: Exposes CRUD operations for the **Operateur** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Operateurs
      * const operateurs = await prisma.operateur.findMany()
      * ```
      */
    get operateur(): Prisma.OperateurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.fournisseur`: Exposes CRUD operations for the **Fournisseur** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Fournisseurs
      * const fournisseurs = await prisma.fournisseur.findMany()
      * ```
      */
    get fournisseur(): Prisma.FournisseurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.achat`: Exposes CRUD operations for the **Achat** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Achats
      * const achats = await prisma.achat.findMany()
      * ```
      */
    get achat(): Prisma.AchatDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.client`: Exposes CRUD operations for the **Client** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Clients
      * const clients = await prisma.client.findMany()
      * ```
      */
    get client(): Prisma.ClientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Commandes
      * const commandes = await prisma.commande.findMany()
      * ```
      */
    get commande(): Prisma.CommandeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.commandeTimeline`: Exposes CRUD operations for the **CommandeTimeline** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CommandeTimelines
      * const commandeTimelines = await prisma.commandeTimeline.findMany()
      * ```
      */
    get commandeTimeline(): Prisma.CommandeTimelineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.facture`: Exposes CRUD operations for the **Facture** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Factures
      * const factures = await prisma.facture.findMany()
      * ```
      */
    get facture(): Prisma.FactureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.stockItem`: Exposes CRUD operations for the **StockItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StockItems
      * const stockItems = await prisma.stockItem.findMany()
      * ```
      */
    get stockItem(): Prisma.StockItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mouvement`: Exposes CRUD operations for the **Mouvement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Mouvements
      * const mouvements = await prisma.mouvement.findMany()
      * ```
      */
    get mouvement(): Prisma.MouvementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bom`: Exposes CRUD operations for the **Bom** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Boms
      * const boms = await prisma.bom.findMany()
      * ```
      */
    get bom(): Prisma.BomDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bomLine`: Exposes CRUD operations for the **BomLine** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BomLines
      * const bomLines = await prisma.bomLine.findMany()
      * ```
      */
    get bomLine(): Prisma.BomLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.prodOrder`: Exposes CRUD operations for the **ProdOrder** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProdOrders
      * const prodOrders = await prisma.prodOrder.findMany()
      * ```
      */
    get prodOrder(): Prisma.ProdOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Incidents
      * const incidents = await prisma.incident.findMany()
      * ```
      */
    get incident(): Prisma.IncidentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.salesRequest`: Exposes CRUD operations for the **SalesRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SalesRequests
      * const salesRequests = await prisma.salesRequest.findMany()
      * ```
      */
    get salesRequest(): Prisma.SalesRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.materialRequest`: Exposes CRUD operations for the **MaterialRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MaterialRequests
      * const materialRequests = await prisma.materialRequest.findMany()
      * ```
      */
    get materialRequest(): Prisma.MaterialRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.approvalRecord`: Exposes CRUD operations for the **ApprovalRecord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ApprovalRecords
      * const approvalRecords = await prisma.approvalRecord.findMany()
      * ```
      */
    get approvalRecord(): Prisma.ApprovalRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notif`: Exposes CRUD operations for the **Notif** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifs
      * const notifs = await prisma.notif.findMany()
      * ```
      */
    get notif(): Prisma.NotifDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.emailNotif`: Exposes CRUD operations for the **EmailNotif** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EmailNotifs
      * const emailNotifs = await prisma.emailNotif.findMany()
      * ```
      */
    get emailNotif(): Prisma.EmailNotifDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.whatsAppNotif`: Exposes CRUD operations for the **WhatsAppNotif** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WhatsAppNotifs
      * const whatsAppNotifs = await prisma.whatsAppNotif.findMany()
      * ```
      */
    get whatsAppNotif(): Prisma.WhatsAppNotifDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productCost`: Exposes CRUD operations for the **ProductCost** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductCosts
      * const productCosts = await prisma.productCost.findMany()
      * ```
      */
    get productCost(): Prisma.ProductCostDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productCostBomLine`: Exposes CRUD operations for the **ProductCostBomLine** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductCostBomLines
      * const productCostBomLines = await prisma.productCostBomLine.findMany()
      * ```
      */
    get productCostBomLine(): Prisma.ProductCostBomLineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productCostEmballage`: Exposes CRUD operations for the **ProductCostEmballage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductCostEmballages
      * const productCostEmballages = await prisma.productCostEmballage.findMany()
      * ```
      */
    get productCostEmballage(): Prisma.ProductCostEmballageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.matierePrixStat`: Exposes CRUD operations for the **MatierePrixStat** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MatierePrixStats
      * const matierePrixStats = await prisma.matierePrixStat.findMany()
      * ```
      */
    get matierePrixStat(): Prisma.MatierePrixStatDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.commandeRentabilite`: Exposes CRUD operations for the **CommandeRentabilite** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CommandeRentabilites
      * const commandeRentabilites = await prisma.commandeRentabilite.findMany()
      * ```
      */
    get commandeRentabilite(): Prisma.CommandeRentabiliteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.venteSegment`: Exposes CRUD operations for the **VenteSegment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VenteSegments
      * const venteSegments = await prisma.venteSegment.findMany()
      * ```
      */
    get venteSegment(): Prisma.VenteSegmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map