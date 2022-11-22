/*
  Warnings:

  - You are about to drop the column `taxid` on the `empsalary` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `taxid` ON `empsalary`;

-- AlterTable
ALTER TABLE `empsalary` DROP COLUMN `taxid`;
