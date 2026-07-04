import { z } from "zod";

export const createMouvementSchema = z
  .object({
    stockItemId: z.string().min(1, "Article de stock requis"),
    type: z.string().min(1, "Type de mouvement requis"),
    qte: z.number(),
    motif: z.string().optional(),
    commandeId: z.string().optional(),
    achatId: z.string().optional(),
    prodOrderId: z.string().optional(),
    salesRequestId: z.string().optional(),
    materialRequestId: z.string().optional(),
  })
  .refine(
    (data) => {
      const origins = [data.commandeId, data.achatId, data.prodOrderId, data.salesRequestId, data.materialRequestId].filter(
        (v) => v != null
      );
      return origins.length <= 1;
    },
    { message: "Une seule origine peut être renseignée pour un mouvement", path: ["commandeId"] }
  );

export const listMouvementsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  stockItemId: z.string().optional(),
  type: z.string().optional(),
  search: z.string().optional(),
});

export type CreateMouvementInput = z.infer<typeof createMouvementSchema>;
export type ListMouvementsQuery = z.infer<typeof listMouvementsQuerySchema>;
