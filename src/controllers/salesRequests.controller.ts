import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { salesRequestsService } from "../services/salesRequests.service.js";

export const listSalesRequests = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await salesRequestsService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getSalesRequest = controllerWrapper(async (req: Request, res: Response) => {
  const sr = await salesRequestsService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: sr }));
});

export const createSalesRequest = controllerWrapper(async (req: Request, res: Response) => {
  const sr = await salesRequestsService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Demande créée", data: sr }));
});

export const approveSalesRequest = controllerWrapper(async (req: Request, res: Response) => {
  const sr = await salesRequestsService.approve(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Demande validée", data: sr }));
});

export const rejectSalesRequest = controllerWrapper(async (req: Request, res: Response) => {
  const sr = await salesRequestsService.reject(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Demande refusée", data: sr }));
});
