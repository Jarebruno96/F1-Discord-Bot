SELECT `Drivers`.`name` AS `driver`,
	   `ChampionshipStatus`.`points` AS `points`
FROM `Drivers`,
	(
		SELECT `ChampionshipEvolution`.`idDriver` AS `idDriver`,
			   SUM(`ChampionshipEvolution`.`points`) AS `points`
		FROM 
		(
			SELECT `ChampionshipRaces`.`idDriver` AS `idDriver`,
				   IF (`ChampionshipRaces`.`isFastDriver` IS TRUE, `Positions`.`points` + 1, `Positions`.`points`) AS `points`,
				   `ChampionshipRaces`.`idPosition` AS `idPosition`
			FROM
				(
					SELECT `Races`.`idDriver` AS `idDriver`,
						   `Races`.`idPosition` AS `idPosition`,
						   IF(`FastLaps`.`idCalendar` IS NULL AND `FastLaps`.`idDriver` IS NULL, FALSE, TRUE) AS `isFastDriver`
					FROM `Races`
					LEFT JOIN `FastLaps`
					ON `Races`.`idCalendar` = `FastLaps`.`idCalendar` AND
					   `Races`.`idDriver` = `FastLaps`.`idDriver`
				) AS `ChampionshipRaces`,
				`Positions`
				WHERE `Positions`.`id` = `ChampionshipRaces`.`idPosition`
		) AS `ChampionshipEvolution`
		GROUP BY `ChampionshipEvolution`.`idDriver`
	) AS `ChampionshipStatus`
WHERE `Drivers`.`id` = `ChampionshipStatus`.`idDriver`
ORDER BY `ChampionshipStatus`.`points` DESC
