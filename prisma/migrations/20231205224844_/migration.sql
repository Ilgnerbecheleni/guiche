/*
  Warnings:

  - You are about to drop the column `atendido` on the `chamada` table. All the data in the column will be lost.
  - You are about to drop the column `dataHora` on the `chamada` table. All the data in the column will be lost.
  - You are about to drop the column `prioritario` on the `chamada` table. All the data in the column will be lost.
  - You are about to alter the column `guiche` on the `chamada` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `ticketId` to the `Chamada` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chamada` DROP COLUMN `atendido`,
    DROP COLUMN `dataHora`,
    DROP COLUMN `prioritario`,
    ADD COLUMN `ticketId` INTEGER NOT NULL,
    MODIFY `guiche` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prioritario` BOOLEAN NOT NULL,
    `dataHora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atendido` BOOLEAN NOT NULL DEFAULT false,
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Chamada` ADD CONSTRAINT `Chamada_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
