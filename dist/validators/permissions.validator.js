import { z } from "zod";
export const updatePermissionSchema = z.object({
    modules: z.array(z.string()),
});
//# sourceMappingURL=permissions.validator.js.map