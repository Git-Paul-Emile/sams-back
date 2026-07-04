import type { Prisma } from "../generated/prisma/client.js";
export declare const operateursRepository: {
    findMany(where: Prisma.OperateurWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.OperateurOrderByWithRelationInput;
    }): Prisma.PrismaPromise<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        matricule: string;
        prenom: string;
        ligne: string | null;
        poste: string | null;
        embauche: Date | null;
    }[]>;
    count(where: Prisma.OperateurWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__OperateurClient<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        matricule: string;
        prenom: string;
        ligne: string | null;
        poste: string | null;
        embauche: Date | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.OperateurUncheckedCreateInput): Prisma.Prisma__OperateurClient<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        matricule: string;
        prenom: string;
        ligne: string | null;
        poste: string | null;
        embauche: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(id: string, data: Prisma.OperateurUncheckedUpdateInput): Prisma.Prisma__OperateurClient<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        statut: string;
        createdAt: Date;
        updatedAt: Date;
        matricule: string;
        prenom: string;
        ligne: string | null;
        poste: string | null;
        embauche: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    countAll(): Prisma.PrismaPromise<number>;
    /**
     * Agrégats rendement / OF réalisés / volume / incidents pour un lot
     * d'opérateurs (batch groupBy, pas de N+1).
     */
    aggregatesForOperateurs(operateurIds: string[]): Promise<Map<string, {
        rendement: number;
        ofRealises: number;
        vol: number;
        incidents: number;
    }>>;
};
//# sourceMappingURL=operateurs.repository.d.ts.map