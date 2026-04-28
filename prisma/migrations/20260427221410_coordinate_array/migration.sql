/*
  Warnings:

  - The `xpos` column on the `Coordinate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ypos` column on the `Coordinate` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Coordinate" DROP COLUMN "xpos",
ADD COLUMN     "xpos" INTEGER[],
DROP COLUMN "ypos",
ADD COLUMN     "ypos" INTEGER[];
