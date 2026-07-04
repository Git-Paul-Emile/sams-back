export interface GlobalSearchResult {
    type: "client" | "commande" | "facture" | "achat";
    id: string;
    label: string;
    path: string;
}
export declare const searchService: {
    global(q: string): Promise<GlobalSearchResult[]>;
};
//# sourceMappingURL=search.service.d.ts.map