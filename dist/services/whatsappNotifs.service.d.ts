export declare const whatsappNotifsService: {
    list(query: Record<string, unknown>): Promise<{
        items: {
            id: string;
            to: string;
            msg: string;
            heure: string;
            eventType: string | undefined;
            category: string | undefined;
            deepLink: string | undefined;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
};
//# sourceMappingURL=whatsappNotifs.service.d.ts.map