import type { CreateNotifInput, ListNotifsQuery } from "../validators/notifications.validator.js";
export declare const notificationsService: {
    list(query: ListNotifsQuery): Promise<{
        items: {
            id: string;
            type: string;
            titre: string;
            msg: string;
            heure: string;
            lu: boolean;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    create(input: CreateNotifInput): Promise<{
        id: string;
        type: string;
        titre: string;
        msg: string;
        heure: string;
        lu: boolean;
    }>;
    markAsRead(id: string): Promise<{
        id: string;
        type: string;
        titre: string;
        msg: string;
        heure: string;
        lu: boolean;
    }>;
};
//# sourceMappingURL=notifications.service.d.ts.map