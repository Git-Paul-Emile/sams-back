import type { CreateFournisseurInput, ListFournisseursQuery, UpdateFournisseurInput } from "../validators/fournisseurs.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const fournisseursService: {
    list(query: ListFournisseursQuery): Promise<{
        items: {
            id: string;
            nom: string;
            contact: string | null;
            tel: string | null;
            email: string | null;
            adresse: string | null;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        nom: string;
        contact: string | null;
        tel: string | null;
        email: string | null;
        adresse: string | null;
    }>;
    create(input: CreateFournisseurInput, ctx: ActionContext): Promise<{
        id: string;
        nom: string;
        contact: string | null;
        tel: string | null;
        email: string | null;
        adresse: string | null;
    }>;
    update(id: string, input: UpdateFournisseurInput, ctx: ActionContext): Promise<{
        id: string;
        nom: string;
        contact: string | null;
        tel: string | null;
        email: string | null;
        adresse: string | null;
    }>;
};
export {};
//# sourceMappingURL=fournisseurs.service.d.ts.map