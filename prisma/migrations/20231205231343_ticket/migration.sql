/*
  Warnings:

  - Added the required column `senha` to the `Chamada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senhaDia` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `chamada` ADD COLUMN `dataHora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `senha` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `senhaDia` INTEGER NOT NULL;
