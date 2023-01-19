/*
  Warnings:

  - You are about to drop the `allowances` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `deduction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee allowances` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee deduction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee roll` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payroll` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `employee_ibfk_1`;

-- DropForeignKey
ALTER TABLE `employee allowances` DROP FOREIGN KEY `employee allowances_ibfk_1`;

-- DropForeignKey
ALTER TABLE `employee allowances` DROP FOREIGN KEY `employee allowances_ibfk_2`;

-- DropForeignKey
ALTER TABLE `employee deduction` DROP FOREIGN KEY `employee deduction_ibfk_1`;

-- DropForeignKey
ALTER TABLE `employee deduction` DROP FOREIGN KEY `employee deduction_ibfk_2`;

-- DropForeignKey
ALTER TABLE `payroll` DROP FOREIGN KEY `payroll_ibfk_1`;

-- DropForeignKey
ALTER TABLE `payroll` DROP FOREIGN KEY `payroll_ibfk_2`;

-- DropForeignKey
ALTER TABLE `payroll` DROP FOREIGN KEY `payroll_ibfk_3`;

-- DropTable
DROP TABLE `allowances`;

-- DropTable
DROP TABLE `deduction`;

-- DropTable
DROP TABLE `employee`;

-- DropTable
DROP TABLE `employee allowances`;

-- DropTable
DROP TABLE `employee deduction`;

-- DropTable
DROP TABLE `employee roll`;

-- DropTable
DROP TABLE `payroll`;

-- CreateTable
CREATE TABLE `test_excel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
