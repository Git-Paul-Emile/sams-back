export declare const productCostsService: {
    list(): Promise<{
        id: string;
        ref: string;
        designation: string;
        categorie: string;
        prixVente: number;
        qteVendue: number;
        qteProduite: number;
        qteReel: number;
        bom: {
            mat: string;
            incorp: number;
            qteKg: number;
            prixAchat: number;
        }[];
        emballages: {
            type: string;
            qte: number;
            prix: number;
        }[];
        coutMO: number;
        coutEnergie: number;
        coutConsommables: number;
        coutIndirects: number;
        fraisLogistiques: number;
        fraisCommerciaux: number;
        fraisAdmin: number;
        coutTheoriqueUnit: number;
    }[]>;
};
//# sourceMappingURL=productCosts.service.d.ts.map