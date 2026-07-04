import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { materialRequestsService } from "../services/materialRequests.service.js";

export const listMaterialRequests = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await materialRequestsService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getMaterialRequest = controllerWrapper(async (req: Request, res: Response) => {
  const mr = await materialRequestsService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: mr }));
});

export const createMaterialRequest = controllerWrapper(async (req: Request, res: Response) => {
  const mr = await materialRequestsService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Demande créée", data: mr }));
});

export const approveMaterialRequest = controllerWrapper(async (req: Request, res: Response) => {
  const mr = await materialRequestsService.approve(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Demande validée", data: mr }));
});

export const rejectMaterialRequest = controllerWrapper(async (req: Request, res: Response) => {
  const mr = await materialRequestsService.reject(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Demande refusée", data: mr }));
});
