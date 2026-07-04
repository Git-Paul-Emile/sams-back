import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { commandesRentabiliteService } from "../services/commandesRentabilite.service.js";

export const listCommandesRentabilite = controllerWrapper(async (_req: Request, res: Response) => {
  const items = await commandesRentabiliteService.list();
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
