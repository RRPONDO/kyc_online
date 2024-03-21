/*
  Warnings:

  - You are about to drop the column `contentType` on the `upload` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `upload` table. All the data in the column will be lost.
  - You are about to drop the column `filepath` on the `upload` table. All the data in the column will be lost.
  - Added the required column `certOfInc` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cr14` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cr6` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idsDirectors` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoAndArtOfAsso` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proofResDirectors` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnOfAllot` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxClearance` to the `Upload` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `upload` DROP COLUMN `contentType`,
    DROP COLUMN `filename`,
    DROP COLUMN `filepath`,
    ADD COLUMN `certOfInc` VARCHAR(255) NOT NULL,
    ADD COLUMN `cr14` VARCHAR(255) NOT NULL,
    ADD COLUMN `cr6` VARCHAR(255) NOT NULL,
    ADD COLUMN `idsDirectors` VARCHAR(255) NOT NULL,
    ADD COLUMN `memoAndArtOfAsso` VARCHAR(255) NOT NULL,
    ADD COLUMN `proofResDirectors` VARCHAR(255) NOT NULL,
    ADD COLUMN `returnOfAllot` VARCHAR(255) NOT NULL,
    ADD COLUMN `taxClearance` VARCHAR(255) NOT NULL;
