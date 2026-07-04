import { Router } from "express";
import { createAchat, getAchat, listAchats } from "../controllers/achats.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createAchatSchema, listAchatsQuerySchema } from "../validators/achats.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Achats"));
router.get("/", validateQuery(listAchatsQuerySchema), listAchats);
router.get("/:id", validateId, getAchat);
router.post("/", validateBody(createAchatSchema), createAchat);
// Pas de PATCH : les transitions de statut d'achat ne font pas partie du
// contrat frontend actuel (cf plan — scope cut explicite).
export default router;
//# sourceMappingURL=achats.routes.js.map