import { whatsappConfig } from "../../../config/external.js";
import { ThreeSixtyDialogSandboxProvider } from "./ThreeSixtyDialogSandboxProvider.js";
import type { WhatsAppProvider } from "./WhatsAppProvider.js";

let instance: WhatsAppProvider | null = null;

/** Point d'échange Strategy/Adapter : basculer vers un compte 360dialog de production = nouvelle classe + config, aucun appelant à modifier. */
export function getWhatsAppProvider(): WhatsAppProvider {
  if (!instance) {
    switch (whatsappConfig.provider) {
      case "360dialog-sandbox":
      default:
        instance = new ThreeSixtyDialogSandboxProvider();
    }
  }
  return instance;
}
