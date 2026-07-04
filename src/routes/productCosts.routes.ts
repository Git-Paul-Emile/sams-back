import { Router } from "express";
import { listProductCosts } from "../controllers/productCosts.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";

const router = Router();

router.use(requireAuth, requirePermission("Couts"));

router.get("/", listProductCosts);

export default router;
