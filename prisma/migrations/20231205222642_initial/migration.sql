-- CreateTable
CREATE TABLE `chamada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataHora` DATETIME(3) NOT NULL,
    `guiche` VARCHAR(191) NOT NULL,
    `prioritario` BOOLEAN NOT NULL,
    `atendido` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
