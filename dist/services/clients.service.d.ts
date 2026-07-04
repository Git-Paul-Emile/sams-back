import type { CreateClientInput, ListClientsQuery, UpdateClientInput } from "../validators/clients.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const clientsService: {
    list(query: ListClientsQuery): Promise<{
        items: {
            id: string;
            code: string;
            raison: string;
            contact: string | null;
            tel: string | null;
            email: string | null;
            adresse: string | null;
            ville: string | null;
            pays: string | null;
            zone: string | null;
            commercial: string | null;
            commercialId: string | null;
            conditions: string | null;
            plafond: number;
            encours: number;
            caYtd: number;
            statut: string;
            nbCmd: number;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        code: string;
        raison: string;
        contact: string | null;
        tel: string | null;
        email: string | null;
        adresse: string | null;
        ville: string | null;
        pays: string | null;
        zone: string | null;
        commercial: string | null;
        commercialId: string | null;
        conditions: string | null;
        plafond: number;
        encours: number;
        caYtd: number;
        statut: string;
        nbCmd: number;
    }>;
    create(input: CreateClientInput, ctx: ActionContext): Promise<{
        id: string;
        code: string;
        raison: string;
        contact: string | null;
        tel: string | null;
        email: string | null;
        adresse: string | null;
        ville: string | null;
        pays: string | null;
        zone: string | null;
        commercial: string | null;
        commercialId: string | null;
        conditions: string | null;
        plafond: number;
        encours: number;
        caYtd: number;
        statut: string;
        nbCmd: number;
    }>;
    update(id: string, input: UpdateClientInput, ctx: ActionContext): Promise<{
        id: string;
        code: string;
        raison: string;
        contact: string | null;
        tel: string | null;
        email: string | null;
        adresse: string | null;
        ville: string | null;
        pays: string | null;
        zone: string | null;
        commercial: string | null;
        commercialId: string | null;
        conditions: string | null;
        plafond: number;
        encours: number;
        caYtd: number;
        statut: string;
        nbCmd: number;
    }>;
};
export {};
//# sourceMappingURL=clients.service.d.ts.map