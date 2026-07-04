import { z } from "zod";

export const createMaterialRequestSchema = z.object({
  prodOrderId: z.string().min(1),
  operateurId: z.string().optional(),
  ligne: z.string().min(1),
  matiereId: z.string().min(1),
  qteDemandee: z.number().positive(),
  commentaires: z.string().optional(),
});

export const approveMaterialRequestSchema = z.object({
  qteValidee: z.number().nonnegative().optional(),
  commentaires: z.string().optional(),
});

export const rejectMaterialRequestSchema = z.object({
  motifRefus: z.string().min(1, "Motif de refus requis"),
});

export const listMaterialRequestsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  statut: z.string().optional(),
});

export type CreateMaterialRequestInput = z.infer<typeof createMaterialRequestSchema>;
export type ApproveMaterialRequestInput = z.infer<typeof approveMaterialRequestSchema>;
export type RejectMaterialRequestInput = z.infer<typeof rejectMaterialRequestSchema>;
