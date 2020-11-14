package mysql

import "f1-api/model"

//TeamController :
type TeamController struct {
	mysqlConnector MysqlConnector
}

//GetTeams :
func (tc TeamController) GetTeams() ([]model.Team, error) {

	err := tc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := tc.mysqlConnector.ReadQueryFile(TeamsQueryfile)

	if err != nil {
		return nil, err
	}

	rows, err := tc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	teams, err := ParseRowsToTeams(rows)

	if err != nil {
		return nil, err
	}

	return teams, nil
}

//GetTeamsDrivers :
func (tc TeamController) GetTeamsDrivers() ([]model.Team, error) {

	err := tc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := tc.mysqlConnector.ReadQueryFile(TeamsDriversQueryfile)

	if err != nil {
		return nil, err
	}

	rows, err := tc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	teams, err := ParseRowsToTeamsDrivers(rows)

	if err != nil {
		return nil, err
	}

	return teams, nil
}

//GetTeamsInfo :
func (tc TeamController) GetTeamsInfo() ([]model.Team, error) {

	err := tc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := tc.mysqlConnector.ReadQueryFile(TeamsInfoQueryfile)

	if err != nil {
		return nil, err
	}

	rows, err := tc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	teams, err := ParseRowsToTeamsInfo(rows)

	if err != nil {
		return nil, err
	}

	return teams, nil
}
