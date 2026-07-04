export function toWhatsAppNotifDto(row) {
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
//# sourceMappingURL=whatsappNotifs.dto.js.map