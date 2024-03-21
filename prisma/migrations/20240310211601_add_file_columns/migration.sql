/*
  Warnings:

  - You are about to drop the column `createdDate` on the `questionnaire` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `questionnaire` DROP COLUMN `createdDate`,
    ADD COLUMN `fileName` VARCHAR(191) NULL,
    ADD COLUMN `filePath` VARCHAR(191) NULL;
