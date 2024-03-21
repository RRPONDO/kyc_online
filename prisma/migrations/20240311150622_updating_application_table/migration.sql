/*
  Warnings:

  - You are about to drop the column `password` on the `application` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `application` DROP COLUMN `password`,
    ADD COLUMN `hashedPassword` VARCHAR(191) NULL;
