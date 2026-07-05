import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { importRows } from "../utils/bulkImport.js";
import { operateursService } from "../services/operateurs.service.js";
import { createOperateurSchema } from "../validators/operateurs.validator.js";

export const listOperateurs = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await operateursService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getOperateur = controllerWrapper(async (req: Request, res: Response) => {
  const operateur = await operateursService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: operateur }));
});

export const createOperateur = controllerWrapper(async (req: Request, res: Response) => {
  const operateur = await operateursService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Opérateur créé", data: operateur }));
});

export const updateOperateur = controllerWrapper(async (req: Request, res: Response) => {
  const operateur = await operateursService.update(req.params.id as string, req.body, { userId: req.user!.id, ip: req.ip });
  res.json(jsonResponse({ status: "success", message: "Opérateur mis à jour", data: operateur }));
});

export const importOperateurs = controllerWrapper(async (req: Request, res: Response) => {
  const ctx = { userId: req.user!.id, ip: req.ip };
  const report = await importRows(req.body.rows, createOperateurSchema, (row) => operateursService.create(row, ctx));
  res.json(jsonResponse({ status: "success", message: "Import terminé", data: report }));
});
