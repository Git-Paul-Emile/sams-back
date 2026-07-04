import type { SendWhatsAppInput, SendWhatsAppResult, WhatsAppProvider } from "./WhatsAppProvider.js";
/**
 * Bac à sable 360dialog : `https://waba-sandbox.360dialog.io/v1/messages`.
 * Limitations documentées (voir `back/doc bac à sable 360 dialog.md`) :
 * un seul numéro destinataire possible (celui associé à la clé sandbox) et un
 * plafond de 200 messages au total. On applique ces deux garde-fous ici pour
 * ne jamais bloquer le flux métier appelant — un envoi hors de ces limites est
 * simplement ignoré (jamais une erreur qui remonterait à l'utilisateur).
 */
export declare class ThreeSixtyDialogSandboxProvider implements WhatsAppProvider {
    send(input: SendWhatsAppInput): Promise<SendWhatsAppResult>;
}
//# sourceMappingURL=ThreeSixtyDialogSandboxProvider.d.ts.map