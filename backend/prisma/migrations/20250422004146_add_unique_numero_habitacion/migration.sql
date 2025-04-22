/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `Habitacion` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Habitacion_numero_key" ON "Habitacion"("numero");
