-- CreateTable
CREATE TABLE `proveedores` (
    `proveedor_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`proveedor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mediares` (
    `mediares_id` INTEGER NOT NULL AUTO_INCREMENT,
    `peso_carton` DOUBLE NOT NULL,
    `peso_real` DOUBLE NOT NULL,
    `tamano` DOUBLE NOT NULL,
    `precio_compra` DOUBLE NOT NULL,
    `tipo_vaca` VARCHAR(191) NOT NULL,
    `entrega_id` INTEGER NOT NULL,

    PRIMARY KEY (`mediares_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entregas` (
    `entrega_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_entrega` DATETIME(3) NOT NULL,
    `total` DOUBLE NOT NULL,
    `pago` BOOLEAN NOT NULL,
    `factura` VARCHAR(191) NULL,
    `proveedor_id` INTEGER NOT NULL,

    PRIMARY KEY (`entrega_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entregaDetalles` (
    `entregaDetalle_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad` DOUBLE NOT NULL,
    `precio_compra` DOUBLE NOT NULL,
    `producto_id` INTEGER NOT NULL,
    `entrega_id` INTEGER NOT NULL,

    PRIMARY KEY (`entregaDetalle_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carneDepostada` (
    `carne_id` INTEGER NOT NULL AUTO_INCREMENT,
    `peso_real` DOUBLE NOT NULL,
    `producto_id` INTEGER NOT NULL,
    `mediares_id` INTEGER NOT NULL,

    PRIMARY KEY (`carne_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productos` (
    `producto_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `stock_actual` DOUBLE NOT NULL,
    `precio_venta` DOUBLE NOT NULL,
    `unidad_medida` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`producto_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `perdidas` (
    `perdida_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tirado` DOUBLE NOT NULL,
    `unidad_medida` VARCHAR(191) NOT NULL,
    `fecha_perdida` DATETIME(3) NOT NULL,
    `motivo` VARCHAR(191) NULL,
    `total` DOUBLE NOT NULL,
    `producto_id` INTEGER NOT NULL,

    PRIMARY KEY (`perdida_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ofertas` (
    `oferta_id` INTEGER NOT NULL AUTO_INCREMENT,
    `minKg` DOUBLE NOT NULL,
    `precio_oferta` DOUBLE NOT NULL,
    `esta_activo` BOOLEAN NOT NULL,
    `producto_id` INTEGER NOT NULL,

    PRIMARY KEY (`oferta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ventaDetalles` (
    `ventaDetalle_id` INTEGER NOT NULL AUTO_INCREMENT,
    `precio_unitario` DOUBLE NOT NULL,
    `cantidad` DOUBLE NOT NULL,
    `subtotal` DOUBLE NOT NULL,
    `producto_id` INTEGER NOT NULL,
    `venta_id` INTEGER NOT NULL,
    `oferta_id` INTEGER NULL,

    PRIMARY KEY (`ventaDetalle_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ventas` (
    `venta_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_venta` DATETIME(3) NOT NULL,
    `esta_vendida` BOOLEAN NOT NULL,

    PRIMARY KEY (`venta_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stockMovimiento` (
    `movimiento_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad` DOUBLE NOT NULL,
    `tipo_movimiento` VARCHAR(191) NOT NULL,
    `motivo` VARCHAR(191) NOT NULL,
    `referencia_id` INTEGER NOT NULL,
    `referencia_tipo` VARCHAR(191) NOT NULL,
    `producto_id` INTEGER NOT NULL,

    PRIMARY KEY (`movimiento_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mediares` ADD CONSTRAINT `mediares_entrega_id_fkey` FOREIGN KEY (`entrega_id`) REFERENCES `entregas`(`entrega_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregas` ADD CONSTRAINT `entregas_proveedor_id_fkey` FOREIGN KEY (`proveedor_id`) REFERENCES `proveedores`(`proveedor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregaDetalles` ADD CONSTRAINT `entregaDetalles_entrega_id_fkey` FOREIGN KEY (`entrega_id`) REFERENCES `entregas`(`entrega_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregaDetalles` ADD CONSTRAINT `entregaDetalles_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`producto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carneDepostada` ADD CONSTRAINT `carneDepostada_mediares_id_fkey` FOREIGN KEY (`mediares_id`) REFERENCES `mediares`(`mediares_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carneDepostada` ADD CONSTRAINT `carneDepostada_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`producto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `perdidas` ADD CONSTRAINT `perdidas_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`producto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ofertas` ADD CONSTRAINT `ofertas_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`producto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ventaDetalles` ADD CONSTRAINT `ventaDetalles_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`producto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ventaDetalles` ADD CONSTRAINT `ventaDetalles_venta_id_fkey` FOREIGN KEY (`venta_id`) REFERENCES `ventas`(`venta_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ventaDetalles` ADD CONSTRAINT `ventaDetalles_oferta_id_fkey` FOREIGN KEY (`oferta_id`) REFERENCES `ofertas`(`oferta_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stockMovimiento` ADD CONSTRAINT `stockMovimiento_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`producto_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
