import { z } from "zod";
import { OPERATEUR_STATUTS } from "./enums.js";
export const createOperateurSchema = z.object({
    matricule: z.string().min(1).optional(),
    nom: z.string().min(1, "Nom requis"),
    prenom: z.string().min(1, "Prénom requis"),
    tel: z.string().optional(),
    email: z.string().email("Email invalide").optional(),
    poste: z.string().optional(),
    ligne: z.string().optional(),
    embauche: z.coerce.date().optional(),
});
export const updateOperateurSchema = createOperateurSchema.partial().extend({
    statut: z.enum(OPERATEUR_STATUTS).optional(),
});
export const listOperateursQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
    search: z.string().optional(),
    statut: z.enum(OPERATEUR_STATUTS).optional(),
    sort: z.enum(["nom", "matricule", "ligne", "createdAt"]).optional(),
    order: z.enum(["asc", "desc"]).optional(),
});
//# sourceMappingURL=operateurs.validator.js.map