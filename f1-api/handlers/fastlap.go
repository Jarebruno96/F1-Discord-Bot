package handlers

import (
	"encoding/json"
	"f1-api/controllers/mysql"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// DriverFastLapsHandler :
func DriverFastLapsHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.FastLap{}
	fastLapsController := mysql.FastLapController{}

	driversFastLaps, err := getDriverFastLaps(fastLapsController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.DriversFastLapsKey] = driversFastLaps

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getDriverFastLaps(fastLapI interfaces.FastLapI) ([]model.FastLap, error) {
	return fastLapI.GetDriverFastLaps()
}

// TeamsFastLapsHandler :
func TeamsFastLapsHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.FastLap{}
	fastLapsController := mysql.FastLapController{}

	teamsFastLaps, err := getTeamFastLaps(fastLapsController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.TeamsFastLapsKey] = teamsFastLaps

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getTeamFastLaps(fastLapI interfaces.FastLapI) ([]model.FastLap, error) {
	return fastLapI.GetTeamFastLaps()
}
