/*
  Warnings:

  - You are about to drop the column `microchips` on the `pet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pet" DROP COLUMN "microchips",
ADD COLUMN     "microchip" BOOLEAN NOT NULL DEFAULT false;
