export function toEmailNotifDto(row) {
    return {
        id: row.id,
        to: row.to,
        sujet: row.sujet,
        heure: row.createdAt.toISOString(),
        statut: row.statut,
    };
}
//# sourceMappingURL=emailNotifs.dto.js.map