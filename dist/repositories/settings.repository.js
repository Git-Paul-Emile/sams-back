import { prisma } from "../config/database.js";
export const settingsRepository = {
    get() {
        return prisma.settings.findUniqueOrThrow({ where: { id: 1 } });
    },
    update(data) {
        return prisma.settings.update({ where: { id: 1 }, data });
    },
};
//# sourceMappingURL=settings.repository.js.map