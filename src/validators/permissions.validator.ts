import { z } from "zod";

export const updatePermissionSchema = z.object({
  modules: z.array(z.string()),
});

export type UpdatePermissionInput = z.infer<typeof updatePermissionSchema>;
