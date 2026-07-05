import rateLimit from "express-rate-limit";
import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";

const rateLimitHandler = (req: import("express").Request, res: import("express").Response) => {
  res.status(StatusCodes.TOO_MANY_REQUESTS).json(
    jsonResponse({ status: "error", message: "Trop de requêtes, veuillez réessayer plus tard." })
  );
};

// Limite générale appliquée à toute l'API.
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
});

// Limite stricte dédiée aux tentatives de connexion (anti brute-force).
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
});

// Encore plus stricte que authRateLimiter : demander/vérifier un OTP coûte un
// envoi SMS/WhatsApp réel une fois un fournisseur de production branché.
export const otpRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: rateLimitHandler,
});
