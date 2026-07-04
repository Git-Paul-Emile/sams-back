import type { CreateUserInput, ListUsersQuery, UpdateUserInput } from "../validators/users.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const usersService: {
    list(query: ListUsersQuery): Promise<{
        items: {
            id: string;
            nom: string;
            email: string;
            tel: string | null;
            role: import("../generated/prisma/enums.js").Role;
            connexion: string;
            statut: string;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    get(id: string): Promise<{
        id: string;
        nom: string;
        email: string;
        tel: string | null;
        role: import("../generated/prisma/enums.js").Role;
        connexion: string;
        statut: string;
    }>;
    create(input: CreateUserInput, ctx: ActionContext): Promise<{
        id: string;
        nom: string;
        email: string;
        tel: string | null;
        role: import("../generated/prisma/enums.js").Role;
        connexion: string;
        statut: string;
    }>;
    update(id: string, input: UpdateUserInput, ctx: ActionContext): Promise<{
        id: string;
        nom: string;
        email: string;
        tel: string | null;
        role: import("../generated/prisma/enums.js").Role;
        connexion: string;
        statut: string;
    }>;
};
export {};
//# sourceMappingURL=users.service.d.ts.map