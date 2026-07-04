import { z } from "zod";
export declare const createOperateurSchema: z.ZodObject<{
    matricule: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    prenom: z.ZodString;
    tel: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    poste: z.ZodOptional<z.ZodString>;
    ligne: z.ZodOptional<z.ZodString>;
    embauche: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export declare const updateOperateurSchema: z.ZodObject<{
    matricule: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    nom: z.ZodOptional<z.ZodString>;
    prenom: z.ZodOptional<z.ZodString>;
    tel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    poste: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    ligne: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    embauche: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    statut: z.ZodOptional<z.ZodEnum<{
        Actif: "Actif";
        Inactif: "Inactif";
        Congé: "Congé";
    }>>;
}, z.core.$strip>;
export declare const listOperateursQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    statut: z.ZodOptional<z.ZodEnum<{
        Actif: "Actif";
        Inactif: "Inactif";
        Congé: "Congé";
    }>>;
    sort: z.ZodOptional<z.ZodEnum<{
        nom: "nom";
        createdAt: "createdAt";
        matricule: "matricule";
        ligne: "ligne";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type CreateOperateurInput = z.infer<typeof createOperateurSchema>;
export type UpdateOperateurInput = z.infer<typeof updateOperateurSchema>;
export type ListOperateursQuery = z.infer<typeof listOperateursQuerySchema>;
//# sourceMappingURL=operateurs.validator.d.ts.map