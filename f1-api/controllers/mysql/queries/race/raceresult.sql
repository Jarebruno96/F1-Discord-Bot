SELECT `Circuits`.`name` AS `Circuit`, 
	   `Drivers`.`name` AS `Driver`,
       `Races`.`idPosition` AS `Position`
FROM `Races`, 
	 `Drivers`, 
     `Circuits`,
     `Calendars`
WHERE `Races`.`idCalendar` = `Calendars`.`id` AND
	  `Calendars`.`idCircuit` = `Circuits`.`id` AND
      `Drivers`.`id` = `Races`.`idDriver`