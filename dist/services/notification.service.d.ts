export type WhatsAppCategory = "authorization" | "information";
export interface NotifyDirectionInput {
    eventType: string;
    category: WhatsAppCategory;
    icon: string;
    title: string;
    lines: string[];
    deepLinkPath: string;
    linkLabel: string;
}
/**
 * Remplace `front/src/services/whatsappDirection.ts` : toute opération
 * sensible notifie la Direction par WhatsApp + email. La catégorie
 * "authorization" (demandes bloquantes) ignore toujours le réglage
 * `notifWhatsappEnabled` — une action en attente ne doit jamais rester
 * invisible ; la catégorie "information" le respecte. Appelé APRÈS commit de
 * la transaction métier (jamais d'appel externe dans une transaction Postgres
 * ouverte) — les échecs d'envoi sont journalisés, jamais renvoyés à l'appelant.
 */
export declare const notificationService: {
    notifyDirection(input: NotifyDirectionInput): Promise<void>;
};
//# sourceMappingURL=notification.service.d.ts.map