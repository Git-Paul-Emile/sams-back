import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { achatsService } from "../services/achats.service.js";

export const listAchats = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await achatsService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getAchat = controllerWrapper(async (req: Request, res: Response) => {
  const achat = await achatsService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: achat }));
});

export const createAchat = controllerWrapper(async (req: Request, res: Response) => {
  const achat = await achatsService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Achat créé", data: achat }));
});
