import type { Client, Commercial, Facture } from "../generated/prisma/client.js";
type FactureRow = Facture & {
    client: Client;
    commercial: Commercial;
};
/**
 * Remappe une ligne Prisma vers la forme plate `Facture` attendue par le
 * frontend (`facturation.types.ts`) — `client`/`commercial` en libellés.
 */
export declare function toFactureDto(facture: FactureRow): {
    id: string;
    num: string;
    client: string;
    date: string;
    echeance: string;
    montant: number;
    paye: number;
    statut: string;
    mode: string;
    commercial: string;
    type: string;
    dateReglPrev: string | null;
    dateReglEff: string | null;
};
export {};
//# sourceMappingURL=factures.dto.d.ts.map