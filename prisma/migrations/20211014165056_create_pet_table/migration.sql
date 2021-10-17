-- CreateTable
CREATE TABLE "pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "microchips" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);
