import type { Prisma } from "../generated/prisma/client.js";
export declare const settingsRepository: {
    get(): Prisma.Prisma__SettingsClient<{
        id: number;
        updatedAt: Date;
        notifErpEnabled: boolean;
        notifEmailEnabled: boolean;
        notifWhatsappEnabled: boolean;
        alertRuptureEnabled: boolean;
        alertValidationEnabled: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(data: Prisma.SettingsUncheckedUpdateInput): Prisma.Prisma__SettingsClient<{
        id: number;
        updatedAt: Date;
        notifErpEnabled: boolean;
        notifEmailEnabled: boolean;
        notifWhatsappEnabled: boolean;
        alertRuptureEnabled: boolean;
        alertValidationEnabled: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=settings.repository.d.ts.map