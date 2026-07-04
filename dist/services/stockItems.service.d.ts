import type { ListStockItemsQuery, SetStockItemStockInput } from "../validators/stockItems.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const stockItemsService: {
    list(query: ListStockItemsQuery): Promise<{
        items: {
            id: string;
            code: string;
            designation: string;
            categorie: string;
            unite: string;
            stock: number;
            min: number;
            critique: number;
            valeurUnit: number;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        code: string;
        designation: string;
        categorie: string;
        unite: string;
        stock: number;
        min: number;
        critique: number;
        valeurUnit: number;
    }>;
    setStock(id: string, input: SetStockItemStockInput, ctx: ActionContext): Promise<{
        id: string;
        code: string;
        designation: string;
        categorie: string;
        unite: string;
        stock: number;
        min: number;
        critique: number;
        valeurUnit: number;
    }>;
};
export {};
//# sourceMappingURL=stockItems.service.d.ts.map