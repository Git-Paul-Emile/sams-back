import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { prodOrdersService } from "../services/prodOrders.service.js";

export const listProdOrders = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await prodOrdersService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getProdOrder = controllerWrapper(async (req: Request, res: Response) => {
  const order = await prodOrdersService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: order }));
});

export const createProdOrder = controllerWrapper(async (req: Request, res: Response) => {
  const order = await prodOrdersService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Ordre de fabrication créé", data: order }));
});

export const getProdChart = controllerWrapper(async (_req: Request, res: Response) => {
  const chart = await prodOrdersService.chart();
  res.json(jsonResponse({ status: "success", message: "OK", data: chart }));
});
