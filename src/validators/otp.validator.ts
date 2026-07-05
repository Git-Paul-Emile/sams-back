import { z } from "zod";

export const otpPurposeSchema = z.enum(["LOGIN", "SIGNUP"]);

// Auto-inscription volontairement restreinte aux équipes terrain (Commercial/Production) :
// un self-signup ouvert à n'importe quel rôle RBAC (Admin, Finance...) via un simple numéro
// de téléphone serait une porte dérobée de sécurité. Voir aussi le statut "En attente" (enums.ts).
export const SIGNUP_ROLES = ["Commercial", "Production"] as const;
export const signupRoleSchema = z.enum(SIGNUP_ROLES);

export const requestOtpSchema = z
  .object({
    tel: z.string().min(6, "Téléphone requis"),
    purpose: otpPurposeSchema,
    nom: z.string().min(1).optional(),
    role: signupRoleSchema.optional(),
  })
  .refine((data) => data.purpose !== "SIGNUP" || Boolean(data.nom && data.role), {
    message: "Nom et équipe requis pour créer un compte invité",
    path: ["nom"],
  });

export const verifyOtpSchema = z
  .object({
    tel: z.string().min(6, "Téléphone requis"),
    purpose: otpPurposeSchema,
    code: z.string().min(4).max(8),
    nom: z.string().min(1).optional(),
    role: signupRoleSchema.optional(),
  })
  .refine((data) => data.purpose !== "SIGNUP" || Boolean(data.nom && data.role), {
    message: "Nom et équipe requis pour créer un compte invité",
    path: ["nom"],
  });

export type RequestOtpInput = z.infer<typeof requestOtpSchema>;
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
