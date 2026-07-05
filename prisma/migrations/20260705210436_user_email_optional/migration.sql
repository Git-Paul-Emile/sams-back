-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "passwordHash" DROP NOT NULL;

-- CheckConstraint: un compte doit avoir au moins un email OU un téléphone
-- (les comptes OTP-only n'ont pas d'email, cf. plan chantier D/E).
ALTER TABLE "User" ADD CONSTRAINT "User_email_or_tel_chk" CHECK ("email" IS NOT NULL OR "tel" IS NOT NULL);
