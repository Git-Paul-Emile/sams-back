import { Router } from "express";
import { createOperateur, getOperateur, listOperateurs, updateOperateur, } from "../controllers/operateurs.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createOperateurSchema, listOperateursQuerySchema, updateOperateurSchema, } from "../validators/operateurs.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
// Toutes les routes nécessitent une authentification. La lecture est ouverte
// à tout rôle authentifié (Production ET Admin en ont besoin), seules les
// écritures sont gardées par le module "Admin" (voir plan §2).
router.use(requireAuth);
router.get("/", validateQuery(listOperateursQuerySchema), listOperateurs);
router.get("/:id", validateId, getOperateur);
router.post("/", requirePermission("Admin"), validateBody(createOperateurSchema), createOperateur);
router.patch("/:id", requirePermission("Admin"), validateId, validateBody(updateOperateurSchema), updateOperateur);
export default router;
//# sourceMappingURL=operateurs.routes.js.map