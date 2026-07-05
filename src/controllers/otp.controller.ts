import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { otpService } from "../services/otp.service.js";
import { setRefreshCookie } from "./auth.controller.js";

export const requestOtp = controllerWrapper(async (req: Request, res: Response) => {
  const result = await otpService.request(req.body);
  res.json(jsonResponse({ status: "success", message: "Code envoyé", data: result }));
});

export const verifyOtp = controllerWrapper(async (req: Request, res: Response) => {
  const result = await otpService.verify(req.body, { ip: req.ip });
  setRefreshCookie(res, result.refreshToken);
  res.json(jsonResponse({ status: "success", message: "OK", data: result }));
});
