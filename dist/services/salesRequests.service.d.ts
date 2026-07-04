import type { ApproveSalesRequestInput, CreateSalesRequestInput, RejectSalesRequestInput } from "../validators/salesRequests.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const salesRequestsService: {
    list(query: {
        page?: number;
        pageSize?: number;
        statut?: string;
        search?: string;
    }): Promise<{
        items: {
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
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
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
    }>;
    create(input: CreateSalesRequestInput, ctx: ActionContext): Promise<{
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
    }>;
    approve(id: string, input: ApproveSalesRequestInput, ctx: ActionContext): Promise<{
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
    }>;
    reject(id: string, input: RejectSalesRequestInput, ctx: ActionContext): Promise<{
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
    }>;
};
export {};
//# sourceMappingURL=salesRequests.service.d.ts.map