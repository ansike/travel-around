/*
  Warnings:

  - Made the column `location` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `activityEndTime` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `activityStartTime` on table `Activity` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "cover" TEXT,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "activityEndTime" SET NOT NULL,
ALTER COLUMN "activityStartTime" SET NOT NULL;
