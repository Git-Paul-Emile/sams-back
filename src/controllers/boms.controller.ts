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
