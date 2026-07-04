import type { CreateIncidentInput, ListIncidentsQuery } from "../validators/incidents.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const incidentsService: {
    list(query: ListIncidentsQuery): Promise<{
        items: {
            id: string;
            of: string;
            categorie: string;
            description: string;
            date: string;
            statut: string;
            gravite: string;
            operateur: string | null;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        of: string;
        categorie: string;
        description: string;
        date: string;
        statut: string;
        gravite: string;
        operateur: string | null;
    }>;
    create(input: CreateIncidentInput, ctx: ActionContext): Promise<{
        id: string;
        of: string;
        categorie: string;
        description: string;
        date: string;
        statut: string;
        gravite: string;
        operateur: string | null;
    }>;
};
export {};
//# sourceMappingURL=incidents.service.d.ts.map