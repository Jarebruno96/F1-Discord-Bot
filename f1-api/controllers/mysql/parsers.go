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
