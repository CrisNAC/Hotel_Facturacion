/*
  Warnings:

  - Changed the type of `estado` on the `Cuenta` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cuenta" DROP COLUMN "estado",
ADD COLUMN     "estado" BOOLEAN NOT NULL;
