export declare const emailNotifsService: {
    list(query: Record<string, unknown>): Promise<{
        items: {
            id: string;
            to: string;
            sujet: string;
            heure: string;
            statut: string;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
};
//# sourceMappingURL=emailNotifs.service.d.ts.map