import nodemailer, {} from "nodemailer";
import { emailConfig } from "../../../config/external.js";
const CONNECTION_TIMEOUT_MS = 10_000;
const CIRCUIT_FAILURE_THRESHOLD = 5;
const CIRCUIT_COOLDOWN_MS = 60_000;
/**
 * Fournisseur Email via le relais SMTP Brevo (nodemailer). Comprend un
 * timeout, un retry simple et un mini circuit-breaker mémoire (cf plan §4 —
 * pas besoin d'une dépendance dédiée pour ce volume).
 */
export class BrevoSmtpEmailProvider {
    transporter = null;
    consecutiveFailures = 0;
    circuitOpenUntil = 0;
    getTransporter() {
        if (!this.transporter) {
            this.transporter = nodemailer.createTransport({
                host: emailConfig.host(),
                port: emailConfig.port(),
                secure: false,
                auth: { user: emailConfig.user(), pass: emailConfig.pass() },
                connectionTimeout: CONNECTION_TIMEOUT_MS,
                socketTimeout: CONNECTION_TIMEOUT_MS,
            });
        }
        return this.transporter;
    }
    async sendOnce(input) {
        const info = await this.getTransporter().sendMail({
            from: emailConfig.from(),
            to: input.to,
            subject: input.subject,
            html: input.html,
            text: input.text,
        });
        return info.messageId;
    }
    async send(input) {
        if (Date.now() < this.circuitOpenUntil) {
            return { success: false, error: "circuit-open" };
        }
        try {
            const providerMessageId = await this.sendOnce(input);
            this.consecutiveFailures = 0;
            return { success: true, providerMessageId };
        }
        catch (firstError) {
            try {
                const providerMessageId = await this.sendOnce(input);
                this.consecutiveFailures = 0;
                return { success: true, providerMessageId };
            }
            catch (secondError) {
                this.consecutiveFailures += 1;
                if (this.consecutiveFailures >= CIRCUIT_FAILURE_THRESHOLD) {
                    this.circuitOpenUntil = Date.now() + CIRCUIT_COOLDOWN_MS;
                }
                const message = secondError instanceof Error ? secondError.message : "Erreur inconnue";
                console.error("[EmailProvider] Échec d'envoi après retry", message);
                return { success: false, error: message };
            }
        }
    }
}
//# sourceMappingURL=BrevoSmtpEmailProvider.js.map