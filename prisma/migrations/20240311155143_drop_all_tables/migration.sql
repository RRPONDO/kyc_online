/*
  Warnings:

  - You are about to drop the `application` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questionnaire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `upload` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `questionnaire` DROP FOREIGN KEY `Questionnaire_applicationId_fkey`;

-- DropTable
DROP TABLE `application`;

-- DropTable
DROP TABLE `questionnaire`;

-- DropTable
DROP TABLE `upload`;
