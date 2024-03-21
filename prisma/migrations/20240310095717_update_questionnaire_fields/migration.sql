/*
  Warnings:

  - You are about to drop the column `beneficiary` on the `questionnaire` table. All the data in the column will be lost.
  - You are about to drop the column `feedback` on the `questionnaire` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `questionnaire` DROP COLUMN `beneficiary`,
    DROP COLUMN `feedback`,
    ADD COLUMN `beneficiaryAcc` VARCHAR(191) NULL,
    ADD COLUMN `regCountry` VARCHAR(191) NULL;
