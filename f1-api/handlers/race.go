package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// RaceInfoHandler :
func RaceInfoHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Race{}
	raceController := mock.RaceController{}

	race, err := raceController.GetRaceInfo()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.RaceInfoKey] = race

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

// RaceGridHandler :
func RaceGridHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.RaceGrid{}
	raceController := mock.RaceController{}

	raceGrid, err := raceController.GetRaceGrid()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.RaceGridKey] = raceGrid

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

// RaceResultHandler :
func RaceResultHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.RaceResult{}
	raceController := mock.RaceController{}

	raceResult, err := raceController.GetRaceResult()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.PositionsKey] = raceResult

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

// RaceFastLapDriverHandler :
func RaceFastLapDriverHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Driver{}
	raceController := mock.RaceController{}

	fastLapDriver, err := raceController.GetRaceFastLapDriver()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.RaceFastLapDriverKey] = fastLapDriver

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
