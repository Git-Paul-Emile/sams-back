import { Router } from "express";
import { listMatieresPrix } from "../controllers/matieresPrix.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";

const router = Router();

router.use(requireAuth, requirePermission("Couts"));

router.get("/", listMatieresPrix);

export default router;
