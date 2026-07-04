import { controllerWrapper } from "../utils/controllerWapper.js";
import { jsonResponse } from "../utils/responseApi.js";
import { setPaginationHeaders } from "../utils/pagination.js";
import { notificationsService } from "../services/notifications.service.js";
export const listNotifications = controllerWrapper(async (req, res) => {
    const { items, total, page, pageSize } = await notificationsService.list(req.query);
    setPaginationHeaders(res, { page, pageSize, total });
    res.json(jsonResponse({ status: "success", message: "OK", data: items }));
});
export const createNotification = controllerWrapper(async (req, res) => {
    const notif = await notificationsService.create(req.body);
    res.status(201).json(jsonResponse({ status: "success", message: "Notification créée", data: notif }));
});
export const markNotificationAsRead = controllerWrapper(async (req, res) => {
    const notif = await notificationsService.markAsRead(req.params.id);
    res.json(jsonResponse({ status: "success", message: "Notification marquée comme lue", data: notif }));
});
//# sourceMappingURL=notifications.controller.js.map