import { emailConfig } from "../../../config/external.js";
import { BrevoSmtpEmailProvider } from "./BrevoSmtpEmailProvider.js";
let instance = null;
/** Point d'échange Strategy/Adapter : changer EMAIL_PROVIDER suffit à basculer de fournisseur. */
export function getEmailProvider() {
    if (!instance) {
        switch (emailConfig.provider) {
            case "brevo-smtp":
            default:
                instance = new BrevoSmtpEmailProvider();
        }
    }
    return instance;
}
//# sourceMappingURL=emailProviderFactory.js.map