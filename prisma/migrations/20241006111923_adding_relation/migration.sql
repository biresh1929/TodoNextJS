-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Todo_userEmail_idx" ON "Todo"("userEmail");
