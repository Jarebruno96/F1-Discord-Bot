package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// DriverFastLapsHandler :
func DriverFastLapsHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.FastLap{}
	fastLapsController := mock.FastLapController{}

	driversFastLaps, err := fastLapsController.GetDriverFastLaps()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.DriversFastLapsKey] = driversFastLaps

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

// TeamsFastLapsHandler :
func TeamsFastLapsHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.FastLap{}
	fastLapsController := mock.FastLapController{}

	teamsFastLaps, err := fastLapsController.GetTeamFastLaps()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.TeamsFastLapsKey] = teamsFastLaps

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
