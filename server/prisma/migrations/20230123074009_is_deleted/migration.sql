-- CreateTable
CREATE TABLE `roll_permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rollid` INTEGER NOT NULL,
    `permissionid` INTEGER NOT NULL,

    INDEX `permissionid`(`permissionid`),
    INDEX `rollid`(`rollid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(225) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_roll` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(225) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` INTEGER NOT NULL,
    `password` VARCHAR(225) NOT NULL,
    `rollid` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    INDEX `rollid`(`rollid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `roll_permission` ADD CONSTRAINT `roll_permission_ibfk_1` FOREIGN KEY (`permissionid`) REFERENCES `user_permission`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `roll_permission` ADD CONSTRAINT `roll_permission_ibfk_2` FOREIGN KEY (`rollid`) REFERENCES `user_roll`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rollid`) REFERENCES `user_roll`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
