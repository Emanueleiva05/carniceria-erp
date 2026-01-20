-- CreateTable
CREATE TABLE `Reclamo` (
    `reclamo_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_reclamo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `motivo` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `genera_perdida` BOOLEAN NOT NULL,
    `genera_compensacion` BOOLEAN NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `evidencia` VARCHAR(191) NULL,
    `producto_id` INTEGER NOT NULL,
    `proveedor_id` INTEGER NOT NULL,

    PRIMARY KEY (`reclamo_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reclamo` ADD CONSTRAINT `Reclamo_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`producto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reclamo` ADD CONSTRAINT `Reclamo_proveedor_id_fkey` FOREIGN KEY (`proveedor_id`) REFERENCES `proveedores`(`proveedor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
