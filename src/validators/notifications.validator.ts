import { z } from "zod";

export const createNotifSchema = z.object({
  type: z.string().min(1, "Type requis"),
  titre: z.string().min(1, "Titre requis"),
  msg: z.string().min(1, "Message requis"),
});

export const listNotifsQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
});

export type CreateNotifInput = z.infer<typeof createNotifSchema>;
export type ListNotifsQuery = z.infer<typeof listNotifsQuerySchema>;
