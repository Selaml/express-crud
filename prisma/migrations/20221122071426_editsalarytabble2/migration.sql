/*
  Warnings:

  - Added the required column `taxid` to the `empsalary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `empsalary` ADD COLUMN `taxid` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `taxid` ON `empsalary`(`taxid`);
