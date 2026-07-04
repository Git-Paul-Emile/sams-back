export declare const bomsService: {
    list(): Promise<{
        id: string;
        produit: string;
        items: {
            intrant: string;
            categorie: string;
            qte: number;
            unite: string;
        }[];
    }[]>;
    get(id: string): Promise<{
        id: string;
        produit: string;
        items: {
            intrant: string;
            categorie: string;
            qte: number;
            unite: string;
        }[];
    }>;
};
//# sourceMappingURL=boms.service.d.ts.map