/**
 * Remappe une ligne `Notif` vers la forme `Notif` du frontend — `heure` est
 * pour l'instant l'ISO brut de `createdAt` (le frontend formatera lui-même le
 * temps relatif, pas de formateur "il y a X minutes" côté serveur ici).
 */
export function toNotifDto(row) {
    return {
        id: row.id,
        type: row.type,
        titre: row.titre,
        msg: row.msg,
        heure: row.createdAt.toISOString(),
        lu: row.lu,
    };
}
//# sourceMappingURL=notifications.dto.js.map