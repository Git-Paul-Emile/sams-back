import type { CreateFactureInput, ListFacturesQuery, PayFactureInput } from "../validators/factures.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const facturesService: {
    list(query: ListFacturesQuery): Promise<{
        items: {
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
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
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
    }>;
    create(input: CreateFactureInput, ctx: ActionContext): Promise<{
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
    }>;
    pay(id: string, input: PayFactureInput, ctx: ActionContext): Promise<{
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
    }>;
};
export {};
//# sourceMappingURL=factures.service.d.ts.map