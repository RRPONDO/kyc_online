/*
  Warnings:

  - Added the required column `updatedAt` to the `Questionnaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `questionnaire` ADD COLUMN `applicationId` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `Questionnaire` ADD CONSTRAINT `Questionnaire_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `Application`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
