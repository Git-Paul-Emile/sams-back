import type { UpdatePermissionInput } from "../validators/permissions.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const permissionsService: {
    list(): Promise<{
        id: import("../generated/prisma/enums.js").Role;
        role: import("../generated/prisma/enums.js").Role;
        modules: string[];
    }[]>;
    update(role: string, input: UpdatePermissionInput, ctx: ActionContext): Promise<{
        id: import("../generated/prisma/enums.js").Role;
        role: import("../generated/prisma/enums.js").Role;
        modules: string[];
    }>;
};
export {};
//# sourceMappingURL=permissions.service.d.ts.map