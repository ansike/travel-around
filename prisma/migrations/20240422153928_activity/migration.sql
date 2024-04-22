/*
  Warnings:

  - You are about to drop the column `activityEndTime` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `activityStartTime` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `gatherEndTime` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `gatherStartTime` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "activityEndTime",
DROP COLUMN "activityStartTime",
DROP COLUMN "desc",
DROP COLUMN "gatherEndTime",
DROP COLUMN "gatherStartTime",
ADD COLUMN     "richText" TEXT;
