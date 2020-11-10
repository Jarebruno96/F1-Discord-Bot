package handlers

import (
	"encoding/json"
	"f1-api/controllers/mysql"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// CalendarHandler :
func CalendarHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Calendar{}
	calendarController := mysql.CalendarController{}

	calendar, err := getCalendar(calendarController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.CalendarKey] = *calendar

	content, err := json.Marshal(calendar)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getCalendar(calendarI interfaces.CalendarI) (*model.Calendar, error) {
	return calendarI.GetCalendar()
}
