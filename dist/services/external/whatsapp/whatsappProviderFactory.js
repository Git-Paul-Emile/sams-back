import { whatsappConfig } from "../../../config/external.js";
import { ThreeSixtyDialogSandboxProvider } from "./ThreeSixtyDialogSandboxProvider.js";
let instance = null;
/** Point d'échange Strategy/Adapter : basculer vers un compte 360dialog de production = nouvelle classe + config, aucun appelant à modifier. */
export function getWhatsAppProvider() {
    if (!instance) {
        switch (whatsappConfig.provider) {
            case "360dialog-sandbox":
            default:
                instance = new ThreeSixtyDialogSandboxProvider();
        }
    }
    return instance;
}
//# sourceMappingURL=whatsappProviderFactory.js.map