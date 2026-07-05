import { otpConfig } from "../../../config/external.js";
import { DevOtpProvider } from "./DevOtpProvider.js";
import { WhatsAppOtpProvider } from "./WhatsAppOtpProvider.js";
import type { OtpProvider } from "./OtpProvider.js";

let instance: OtpProvider | null = null;

/** Point d'échange Strategy/Adapter : passer en production = changer OTP_PROVIDER, aucun appelant à modifier. */
export function getOtpProvider(): OtpProvider {
  if (!instance) {
    switch (otpConfig.provider) {
      case "whatsapp":
        instance = new WhatsAppOtpProvider();
        break;
      case "dev":
      default:
        instance = new DevOtpProvider();
    }
  }
  return instance;
}
