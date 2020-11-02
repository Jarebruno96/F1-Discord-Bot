package interfaces

import (
	"f1-api/model"
)

//CalendarI :
type CalendarI interface {
	GetCalendar() (model.Calendar, error)
}
