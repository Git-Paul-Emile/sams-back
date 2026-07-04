import { Router } from "express";
import { getCashChart, getEvolutionMarge, getVentesChart, getVentesCommercial, getVentesPeriodes, getVentesSegment, } from "../controllers/finance.controller.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { requirePermission } from "../middlewares/requirePermission.js";
const router = Router();
router.use(requireAuth, requirePermission("Finance"));
router.get("/ventes-periodes", getVentesPeriodes);
router.get("/ventes-commercial", getVentesCommercial);
router.get("/ventes-chart", getVentesChart);
router.get("/ventes-segment", getVentesSegment);
router.get("/evolution-marge", getEvolutionMarge);
router.get("/cash-chart", getCashChart);
export default router;
//# sourceMappingURL=finance.routes.js.map