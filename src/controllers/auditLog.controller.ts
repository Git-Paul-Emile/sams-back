import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { auditLogService } from "../services/auditLog.service.js";

export const listAuditLog = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await auditLogService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
