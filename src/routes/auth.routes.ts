import { Router } from "express";
import { login, logout, me, refresh } from "../controllers/auth.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { loginSchema } from "../validators/auth.validator.js";
import { requireAuth } from "../middlewares/requireAuth.js";
import { authRateLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/login", authRateLimiter, validateBody(loginSchema), login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", requireAuth, me);

export default router;
