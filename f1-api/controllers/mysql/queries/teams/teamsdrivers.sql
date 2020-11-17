SELECT `Teams`.`id`, `Teams`.`name`, `Drivers`.`name`, `Drivers`.`number`
FROM `Teams`, `Drivers`
WHERE `Teams`.`id` = `Drivers`.`idTeam`