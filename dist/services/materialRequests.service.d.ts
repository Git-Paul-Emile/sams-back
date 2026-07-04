import type { ApproveMaterialRequestInput, CreateMaterialRequestInput, RejectMaterialRequestInput } from "../validators/materialRequests.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const materialRequestsService: {
    list(query: {
        page?: number;
        pageSize?: number;
        statut?: string;
        search?: string;
    }): Promise<{
        items: {
            id: string;
            num: string;
            date: string;
            produitFabrique: string;
            of: string;
            operateur: string | null;
            ligne: string;
            matiere: string;
            qteDemandee: number;
            qteValidee: number | null;
            commentaires: string | null;
            statut: string;
            valideur: string | null;
            dateValidation: string | null;
            docBC: string | null;
            docBL: string | null;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        num: string;
        date: string;
        produitFabrique: string;
        of: string;
        operateur: string | null;
        ligne: string;
        matiere: string;
        qteDemandee: number;
        qteValidee: number | null;
        commentaires: string | null;
        statut: string;
        valideur: string | null;
        dateValidation: string | null;
        docBC: string | null;
        docBL: string | null;
    }>;
    create(input: CreateMaterialRequestInput, ctx: ActionContext): Promise<{
        id: string;
        num: string;
        date: string;
        produitFabrique: string;
        of: string;
        operateur: string | null;
        ligne: string;
        matiere: string;
        qteDemandee: number;
        qteValidee: number | null;
        commentaires: string | null;
        statut: string;
        valideur: string | null;
        dateValidation: string | null;
        docBC: string | null;
        docBL: string | null;
    }>;
    approve(id: string, input: ApproveMaterialRequestInput, ctx: ActionContext): Promise<{
        id: string;
        num: string;
        date: string;
        produitFabrique: string;
        of: string;
        operateur: string | null;
        ligne: string;
        matiere: string;
        qteDemandee: number;
        qteValidee: number | null;
        commentaires: string | null;
        statut: string;
        valideur: string | null;
        dateValidation: string | null;
        docBC: string | null;
        docBL: string | null;
    }>;
    reject(id: string, input: RejectMaterialRequestInput, ctx: ActionContext): Promise<{
        id: string;
        num: string;
        date: string;
        produitFabrique: string;
        of: string;
        operateur: string | null;
        ligne: string;
        matiere: string;
        qteDemandee: number;
        qteValidee: number | null;
        commentaires: string | null;
        statut: string;
        valideur: string | null;
        dateValidation: string | null;
        docBC: string | null;
        docBL: string | null;
    }>;
};
export {};
//# sourceMappingURL=materialRequests.service.d.ts.map