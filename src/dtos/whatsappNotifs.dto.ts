import type { WhatsAppNotif } from "../generated/prisma/client.js";

export function toWhatsAppNotifDto(row: WhatsAppNotif) {
  return {
    id: row.id,
    to: row.to,
    msg: row.msg,
    heure: row.createdAt.toISOString(),
    eventType: row.eventType ?? undefined,
    category: row.category ?? undefined,
    deepLink: row.deepLink ?? undefined,
  };
}
