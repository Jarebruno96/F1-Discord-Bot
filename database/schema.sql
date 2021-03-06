CREATE DATABASE IF NOT EXISTS `f1`;

USE `f1`;

ALTER DATABASE `f1` CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `Seasons`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Teams`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `color` VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Drivers`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `number` INTEGER NOT NULL CHECK(`number` > 0),
    `idTeam` INTEGER NOT NULL,
    FOREIGN KEY (`idTeam`) REFERENCES Teams(`id`),
    UNIQUE KEY(`number`)
);

CREATE TABLE IF NOT EXISTS `Circuits`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `country` VARCHAR(64) NOT NULL,
    `distance` INTEGER NOT NULL CHECK(`distance` > 0),
    `turns` INTEGER NOT NULL CHECK(`turns` > 0)
);

CREATE TABLE IF NOT EXISTS `Calendars`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `idSeason` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `idCircuit` INTEGER NOT NULL,
    FOREIGN KEY (`idSeason`) REFERENCES Seasons(`id`),
    FOREIGN KEY (`idCircuit`) REFERENCES Circuits(`id`),
    UNIQUE KEY(`idSeason`, `day`, `idCircuit`)
);

CREATE TABLE IF NOT EXISTS `Positions`(
    `id` VARCHAR(4) PRIMARY KEY NOT NULL,
    `points` INTEGER NOT NULL CHECK(`points` >= 0)
);

CREATE TABLE IF NOT EXISTS `Races`(
    `idCalendar` INTEGER NOT NULL,
    `idDriver` INTEGER NOT NULL,
    `idPosition` VARCHAR(4) NOT NULL,
    PRIMARY KEY (`idCalendar`, `idDriver`, `idPosition`),
    FOREIGN KEY (`idCalendar`) REFERENCES Calendars(`id`),
    FOREIGN KEY (`idDriver`) REFERENCES Drivers(`id`),
    FOREIGN KEY (`idPosition`) REFERENCES Positions(`id`)
);

CREATE TABLE IF NOT EXISTS `Grids`(
    `idCalendar` INTEGER NOT NULL,
    `idDriver` INTEGER NOT NULL,
    `idPosition` VARCHAR(4) NOT NULL,
    PRIMARY KEY (`idCalendar`, `idDriver`, `idPosition`),
    FOREIGN KEY (`idCalendar`) REFERENCES Calendars(`id`),
    FOREIGN KEY (`idDriver`) REFERENCES Drivers(`id`),
    FOREIGN KEY (`idPosition`) REFERENCES Positions(`id`)
);

CREATE TABLE IF NOT EXISTS `FastLaps`(
    `idCalendar` INTEGER NOT NULL,
    `idDriver` INTEGER NOT NULL,
    PRIMARY KEY (`idCalendar`, `idDriver`),
    FOREIGN KEY (`idCalendar`) REFERENCES Calendars(`id`),
    FOREIGN KEY (`idDriver`) REFERENCES Drivers(`id`)
);

INSERT INTO `Seasons` (`name`)
VALUES ('Temporada 2020-2021');

INSERT INTO `Teams` (`name`, `color`)
VALUES ('Mercedes-AMG Petronas Motorsport', 'Plata'),
       ('Scuderia Ferrari', 'Rojo'),
       ('Aston Martin Red Bull Racing', 'Morado'),
       ('Renault F1 Team', 'Amarillo'),
       ('Rich Energy Haas F1 Team', 'Negro'),
       ('Mclaren F1 Team', 'Naranja'),
       ('Spscore Racing Point F1 Team', 'Rosa'),
       ('Alfa Romeo Racing', 'Rojo y Blanco'),
       ('Reb Bull Toto Rosso Honda', 'Azul'),
       ('Rokit Williams Racing', 'Blanco y Azul');

INSERT INTO `Circuits` (`name`, `country`, `distance`, `turns`)
VALUES ('Melbourne Grand Prix Circuit', 'Australia', 5303, 16),
       ('Bahrain International Circuit', 'Baréin', 5412, 15),
       ('Shanghai International Circuit', 'China', 5451, 16),
       ('Baku City Circuit', 'Azerbaiyán', 6003, 20),
       ('Circuit De Barcelona-Cataluyna', 'España', 4655, 16),
       ('Circuit De Monaco', 'Mónaco', 3337, 19),
       ('Circuit Gilles-Villeneuve', 'Canadá', 4361, 14),
       ('Circuit Paul Ricard', 'Francia', 5842, 15),
       ('Spielberg', 'Austria', 4318, 10),
       ('Silverstone Circuit', 'Gran Bretaña', 5891, 18),
       ('Hockenheimring', 'Alemania', 4574, 17),
       ('Hungaroring', 'Hungría', 4381, 14),
       ('Circuit De Spa-Francorchamps', 'Bélgica', 7004, 19),
       ('Automodromo Nazionale Monza', 'Italia', 5793, 11),
       ('Marina Bay Street Circuit', 'Singapur', 5063, 23),
       ('Sochi Autodrom', 'Rusia', 5848, 18),
       ('Suzuka International Racing Course', 'Japón', 5807, 18),
       ('Autódromo Hermanos Rodrígruez', 'México', 4303, 17),
       ('Circuit Od The Americas', 'EE.UU.', 5513, 20),
       ('Autódromo José Carlos Pace', 'Brasil', 4309, 15),
       ('Yas Marina Circuit', 'Abu Dabi', 5554, 21);

INSERT INTO `Positions` (`id`, `points`) 
VALUES ('1', 25), 
       ('2', 18),
       ('3', 15),
       ('4', 12),
       ('5', 10),
       ('6', 8),
       ('7', 6),
       ('8', 4),
       ('9', 2),
       ('10', 1),
       ('11', 0),
       ('12', 0),
       ('13', 0),
       ('14', 0),
       ('15', 0),
       ('16', 0),
       ('17', 0),
       ('18', 0),
       ('19', 0),
       ('20', 0),
       ('DNF', 0);