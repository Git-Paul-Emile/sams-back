import { Router } from "express";
import { listWhatsAppNotifs } from "../controllers/whatsappNotifs.controller.js";
import { validateQuery } from "../middlewares/validate.js";
import { listWhatsAppNotifsQuerySchema } from "../validators/whatsappNotifs.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const router = Router();
// Lecture seule : les lignes sont écrites par le service d'envoi WhatsApp
// (chantier séparé), jamais via un POST direct côté frontend. Pas de module
// RolePermission dédié : même rationale que /notifications.
router.use(requireAuth);
router.get("/", validateQuery(listWhatsAppNotifsQuerySchema), listWhatsAppNotifs);
export default router;
//# sourceMappingURL=whatsappNotifs.routes.js.map