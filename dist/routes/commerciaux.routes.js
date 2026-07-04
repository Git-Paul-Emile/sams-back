import { Router } from "express";
import { createCommercial, getCommercial, listCommerciaux, updateCommercial, } from "../controllers/commerciaux.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createCommercialSchema, listCommerciauxQuerySchema, updateCommercialSchema, } from "../validators/commerciaux.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Admin"));
router.get("/", validateQuery(listCommerciauxQuerySchema), listCommerciaux);
router.get("/:id", validateId, getCommercial);
router.post("/", validateBody(createCommercialSchema), createCommercial);
router.patch("/:id", validateId, validateBody(updateCommercialSchema), updateCommercial);
export default router;
//# sourceMappingURL=commerciaux.routes.js.map