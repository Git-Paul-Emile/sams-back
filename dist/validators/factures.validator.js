import { z } from "zod";
import { FACTURE_STATUTS } from "./enums.js";
export const createFactureSchema = z.object({
    clientId: z.string().min(1, "Client requis"),
    echeance: z.coerce.date(),
    montant: z.number().nonnegative(),
    commercialId: z.string().min(1, "Commercial requis"),
    type: z.string().min(1, "Type requis"),
    commandeId: z.string().optional(),
});
export const payFactureSchema = z.object({
    montant: z.number().nonnegative(),
});
export const listFacturesQuerySchema = z.object({
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().optional(),
    statut: z.enum(FACTURE_STATUTS).optional(),
    clientId: z.string().optional(),
    search: z.string().optional(),
});
//# sourceMappingURL=factures.validator.js.map