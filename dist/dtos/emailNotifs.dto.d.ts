import type { EmailNotif } from "../generated/prisma/client.js";
export declare function toEmailNotifDto(row: EmailNotif): {
    id: string;
    to: string;
    sujet: string;
    heure: string;
    statut: string;
};
//# sourceMappingURL=emailNotifs.dto.d.ts.map