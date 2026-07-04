export declare const financeService: {
    getVentesPeriodes(): Promise<{
        jour: {
            ca: number;
            cash: number;
            depot: number;
            creance: number;
        };
        semaine: {
            ca: number;
            cash: number;
            depot: number;
            creance: number;
        };
        mois: {
            ca: number;
            cash: number;
            depot: number;
            creance: number;
        };
    }>;
    getVentesCommercial(): Promise<{
        id: string;
        commercial: string;
        zone: string;
        ca: number;
        nbCmd: number;
        marge: number;
    }[]>;
    getVentesChart(): Promise<{
        id: string;
        zone: string;
        ventes: number;
    }[]>;
    getVentesSegment(): Promise<{
        id: string;
        segment: string;
        ca: number;
        pct: number;
        couleur: string;
    }[]>;
    getEvolutionMarge(): Promise<{
        id: string;
        mois: string;
        ca: number;
        couts: number;
        marge: number;
    }[]>;
    getCashChart(): Promise<{
        id: string;
        semaine: string;
        entrees: number;
        sorties: number;
    }[]>;
};
//# sourceMappingURL=finance.service.d.ts.map