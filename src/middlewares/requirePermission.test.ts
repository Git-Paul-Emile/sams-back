import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Request, Response, NextFunction } from "express";

const findUnique = vi.fn();

vi.mock("../config/database.js", () => ({
  prisma: { rolePermission: { findUnique: (...args: unknown[]) => findUnique(...args) } },
}));

const { requirePermission, invalidatePermissionCache } = await import("./requirePermission.js");

function buildRes() {
  return {} as Response;
}

describe("requirePermission", () => {
  beforeEach(() => {
    findUnique.mockReset();
    invalidatePermissionCache();
  });

  it("laisse passer un rôle disposant du module exact", async () => {
    findUnique.mockResolvedValue({ modules: ["Stocks", "Ventes"] });
    const req = { user: { role: "Stock" } } as unknown as Request;
    const next = vi.fn() as NextFunction;

    await requirePermission("Stocks")(req, buildRes(), next);

    expect(next).toHaveBeenCalledWith();
  });

  it("laisse passer un rôle disposant du wildcard '*' même sans le module explicite", async () => {
    findUnique.mockResolvedValue({ modules: ["*"] });
    const req = { user: { role: "Administrateur" } } as unknown as Request;
    const next = vi.fn() as NextFunction;

    await requirePermission("Stocks")(req, buildRes(), next);

    expect(next).toHaveBeenCalledWith();
  });

  it("rejette avec 403 un rôle sans le module requis ni wildcard", async () => {
    findUnique.mockResolvedValue({ modules: ["Ventes"] });
    const req = { user: { role: "Commercial" } } as unknown as Request;
    const next = vi.fn() as NextFunction;

    await expect(requirePermission("Stocks")(req, buildRes(), next)).rejects.toThrow(
      "Accès refusé pour ce module"
    );
    expect(next).not.toHaveBeenCalled();
  });

  it("rejette avec 401 si aucun utilisateur authentifié", async () => {
    const req = {} as Request;
    const next = vi.fn() as NextFunction;

    await expect(requirePermission("Stocks")(req, buildRes(), next)).rejects.toThrow(
      "Authentification requise"
    );
  });

  it("invalidatePermissionCache force une nouvelle lecture même si le TTL n'est pas écoulé", async () => {
    findUnique.mockResolvedValue({ modules: ["Stocks"] });
    const req = { user: { role: "Stock" } } as unknown as Request;
    const next = vi.fn() as NextFunction;

    await requirePermission("Stocks")(req, buildRes(), next);
    expect(findUnique).toHaveBeenCalledTimes(1);

    // Toujours en cache : pas de nouvel appel Prisma avant invalidation.
    await requirePermission("Stocks")(req, buildRes(), next);
    expect(findUnique).toHaveBeenCalledTimes(1);

    invalidatePermissionCache("Stock");
    findUnique.mockResolvedValue({ modules: [] });

    await expect(requirePermission("Stocks")(req, buildRes(), next)).rejects.toThrow(
      "Accès refusé pour ce module"
    );
    expect(findUnique).toHaveBeenCalledTimes(2);
  });
});
