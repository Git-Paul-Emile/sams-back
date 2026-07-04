import { Router } from "express";
import { createFournisseur, getFournisseur, listFournisseurs, updateFournisseur, } from "../controllers/fournisseurs.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createFournisseurSchema, listFournisseursQuerySchema, updateFournisseurSchema, } from "../validators/fournisseurs.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Achats"));
router.get("/", validateQuery(listFournisseursQuerySchema), listFournisseurs);
router.get("/:id", validateId, getFournisseur);
router.post("/", validateBody(createFournisseurSchema), createFournisseur);
router.patch("/:id", validateId, validateBody(updateFournisseurSchema), updateFournisseur);
export default router;
//# sourceMappingURL=fournisseurs.routes.js.map