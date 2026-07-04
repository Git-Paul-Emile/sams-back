import type { UpdateSettingsInput } from "../validators/settings.validator.js";
interface ActionContext {
    userId: string;
    ip?: string | null;
}
export declare const settingsService: {
    get(): Promise<{
        notifErpEnabled: boolean;
        notifEmailEnabled: boolean;
        notifWhatsappEnabled: boolean;
        alertRuptureEnabled: boolean;
        alertValidationEnabled: boolean;
    }>;
    update(input: UpdateSettingsInput, ctx: ActionContext): Promise<{
        notifErpEnabled: boolean;
        notifEmailEnabled: boolean;
        notifWhatsappEnabled: boolean;
        alertRuptureEnabled: boolean;
        alertValidationEnabled: boolean;
    }>;
};
export {};
//# sourceMappingURL=settings.service.d.ts.map