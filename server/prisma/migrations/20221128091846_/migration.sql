-- CreateTable
CREATE TABLE `employee` (
    `email` VARCHAR(50) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first name` VARCHAR(50) NOT NULL,
    `gross salary` DOUBLE NOT NULL,
    `last name` VARCHAR(50) NOT NULL,
    `password` VARCHAR(500) NOT NULL,
    `rollid` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    INDEX `rollid`(`rollid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee roll` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(225) NOT NULL,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `allowances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(225) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deduction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(225) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee allowances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `emp_id` INTEGER NOT NULL,
    `allowance_id` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,

    INDEX `allowance_id`(`allowance_id`),
    INDEX `emp_id`(`emp_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee deduction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `deduction_id` INTEGER NOT NULL,
    `emp_id` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,

    INDEX `deduction_id`(`deduction_id`),
    INDEX `emp_id`(`emp_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payroll` (
    `id` INTEGER NOT NULL,
    `allowid` INTEGER NOT NULL,
    `deducid` INTEGER NOT NULL,
    `net_salary` DOUBLE NOT NULL,
    `status` BOOLEAN NOT NULL,
    `empid` INTEGER NOT NULL,

    INDEX `empid`(`empid`),
    INDEX `allowid`(`allowid`),
    INDEX `deducid`(`deducid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`rollid`) REFERENCES `employee roll`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee allowances` ADD CONSTRAINT `employee allowances_ibfk_1` FOREIGN KEY (`allowance_id`) REFERENCES `allowances`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee allowances` ADD CONSTRAINT `employee allowances_ibfk_2` FOREIGN KEY (`emp_id`) REFERENCES `employee`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `employee deduction` ADD CONSTRAINT `employee deduction_ibfk_1` FOREIGN KEY (`deduction_id`) REFERENCES `deduction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee deduction` ADD CONSTRAINT `employee deduction_ibfk_2` FOREIGN KEY (`emp_id`) REFERENCES `employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payroll` ADD CONSTRAINT `payroll_ibfk_1` FOREIGN KEY (`empid`) REFERENCES `employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payroll` ADD CONSTRAINT `payroll_ibfk_2` FOREIGN KEY (`allowid`) REFERENCES `employee allowances`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payroll` ADD CONSTRAINT `payroll_ibfk_3` FOREIGN KEY (`deducid`) REFERENCES `employee deduction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
