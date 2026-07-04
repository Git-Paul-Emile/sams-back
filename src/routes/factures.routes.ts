import { Router } from "express";
import { createFacture, getFacture, listFactures, payFacture } from "../controllers/factures.controller.js";
import { validateBody, validateQuery } from "../middlewares/validate.js";
import { createFactureSchema, listFacturesQuerySchema, payFactureSchema } from "../validators/factures.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

router.use(requireAuth, requirePermission("Facturation"));

router.get("/", validateQuery(listFacturesQuerySchema), listFactures);
router.get("/:id", validateId, getFacture);
router.post("/", validateBody(createFactureSchema), createFacture);
router.post("/:id/pay", validateId, validateBody(payFactureSchema), payFacture);

export default router;
