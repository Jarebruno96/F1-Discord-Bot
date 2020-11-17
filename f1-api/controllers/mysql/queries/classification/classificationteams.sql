SELECT `Teams`.`name` AS `Team`,
	   `ChampionshipStatus`.`points` AS `Points`
FROM `Teams`,
	(
		SELECT `Drivers`.`idTeam` AS `idTeam`,
			   SUM(`ChampionshipEvolution`.`points`) AS `points`
		FROM `Drivers`,
			 (SELECT `ChampionshipRaces`.`idDriver` AS `idDriver`,
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
		WHERE `Drivers`.`id` = `ChampionshipEvolution`.`idDriver`
		GROUP BY `Drivers`.`idTeam`
	) AS `ChampionshipStatus`
WHERE `Teams`.`id` = `ChampionshipStatus`.`idTeam`
ORDER BY `ChampionshipStatus`.`points` DESC