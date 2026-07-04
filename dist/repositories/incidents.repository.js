import { prisma } from "../config/database.js";
const includeAll = {
    prodOrder: true,
    operateur: true,
};
export const incidentsRepository = {
    findMany(where, opts) {
        return prisma.incident.findMany({ where, include: includeAll, ...opts });
    },
    count(where) {
        return prisma.incident.count({ where });
    },
    findById(id) {
        return prisma.incident.findUnique({ where: { id }, include: includeAll });
    },
    create(data) {
        return prisma.incident.create({ data, include: includeAll });
    },
};
//# sourceMappingURL=incidents.repository.js.map