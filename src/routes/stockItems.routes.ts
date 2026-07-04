import { Router } from "express";
import { getStockItem, listStockItems, setStockItemStock } from "../controllers/stockItems.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { listStockItemsQuerySchema, setStockItemStockSchema } from "../validators/stockItems.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

router.use(requireAuth, requirePermission("Stocks"));

router.get("/", validateQuery(listStockItemsQuerySchema), listStockItems);
router.get("/:id", validateId, getStockItem);
router.patch("/:id/stock", validateId, validateBody(setStockItemStockSchema), setStockItemStock);

export default router;
