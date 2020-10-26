CREATE DATABASE f1 IF NOT EXISTS;

USE f1;


CREATE TABLE `Seasons` IF NOT EXISTS(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL
);

CREATE TABLE `Teams` IF NOT EXISTS(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `number` INTEGER NOT NULL
);

CREATE TABLE `Drivers` IF NOT EXISTS(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `number` INTEGER NOT NULL CHECK(`number` > 0),
    `idTeam` INTEGER NOT NULL,
    FOREIGN KEY (`idTeam`) REFERENCES Teams(`id`)
);

CREATE TABLE `Circuits` IF NOT EXISTS(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `country` INTEGER NOT NULL,
    `distance` INTEGER NOT NULL CHECK(`distance` > 0),
    `turns` INTEGER NOT NULL CHECK(`turns` > 0)
);

CREATE TABLE `Calendars` IF NOT EXISTS(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `idSeason` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `idCircuit` INTEGER NOT NULL,
    FOREIGN KEY (`idSeason`) REFERENCES Seasons(`id`),
    FOREIGN KEY (`idCircuit`) REFERENCES Circuits(`id`),
    UNIQUE KEY(`idSeason`. `day`, `idCircuit`)
);

CREATE TABLE `Positions` IF NOT EXISTS(
    `id` INTEGER PRIMARY KEY NOT NULL CHECK(`id` > 0),
    `points` INTEGER NOT NULL CHECK(`points` > 0),
    UNIQUE KEY(`points`)
);

CREATE TABLE `Races` IF NOT EXISTS(
    `idCalendar` INTEGER NOT NULL,
    `idDriver` INTEGER NOT NULL,
    `idPosition` INTEGER NOT NULL,
    PRIMARY KEY (`idCalendar`, `idDriver`, `idPosition`),
    FOREIGN KEY (`idCalendar`) REFERENCES Calendar(`id`),
    FOREIGN KEY (`idDriver`) REFERENCES Drivers(`id`),
    FOREIGN KEY (`idPosition`) REFERENCES Positions(`id`)
);

CREATE TABLE `Grids` IF NOT EXISTS(
    `idCalendar` INTEGER NOT NULL,
    `idDriver` INTEGER NOT NULL,
    `idPosition` INTEGER NOT NULL,
    PRIMARY KEY (`idCalendar`, `idDriver`, `idPosition`),
    FOREIGN KEY (`idCalendar`) REFERENCES Calendar(`id`),
    FOREIGN KEY (`idDriver`) REFERENCES Drivers(`id`),
    FOREIGN KEY (`idPosition`) REFERENCES Positions(`id`)
);

CREATE TABLE `FastLaps` IF NOT EXISTS(
    `idCalendar` INTEGER NOT NULL,
    `idDriver` INTEGER NOT NULL,
    PRIMARY KEY (`idCalendar`, `idDriver`),
    FOREIGN KEY (`idCalendar`) REFERENCES Calendar(`id`),
    FOREIGN KEY (`idDriver`) REFERENCES Drivers(`id`)
);
