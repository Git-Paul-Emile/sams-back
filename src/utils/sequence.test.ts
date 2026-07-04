import { describe, it, expect, vi } from "vitest";
import { createWithSequenceNumber, nextSequenceNumber, currentYYMM } from "./sequence.js";

function pgUniqueConflict(field: string) {
  const err: Record<string, unknown> = { code: "P2002" };
  err.meta = { driverAdapterError: { cause: { constraint: { fields: [field] } } } };
  return err;
}

function classicUniqueConflict(field: string) {
  const err: Record<string, unknown> = { code: "P2002", meta: { target: [field] } };
  return err;
}

describe("nextSequenceNumber", () => {
  it("génère un numéro basé sur le préfixe, le mois courant et le compte existant", async () => {
    const now = new Date("2026-07-04T00:00:00Z");
    const countExisting = vi.fn().mockResolvedValue(4);

    const num = await nextSequenceNumber("CMD", countExisting, now);

    expect(num).toBe(`CMD-${currentYYMM(now)}-005`);
    expect(countExisting).toHaveBeenCalledWith(`CMD-${currentYYMM(now)}-`);
  });
});

describe("createWithSequenceNumber", () => {
  it("retourne le résultat directement quand la création réussit du premier coup", async () => {
    const countExisting = vi.fn().mockResolvedValue(0);
    const createFn = vi.fn().mockResolvedValue({ id: "1", num: "CMD-2607-001" });

    const result = await createWithSequenceNumber("CMD", countExisting, createFn);

    expect(result).toEqual({ id: "1", num: "CMD-2607-001" });
    expect(createFn).toHaveBeenCalledTimes(1);
  });

  it("réessaie avec un nouveau numéro après une collision unique sur `num` (format adapter-pg)", async () => {
    const countExisting = vi.fn().mockResolvedValueOnce(0).mockResolvedValueOnce(1);
    const createFn = vi
      .fn()
      .mockRejectedValueOnce(pgUniqueConflict("num"))
      .mockResolvedValueOnce({ id: "2", num: "CMD-2607-002" });

    const result = await createWithSequenceNumber("CMD", countExisting, createFn);

    expect(result).toEqual({ id: "2", num: "CMD-2607-002" });
    expect(createFn).toHaveBeenCalledTimes(2);
  });

  it("réessaie aussi sur le format d'erreur Prisma \"classique\" (meta.target)", async () => {
    const countExisting = vi.fn().mockResolvedValueOnce(0).mockResolvedValueOnce(1);
    const createFn = vi
      .fn()
      .mockRejectedValueOnce(classicUniqueConflict("num"))
      .mockResolvedValueOnce({ id: "3", num: "CMD-2607-002" });

    const result = await createWithSequenceNumber("CMD", countExisting, createFn);

    expect(result).toEqual({ id: "3", num: "CMD-2607-002" });
    expect(createFn).toHaveBeenCalledTimes(2);
  });

  it("propage immédiatement une erreur qui n'est pas un conflit sur `num`", async () => {
    const countExisting = vi.fn().mockResolvedValue(0);
    const otherError = new Error("Client introuvable");
    const createFn = vi.fn().mockRejectedValue(otherError);

    await expect(createWithSequenceNumber("CMD", countExisting, createFn)).rejects.toThrow(
      "Client introuvable"
    );
    expect(createFn).toHaveBeenCalledTimes(1);
  });

  it("abandonne après le nombre maximal de tentatives en cas de collisions répétées", async () => {
    const countExisting = vi.fn().mockResolvedValue(0);
    const createFn = vi.fn().mockRejectedValue(pgUniqueConflict("num"));

    await expect(createWithSequenceNumber("CMD", countExisting, createFn, 3)).rejects.toMatchObject({
      code: "P2002",
    });
    expect(createFn).toHaveBeenCalledTimes(3);
  });
});
