import { getWhatsAppProvider } from "../whatsapp/whatsappProviderFactory.js";
import type { OtpProvider, SendOtpInput, SendOtpResult } from "./OtpProvider.js";

/** Prêt pour un compte 360dialog de production ; réutilise le provider WhatsApp existant, aucun appelant à modifier. */
export class WhatsAppOtpProvider implements OtpProvider {
  async send(input: SendOtpInput): Promise<SendOtpResult> {
    const provider = getWhatsAppProvider();
    const result = await provider.send({
      to: input.tel,
      message: `Votre code SAMS FLUX : ${input.code} (valable 5 minutes)`,
    });
    return { success: result.success, reason: result.reason };
  }
}
