/*
  Warnings:

  - You are about to drop the column `applicationId` on the `upload` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `upload` DROP FOREIGN KEY `Upload_applicationId_fkey`;

-- AlterTable
ALTER TABLE `upload` DROP COLUMN `applicationId`;
