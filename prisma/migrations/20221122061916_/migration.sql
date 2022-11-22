-- CreateTable
CREATE TABLE `empsalary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `gross salary` INTEGER NOT NULL,
    `net salary` INTEGER NOT NULL,
    `emloyeeid` INTEGER NOT NULL,
    `taxid` INTEGER NOT NULL,

    INDEX `emloyeeid`(`emloyeeid`),
    INDEX `taxid`(`taxid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tax` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,
    `percentage` INTEGER NOT NULL,
    `empid` INTEGER NOT NULL,

    INDEX `empid`(`empid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
