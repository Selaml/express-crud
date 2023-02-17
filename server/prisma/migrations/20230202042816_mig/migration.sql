/*
  Warnings:

  - You are about to drop the column `userid` on the `profile` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `profile_ibfk_1`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `userid`;
