package mysql

import "f1-api/model"

type FastLapController struct {
	mysqlConnector MysqlConnector
}

func (flc FastLapController) GetDriverFastLaps() ([]model.FastLap, error) {

	err := flc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := flc.mysqlConnector.ReadQueryFile(FastLapDriverFile)

	if err != nil {
		return nil, err
	}

	rows, err := flc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	fastlaps, err := ParseRowsToFastLapsDrivers(rows)

	if err != nil {
		return nil, err
	}

	return fastlaps, nil
}

func (flc FastLapController) GetTeamFastLaps() ([]model.FastLap, error) {

	err := flc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := flc.mysqlConnector.ReadQueryFile(FastLapTeamsFile)

	if err != nil {
		return nil, err
	}

	rows, err := flc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	fastlaps, err := ParseRowsToFastLapsTeams(rows)

	if err != nil {
		return nil, err
	}

	return fastlaps, nil
}
