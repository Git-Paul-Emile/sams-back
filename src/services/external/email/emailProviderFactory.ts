import { emailConfig } from "../../../config/external.js";
import { BrevoSmtpEmailProvider } from "./BrevoSmtpEmailProvider.js";
import type { EmailProvider } from "./EmailProvider.js";

let instance: EmailProvider | null = null;

/** Point d'échange Strategy/Adapter : changer EMAIL_PROVIDER suffit à basculer de fournisseur. */
export function getEmailProvider(): EmailProvider {
  if (!instance) {
    switch (emailConfig.provider) {
      case "brevo-smtp":
      default:
        instance = new BrevoSmtpEmailProvider();
    }
  }
  return instance;
}
