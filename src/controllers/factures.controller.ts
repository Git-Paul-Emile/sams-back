import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { facturesService } from "../services/factures.service.js";

export const listFactures = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await facturesService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getFacture = controllerWrapper(async (req: Request, res: Response) => {
  const facture = await facturesService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: facture }));
});

export const createFacture = controllerWrapper(async (req: Request, res: Response) => {
  const facture = await facturesService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Facture créée", data: facture }));
});

export const payFacture = controllerWrapper(async (req: Request, res: Response) => {
  const facture = await facturesService.pay(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Paiement enregistré", data: facture }));
});
