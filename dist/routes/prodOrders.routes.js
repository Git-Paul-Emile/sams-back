import { Router } from "express";
import { createProdOrder, getProdChart, getProdOrder, listProdOrders } from "../controllers/prodOrders.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createProdOrderSchema, listProdOrdersQuerySchema } from "../validators/prodOrders.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Production"));
// IMPORTANT : /chart doit être monté avant /:id pour ne pas être avalé par la route paramétrée.
router.get("/chart", getProdChart);
router.get("/", validateQuery(listProdOrdersQuerySchema), listProdOrders);
router.get("/:id", validateId, getProdOrder);
router.post("/", validateBody(createProdOrderSchema), createProdOrder);
export default router;
//# sourceMappingURL=prodOrders.routes.js.map