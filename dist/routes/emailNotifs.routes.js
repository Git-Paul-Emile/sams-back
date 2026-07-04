import { Router } from "express";
import { listEmailNotifs } from "../controllers/emailNotifs.controller.js";
import { validateQuery } from "../middlewares/validate.js";
import { listEmailNotifsQuerySchema } from "../validators/emailNotifs.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const router = Router();
// Lecture seule : les lignes sont écrites par le service d'envoi d'email
// (chantier séparé), jamais via un POST direct côté frontend. Pas de module
// RolePermission dédié : même rationale que /notifications.
router.use(requireAuth);
router.get("/", validateQuery(listEmailNotifsQuerySchema), listEmailNotifs);
export default router;
//# sourceMappingURL=emailNotifs.routes.js.map