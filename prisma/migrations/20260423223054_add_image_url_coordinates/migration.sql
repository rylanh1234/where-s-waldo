/*
  Warnings:

  - Added the required column `imageUrl` to the `Photo` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Photo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Coordinate" (
    "id" SERIAL NOT NULL,
    "photoId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "xpos" INTEGER NOT NULL,
    "ypos" INTEGER NOT NULL,

    CONSTRAINT "Coordinate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Coordinate" ADD CONSTRAINT "Coordinate_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
