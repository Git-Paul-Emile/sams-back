import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { searchService } from "../services/search.service.js";

export const globalSearch = controllerWrapper(async (req: Request, res: Response) => {
  const { q } = req.query as { q: string };
  const results = await searchService.global(q);
  res.json(jsonResponse({ status: "success", message: "OK", data: results }));
});
