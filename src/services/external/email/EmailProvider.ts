export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface SendEmailResult {
  success: boolean;
  providerMessageId?: string;
  error?: string;
}

/** Interface adaptateur — le fournisseur d'email doit rester interchangeable (rules/external-services.md). */
export interface EmailProvider {
  send(input: SendEmailInput): Promise<SendEmailResult>;
}
