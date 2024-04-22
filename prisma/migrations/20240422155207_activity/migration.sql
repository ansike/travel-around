/*
  Warnings:

  - You are about to drop the column `richText` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "richText",
ADD COLUMN     "activityEndTime" TIMESTAMP(3),
ADD COLUMN     "activityStartTime" TIMESTAMP(3),
ADD COLUMN     "desc" TEXT;
