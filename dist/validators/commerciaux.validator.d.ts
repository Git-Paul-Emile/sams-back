import { z } from "zod";
export declare const createCommercialSchema: z.ZodObject<{
    matricule: z.ZodOptional<z.ZodString>;
    nom: z.ZodString;
    prenom: z.ZodString;
    tel: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    zone: z.ZodOptional<z.ZodString>;
    objectif: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateCommercialSchema: z.ZodObject<{
    matricule: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    nom: z.ZodOptional<z.ZodString>;
    prenom: z.ZodOptional<z.ZodString>;
    tel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    zone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    objectif: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    statut: z.ZodOptional<z.ZodEnum<{
        Actif: "Actif";
        Inactif: "Inactif";
    }>>;
}, z.core.$strip>;
export declare const listCommerciauxQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    statut: z.ZodOptional<z.ZodEnum<{
        Actif: "Actif";
        Inactif: "Inactif";
    }>>;
    sort: z.ZodOptional<z.ZodEnum<{
        nom: "nom";
        createdAt: "createdAt";
        matricule: "matricule";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type CreateCommercialInput = z.infer<typeof createCommercialSchema>;
export type UpdateCommercialInput = z.infer<typeof updateCommercialSchema>;
export type ListCommerciauxQuery = z.infer<typeof listCommerciauxQuerySchema>;
//# sourceMappingURL=commerciaux.validator.d.ts.map