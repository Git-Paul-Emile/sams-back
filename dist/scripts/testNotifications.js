import "dotenv/config";
import { connectToDatabase, prisma } from "../config/database.js";
import { getEmailProvider } from "../services/external/email/emailProviderFactory.js";
import { getWhatsAppProvider } from "../services/external/whatsapp/whatsappProviderFactory.js";
async function main() {
    await connectToDatabase();
    const to = { email: "Mgenial242@gmail.com", tel: "+22595683342" };
    console.log("→ Envoi email de test...");
    const emailResult = await getEmailProvider().send({
        to: to.email,
        subject: "Test SAMS FLUX ERP",
        html: "<p>Ceci est un email de test envoyé manuellement pour vérifier le canal Email.</p>",
    });
    await prisma.emailNotif.create({
        data: { to: to.email, sujet: "Test SAMS FLUX ERP", statut: emailResult.success ? "Envoyé" : "Échec" },
    });
    console.log("Résultat email:", emailResult);
    console.log("→ Envoi WhatsApp de test...");
    const waResult = await getWhatsAppProvider().send({
        to: to.tel,
        message: "🔔 *Test SAMS FLUX ERP*\n\nCeci est un message WhatsApp de test envoyé manuellement.",
    });
    await prisma.whatsAppNotif.create({
        data: {
            to: to.tel,
            msg: "Test SAMS FLUX ERP",
            eventType: "test-manuel",
            category: "information",
            statut: waResult.success ? "Envoyé" : waResult.skipped ? "Ignoré (sandbox)" : "Échec",
        },
    });
    console.log("Résultat WhatsApp:", waResult);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=testNotifications.js.map