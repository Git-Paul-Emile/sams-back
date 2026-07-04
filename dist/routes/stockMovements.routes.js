import { Router } from "express";
import { createMouvement, listMouvements } from "../controllers/stockMovements.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createMouvementSchema, listMouvementsQuerySchema } from "../validators/stockMovements.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
const router = Router();
router.use(requireAuth, requirePermission("Stocks"));
router.get("/", validateQuery(listMouvementsQuerySchema), listMouvements);
router.post("/", validateBody(createMouvementSchema), createMouvement);
export default router;
//# sourceMappingURL=stockMovements.routes.js.map