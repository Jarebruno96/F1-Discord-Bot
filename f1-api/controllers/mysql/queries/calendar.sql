SELECT `day`, `name` 
FROM `Calendars`, `Circuits` 
WHERE `Calendars`.`idCircuit` = `Circuits`.`id`
ORDER BY `day` ASC