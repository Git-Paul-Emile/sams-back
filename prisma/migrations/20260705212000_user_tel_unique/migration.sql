-- AlterTable: le téléphone doit identifier un compte de manière unique pour le login OTP
-- (aucun doublon existant vérifié avant migration).
CREATE UNIQUE INDEX "User_tel_key" ON "User"("tel");
