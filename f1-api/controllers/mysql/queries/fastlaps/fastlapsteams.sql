SELECT `Circuits`.`name` AS `Circuit`,
       `Teams`.`name` AS `Team`
FROM `FastLaps`,
     `Calendars`,
     `Drivers`,
     `Circuits`,
     `Teams`
WHERE `FastLaps`.`idCalendar` = `Calendars`.`id` AND
      `FastLaps`.`idDriver` = `Drivers`.`id` AND
      `Calendars`.`idCircuit` = `Circuits`.`id` AND
      `Teams`.`id` = `Drivers`.`idTeam`