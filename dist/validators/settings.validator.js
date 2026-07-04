import { z } from "zod";
export const updateSettingsSchema = z.object({
    notifErpEnabled: z.boolean().optional(),
    notifEmailEnabled: z.boolean().optional(),
    notifWhatsappEnabled: z.boolean().optional(),
    alertRuptureEnabled: z.boolean().optional(),
    alertValidationEnabled: z.boolean().optional(),
});
//# sourceMappingURL=settings.validator.js.map