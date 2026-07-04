import type { WhatsAppNotif } from "../generated/prisma/client.js";
export declare function toWhatsAppNotifDto(row: WhatsAppNotif): {
    id: string;
    to: string;
    msg: string;
    heure: string;
    eventType: string | undefined;
    category: string | undefined;
    deepLink: string | undefined;
};
//# sourceMappingURL=whatsappNotifs.dto.d.ts.map