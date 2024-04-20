/*
  Warnings:

  - You are about to drop the column `children` on the `Enroll` table. All the data in the column will be lost.
  - Added the required column `participants` to the `Enroll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enroll" DROP COLUMN "children",
ADD COLUMN     "participants" JSONB NOT NULL;
