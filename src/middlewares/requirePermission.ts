import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import type { ModuleName } from "../constants/modules.js";

const CACHE_TTL_MS = 60_000;
const cache = new Map<string, { modules: string[]; expiresAt: number }>();

// Limite connue : ce cache est local au process. En environnement multi-worker
// (cluster/PM2), chaque worker a son propre cache et invalidatePermissionCache
// ne synchronise que le worker qui a traité la requête PATCH — acceptable tant
// qu'un seul process sert l'API (cas actuel), à revoir si un déploiement
// multi-process est introduit.
async function getModulesForRole(role: string): Promise<string[]> {
  const cached = cache.get(role);
  if (cached && cached.expiresAt > Date.now()) return cached.modules;

  const record = await prisma.rolePermission.findUnique({ where: { role: role as never } });
  const modules = record?.modules ?? [];
  cache.set(role, { modules, expiresAt: Date.now() + CACHE_TTL_MS });
  return modules;
}

/** À appeler après toute écriture de RolePermission pour que le changement soit pris en compte immédiatement. */
export function invalidatePermissionCache(role?: string): void {
  if (role) cache.delete(role);
  else cache.clear();
}

export const requirePermission = (moduleName: ModuleName) => async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    throw new AppError("Authentification requise", StatusCodes.UNAUTHORIZED);
  }
  const modules = await getModulesForRole(req.user.role);
  if (!modules.includes("*") && !modules.includes(moduleName)) {
    throw new AppError("Accès refusé pour ce module", StatusCodes.FORBIDDEN);
  }
  next();
};
