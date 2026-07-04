import type { AddCommandeTimelineInput, CreateCommandeInput, ListCommandesQuery } from "../validators/commandes.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const commandesService: {
    list(query: ListCommandesQuery): Promise<{
        items: {
            id: string;
            num: string;
            client: string;
            date: string;
            montant: number;
            commercial: string;
            statutActuel: string;
            timeline: {
                etat: string;
                date: string;
                user: string | null;
                commentaire: string;
            }[];
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
        montant: number;
        commercial: string;
        statutActuel: string;
        timeline: {
            etat: string;
            date: string;
            user: string | null;
            commentaire: string;
        }[];
    }>;
    create(input: CreateCommandeInput, ctx: ActionContext): Promise<{
        id: string;
        num: string;
        client: string;
        date: string;
        montant: number;
        commercial: string;
        statutActuel: string;
        timeline: {
            etat: string;
            date: string;
            user: string | null;
            commentaire: string;
        }[];
    }>;
    addTimelineEvent(id: string, input: AddCommandeTimelineInput, ctx: ActionContext): Promise<{
        id: string;
        num: string;
        client: string;
        date: string;
        montant: number;
        commercial: string;
        statutActuel: string;
        timeline: {
            etat: string;
            date: string;
            user: string | null;
            commentaire: string;
        }[];
    }>;
};
export {};
//# sourceMappingURL=commandes.service.d.ts.map