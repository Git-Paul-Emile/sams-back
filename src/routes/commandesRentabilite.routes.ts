import { Router } from "express";
import { listCommandesRentabilite } from "../controllers/commandesRentabilite.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";

const router = Router();

router.use(requireAuth, requirePermission("Couts"));

router.get("/", listCommandesRentabilite);

export default router;
