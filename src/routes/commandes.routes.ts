import { Router } from "express";
import { addCommandeTimeline, createCommande, getCommande, listCommandes } from "../controllers/commandes.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import {
  addCommandeTimelineSchema,
  createCommandeSchema,
  listCommandesQuerySchema,
} from "../validators/commandes.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

router.use(requireAuth, requirePermission("Ventes"));

router.get("/", validateQuery(listCommandesQuerySchema), listCommandes);
router.get("/:id", validateId, getCommande);
router.post("/", validateBody(createCommandeSchema), createCommande);
router.post("/:id/timeline", validateId, validateBody(addCommandeTimelineSchema), addCommandeTimeline);

export default router;
