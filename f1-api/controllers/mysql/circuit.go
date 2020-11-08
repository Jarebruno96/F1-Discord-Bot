package mysql

import (
	"f1-api/model"
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

	rows, err := cc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	circuits, err := ParseRowsToCircuits(rows)
	return circuits, nil
}
