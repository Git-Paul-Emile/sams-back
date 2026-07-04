import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
const CACHE_TTL_MS = 60_000;
const cache = new Map();
async function getModulesForRole(role) {
    const cached = cache.get(role);
    if (cached && cached.expiresAt > Date.now())
        return cached.modules;
    const record = await prisma.rolePermission.findUnique({ where: { role: role } });
    const modules = record?.modules ?? [];
    cache.set(role, { modules, expiresAt: Date.now() + CACHE_TTL_MS });
    return modules;
}
export const requirePermission = (moduleName) => async (req, res, next) => {
    if (!req.user) {
        throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
    }
    const modules = await getModulesForRole(req.user.role);
    if (!modules.includes("*") && !modules.includes(moduleName)) {
        throw new AppError("Accès refusé pour ce module", StatusCodes.FORBIDDEN);
    }
    next();
};
//# sourceMappingURL=requirePermission.js.map