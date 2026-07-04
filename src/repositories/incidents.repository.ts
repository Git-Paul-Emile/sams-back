import { prisma } from "../config/database.js";
import type { Prisma } from "../generated/prisma/client.js";

const includeAll = {
  prodOrder: true,
  operateur: true,
} satisfies Prisma.IncidentInclude;

export const incidentsRepository = {
  findMany(
    where: Prisma.IncidentWhereInput,
    opts: { skip: number; take: number; orderBy: Prisma.IncidentOrderByWithRelationInput }
  ) {
    return prisma.incident.findMany({ where, include: includeAll, ...opts });
  },

  count(where: Prisma.IncidentWhereInput) {
    return prisma.incident.count({ where });
  },

  findById(id: string) {
    return prisma.incident.findUnique({ where: { id }, include: includeAll });
  },

  create(data: Prisma.IncidentUncheckedCreateInput) {
    return prisma.incident.create({ data, include: includeAll });
  },
};
