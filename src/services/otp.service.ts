import crypto from "node:crypto";
import { StatusCodes } from "http-status-codes";
import { otpRepository } from "../repositories/otp.repository.js";
import { usersRepository } from "../repositories/users.repository.js";
import { getOtpProvider } from "./external/otp/otpProviderFactory.js";
import { otpConfig } from "../config/external.js";
import { buildUserPayload, hashToken, issueRefreshToken } from "./auth.service.js";
import { generateAccessToken } from "../config/jwt.js";
import { AppError } from "../utils/AppError.js";
import { recordAuditLog } from "../utils/auditLog.js";
import type { OtpPurpose } from "../generated/prisma/client.js";
import type { RequestOtpInput, VerifyOtpInput } from "../validators/otp.validator.js";

function generateCode(): string {
  const length = otpConfig.codeLength();
  const max = 10 ** length;
  return String(crypto.randomInt(0, max)).padStart(length, "0");
}

async function issueSession(user: { id: string; nom: string; email: string | null; role: string }) {
  const accessToken = generateAccessToken({ sub: user.id, role: user.role });
  const refreshToken = await issueRefreshToken(user.id);
  const userPayload = await buildUserPayload(user.id, user.nom, user.email, user.role);
  return { accessToken, refreshToken, user: userPayload };
}

export const otpService = {
  async request(input: RequestOtpInput) {
    if (input.purpose === "LOGIN") {
      const user = await usersRepository.findByTel(input.tel);
      if (!user) throw new AppError("Aucun compte pour ce numéro", StatusCodes.NOT_FOUND);
    } else {
      const existing = await usersRepository.findByTel(input.tel);
      if (existing) throw new AppError("Un compte existe déjà pour ce numéro, utilisez la connexion", StatusCodes.CONFLICT);
    }

    const code = generateCode();
    const codeHash = hashToken(code);
    const expiresAt = new Date(Date.now() + otpConfig.ttlMs());

    await otpRepository.invalidateActive(input.tel, input.purpose as OtpPurpose);
    await otpRepository.create({ tel: input.tel, codeHash, purpose: input.purpose as OtpPurpose, expiresAt });

    const result = await getOtpProvider().send({ tel: input.tel, code, purpose: input.purpose });

    // Le code en clair ne remonte à l'appelant qu'en mode dev (aucun canal d'envoi réel) —
    // jamais lorsqu'un fournisseur SMS/WhatsApp de production est actif.
    return {
      sent: result.success,
      devCode: otpConfig.provider === "dev" ? code : undefined,
    };
  },

  async verify(input: VerifyOtpInput, ctx: { ip?: string | null }) {
    const otp = await otpRepository.findLatestActive(input.tel, input.purpose as OtpPurpose);
    if (!otp) throw new AppError("Code expiré ou invalide, demandez un nouveau code", StatusCodes.BAD_REQUEST);

    if (otp.attempts >= otp.maxAttempts) {
      throw new AppError("Nombre de tentatives dépassé, demandez un nouveau code", StatusCodes.TOO_MANY_REQUESTS);
    }

    if (hashToken(input.code) !== otp.codeHash) {
      await otpRepository.incrementAttempts(otp.id);
      throw new AppError("Code invalide", StatusCodes.BAD_REQUEST);
    }

    await otpRepository.markConsumed(otp.id);

    if (input.purpose === "LOGIN") {
      const user = await usersRepository.findByTel(input.tel);
      if (!user) throw new AppError("Aucun compte pour ce numéro", StatusCodes.NOT_FOUND);
      if (user.statut !== "Actif") {
        throw new AppError("Compte désactivé", StatusCodes.FORBIDDEN);
      }
      return issueSession(user);
    }

    // SIGNUP : création d'un compte invité en self-service, actif immédiatement
    // (pas de validation admin préalable) — un administrateur garde la main pour
    // modifier ensuite son rôle/statut/permissions depuis l'écran Administration.
    // `nom`/`role` sont garantis présents par le refine de verifyOtpSchema pour purpose=SIGNUP.
    if (!input.nom || !input.role) {
      throw new AppError("Nom et équipe requis pour créer un compte invité", StatusCodes.BAD_REQUEST);
    }
    const created = await usersRepository.create({
      nom: input.nom,
      tel: input.tel,
      role: input.role,
      passwordHash: null,
      statut: "Actif",
    });
    await recordAuditLog({ action: "Création", module: "Admin", ref: created.tel ?? created.id, userId: null, ip: ctx.ip });

    return issueSession(created);
  },
};
