import type { OtpProvider, SendOtpInput, SendOtpResult } from "./OtpProvider.js";

/** Mode par défaut tant qu'aucun fournisseur SMS/WhatsApp de production n'est configuré : le code est loggé côté serveur, jamais envoyé réellement. */
export class DevOtpProvider implements OtpProvider {
  async send(input: SendOtpInput): Promise<SendOtpResult> {
    console.log(`[OTP][DEV] Code pour ${input.tel} (${input.purpose}) : ${input.code}`);
    return { success: true };
  }
}
