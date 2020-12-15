package mysql

import (
	"f1-api/model"
)

//RaceController:
type RaceController struct {
	mysqlConnector MysqlConnector
}

func (rc RaceController) GetRaceInfo(raceName string) (*model.Race, error) {

	err := rc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := rc.mysqlConnector.ReadQueryFile(RaceInfoQueryFile)

	if err != nil {
		return nil, err
	}

	rows, err := rc.mysqlConnector.Query(query, "%"+raceName+"%", "%"+raceName+"%")

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	race, err := ParseRowsToRaceInfo(rows)

	if err != nil {
		return nil, err
	}

	return race, nil
}

func (rc RaceController) GetRaceGrid(raceName string) (*model.RaceGrid, error) {

	err := rc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := rc.mysqlConnector.ReadQueryFile(RaceGridQueryFile)

	if err != nil {
		return nil, err
	}

	rows, err := rc.mysqlConnector.Query(query, "%"+raceName+"%", "%"+raceName+"%")

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	grid, err := ParseRowsToRaceGrid(rows)

	if err != nil {
		return nil, err
	}

	return grid, nil
}

func (rc RaceController) GetRaceResult(raceName string) (*model.RaceResult, error) {

	err := rc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := rc.mysqlConnector.ReadQueryFile(RaceResultQueryFile)

	if err != nil {
		return nil, err
	}

	rows, err := rc.mysqlConnector.Query(query, "%"+raceName+"%", "%"+raceName+"%")

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	resutl, err := ParseRowsToRaceResult(rows)

	if err != nil {
		return nil, err
	}

	return resutl, nil
}

func (rc RaceController) GetRaceFastLapDriver(raceName string) (*model.Driver, error) {

	err := rc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := rc.mysqlConnector.ReadQueryFile(RaceFastLapDriverFile)

	if err != nil {
		return nil, err
	}

	rows, err := rc.mysqlConnector.Query(query, "%"+raceName+"%", "%"+raceName+"%")

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	driver, err := ParseRowsToRaceFastLapDriver(rows)

	if err != nil {
		return nil, err
	}

	return driver, nil
}
