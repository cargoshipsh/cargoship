-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "logs" TEXT,
ADD COLUMN     "rFile" TEXT,
ADD COLUMN     "running" BOOLEAN NOT NULL DEFAULT false;
