import { settingsRepository } from "../repositories/settings.repository.js";
import { toSettingsDto } from "../dtos/settings.dto.js";
import { recordAuditLog } from "../utils/auditLog.js";
export const settingsService = {
    async get() {
        const settings = await settingsRepository.get();
        return toSettingsDto(settings);
    },
    async update(input, ctx) {
        const updated = await settingsRepository.update(input);
        await recordAuditLog({ action: "Modification", module: "Admin", ref: "Settings", userId: ctx.userId, ip: ctx.ip });
        return toSettingsDto(updated);
    },
};
//# sourceMappingURL=settings.service.js.map