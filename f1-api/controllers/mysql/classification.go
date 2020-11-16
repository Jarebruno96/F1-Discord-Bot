package mysql

import "f1-api/model"

type ClassificationController struct {
	mysqlConnector MysqlConnector
}

func (cc ClassificationController) GetDriversClassification() ([]model.Classification, error) {

	err := cc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := cc.mysqlConnector.ReadQueryFile(ClassificationDriversFile)

	if err != nil {
		return nil, err
	}

	rows, err := cc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	classification, err := ParseRowsToDriversClassification(rows)

	if err != nil {
		return nil, err
	}

	return classification, nil
}

func (cc ClassificationController) GetTeamsClassification() ([]model.Classification, error) {

	err := cc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := cc.mysqlConnector.ReadQueryFile(ClassificationTeamsFile)

	if err != nil {
		return nil, err
	}

	rows, err := cc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	classification, err := ParseRowsToTeamsClassification(rows)

	if err != nil {
		return nil, err
	}

	return classification, nil
}
