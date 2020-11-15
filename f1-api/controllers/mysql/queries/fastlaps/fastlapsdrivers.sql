SELECT `Circuits`.`name` AS `Circuit`,
       `Drivers`.`name` AS `Driver`
FROM `FastLaps`,
     `Calendars`,
     `Drivers`,
     `Circuits`
WHERE `FastLaps`.`idCalendar` = `Calendars`.`id` AND
      `FastLaps`.`idDriver` = `Drivers`.`id` AND
      `Calendars`.`idCircuit` = `Circuits`.`id`