import { Router } from "express";
import { requestOtp, verifyOtp } from "../controllers/otp.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { requestOtpSchema, verifyOtpSchema } from "../validators/otp.validator.js";
import { otpRateLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/request", otpRateLimiter, validateBody(requestOtpSchema), requestOtp);
router.post("/verify", otpRateLimiter, validateBody(verifyOtpSchema), verifyOtp);

export default router;
