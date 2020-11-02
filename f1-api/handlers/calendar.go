package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// CalendarHandler :
func CalendarHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Calendar{}
	calendarController := mock.CalendarController{}

	calendar, err := calendarController.GetCalendar()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.CalendarKey] = calendar

	js, err := json.Marshal(calendar)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
