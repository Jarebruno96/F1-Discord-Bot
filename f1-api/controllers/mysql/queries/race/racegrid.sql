SELECT `Circuits`.`name` AS `Circuit`, 
	   `Drivers`.`name` AS `Driver`,
       `Grids`.`idPosition` AS `Position`
FROM `Grids`, 
	 `Drivers`, 
     `Circuits`,
     `Calendars`
WHERE `Grids`.`idCalendar` = `Calendars`.`id` AND
	  `Calendars`.`idCircuit` = `Circuits`.`id` AND
      `Drivers`.`id` = `Grids`.`idDriver`