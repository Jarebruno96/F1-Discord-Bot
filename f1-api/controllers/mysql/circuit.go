package mysql

import (
	"f1-api/model"
	"log"
)

type CircuitController struct {
	mysqlConnector MysqlConnector
}

// GetCircuits :
func (cc CircuitController) GetCircuits() ([]model.Circuit, error) {

	err := cc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := cc.mysqlConnector.ReadQueryFile(CircuitsQueryFile)

	if err != nil {
		return nil, err
	}

	rows, err := cc.mysqlConnector.Query(query, []interface{}{})

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	circuits := []model.Circuit{}

	for rows.Next() {

		var circuit model.Circuit

		err = rows.Scan(&circuit.Name, &circuit.Country, &circuit.Distance, &circuit.Turns)

		if err != nil {
			log.Println("Can not scan row. ", err)
			continue
		}

		log.Println(circuit)

		circuits = append(circuits, circuit)

	}

	return circuits, nil
}
