import { z } from "zod";
export declare const createClientSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    raison: z.ZodString;
    contact: z.ZodOptional<z.ZodString>;
    tel: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    adresse: z.ZodOptional<z.ZodString>;
    ville: z.ZodOptional<z.ZodString>;
    pays: z.ZodOptional<z.ZodString>;
    zone: z.ZodOptional<z.ZodString>;
    commercialId: z.ZodOptional<z.ZodString>;
    conditions: z.ZodOptional<z.ZodString>;
    plafond: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateClientSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    raison: z.ZodOptional<z.ZodString>;
    contact: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    tel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    adresse: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    ville: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    pays: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    zone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    commercialId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    conditions: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    plafond: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const setClientStatutSchema: z.ZodObject<{
    statut: z.ZodEnum<{
        Actif: "Actif";
        Inactif: "Inactif";
    }>;
}, z.core.$strip>;
export declare const listClientsQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    statut: z.ZodOptional<z.ZodEnum<{
        Actif: "Actif";
        Inactif: "Inactif";
    }>>;
    sort: z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        code: "code";
        raison: "raison";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type CreateClientInput = z.infer<typeof createClientSchema>;
export type UpdateClientInput = z.infer<typeof updateClientSchema>;
export type ListClientsQuery = z.infer<typeof listClientsQuerySchema>;
//# sourceMappingURL=clients.validator.d.ts.map