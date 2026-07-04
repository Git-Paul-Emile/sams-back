import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { commerciauxService } from "../services/commerciaux.service.js";

export const listCommerciaux = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await commerciauxService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getCommercial = controllerWrapper(async (req: Request, res: Response) => {
  const commercial = await commerciauxService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: commercial }));
});

export const createCommercial = controllerWrapper(async (req: Request, res: Response) => {
  const commercial = await commerciauxService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Commercial créé", data: commercial }));
});

export const updateCommercial = controllerWrapper(async (req: Request, res: Response) => {
  const commercial = await commerciauxService.update(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Commercial mis à jour", data: commercial }));
});
