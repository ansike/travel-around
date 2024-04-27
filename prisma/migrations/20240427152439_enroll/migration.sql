/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Enroll` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[activityId,userId]` on the table `Enroll` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Enroll_phone_key" ON "Enroll"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Enroll_activityId_userId_key" ON "Enroll"("activityId", "userId");
