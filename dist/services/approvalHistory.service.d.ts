export declare const approvalHistoryService: {
    list(query: {
        page?: number;
        pageSize?: number;
        module?: string;
    }): Promise<{
        items: {
            id: string;
            date: string;
            heure: string;
            valideur: string;
            action: string;
            type: string;
            ref: string | null;
            module: string;
            commentaire: string | null;
            motifRefus: string | null;
        }[];
        total: number;
        page: number;
        pageSize: number;
    }>;
};
//# sourceMappingURL=approvalHistory.service.d.ts.map