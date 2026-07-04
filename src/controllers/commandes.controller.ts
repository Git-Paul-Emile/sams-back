import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { commandesService } from "../services/commandes.service.js";

export const listCommandes = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await commandesService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getCommande = controllerWrapper(async (req: Request, res: Response) => {
  const commande = await commandesService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: commande }));
});

export const createCommande = controllerWrapper(async (req: Request, res: Response) => {
  const commande = await commandesService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Commande créée", data: commande }));
});

export const addCommandeTimeline = controllerWrapper(async (req: Request, res: Response) => {
  const commande = await commandesService.addTimelineEvent(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "État mis à jour", data: commande }));
});
