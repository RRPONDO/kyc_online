-- AlterTable
ALTER TABLE `application` ADD COLUMN `accountType` VARCHAR(191) NULL,
    ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NULL,
    MODIFY `companyName` VARCHAR(191) NULL;
