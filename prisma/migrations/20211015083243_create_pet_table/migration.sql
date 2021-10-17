/*
  Warnings:

  - You are about to drop the `pet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "pet";

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "microchip" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
