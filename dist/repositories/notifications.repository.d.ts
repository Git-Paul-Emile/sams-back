import type { Prisma } from "../generated/prisma/client.js";
export declare const notificationsRepository: {
    findMany(opts: {
        skip: number;
        take: number;
    }): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        type: string;
        titre: string;
        msg: string;
        lu: boolean;
    }[]>;
    count(): Prisma.PrismaPromise<number>;
    findById(id: string): Prisma.Prisma__NotifClient<{
        id: string;
        createdAt: Date;
        type: string;
        titre: string;
        msg: string;
        lu: boolean;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(data: Prisma.NotifUncheckedCreateInput): Prisma.Prisma__NotifClient<{
        id: string;
        createdAt: Date;
        type: string;
        titre: string;
        msg: string;
        lu: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    markAsRead(id: string): Prisma.Prisma__NotifClient<{
        id: string;
        createdAt: Date;
        type: string;
        titre: string;
        msg: string;
        lu: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=notifications.repository.d.ts.map