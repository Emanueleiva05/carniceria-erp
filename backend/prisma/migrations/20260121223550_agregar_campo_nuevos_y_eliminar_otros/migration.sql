/*
  Warnings:

  - You are about to drop the column `genera_compensacion` on the `Reclamo` table. All the data in the column will be lost.
  - You are about to drop the column `genera_perdida` on the `Reclamo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Reclamo` DROP COLUMN `genera_compensacion`,
    DROP COLUMN `genera_perdida`,
    ADD COLUMN `diferencia_cantidad` DOUBLE NULL,
    ADD COLUMN `producto_destino_id` INTEGER NULL;
