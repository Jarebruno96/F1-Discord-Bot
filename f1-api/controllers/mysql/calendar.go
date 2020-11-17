package mysql

import "f1-api/model"

// CalendarController :
type CalendarController struct {
	mysqlConnector MysqlConnector
}

// GetCalendar :
func (cc CalendarController) GetCalendar() (*model.Calendar, error) {

	err := cc.mysqlConnector.InitDBConnection()

	if err != nil {
		return nil, err
	}

	query, err := cc.mysqlConnector.ReadQueryFile(CalendarQueryfile)

	if err != nil {
		return nil, err
	}

	rows, err := cc.mysqlConnector.Query(query)

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	calendar, err := ParseRowsToCalendar(rows)

	return &calendar, err
}
