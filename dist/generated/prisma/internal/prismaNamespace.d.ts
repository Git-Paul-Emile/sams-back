import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "refreshToken" | "rolePermission" | "settings" | "commercial" | "operateur" | "fournisseur" | "achat" | "client" | "commande" | "commandeTimeline" | "facture" | "stockItem" | "mouvement" | "bom" | "bomLine" | "prodOrder" | "incident" | "salesRequest" | "materialRequest" | "approvalRecord" | "notif" | "emailNotif" | "whatsAppNotif" | "auditLog" | "productCost" | "productCostBomLine" | "productCostEmballage" | "matierePrixStat" | "commandeRentabilite" | "venteSegment";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        RolePermission: {
            payload: Prisma.$RolePermissionPayload<ExtArgs>;
            fields: Prisma.RolePermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findFirst: {
                    args: Prisma.RolePermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findMany: {
                    args: Prisma.RolePermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                create: {
                    args: Prisma.RolePermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                createMany: {
                    args: Prisma.RolePermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                delete: {
                    args: Prisma.RolePermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                update: {
                    args: Prisma.RolePermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                upsert: {
                    args: Prisma.RolePermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                aggregate: {
                    args: Prisma.RolePermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRolePermission>;
                };
                groupBy: {
                    args: Prisma.RolePermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolePermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionCountAggregateOutputType> | number;
                };
            };
        };
        Settings: {
            payload: Prisma.$SettingsPayload<ExtArgs>;
            fields: Prisma.SettingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SettingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                findFirst: {
                    args: Prisma.SettingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                findMany: {
                    args: Prisma.SettingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>[];
                };
                create: {
                    args: Prisma.SettingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                createMany: {
                    args: Prisma.SettingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>[];
                };
                delete: {
                    args: Prisma.SettingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                update: {
                    args: Prisma.SettingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                deleteMany: {
                    args: Prisma.SettingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SettingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>[];
                };
                upsert: {
                    args: Prisma.SettingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                aggregate: {
                    args: Prisma.SettingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSettings>;
                };
                groupBy: {
                    args: Prisma.SettingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SettingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingsCountAggregateOutputType> | number;
                };
            };
        };
        Commercial: {
            payload: Prisma.$CommercialPayload<ExtArgs>;
            fields: Prisma.CommercialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommercialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommercialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>;
                };
                findFirst: {
                    args: Prisma.CommercialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommercialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>;
                };
                findMany: {
                    args: Prisma.CommercialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>[];
                };
                create: {
                    args: Prisma.CommercialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>;
                };
                createMany: {
                    args: Prisma.CommercialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommercialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>[];
                };
                delete: {
                    args: Prisma.CommercialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>;
                };
                update: {
                    args: Prisma.CommercialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>;
                };
                deleteMany: {
                    args: Prisma.CommercialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommercialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommercialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>[];
                };
                upsert: {
                    args: Prisma.CommercialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommercialPayload>;
                };
                aggregate: {
                    args: Prisma.CommercialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommercial>;
                };
                groupBy: {
                    args: Prisma.CommercialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommercialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommercialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommercialCountAggregateOutputType> | number;
                };
            };
        };
        Operateur: {
            payload: Prisma.$OperateurPayload<ExtArgs>;
            fields: Prisma.OperateurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OperateurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OperateurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>;
                };
                findFirst: {
                    args: Prisma.OperateurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OperateurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>;
                };
                findMany: {
                    args: Prisma.OperateurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>[];
                };
                create: {
                    args: Prisma.OperateurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>;
                };
                createMany: {
                    args: Prisma.OperateurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OperateurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>[];
                };
                delete: {
                    args: Prisma.OperateurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>;
                };
                update: {
                    args: Prisma.OperateurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>;
                };
                deleteMany: {
                    args: Prisma.OperateurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OperateurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OperateurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>[];
                };
                upsert: {
                    args: Prisma.OperateurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperateurPayload>;
                };
                aggregate: {
                    args: Prisma.OperateurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOperateur>;
                };
                groupBy: {
                    args: Prisma.OperateurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperateurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OperateurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperateurCountAggregateOutputType> | number;
                };
            };
        };
        Fournisseur: {
            payload: Prisma.$FournisseurPayload<ExtArgs>;
            fields: Prisma.FournisseurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FournisseurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FournisseurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>;
                };
                findFirst: {
                    args: Prisma.FournisseurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FournisseurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>;
                };
                findMany: {
                    args: Prisma.FournisseurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>[];
                };
                create: {
                    args: Prisma.FournisseurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>;
                };
                createMany: {
                    args: Prisma.FournisseurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FournisseurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>[];
                };
                delete: {
                    args: Prisma.FournisseurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>;
                };
                update: {
                    args: Prisma.FournisseurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>;
                };
                deleteMany: {
                    args: Prisma.FournisseurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FournisseurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FournisseurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>[];
                };
                upsert: {
                    args: Prisma.FournisseurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FournisseurPayload>;
                };
                aggregate: {
                    args: Prisma.FournisseurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFournisseur>;
                };
                groupBy: {
                    args: Prisma.FournisseurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FournisseurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FournisseurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FournisseurCountAggregateOutputType> | number;
                };
            };
        };
        Achat: {
            payload: Prisma.$AchatPayload<ExtArgs>;
            fields: Prisma.AchatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AchatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AchatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>;
                };
                findFirst: {
                    args: Prisma.AchatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AchatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>;
                };
                findMany: {
                    args: Prisma.AchatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>[];
                };
                create: {
                    args: Prisma.AchatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>;
                };
                createMany: {
                    args: Prisma.AchatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AchatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>[];
                };
                delete: {
                    args: Prisma.AchatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>;
                };
                update: {
                    args: Prisma.AchatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>;
                };
                deleteMany: {
                    args: Prisma.AchatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AchatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AchatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>[];
                };
                upsert: {
                    args: Prisma.AchatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchatPayload>;
                };
                aggregate: {
                    args: Prisma.AchatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAchat>;
                };
                groupBy: {
                    args: Prisma.AchatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AchatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AchatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AchatCountAggregateOutputType> | number;
                };
            };
        };
        Client: {
            payload: Prisma.$ClientPayload<ExtArgs>;
            fields: Prisma.ClientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findFirst: {
                    args: Prisma.ClientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                findMany: {
                    args: Prisma.ClientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                create: {
                    args: Prisma.ClientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                createMany: {
                    args: Prisma.ClientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                delete: {
                    args: Prisma.ClientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                update: {
                    args: Prisma.ClientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                deleteMany: {
                    args: Prisma.ClientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>[];
                };
                upsert: {
                    args: Prisma.ClientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientPayload>;
                };
                aggregate: {
                    args: Prisma.ClientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClient>;
                };
                groupBy: {
                    args: Prisma.ClientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClientCountAggregateOutputType> | number;
                };
            };
        };
        Commande: {
            payload: Prisma.$CommandePayload<ExtArgs>;
            fields: Prisma.CommandeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommandeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommandeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>;
                };
                findFirst: {
                    args: Prisma.CommandeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommandeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>;
                };
                findMany: {
                    args: Prisma.CommandeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>[];
                };
                create: {
                    args: Prisma.CommandeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>;
                };
                createMany: {
                    args: Prisma.CommandeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommandeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>[];
                };
                delete: {
                    args: Prisma.CommandeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>;
                };
                update: {
                    args: Prisma.CommandeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>;
                };
                deleteMany: {
                    args: Prisma.CommandeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommandeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommandeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>[];
                };
                upsert: {
                    args: Prisma.CommandeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandePayload>;
                };
                aggregate: {
                    args: Prisma.CommandeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommande>;
                };
                groupBy: {
                    args: Prisma.CommandeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommandeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommandeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommandeCountAggregateOutputType> | number;
                };
            };
        };
        CommandeTimeline: {
            payload: Prisma.$CommandeTimelinePayload<ExtArgs>;
            fields: Prisma.CommandeTimelineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommandeTimelineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommandeTimelineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>;
                };
                findFirst: {
                    args: Prisma.CommandeTimelineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommandeTimelineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>;
                };
                findMany: {
                    args: Prisma.CommandeTimelineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>[];
                };
                create: {
                    args: Prisma.CommandeTimelineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>;
                };
                createMany: {
                    args: Prisma.CommandeTimelineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommandeTimelineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>[];
                };
                delete: {
                    args: Prisma.CommandeTimelineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>;
                };
                update: {
                    args: Prisma.CommandeTimelineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>;
                };
                deleteMany: {
                    args: Prisma.CommandeTimelineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommandeTimelineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommandeTimelineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>[];
                };
                upsert: {
                    args: Prisma.CommandeTimelineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeTimelinePayload>;
                };
                aggregate: {
                    args: Prisma.CommandeTimelineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommandeTimeline>;
                };
                groupBy: {
                    args: Prisma.CommandeTimelineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommandeTimelineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommandeTimelineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommandeTimelineCountAggregateOutputType> | number;
                };
            };
        };
        Facture: {
            payload: Prisma.$FacturePayload<ExtArgs>;
            fields: Prisma.FactureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FactureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FactureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                findFirst: {
                    args: Prisma.FactureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FactureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                findMany: {
                    args: Prisma.FactureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>[];
                };
                create: {
                    args: Prisma.FactureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                createMany: {
                    args: Prisma.FactureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FactureCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>[];
                };
                delete: {
                    args: Prisma.FactureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                update: {
                    args: Prisma.FactureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                deleteMany: {
                    args: Prisma.FactureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FactureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FactureUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>[];
                };
                upsert: {
                    args: Prisma.FactureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                aggregate: {
                    args: Prisma.FactureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacture>;
                };
                groupBy: {
                    args: Prisma.FactureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FactureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FactureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FactureCountAggregateOutputType> | number;
                };
            };
        };
        StockItem: {
            payload: Prisma.$StockItemPayload<ExtArgs>;
            fields: Prisma.StockItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StockItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StockItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                findFirst: {
                    args: Prisma.StockItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StockItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                findMany: {
                    args: Prisma.StockItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>[];
                };
                create: {
                    args: Prisma.StockItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                createMany: {
                    args: Prisma.StockItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StockItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>[];
                };
                delete: {
                    args: Prisma.StockItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                update: {
                    args: Prisma.StockItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                deleteMany: {
                    args: Prisma.StockItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StockItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StockItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>[];
                };
                upsert: {
                    args: Prisma.StockItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StockItemPayload>;
                };
                aggregate: {
                    args: Prisma.StockItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStockItem>;
                };
                groupBy: {
                    args: Prisma.StockItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StockItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StockItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StockItemCountAggregateOutputType> | number;
                };
            };
        };
        Mouvement: {
            payload: Prisma.$MouvementPayload<ExtArgs>;
            fields: Prisma.MouvementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MouvementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MouvementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>;
                };
                findFirst: {
                    args: Prisma.MouvementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MouvementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>;
                };
                findMany: {
                    args: Prisma.MouvementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>[];
                };
                create: {
                    args: Prisma.MouvementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>;
                };
                createMany: {
                    args: Prisma.MouvementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MouvementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>[];
                };
                delete: {
                    args: Prisma.MouvementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>;
                };
                update: {
                    args: Prisma.MouvementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>;
                };
                deleteMany: {
                    args: Prisma.MouvementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MouvementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MouvementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>[];
                };
                upsert: {
                    args: Prisma.MouvementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MouvementPayload>;
                };
                aggregate: {
                    args: Prisma.MouvementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMouvement>;
                };
                groupBy: {
                    args: Prisma.MouvementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MouvementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MouvementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MouvementCountAggregateOutputType> | number;
                };
            };
        };
        Bom: {
            payload: Prisma.$BomPayload<ExtArgs>;
            fields: Prisma.BomFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BomFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BomFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>;
                };
                findFirst: {
                    args: Prisma.BomFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BomFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>;
                };
                findMany: {
                    args: Prisma.BomFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>[];
                };
                create: {
                    args: Prisma.BomCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>;
                };
                createMany: {
                    args: Prisma.BomCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BomCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>[];
                };
                delete: {
                    args: Prisma.BomDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>;
                };
                update: {
                    args: Prisma.BomUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>;
                };
                deleteMany: {
                    args: Prisma.BomDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BomUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BomUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>[];
                };
                upsert: {
                    args: Prisma.BomUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomPayload>;
                };
                aggregate: {
                    args: Prisma.BomAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBom>;
                };
                groupBy: {
                    args: Prisma.BomGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BomGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BomCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BomCountAggregateOutputType> | number;
                };
            };
        };
        BomLine: {
            payload: Prisma.$BomLinePayload<ExtArgs>;
            fields: Prisma.BomLineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BomLineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BomLineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>;
                };
                findFirst: {
                    args: Prisma.BomLineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BomLineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>;
                };
                findMany: {
                    args: Prisma.BomLineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>[];
                };
                create: {
                    args: Prisma.BomLineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>;
                };
                createMany: {
                    args: Prisma.BomLineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BomLineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>[];
                };
                delete: {
                    args: Prisma.BomLineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>;
                };
                update: {
                    args: Prisma.BomLineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>;
                };
                deleteMany: {
                    args: Prisma.BomLineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BomLineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BomLineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>[];
                };
                upsert: {
                    args: Prisma.BomLineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BomLinePayload>;
                };
                aggregate: {
                    args: Prisma.BomLineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBomLine>;
                };
                groupBy: {
                    args: Prisma.BomLineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BomLineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BomLineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BomLineCountAggregateOutputType> | number;
                };
            };
        };
        ProdOrder: {
            payload: Prisma.$ProdOrderPayload<ExtArgs>;
            fields: Prisma.ProdOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProdOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProdOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>;
                };
                findFirst: {
                    args: Prisma.ProdOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProdOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>;
                };
                findMany: {
                    args: Prisma.ProdOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>[];
                };
                create: {
                    args: Prisma.ProdOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>;
                };
                createMany: {
                    args: Prisma.ProdOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProdOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>[];
                };
                delete: {
                    args: Prisma.ProdOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>;
                };
                update: {
                    args: Prisma.ProdOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.ProdOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProdOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProdOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>[];
                };
                upsert: {
                    args: Prisma.ProdOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProdOrderPayload>;
                };
                aggregate: {
                    args: Prisma.ProdOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProdOrder>;
                };
                groupBy: {
                    args: Prisma.ProdOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProdOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProdOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProdOrderCountAggregateOutputType> | number;
                };
            };
        };
        Incident: {
            payload: Prisma.$IncidentPayload<ExtArgs>;
            fields: Prisma.IncidentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IncidentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                findFirst: {
                    args: Prisma.IncidentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                findMany: {
                    args: Prisma.IncidentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>[];
                };
                create: {
                    args: Prisma.IncidentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                createMany: {
                    args: Prisma.IncidentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>[];
                };
                delete: {
                    args: Prisma.IncidentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                update: {
                    args: Prisma.IncidentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                deleteMany: {
                    args: Prisma.IncidentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IncidentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>[];
                };
                upsert: {
                    args: Prisma.IncidentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncidentPayload>;
                };
                aggregate: {
                    args: Prisma.IncidentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIncident>;
                };
                groupBy: {
                    args: Prisma.IncidentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncidentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IncidentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncidentCountAggregateOutputType> | number;
                };
            };
        };
        SalesRequest: {
            payload: Prisma.$SalesRequestPayload<ExtArgs>;
            fields: Prisma.SalesRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SalesRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SalesRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>;
                };
                findFirst: {
                    args: Prisma.SalesRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SalesRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>;
                };
                findMany: {
                    args: Prisma.SalesRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>[];
                };
                create: {
                    args: Prisma.SalesRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>;
                };
                createMany: {
                    args: Prisma.SalesRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SalesRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>[];
                };
                delete: {
                    args: Prisma.SalesRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>;
                };
                update: {
                    args: Prisma.SalesRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.SalesRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SalesRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SalesRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>[];
                };
                upsert: {
                    args: Prisma.SalesRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalesRequestPayload>;
                };
                aggregate: {
                    args: Prisma.SalesRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSalesRequest>;
                };
                groupBy: {
                    args: Prisma.SalesRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalesRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SalesRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalesRequestCountAggregateOutputType> | number;
                };
            };
        };
        MaterialRequest: {
            payload: Prisma.$MaterialRequestPayload<ExtArgs>;
            fields: Prisma.MaterialRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MaterialRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MaterialRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>;
                };
                findFirst: {
                    args: Prisma.MaterialRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MaterialRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>;
                };
                findMany: {
                    args: Prisma.MaterialRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>[];
                };
                create: {
                    args: Prisma.MaterialRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>;
                };
                createMany: {
                    args: Prisma.MaterialRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MaterialRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>[];
                };
                delete: {
                    args: Prisma.MaterialRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>;
                };
                update: {
                    args: Prisma.MaterialRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.MaterialRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MaterialRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MaterialRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>[];
                };
                upsert: {
                    args: Prisma.MaterialRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MaterialRequestPayload>;
                };
                aggregate: {
                    args: Prisma.MaterialRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMaterialRequest>;
                };
                groupBy: {
                    args: Prisma.MaterialRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MaterialRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MaterialRequestCountAggregateOutputType> | number;
                };
            };
        };
        ApprovalRecord: {
            payload: Prisma.$ApprovalRecordPayload<ExtArgs>;
            fields: Prisma.ApprovalRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ApprovalRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ApprovalRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>;
                };
                findFirst: {
                    args: Prisma.ApprovalRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ApprovalRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>;
                };
                findMany: {
                    args: Prisma.ApprovalRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>[];
                };
                create: {
                    args: Prisma.ApprovalRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>;
                };
                createMany: {
                    args: Prisma.ApprovalRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ApprovalRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>[];
                };
                delete: {
                    args: Prisma.ApprovalRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>;
                };
                update: {
                    args: Prisma.ApprovalRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.ApprovalRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ApprovalRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ApprovalRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>[];
                };
                upsert: {
                    args: Prisma.ApprovalRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>;
                };
                aggregate: {
                    args: Prisma.ApprovalRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApprovalRecord>;
                };
                groupBy: {
                    args: Prisma.ApprovalRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApprovalRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ApprovalRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApprovalRecordCountAggregateOutputType> | number;
                };
            };
        };
        Notif: {
            payload: Prisma.$NotifPayload<ExtArgs>;
            fields: Prisma.NotifFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotifFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotifFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>;
                };
                findFirst: {
                    args: Prisma.NotifFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotifFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>;
                };
                findMany: {
                    args: Prisma.NotifFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>[];
                };
                create: {
                    args: Prisma.NotifCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>;
                };
                createMany: {
                    args: Prisma.NotifCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotifCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>[];
                };
                delete: {
                    args: Prisma.NotifDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>;
                };
                update: {
                    args: Prisma.NotifUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>;
                };
                deleteMany: {
                    args: Prisma.NotifDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotifUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotifUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>[];
                };
                upsert: {
                    args: Prisma.NotifUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotifPayload>;
                };
                aggregate: {
                    args: Prisma.NotifAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotif>;
                };
                groupBy: {
                    args: Prisma.NotifGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotifGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotifCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotifCountAggregateOutputType> | number;
                };
            };
        };
        EmailNotif: {
            payload: Prisma.$EmailNotifPayload<ExtArgs>;
            fields: Prisma.EmailNotifFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmailNotifFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmailNotifFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>;
                };
                findFirst: {
                    args: Prisma.EmailNotifFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmailNotifFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>;
                };
                findMany: {
                    args: Prisma.EmailNotifFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>[];
                };
                create: {
                    args: Prisma.EmailNotifCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>;
                };
                createMany: {
                    args: Prisma.EmailNotifCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmailNotifCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>[];
                };
                delete: {
                    args: Prisma.EmailNotifDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>;
                };
                update: {
                    args: Prisma.EmailNotifUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>;
                };
                deleteMany: {
                    args: Prisma.EmailNotifDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmailNotifUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmailNotifUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>[];
                };
                upsert: {
                    args: Prisma.EmailNotifUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailNotifPayload>;
                };
                aggregate: {
                    args: Prisma.EmailNotifAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmailNotif>;
                };
                groupBy: {
                    args: Prisma.EmailNotifGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailNotifGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmailNotifCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailNotifCountAggregateOutputType> | number;
                };
            };
        };
        WhatsAppNotif: {
            payload: Prisma.$WhatsAppNotifPayload<ExtArgs>;
            fields: Prisma.WhatsAppNotifFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WhatsAppNotifFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WhatsAppNotifFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>;
                };
                findFirst: {
                    args: Prisma.WhatsAppNotifFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WhatsAppNotifFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>;
                };
                findMany: {
                    args: Prisma.WhatsAppNotifFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>[];
                };
                create: {
                    args: Prisma.WhatsAppNotifCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>;
                };
                createMany: {
                    args: Prisma.WhatsAppNotifCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WhatsAppNotifCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>[];
                };
                delete: {
                    args: Prisma.WhatsAppNotifDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>;
                };
                update: {
                    args: Prisma.WhatsAppNotifUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>;
                };
                deleteMany: {
                    args: Prisma.WhatsAppNotifDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WhatsAppNotifUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WhatsAppNotifUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>[];
                };
                upsert: {
                    args: Prisma.WhatsAppNotifUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WhatsAppNotifPayload>;
                };
                aggregate: {
                    args: Prisma.WhatsAppNotifAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWhatsAppNotif>;
                };
                groupBy: {
                    args: Prisma.WhatsAppNotifGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WhatsAppNotifGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WhatsAppNotifCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WhatsAppNotifCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        ProductCost: {
            payload: Prisma.$ProductCostPayload<ExtArgs>;
            fields: Prisma.ProductCostFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductCostFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductCostFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>;
                };
                findFirst: {
                    args: Prisma.ProductCostFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductCostFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>;
                };
                findMany: {
                    args: Prisma.ProductCostFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>[];
                };
                create: {
                    args: Prisma.ProductCostCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>;
                };
                createMany: {
                    args: Prisma.ProductCostCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCostCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>[];
                };
                delete: {
                    args: Prisma.ProductCostDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>;
                };
                update: {
                    args: Prisma.ProductCostUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductCostDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductCostUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductCostUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>[];
                };
                upsert: {
                    args: Prisma.ProductCostUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostPayload>;
                };
                aggregate: {
                    args: Prisma.ProductCostAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductCost>;
                };
                groupBy: {
                    args: Prisma.ProductCostGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCostGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCostCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCostCountAggregateOutputType> | number;
                };
            };
        };
        ProductCostBomLine: {
            payload: Prisma.$ProductCostBomLinePayload<ExtArgs>;
            fields: Prisma.ProductCostBomLineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductCostBomLineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductCostBomLineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>;
                };
                findFirst: {
                    args: Prisma.ProductCostBomLineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductCostBomLineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>;
                };
                findMany: {
                    args: Prisma.ProductCostBomLineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>[];
                };
                create: {
                    args: Prisma.ProductCostBomLineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>;
                };
                createMany: {
                    args: Prisma.ProductCostBomLineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCostBomLineCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>[];
                };
                delete: {
                    args: Prisma.ProductCostBomLineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>;
                };
                update: {
                    args: Prisma.ProductCostBomLineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductCostBomLineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductCostBomLineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductCostBomLineUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>[];
                };
                upsert: {
                    args: Prisma.ProductCostBomLineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostBomLinePayload>;
                };
                aggregate: {
                    args: Prisma.ProductCostBomLineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductCostBomLine>;
                };
                groupBy: {
                    args: Prisma.ProductCostBomLineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCostBomLineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCostBomLineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCostBomLineCountAggregateOutputType> | number;
                };
            };
        };
        ProductCostEmballage: {
            payload: Prisma.$ProductCostEmballagePayload<ExtArgs>;
            fields: Prisma.ProductCostEmballageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductCostEmballageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductCostEmballageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>;
                };
                findFirst: {
                    args: Prisma.ProductCostEmballageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductCostEmballageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>;
                };
                findMany: {
                    args: Prisma.ProductCostEmballageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>[];
                };
                create: {
                    args: Prisma.ProductCostEmballageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>;
                };
                createMany: {
                    args: Prisma.ProductCostEmballageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCostEmballageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>[];
                };
                delete: {
                    args: Prisma.ProductCostEmballageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>;
                };
                update: {
                    args: Prisma.ProductCostEmballageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductCostEmballageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductCostEmballageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductCostEmballageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>[];
                };
                upsert: {
                    args: Prisma.ProductCostEmballageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCostEmballagePayload>;
                };
                aggregate: {
                    args: Prisma.ProductCostEmballageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductCostEmballage>;
                };
                groupBy: {
                    args: Prisma.ProductCostEmballageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCostEmballageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCostEmballageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCostEmballageCountAggregateOutputType> | number;
                };
            };
        };
        MatierePrixStat: {
            payload: Prisma.$MatierePrixStatPayload<ExtArgs>;
            fields: Prisma.MatierePrixStatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MatierePrixStatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MatierePrixStatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>;
                };
                findFirst: {
                    args: Prisma.MatierePrixStatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MatierePrixStatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>;
                };
                findMany: {
                    args: Prisma.MatierePrixStatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>[];
                };
                create: {
                    args: Prisma.MatierePrixStatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>;
                };
                createMany: {
                    args: Prisma.MatierePrixStatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MatierePrixStatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>[];
                };
                delete: {
                    args: Prisma.MatierePrixStatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>;
                };
                update: {
                    args: Prisma.MatierePrixStatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>;
                };
                deleteMany: {
                    args: Prisma.MatierePrixStatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MatierePrixStatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MatierePrixStatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>[];
                };
                upsert: {
                    args: Prisma.MatierePrixStatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MatierePrixStatPayload>;
                };
                aggregate: {
                    args: Prisma.MatierePrixStatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMatierePrixStat>;
                };
                groupBy: {
                    args: Prisma.MatierePrixStatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatierePrixStatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MatierePrixStatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MatierePrixStatCountAggregateOutputType> | number;
                };
            };
        };
        CommandeRentabilite: {
            payload: Prisma.$CommandeRentabilitePayload<ExtArgs>;
            fields: Prisma.CommandeRentabiliteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CommandeRentabiliteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CommandeRentabiliteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>;
                };
                findFirst: {
                    args: Prisma.CommandeRentabiliteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CommandeRentabiliteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>;
                };
                findMany: {
                    args: Prisma.CommandeRentabiliteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>[];
                };
                create: {
                    args: Prisma.CommandeRentabiliteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>;
                };
                createMany: {
                    args: Prisma.CommandeRentabiliteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CommandeRentabiliteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>[];
                };
                delete: {
                    args: Prisma.CommandeRentabiliteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>;
                };
                update: {
                    args: Prisma.CommandeRentabiliteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>;
                };
                deleteMany: {
                    args: Prisma.CommandeRentabiliteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CommandeRentabiliteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CommandeRentabiliteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>[];
                };
                upsert: {
                    args: Prisma.CommandeRentabiliteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CommandeRentabilitePayload>;
                };
                aggregate: {
                    args: Prisma.CommandeRentabiliteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCommandeRentabilite>;
                };
                groupBy: {
                    args: Prisma.CommandeRentabiliteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommandeRentabiliteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CommandeRentabiliteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommandeRentabiliteCountAggregateOutputType> | number;
                };
            };
        };
        VenteSegment: {
            payload: Prisma.$VenteSegmentPayload<ExtArgs>;
            fields: Prisma.VenteSegmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VenteSegmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VenteSegmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>;
                };
                findFirst: {
                    args: Prisma.VenteSegmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VenteSegmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>;
                };
                findMany: {
                    args: Prisma.VenteSegmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>[];
                };
                create: {
                    args: Prisma.VenteSegmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>;
                };
                createMany: {
                    args: Prisma.VenteSegmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VenteSegmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>[];
                };
                delete: {
                    args: Prisma.VenteSegmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>;
                };
                update: {
                    args: Prisma.VenteSegmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>;
                };
                deleteMany: {
                    args: Prisma.VenteSegmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VenteSegmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VenteSegmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>[];
                };
                upsert: {
                    args: Prisma.VenteSegmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VenteSegmentPayload>;
                };
                aggregate: {
                    args: Prisma.VenteSegmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVenteSegment>;
                };
                groupBy: {
                    args: Prisma.VenteSegmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenteSegmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VenteSegmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenteSegmentCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'StockItemType'
 */
export type EnumStockItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StockItemType'>;
/**
 * Reference to a field of type 'StockItemType[]'
 */
export type ListEnumStockItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StockItemType[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    rolePermission?: Prisma.RolePermissionOmit;
    settings?: Prisma.SettingsOmit;
    commercial?: Prisma.CommercialOmit;
    operateur?: Prisma.OperateurOmit;
    fournisseur?: Prisma.FournisseurOmit;
    achat?: Prisma.AchatOmit;
    client?: Prisma.ClientOmit;
    commande?: Prisma.CommandeOmit;
    commandeTimeline?: Prisma.CommandeTimelineOmit;
    facture?: Prisma.FactureOmit;
    stockItem?: Prisma.StockItemOmit;
    mouvement?: Prisma.MouvementOmit;
    bom?: Prisma.BomOmit;
    bomLine?: Prisma.BomLineOmit;
    prodOrder?: Prisma.ProdOrderOmit;
    incident?: Prisma.IncidentOmit;
    salesRequest?: Prisma.SalesRequestOmit;
    materialRequest?: Prisma.MaterialRequestOmit;
    approvalRecord?: Prisma.ApprovalRecordOmit;
    notif?: Prisma.NotifOmit;
    emailNotif?: Prisma.EmailNotifOmit;
    whatsAppNotif?: Prisma.WhatsAppNotifOmit;
    auditLog?: Prisma.AuditLogOmit;
    productCost?: Prisma.ProductCostOmit;
    productCostBomLine?: Prisma.ProductCostBomLineOmit;
    productCostEmballage?: Prisma.ProductCostEmballageOmit;
    matierePrixStat?: Prisma.MatierePrixStatOmit;
    commandeRentabilite?: Prisma.CommandeRentabiliteOmit;
    venteSegment?: Prisma.VenteSegmentOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map