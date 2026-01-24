-- CreateTable
CREATE TABLE `CorteReal` (
    `corteReal_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `peso_real` DOUBLE NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mediares_id` INTEGER NOT NULL,

    PRIMARY KEY (`corteReal_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CorteReal` ADD CONSTRAINT `CorteReal_mediares_id_fkey` FOREIGN KEY (`mediares_id`) REFERENCES `mediares`(`mediares_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
