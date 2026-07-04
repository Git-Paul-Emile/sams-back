import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { financeService } from "../services/finance.service.js";

export const getVentesPeriodes = controllerWrapper(async (_req: Request, res: Response) => {
  const data = await financeService.getVentesPeriodes();
  res.json(jsonResponse({ status: "success", message: "OK", data }));
});

export const getVentesCommercial = controllerWrapper(async (_req: Request, res: Response) => {
  const data = await financeService.getVentesCommercial();
  res.json(jsonResponse({ status: "success", message: "OK", data }));
});

export const getVentesChart = controllerWrapper(async (_req: Request, res: Response) => {
  const data = await financeService.getVentesChart();
  res.json(jsonResponse({ status: "success", message: "OK", data }));
});

export const getVentesSegment = controllerWrapper(async (_req: Request, res: Response) => {
  const data = await financeService.getVentesSegment();
  res.json(jsonResponse({ status: "success", message: "OK", data }));
});

export const getEvolutionMarge = controllerWrapper(async (_req: Request, res: Response) => {
  const data = await financeService.getEvolutionMarge();
  res.json(jsonResponse({ status: "success", message: "OK", data }));
});

export const getCashChart = controllerWrapper(async (_req: Request, res: Response) => {
  const data = await financeService.getCashChart();
  res.json(jsonResponse({ status: "success", message: "OK", data }));
});
