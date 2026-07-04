import { z } from "zod";
export declare const updatePermissionSchema: z.ZodObject<{
    modules: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UpdatePermissionInput = z.infer<typeof updatePermissionSchema>;
//# sourceMappingURL=permissions.validator.d.ts.map