-- CreateTable
CREATE TABLE `Questionnaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `structure` VARCHAR(191) NULL,
    `regName` VARCHAR(191) NULL,
    `regDate` VARCHAR(191) NULL,
    `regId` VARCHAR(191) NULL,
    `feedback` VARCHAR(191) NULL,
    `regAddress` VARCHAR(191) NULL,
    `bsnsAddress` VARCHAR(191) NULL,
    `telephone` VARCHAR(191) NULL,
    `website` VARCHAR(191) NULL,
    `bankName` VARCHAR(191) NULL,
    `bankAddress` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `accNumber` VARCHAR(191) NULL,
    `swift` VARCHAR(191) NULL,
    `iban` VARCHAR(191) NULL,
    `beneficiary` VARCHAR(191) NULL,
    `createdDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
