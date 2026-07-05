import bcrypt from "bcrypt";
import crypto from "node:crypto";
import { StatusCodes } from "http-status-codes";
import { authRepository } from "../repositories/auth.repository.js";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../config/jwt.js";
import { AppError } from "../utils/AppError.js";
import { computeInitials } from "../utils/initials.js";

const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function hashToken(raw: string): string {
  return crypto.createHash("sha256").update(raw).digest("hex");
}

export async function buildUserPayload(userId: string, nom: string, email: string | null, role: string) {
  const permission = await authRepository.findModulesForRole(role);
  return {
    id: userId,
    nom,
    email,
    role,
    initials: computeInitials(nom),
    modules: permission?.modules ?? [],
  };
}

export async function issueRefreshToken(userId: string): Promise<string> {
  const jti = crypto.randomUUID();
  const refreshJwt = generateRefreshToken({ sub: userId, jti });
  await authRepository.createRefreshToken({
    userId,
    tokenHash: hashToken(jti),
    expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL_MS),
  });
  return refreshJwt;
}

export const authService = {
  async login(email: string, password: string) {
    const user = await authRepository.findUserByEmail(email);
    // `passwordHash` est null pour les comptes créés sans email (OTP-only, voir chantier E) :
    // ce login classique doit rester refusé pour eux, avec le même message générique.
    if (!user || !user.passwordHash || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new AppError("Identifiant ou mot de passe incorrect", StatusCodes.UNAUTHORIZED);
    }
    if (user.statut !== "Actif") {
      throw new AppError("Compte désactivé", StatusCodes.FORBIDDEN);
    }

    await authRepository.touchLastLogin(user.id);
    const accessToken = generateAccessToken({ sub: user.id, role: user.role });
    const refreshToken = await issueRefreshToken(user.id);
    const userPayload = await buildUserPayload(user.id, user.nom, user.email, user.role);

    return { accessToken, refreshToken, user: userPayload };
  },

  async refresh(refreshTokenCookie: string | undefined) {
    if (!refreshTokenCookie) {
      throw new AppError("Session expirée, veuillez vous reconnecter", StatusCodes.UNAUTHORIZED);
    }

    let decoded: { sub: string; jti: string };
    try {
      decoded = verifyRefreshToken(refreshTokenCookie);
    } catch {
      throw new AppError("Session expirée, veuillez vous reconnecter", StatusCodes.UNAUTHORIZED);
    }

    const stored = await authRepository.findActiveRefreshTokenByHash(hashToken(decoded.jti));
    if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
      throw new AppError("Session expirée, veuillez vous reconnecter", StatusCodes.UNAUTHORIZED);
    }

    const user = await authRepository.findUserById(decoded.sub);
    if (!user || user.statut !== "Actif") {
      throw new AppError("Compte désactivé", StatusCodes.FORBIDDEN);
    }

    // Rotation : on révoque l'ancien jeton et on en émet un nouveau.
    await authRepository.revokeRefreshToken(stored.id);
    const accessToken = generateAccessToken({ sub: user.id, role: user.role });
    const refreshToken = await issueRefreshToken(user.id);

    return { accessToken, refreshToken };
  },

  async logout(refreshTokenCookie: string | undefined) {
    if (!refreshTokenCookie) return;
    try {
      const decoded = verifyRefreshToken(refreshTokenCookie);
      const stored = await authRepository.findActiveRefreshTokenByHash(hashToken(decoded.jti));
      if (stored && !stored.revokedAt) {
        await authRepository.revokeRefreshToken(stored.id);
      }
    } catch {
      // Jeton déjà invalide/expiré : rien à révoquer, la déconnexion reste un succès.
    }
  },

  async me(userId: string) {
    const user = await authRepository.findUserById(userId);
    if (!user) throw new AppError("Utilisateur introuvable", StatusCodes.NOT_FOUND);
    return buildUserPayload(user.id, user.nom, user.email, user.role);
  },
};
