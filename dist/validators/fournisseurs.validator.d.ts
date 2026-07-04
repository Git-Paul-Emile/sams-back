import { z } from "zod";
export declare const createFournisseurSchema: z.ZodObject<{
    nom: z.ZodString;
    contact: z.ZodOptional<z.ZodString>;
    tel: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    adresse: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateFournisseurSchema: z.ZodObject<{
    nom: z.ZodOptional<z.ZodString>;
    contact: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    tel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    adresse: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const listFournisseursQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<{
        nom: "nom";
        createdAt: "createdAt";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type CreateFournisseurInput = z.infer<typeof createFournisseurSchema>;
export type UpdateFournisseurInput = z.infer<typeof updateFournisseurSchema>;
export type ListFournisseursQuery = z.infer<typeof listFournisseursQuerySchema>;
//# sourceMappingURL=fournisseurs.validator.d.ts.map