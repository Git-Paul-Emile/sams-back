import type { CreateProdOrderInput, ListProdOrdersQuery } from "../validators/prodOrders.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const prodOrdersService: {
    list(query: ListProdOrdersQuery): Promise<{
        items: {
            id: string;
            num: string;
            produit: string;
            ligne: string;
            qtePrev: number;
            qteReel: number;
            debut: string;
            fin: string;
            responsable: string | null;
            statut: string;
            rendement: number;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        num: string;
        produit: string;
        ligne: string;
        qtePrev: number;
        qteReel: number;
        debut: string;
        fin: string;
        responsable: string | null;
        statut: string;
        rendement: number;
    }>;
    create(input: CreateProdOrderInput, ctx: ActionContext): Promise<{
        id: string;
        num: string;
        produit: string;
        ligne: string;
        qtePrev: number;
        qteReel: number;
        debut: string;
        fin: string;
        responsable: string | null;
        statut: string;
        rendement: number;
    }>;
    /** Remplace le `prodChart` statique — agrégat `ProdOrder` par mois (compute-on-read, plan §0.2/§9). */
    chart(): Promise<{
        mois: string | undefined;
        production: number;
        objectif: number;
    }[]>;
};
export {};
//# sourceMappingURL=prodOrders.service.d.ts.map