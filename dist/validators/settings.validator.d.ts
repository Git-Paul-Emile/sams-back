import { z } from "zod";
export declare const updateSettingsSchema: z.ZodObject<{
    notifErpEnabled: z.ZodOptional<z.ZodBoolean>;
    notifEmailEnabled: z.ZodOptional<z.ZodBoolean>;
    notifWhatsappEnabled: z.ZodOptional<z.ZodBoolean>;
    alertRuptureEnabled: z.ZodOptional<z.ZodBoolean>;
    alertValidationEnabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
//# sourceMappingURL=settings.validator.d.ts.map