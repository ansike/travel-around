/*
  Warnings:

  - The `enrollStartTime` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `enrollEndTime` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gatherStartTime` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gatherEndTime` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activityStartTime` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `activityEndTime` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "enrollStartTime",
ADD COLUMN     "enrollStartTime" TIMESTAMP(3),
DROP COLUMN "enrollEndTime",
ADD COLUMN     "enrollEndTime" TIMESTAMP(3),
DROP COLUMN "gatherStartTime",
ADD COLUMN     "gatherStartTime" TIMESTAMP(3),
DROP COLUMN "gatherEndTime",
ADD COLUMN     "gatherEndTime" TIMESTAMP(3),
DROP COLUMN "activityStartTime",
ADD COLUMN     "activityStartTime" TIMESTAMP(3),
DROP COLUMN "activityEndTime",
ADD COLUMN     "activityEndTime" TIMESTAMP(3);
