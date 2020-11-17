package mysql

import "f1-api/model"

type DriverController struct {
	mysqlConnector MysqlConnector
}

func (dc DriverController) GetDrivers() ([]model.Driver, error) {

	err := dc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := dc.mysqlConnector.ReadQueryFile(DriversQueryfile)

	if err != nil {
		return nil, err
	}

	rows, err := dc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	drivers, err := ParseRowsToDrivers(rows)

	if err != nil {
		return nil, err
	}

	return drivers, nil

}
