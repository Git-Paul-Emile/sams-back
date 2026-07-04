import { Server } from "socket.io";
import { verifyAccessToken } from "../config/jwt.js";
const allowedOrigins = [
    process.env.FRONT_URL || "http://localhost:5173",
    "http://localhost:5173",
    "http://localhost:3000",
];
let io = null;
export function initSocketServer(httpServer) {
    io = new Server(httpServer, {
        cors: { origin: allowedOrigins, credentials: true },
    });
    io.use((socket, next) => {
        const token = socket.handshake.auth?.token;
        if (!token)
            return next(new Error("unauthorized"));
        try {
            socket.data.user = verifyAccessToken(token);
            next();
        }
        catch {
            next(new Error("unauthorized"));
        }
    });
    io.on("connection", () => { });
    return io;
}
/** Notifie tous les clients connectés/authentifiés qu'une nouvelle notification
 * interne vient d'être créée — le modèle `Notif` n'a pas de `userId` (broadcast
 * global, pas de rooms par utilisateur nécessaire). */
export function emitNotifCreated(notif) {
    io?.emit("notif:created", notif);
}
//# sourceMappingURL=socketServer.js.map