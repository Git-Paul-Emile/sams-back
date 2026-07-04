import type { Prisma } from "../generated/prisma/client.js";
export declare const fournisseursRepository: {
    findMany(where: Prisma.FournisseurWhereInput, opts: {
        skip: number;
        take: number;
        orderBy: Prisma.FournisseurOrderByWithRelationInput;
    }): Prisma.PrismaPromise<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        createdAt: Date;
        updatedAt: Date;
        contact: string | null;
        adresse: string | null;
    }[]>;
    count(where: Prisma.FournisseurWhereInput): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__FournisseurClient<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        createdAt: Date;
        updatedAt: Date;
        contact: string | null;
        adresse: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.FournisseurUncheckedCreateInput): Prisma.Prisma__FournisseurClient<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        createdAt: Date;
        updatedAt: Date;
        contact: string | null;
        adresse: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(id: string, data: Prisma.FournisseurUncheckedUpdateInput): Prisma.Prisma__FournisseurClient<{
        id: string;
        email: string | null;
        nom: string;
        tel: string | null;
        createdAt: Date;
        updatedAt: Date;
        contact: string | null;
        adresse: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=fournisseurs.repository.d.ts.map