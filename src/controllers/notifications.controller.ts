import type { Request, Response } from "express";
import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { notificationsService } from "../services/notifications.service.js";

export const listNotifications = controllerWrapper(async (req: Request, res: Response) => {
  const { items, total, page, pageSize } = await notificationsService.list(req.query as never);
  setPaginationHeaders(res, { page, pageSize, total });
  res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});

export const createNotification = controllerWrapper(async (req: Request, res: Response) => {
  const notif = await notificationsService.create(req.body);
  res.status(201).json(jsonResponse({ status: "success", message: "Notification créée", data: notif }));
});

export const markNotificationAsRead = controllerWrapper(async (req: Request, res: Response) => {
  const notif = await notificationsService.markAsRead(req.params.id as string);
  res.json(jsonResponse({ status: "success", message: "Notification marquée comme lue", data: notif }));
});
