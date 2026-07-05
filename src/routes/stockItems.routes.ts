import { Router } from "express";
import { createStockItem, getStockItem, importStockItems, listStockItems, setStockItemStock } from "../controllers/stockItems.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createStockItemSchema, listStockItemsQuerySchema, setStockItemStockSchema } from "../validators/stockItems.validator.js";
import { importEnvelopeSchema } from "../validators/import.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

router.use(requireAuth, requirePermission("Stocks"));

router.get("/", validateQuery(listStockItemsQuerySchema), listStockItems);
router.get("/:id", validateId, getStockItem);
router.post("/", validateBody(createStockItemSchema), createStockItem);
router.post("/import", validateBody(importEnvelopeSchema), importStockItems);
router.patch("/:id/stock", validateId, validateBody(setStockItemStockSchema), setStockItemStock);

export default router;
