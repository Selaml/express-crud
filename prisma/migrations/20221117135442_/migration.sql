-- CreateTable
CREATE TABLE `employee` (
    `Name` VARCHAR(50) NOT NULL,
    `phone` INTEGER NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `Password` INTEGER NOT NULL,
    `emprollid` INTEGER NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    INDEX `emprollid`(`emprollid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee roll` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
