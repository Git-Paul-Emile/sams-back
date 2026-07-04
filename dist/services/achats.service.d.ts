import type { CreateAchatInput, ListAchatsQuery } from "../validators/achats.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const achatsService: {
    list(query: ListAchatsQuery): Promise<{
        items: {
            id: string;
            num: string;
            fournisseur: string;
            date: string;
            livraison: string;
            montant: number;
            statut: string;
            articles: number;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        num: string;
        fournisseur: string;
        date: string;
        livraison: string;
        montant: number;
        statut: string;
        articles: number;
    }>;
    create(input: CreateAchatInput, ctx: ActionContext): Promise<{
        id: string;
        num: string;
        fournisseur: string;
        date: string;
        livraison: string;
        montant: number;
        statut: string;
        articles: number;
    }>;
};
export {};
//# sourceMappingURL=achats.service.d.ts.map