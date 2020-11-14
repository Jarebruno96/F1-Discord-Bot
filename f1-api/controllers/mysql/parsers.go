package mysql

import (
	"database/sql"
	"f1-api/model"
	"log"
)

func ParseRowsToCircuits(rows *sql.Rows) ([]model.Circuit, error) {

	circuits := []model.Circuit{}

	for rows.Next() {

		var circuit model.Circuit

		err := rows.Scan(&circuit.Name, &circuit.Country, &circuit.Distance, &circuit.Turns)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		circuits = append(circuits, circuit)

	}

	return circuits, nil

}

func ParseRowsToPositions(rows *sql.Rows) (model.Positions, error) {

	positions := model.Positions{
		Position: map[string]int{},
	}

	for rows.Next() {

		var position string
		var points int

		err := rows.Scan(&position, &points)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		if _, registered := positions.Position[position]; !registered {
			positions.Position[position] = points
		} else {
			log.Println("Position ", position, " already registered")
		}
	}

	return positions, nil

}

func ParseRowsToCalendar(rows *sql.Rows) (model.Calendar, error) {

	calendar := model.Calendar{
		Season: "Current season",
		Events: []model.Event{},
	}

	for rows.Next() {

		var event model.Event

		err := rows.Scan(&event.Day, &event.Circuit)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		calendar.Events = append(calendar.Events, event)
	}

	return calendar, nil
}

func ParseRowsToDrivers(rows *sql.Rows) ([]model.Driver, error) {

	drivers := []model.Driver{}

	for rows.Next() {

		var driver model.Driver

		err := rows.Scan(&driver.Name, &driver.Number)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		drivers = append(drivers, driver)
	}

	return drivers, nil
}

func ParseRowsToTeams(rows *sql.Rows) ([]model.Team, error) {

	teams := []model.Team{}

	for rows.Next() {

		var team model.Team

		err := rows.Scan(&team.Name, &team.Color)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		teams = append(teams, team)
	}

	return teams, nil
}

func ParseRowsToTeamsDrivers(rows *sql.Rows) ([]model.Team, error) {

	teamsProcessed := map[int]model.Team{}

	for rows.Next() {

		var teamID int
		var team model.Team
		var driver model.Driver

		err := rows.Scan(&teamID, &team.Name, &driver.Name, &driver.Number)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		if teamProcessed, processed := teamsProcessed[teamID]; !processed {
			team.Drivers = []model.Driver{driver}
			teamsProcessed[teamID] = team
		} else {
			team.Drivers = append(team.Drivers, driver)
			teamsProcessed[teamID] = teamProcessed
		}
	}

	teams := []model.Team{}

	for _, team := range teamsProcessed {
		teams = append(teams, team)

	}

	return teams, nil
}

func ParseRowsToTeamsInfo(rows *sql.Rows) ([]model.Team, error) {

	teamsProcessed := map[int]model.Team{}

	for rows.Next() {

		var teamID int
		var team model.Team
		var driver model.Driver

		err := rows.Scan(&teamID, &team.Name, &team.Color, &driver.Name, &driver.Number)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		if teamProcessed, processed := teamsProcessed[teamID]; !processed {
			team.Drivers = []model.Driver{driver}
			teamsProcessed[teamID] = team
		} else {
			teamProcessed.Drivers = append(team.Drivers, driver)
			teamsProcessed[teamID] = teamProcessed
		}
	}

	teams := []model.Team{}

	for _, team := range teamsProcessed {
		teams = append(teams, team)
	}

	return teams, nil
}
