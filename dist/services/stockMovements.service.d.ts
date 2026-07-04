import type { CreateMouvementInput, ListMouvementsQuery } from "../validators/stockMovements.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const stockMovementsService: {
    list(query: ListMouvementsQuery): Promise<{
        items: {
            id: string;
            date: string;
            type: string;
            ref: string | null;
            designation: string;
            qte: number;
            user: string | null;
            motif: string | null;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    /**
     * Transaction obligatoire : le mouvement ET l'ajustement du stock associé
     * doivent réussir ou échouer ensemble (jamais un mouvement enregistré sans
     * que le stock reflète la réalité, ni l'inverse) — voir plan §2/§5.
     */
    create(input: CreateMouvementInput, ctx: ActionContext): Promise<{
        id: string;
        date: string;
        type: string;
        ref: string | null;
        designation: string;
        qte: number;
        user: string | null;
        motif: string | null;
    }>;
};
export {};
//# sourceMappingURL=stockMovements.service.d.ts.map