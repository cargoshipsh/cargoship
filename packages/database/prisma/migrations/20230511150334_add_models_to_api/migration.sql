/*
  Warnings:

  - Made the column `instructions` on table `Api` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Api" ADD COLUMN     "models" JSONB NOT NULL DEFAULT '[]',
ALTER COLUMN "instructions" SET NOT NULL;
