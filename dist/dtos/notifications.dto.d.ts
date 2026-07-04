import type { Notif } from "../generated/prisma/client.js";
/**
 * Remappe une ligne `Notif` vers la forme `Notif` du frontend — `heure` est
 * pour l'instant l'ISO brut de `createdAt` (le frontend formatera lui-même le
 * temps relatif, pas de formateur "il y a X minutes" côté serveur ici).
 */
export declare function toNotifDto(row: Notif): {
    id: string;
    type: string;
    titre: string;
    msg: string;
    heure: string;
    lu: boolean;
};
//# sourceMappingURL=notifications.dto.d.ts.map