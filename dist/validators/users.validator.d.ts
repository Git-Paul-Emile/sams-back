import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    nom: z.ZodString;
    email: z.ZodString;
    role: z.ZodEnum<{
        Direction: "Direction";
        Production: "Production";
        Stock: "Stock";
        Commercial: "Commercial";
        Finance: "Finance";
        Administrateur: "Administrateur";
    }>;
    tel: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    tel: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        Direction: "Direction";
        Production: "Production";
        Stock: "Stock";
        Commercial: "Commercial";
        Finance: "Finance";
        Administrateur: "Administrateur";
    }>>;
    statut: z.ZodOptional<z.ZodEnum<{
        Actif: "Actif";
        Inactif: "Inactif";
    }>>;
}, z.core.$strip>;
export declare const listUsersQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        Direction: "Direction";
        Production: "Production";
        Stock: "Stock";
        Commercial: "Commercial";
        Finance: "Finance";
        Administrateur: "Administrateur";
    }>>;
    sort: z.ZodOptional<z.ZodEnum<{
        email: "email";
        nom: "nom";
        createdAt: "createdAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type ListUsersQuery = z.infer<typeof listUsersQuerySchema>;
//# sourceMappingURL=users.validator.d.ts.map