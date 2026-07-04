import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { authService } from "../services/auth.service.js";

const REFRESH_COOKIE_NAME = "refreshToken";
const REFRESH_COOKIE_PATH = "/api/v1/auth";
const REFRESH_COOKIE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

function setRefreshCookie(res: Response, token: string): void {
  const isProduction = process.env.NODE_ENV === "production";
  res.cookie(REFRESH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: REFRESH_COOKIE_PATH,
    maxAge: REFRESH_COOKIE_MAX_AGE_MS,
  });
}

function clearRefreshCookie(res: Response): void {
  const isProduction = process.env.NODE_ENV === "production";
  res.clearCookie(REFRESH_COOKIE_NAME, {
    path: REFRESH_COOKIE_PATH,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  });
}

export const login = controllerWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { accessToken, refreshToken, user } = await authService.login(email, password);
  setRefreshCookie(res, refreshToken);
  res.json(jsonResponse({ status: "success", message: "Connexion réussie", data: { accessToken, user } }));
});

export const refresh = controllerWrapper(async (req: Request, res: Response) => {
  const cookie = req.cookies?.[REFRESH_COOKIE_NAME];
  const { accessToken, refreshToken } = await authService.refresh(cookie);
  setRefreshCookie(res, refreshToken);
  res.json(jsonResponse({ status: "success", message: "Jeton rafraîchi", data: { accessToken } }));
});

export const logout = controllerWrapper(async (req: Request, res: Response) => {
  const cookie = req.cookies?.[REFRESH_COOKIE_NAME];
  await authService.logout(cookie);
  clearRefreshCookie(res);
  res.json(jsonResponse({ status: "success", message: "Déconnexion réussie" }));
});

export const me = controllerWrapper(async (req: Request, res: Response) => {
  const user = await authService.me(req.user!.id);
  res.json(jsonResponse({ status: "success", message: "OK", data: user }));
});
