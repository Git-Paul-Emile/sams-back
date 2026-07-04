import type { Client, Commercial, SalesRequest, StockItem, User } from "../generated/prisma/client.js";
type SalesRequestWithRelations = SalesRequest & {
    client: Client;
    commercial: Commercial;
    produit: StockItem;
    valideur: User | null;
};
export declare function toSalesRequestDto(sr: SalesRequestWithRelations): {
    id: string;
    num: string;
    date: string;
    client: string;
    commercial: string;
    produit: string;
    ref: string;
    qteDemandee: number;
    qteValidee: number | null;
    stockDispo: number | null;
    prixUnit: number;
    montant: number;
    entrepot: string | null;
    observation: string | null;
    statut: string;
    valideur: string | null;
    dateValidation: string | null;
    commentaire: string | null;
};
export {};
//# sourceMappingURL=salesRequests.dto.d.ts.map