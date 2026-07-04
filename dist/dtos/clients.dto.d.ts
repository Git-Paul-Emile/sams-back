import type { Client, Commercial } from "../generated/prisma/client.js";
type ClientWithCommercial = Client & {
    commercial: Commercial | null;
};
export interface ClientAggregates {
    nbCmd: number;
    caYtd: number;
    encours: number;
}
/**
 * Remappe une ligne Prisma (avec relation) vers la forme plate que le
 * frontend consomme déjà (`commercial` en string abrégée, agrégats fusionnés)
 * — voir plan §0.3.
 */
export declare function toClientDto(client: ClientWithCommercial, aggregates: ClientAggregates): {
    id: string;
    code: string;
    raison: string;
    contact: string | null;
    tel: string | null;
    email: string | null;
    adresse: string | null;
    ville: string | null;
    pays: string | null;
    zone: string | null;
    commercial: string | null;
    commercialId: string | null;
    conditions: string | null;
    plafond: number;
    encours: number;
    caYtd: number;
    statut: string;
    nbCmd: number;
};
export {};
//# sourceMappingURL=clients.dto.d.ts.map