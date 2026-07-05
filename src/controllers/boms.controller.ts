import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { bomsService } from "../services/boms.service.js";

export const listBoms = controllerWrapper(async (_req: Request, res: Response) => {
  const items = await bomsService.list();
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getBom = controllerWrapper(async (req: Request, res: Response) => {
  const bom = await bomsService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: bom }));
});

export const createBom = controllerWrapper(async (req: Request, res: Response) => {
  const bom = await bomsService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Formule créée", data: bom }));
});

export const updateBom = controllerWrapper(async (req: Request, res: Response) => {
  const bom = await bomsService.update(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Formule mise à jour", data: bom }));
});

export const deleteBom = controllerWrapper(async (req: Request, res: Response) => {
  await bomsService.remove(req.params.id as string, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Formule supprimée", data: null }));
});
