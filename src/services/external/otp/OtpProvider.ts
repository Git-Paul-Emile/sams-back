export interface SendOtpInput {
  tel: string;
  code: string;
  purpose: "LOGIN" | "SIGNUP";
}

export interface SendOtpResult {
  success: boolean;
  reason?: string;
}

/** Interface adaptateur — le canal d'envoi OTP doit rester interchangeable (rules/external-services.md). */
export interface OtpProvider {
  send(input: SendOtpInput): Promise<SendOtpResult>;
}
