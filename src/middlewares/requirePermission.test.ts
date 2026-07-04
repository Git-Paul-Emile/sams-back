import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Request, Response, NextFunction } from "express";

const findUnique = vi.fn();

vi.mock("../config/database.js", () => ({
  prisma: { rolePermission: { findUnique: (...args: unknown[]) => findUnique(...args) } },
}));

const { requirePermission } = await import("./requirePermission.js");

function buildRes() {
  return {} as Response;
}

describe("requirePermission", () => {
  beforeEach(() => {
    findUnique.mockReset();
  });

  it("laisse passer un rôle disposant du module exact", async () => {
    findUnique.mockResolvedValue({ modules: ["stock", "ventes"] });
    const req = { user: { role: "Stock" } } as unknown as Request;
    const next = vi.fn() as NextFunction;

    await requirePermission("stock")(req, buildRes(), next);

    expect(next).toHaveBeenCalledWith();
  });

  it("laisse passer un rôle disposant du wildcard '*' même sans le module explicite", async () => {
    findUnique.mockResolvedValue({ modules: ["*"] });
    const req = { user: { role: "Administrateur" } } as unknown as Request;
    const next = vi.fn() as NextFunction;

    await requirePermission("stock-items")(req, buildRes(), next);

    expect(next).toHaveBeenCalledWith();
  });

  it("rejette avec 403 un rôle sans le module requis ni wildcard", async () => {
    findUnique.mockResolvedValue({ modules: ["ventes"] });
    const req = { user: { role: "Commercial" } } as unknown as Request;
    const next = vi.fn() as NextFunction;

    await expect(requirePermission("stock")(req, buildRes(), next)).rejects.toThrow(
      "Accès refusé pour ce module"
    );
    expect(next).not.toHaveBeenCalled();
  });

  it("rejette avec 401 si aucun utilisateur authentifié", async () => {
    const req = {} as Request;
    const next = vi.fn() as NextFunction;

    await expect(requirePermission("stock")(req, buildRes(), next)).rejects.toThrow(
      "Authentification requise"
    );
  });
});
