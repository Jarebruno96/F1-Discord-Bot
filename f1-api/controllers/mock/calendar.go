package mock

import "f1-api/model"

// CalendarController :
type CalendarController struct{}

// GetCalendar :
func (cc CalendarController) GetCalendar() (model.Calendar, error) {

	calendar := model.Calendar{
		Season: "Season1",
		Events: []model.Event{
			model.Event{
				Day:     "Day1",
				Circuit: "Circuit1",
			},
			model.Event{
				Day:     "Day2",
				Circuit: "Circuit2",
			},
			model.Event{
				Day:     "Day3",
				Circuit: "Circuit3",
			},
		},
	}

	return calendar, nil
}
