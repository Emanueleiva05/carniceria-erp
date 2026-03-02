/*
  Warnings:

  - You are about to alter the column `total` on the `ventas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `ventas` MODIFY `total` DOUBLE NOT NULL DEFAULT 0;
