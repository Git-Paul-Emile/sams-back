import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { settingsService } from "../services/settings.service.js";

export const getSettings = controllerWrapper(async (req: Request, res: Response) => {
  const settings = await settingsService.get();
  res.json(jsonResponse({ status: "success", message: "OK", data: settings }));
});

export const updateSettings = controllerWrapper(async (req: Request, res: Response) => {
  const settings = await settingsService.update(req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Paramètres mis à jour", data: settings }));
});
