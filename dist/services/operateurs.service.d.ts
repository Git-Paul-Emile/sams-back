import type { CreateOperateurInput, ListOperateursQuery, UpdateOperateurInput } from "../validators/operateurs.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const operateursService: {
    list(query: ListOperateursQuery): Promise<{
        items: {
            id: string;
            matricule: string;
            nom: string;
            prenom: string;
            tel: string | null;
            email: string | null;
            poste: string | null;
            ligne: string | null;
            embauche: string | null;
            statut: string;
            rendement: number;
            ofRealises: number;
            vol: number;
            incidents: number;
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
        poste: string | null;
        ligne: string | null;
        embauche: string | null;
        statut: string;
        rendement: number;
        ofRealises: number;
        vol: number;
        incidents: number;
    }>;
    create(input: CreateOperateurInput, ctx: ActionContext): Promise<{
        id: string;
        matricule: string;
        nom: string;
        prenom: string;
        tel: string | null;
        email: string | null;
        poste: string | null;
        ligne: string | null;
        embauche: string | null;
        statut: string;
        rendement: number;
        ofRealises: number;
        vol: number;
        incidents: number;
    }>;
    update(id: string, input: UpdateOperateurInput, ctx: ActionContext): Promise<{
        id: string;
        matricule: string;
        nom: string;
        prenom: string;
        tel: string | null;
        email: string | null;
        poste: string | null;
        ligne: string | null;
        embauche: string | null;
        statut: string;
        rendement: number;
        ofRealises: number;
        vol: number;
        incidents: number;
    }>;
};
export {};
//# sourceMappingURL=operateurs.service.d.ts.map