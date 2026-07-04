import { z } from "zod";
export const createClientSchema = z.object({
    code: z.string().min(1).optional(),
    raison: z.string().min(1, "Raison sociale requise"),
    contact: z.string().optional(),
    tel: z.string().optional(),
    email: z.string().email().optional(),
    adresse: z.string().optional(),
    ville: z.string().optional(),
    pays: z.string().optional(),
    zone: z.string().optional(),
    commercialId: z.string().optional(),
    conditions: z.string().optional(),
    plafond: z.number().nonnegative().optional(),
});
export const updateClientSchema = createClientSchema.partial();
export const setClientStatutSchema = z.object({
    statut: z.enum(["Actif", "Inactif"]),
});
export const listClientsQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
    search: z.string().optional(),
    statut: z.enum(["Actif", "Inactif"]).optional(),
    sort: z.enum(["raison", "code", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional(),
});
//# sourceMappingURL=clients.validator.js.map