/*
  Warnings:

  - You are about to drop the column `hashedPassword` on the `application` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `application` DROP COLUMN `hashedPassword`,
    ADD COLUMN `password` VARCHAR(191) NULL;
