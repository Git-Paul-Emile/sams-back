import type { Request, Response } from "express";
export declare const login: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const refresh: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const logout: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
export declare const me: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map