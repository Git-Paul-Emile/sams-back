import { prisma } from "../config/database.js";
import type { OtpPurpose, Prisma } from "../generated/prisma/client.js";

export const otpRepository = {
  create(data: Prisma.OtpCodeUncheckedCreateInput) {
    return prisma.otpCode.create({ data });
  },

  /** Invalide (marque consommés) tous les codes actifs pour ce couple tel/purpose, pour qu'une seule demande soit valide à la fois. */
  invalidateActive(tel: string, purpose: OtpPurpose) {
    return prisma.otpCode.updateMany({
      where: { tel, purpose, consumedAt: null },
      data: { consumedAt: new Date() },
    });
  },

  findLatestActive(tel: string, purpose: OtpPurpose) {
    return prisma.otpCode.findFirst({
      where: { tel, purpose, consumedAt: null, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: "desc" },
    });
  },

  incrementAttempts(id: string) {
    return prisma.otpCode.update({ where: { id }, data: { attempts: { increment: 1 } } });
  },

  markConsumed(id: string) {
    return prisma.otpCode.update({ where: { id }, data: { consumedAt: new Date() } });
  },
};
