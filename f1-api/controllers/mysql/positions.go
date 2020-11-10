package mysql

import "f1-api/model"

type PositionsController struct {
	mysqlConnector MysqlConnector
}

func (pc PositionsController) GetPositions() (*model.Positions, error) {

	err := pc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := pc.mysqlConnector.ReadQueryFile(PositionsQueryfile)

	if err != nil {
		return nil, err
	}

	rows, err := pc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	positions, err := ParseRowsToPositions(rows)

	return &positions, nil

}
