import type { EmailProvider, SendEmailInput, SendEmailResult } from "./EmailProvider.js";
/**
 * Fournisseur Email via le relais SMTP Brevo (nodemailer). Comprend un
 * timeout, un retry simple et un mini circuit-breaker mémoire (cf plan §4 —
 * pas besoin d'une dépendance dédiée pour ce volume).
 */
export declare class BrevoSmtpEmailProvider implements EmailProvider {
    private transporter;
    private consecutiveFailures;
    private circuitOpenUntil;
    private getTransporter;
    private sendOnce;
    send(input: SendEmailInput): Promise<SendEmailResult>;
}
//# sourceMappingURL=BrevoSmtpEmailProvider.d.ts.map