import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";
import { StatusCodes } from "http-status-codes";
import { jsonResponse } from "../utils/responseApi.js";

function formatZodMessage(error: unknown): string {
  if (error && typeof error === "object" && "issues" in error) {
    const issues = (error as { issues: { path: (string | number)[]; message: string }[] }).issues;
    return issues.map((issue) => `${issue.path.join(".") || "champ"}: ${issue.message}`).join(" ; ");
  }
  return "Requête invalide";
}

export const validateBody = (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: formatZodMessage(result.error) })
    );
  }
  req.body = result.data;
  next();
};

export const validateQuery = (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse(req.query);
  if (!result.success) {
    return res.status(StatusCodes.BAD_REQUEST).json(
      jsonResponse({ status: "fail", message: formatZodMessage(result.error) })
    );
  }
  (req as Request & { validatedQuery?: unknown }).validatedQuery = result.data;
  next();
};
