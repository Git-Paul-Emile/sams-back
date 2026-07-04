import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

export const settingsRepository = {
  get() {
    return prisma.settings.findUniqueOrThrow({ where: { id: 1 } });
  },

  update(data: Prisma.SettingsUncheckedUpdateInput) {
    return prisma.settings.update({ where: { id: 1 }, data });
  },
};
