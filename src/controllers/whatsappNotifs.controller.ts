import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { whatsappNotifsService } from "../services/whatsappNotifs.service.js";

export const listWhatsAppNotifs = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await whatsappNotifsService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
