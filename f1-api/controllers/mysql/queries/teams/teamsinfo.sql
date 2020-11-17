SELECT `Teams`.`id`, `Teams`.`name`, `Teams`.`color`, `Drivers`.`name`, `Drivers`.`number`
FROM `Teams`, `Drivers`
WHERE `Teams`.`id` = `Drivers`.`idTeam`