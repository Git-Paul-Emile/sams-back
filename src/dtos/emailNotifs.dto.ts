import type { EmailNotif } from "../generated/prisma/client.js";

export function toEmailNotifDto(row: EmailNotif) {
  return {
    id: row.id,
    to: row.to,
    sujet: row.sujet,
    heure: row.createdAt.toISOString(),
    statut: row.statut,
  };
}
