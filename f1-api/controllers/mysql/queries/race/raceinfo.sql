SELECT `Circuits`.`name` AS `CircuitName`,
	   `Drivers`.`name` AS `DriverName`,
       `raceInfo`.`GridPosition` AS `GridPosition`,
       `raceInfo`.`ResultPosition` AS `ResultPosition`,
       `raceInfo`.`IsFastLapDriver` AS `IsFastLapDriver`
FROM
	(
		SELECT 
			   `raceEvolution`.`idCalendar` As `idCalendar`, 
			   `raceEvolution`.`idDriver` AS `idDriver`, 
			   `raceEvolution`.`GridPosition` AS `GridPosition`,  
			   `raceEvolution`.`ResultPosition` AS `ResultPosition`,
			   IF (`FastLaps`.`idCalendar` IS NULL AND `FastLaps`.`idDriver` IS NULL, FALSE, TRUE) AS `IsFastLapDriver`
		FROM `FastLaps`
		RIGHT JOIN
			(
				SELECT `Grids`.`idCalendar`, 
					   `Grids`.`idDriver`, 
					   `Grids`.`idPosition` AS `GridPosition`, 
					   `Races`.`idPosition` AS `ResultPosition`
				FROM `Races`, `Grids`
				WHERE `Races`.`idCalendar` = `Grids`.`idCalendar` AND
					  `Races`.`idDriver` = `Grids`.`idDriver`
			) AS `raceEvolution`
		ON `FastLaps`.`idCalendar` = `raceEvolution`.`idCalendar` AND
		   `FastLaps`.`idDriver` = `raceEvolution`.`idDriver`
	) AS `raceInfo`,
		 `Drivers`,
         `Circuits`,
         `Calendars`
WHERE `raceInfo`.`idCalendar` = `Calendars`.`id` AND
	  `Calendars`.`idCircuit` = `Circuits`.`id` AND
      `Drivers`.`id` = `raceInfo`.`idDriver`;
         
		 