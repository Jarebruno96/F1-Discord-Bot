package handlers

import (
	"encoding/json"
	"f1-api/model"
	"net/http"
)

// CalendarHandler :
func CalendarHandler(w http.ResponseWriter, r *http.Request) {

	calendar := model.Calendar{
		Season: "Season 1",
		Events: []model.Event{
			model.Event{
				Day:     "Day 1",
				Circuit: "Melbourne Grand Prix Circuit",
			},
			model.Event{
				Day:     "Day 2",
				Circuit: "Bahrain International Circuit",
			},
		},
	}

	js, err := json.Marshal(calendar)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
