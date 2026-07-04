import { Router } from "express";
import { createIncident, getIncident, listIncidents } from "../controllers/incidents.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createIncidentSchema, listIncidentsQuerySchema } from "../validators/incidents.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";
const router = Router();
router.use(requireAuth, requirePermission("Production"));
router.get("/", validateQuery(listIncidentsQuerySchema), listIncidents);
router.get("/:id", validateId, getIncident);
router.post("/", validateBody(createIncidentSchema), createIncident);
export default router;
//# sourceMappingURL=incidents.routes.js.map