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
