import { StatusCodes } from "http-status-codes";
import { verifyAccessToken } from "../config/jwt.js";
import { AppError } from "../utils/AppError.js";
export const requireAuth = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    }
    const token = header.slice("Bearer ".length);
    try {
        const payload = verifyAccessToken(token);
        req.user = { id: payload.sub, role: payload.role };
        next();
    }
    catch {
        throw new AppError("Session invalide ou expirée", StatusCodes.UNAUTHORIZED);
    }
};
//# sourceMappingURL=requireAuth.js.map