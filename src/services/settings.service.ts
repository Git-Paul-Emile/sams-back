import { settingsRepository } from "../repositories/settings.repository.js";
import { toSettingsDto } from "../dtos/settings.dto.js";
import { recordAuditLog } from "../utils/auditLog.js";
import type { UpdateSettingsInput } from "../validators/settings.validator.js";

interface ActionContext {
  userId: string;
  ip?: string | null;
}

export const settingsService = {
  async get() {
    const settings = await settingsRepository.get();
    return toSettingsDto(settings);
  },

  async update(input: UpdateSettingsInput, ctx: ActionContext) {
    const updated = await settingsRepository.update(input);
    await recordAuditLog({ action: "Modification", module: "Admin", ref: "Settings", userId: ctx.userId, ip: ctx.ip });
    return toSettingsDto(updated);
  },
};
