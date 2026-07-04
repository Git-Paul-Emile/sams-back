import { z } from "zod";
import { ACTIVE_STATUTS, roleSchema } from "./enums.js";
export const createUserSchema = z.object({
    nom: z.string().min(1, "Nom requis"),
    email: z.string().email("Email invalide"),
    role: roleSchema,
    tel: z.string().optional(),
});
export const updateUserSchema = z.object({
    nom: z.string().min(1).optional(),
    tel: z.string().optional(),
    role: roleSchema.optional(),
    statut: z.enum(ACTIVE_STATUTS).optional(),
});
export const listUsersQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
    search: z.string().optional(),
    role: roleSchema.optional(),
    sort: z.enum(["nom", "email", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional(),
});
//# sourceMappingURL=users.validator.js.map