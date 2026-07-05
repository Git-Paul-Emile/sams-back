import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { importRows } from "../utils/bulkImport.js";
import { stockItemsService } from "../services/stockItems.service.js";
import { createStockItemSchema } from "../validators/stockItems.validator.js";

export const listStockItems = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await stockItemsService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const getStockItem = controllerWrapper(async (req: Request, res: Response) => {
  const item = await stockItemsService.get(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "OK", data: item }));
});

export const createStockItem = controllerWrapper(async (req: Request, res: Response) => {
  const item = await stockItemsService.create(req.body, { userId: req.user!.id, ip: req.ip });
  res.status(201).json(jsonResponse({ status: "success", message: "Article créé", data: item }));
});

export const setStockItemStock = controllerWrapper(async (req: Request, res: Response) => {
  const item = await stockItemsService.setStock(req.params.id as string, req.body, {
    userId: req.user!.id,
    ip: req.ip,
  });
  res.json(jsonResponse({ status: "success", message: "Stock mis à jour", data: item }));
});

export const importStockItems = controllerWrapper(async (req: Request, res: Response) => {
  const ctx = { userId: req.user!.id, ip: req.ip };
  const report = await importRows(req.body.rows, createStockItemSchema, (row) => stockItemsService.create(row, ctx));
  res.json(jsonResponse({ status: "success", message: "Import terminé", data: report }));
});
