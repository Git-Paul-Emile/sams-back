import type { CreateCommercialInput, ListCommerciauxQuery, UpdateCommercialInput } from "../validators/commerciaux.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const commerciauxService: {
    list(query: ListCommerciauxQuery): Promise<{
        items: {
            id: string;
            matricule: string;
            nom: string;
            prenom: string;
            tel: string | null;
            email: string | null;
            zone: string | null;
            objectif: number;
            caRealise: number;
            statut: string;
            nbClients: number;
            nbCmd: number;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        matricule: string;
        nom: string;
        prenom: string;
        tel: string | null;
        email: string | null;
        zone: string | null;
        objectif: number;
        caRealise: number;
        statut: string;
        nbClients: number;
        nbCmd: number;
    }>;
    create(input: CreateCommercialInput, ctx: ActionContext): Promise<{
        id: string;
        matricule: string;
        nom: string;
        prenom: string;
        tel: string | null;
        email: string | null;
        zone: string | null;
        objectif: number;
        caRealise: number;
        statut: string;
        nbClients: number;
        nbCmd: number;
    }>;
    update(id: string, input: UpdateCommercialInput, ctx: ActionContext): Promise<{
        id: string;
        matricule: string;
        nom: string;
        prenom: string;
        tel: string | null;
        email: string | null;
        zone: string | null;
        objectif: number;
        caRealise: number;
        statut: string;
        nbClients: number;
        nbCmd: number;
    }>;
};
export {};
//# sourceMappingURL=commerciaux.service.d.ts.map