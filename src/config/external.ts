function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} manquant dans .env`);
  return value;
}

export const emailConfig = {
  provider: process.env.EMAIL_PROVIDER ?? "brevo-smtp",
  host: () => requireEnv("SMTP_HOST"),
  port: () => Number(process.env.SMTP_PORT ?? "587"),
  user: () => requireEnv("SMTP_USER"),
  pass: () => requireEnv("SMTP_PASS"),
  from: () => requireEnv("EMAIL_FROM"),
};

export const whatsappConfig = {
  provider: process.env.WHATSAPP_PROVIDER ?? "360dialog-sandbox",
  baseUrl: () => requireEnv("WHATSAPP_BASE_URL"),
  apiKey: () => requireEnv("WHATSAPP_API_KEY"),
  sandboxNumber: () => requireEnv("WHATSAPP_SANDBOX_NUMBER"),
  maxSandboxMessages: () => Number(process.env.WHATSAPP_MAX_SANDBOX_MESSAGES ?? "200"),
};

// "dev" par défaut : aucun fournisseur SMS/WhatsApp de production n'est encore
// configuré, le code OTP est loggé côté serveur. Basculer sur "whatsapp" une
// fois un compte 360dialog de production disponible (voir WhatsAppOtpProvider).
export const otpConfig = {
  provider: process.env.OTP_PROVIDER ?? "dev",
  ttlMs: () => Number(process.env.OTP_TTL_MS ?? "300000"),
  codeLength: () => Number(process.env.OTP_CODE_LENGTH ?? "6"),
};
