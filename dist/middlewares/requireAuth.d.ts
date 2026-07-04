import type { NextFunction, Request, Response } from "express";
export interface AuthenticatedUser {
    id: string;
    role: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: AuthenticatedUser;
        }
    }
}
export declare const requireAuth: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=requireAuth.d.ts.map