-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "enrollStartTime" DROP NOT NULL,
ALTER COLUMN "enrollEndTime" DROP NOT NULL,
ALTER COLUMN "gatherStartTime" DROP NOT NULL,
ALTER COLUMN "gatherEndTime" DROP NOT NULL,
ALTER COLUMN "activityStartTime" DROP NOT NULL,
ALTER COLUMN "activityEndTime" DROP NOT NULL,
ALTER COLUMN "personLimit" DROP NOT NULL;
