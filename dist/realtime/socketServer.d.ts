import type { Server as HttpServer } from "node:http";
import { Server } from "socket.io";
export declare function initSocketServer(httpServer: HttpServer): Server;
/** Notifie tous les clients connectés/authentifiés qu'une nouvelle notification
 * interne vient d'être créée — le modèle `Notif` n'a pas de `userId` (broadcast
 * global, pas de rooms par utilisateur nécessaire). */
export declare function emitNotifCreated(notif: unknown): void;
//# sourceMappingURL=socketServer.d.ts.map