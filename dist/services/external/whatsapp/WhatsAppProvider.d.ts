export interface SendWhatsAppInput {
    to: string;
    message: string;
}
export interface SendWhatsAppResult {
    success: boolean;
    skipped?: boolean;
    reason?: string;
    providerMessageId?: string;
}
/** Interface adaptateur — le fournisseur WhatsApp doit rester interchangeable (rules/external-services.md). */
export interface WhatsAppProvider {
    send(input: SendWhatsAppInput): Promise<SendWhatsAppResult>;
}
//# sourceMappingURL=WhatsAppProvider.d.ts.map