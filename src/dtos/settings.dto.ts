import type { Settings } from "../generated/prisma/client.js";

export function toSettingsDto(settings: Settings) {
  return {
    notifErpEnabled: settings.notifErpEnabled,
    notifEmailEnabled: settings.notifEmailEnabled,
    notifWhatsappEnabled: settings.notifWhatsappEnabled,
    alertRuptureEnabled: settings.alertRuptureEnabled,
    alertValidationEnabled: settings.alertValidationEnabled,
  };
}
