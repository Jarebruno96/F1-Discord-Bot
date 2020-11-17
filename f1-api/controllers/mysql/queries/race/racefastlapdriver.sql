SELECT `Circuits`.`name` AS `Circuit`,
	  `Drivers`.`name` AS `Driver`,
       `Drivers`.`number` AS `DriverNumber`
FROM `FastLaps`,
	 `Calendars`, 
     `Circuits`, 
     `Drivers`
WHERE `Calendars`.`id` = `FastLaps`.`idCalendar` AND
	  `Drivers`.`id` = `FastLaps`.`idDriver` AND
      `Circuits`.`id` = `Calendars`.`idCircuit`