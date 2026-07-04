import http from "node:http";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database.js";
import app from "./config/app.js";
import { initSocketServer } from "./realtime/socketServer.js";
dotenv.config();
// Lancement
const initializeApp = async () => {
    try {
        await connectToDatabase();
        const PORT = process.env.PORT || 8000;
        const server = http.createServer(app);
        initSocketServer(server);
        server.listen(PORT, () => {
            console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error("❌ Erreur DB :", err);
        process.exit(1);
    }
};
initializeApp();
//# sourceMappingURL=index.js.map