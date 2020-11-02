package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// RaceInfoHandler :
func RaceInfoHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Race{}
	raceController := mock.RaceController{}

	race, err := getRaceInfo(raceController)

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

func getRaceInfo(raceI interfaces.RaceI) (model.Race, error) {
	return raceI.GetRaceInfo()
}

// RaceGridHandler :
func RaceGridHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.RaceGrid{}
	raceController := mock.RaceController{}

	raceGrid, err := getRaceGrid(raceController)

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

func getRaceGrid(raceI interfaces.RaceI) (model.RaceGrid, error) {
	return raceI.GetRaceGrid()
}

// RaceResultHandler :
func RaceResultHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.RaceResult{}
	raceController := mock.RaceController{}

	raceResult, err := getRaceResult(raceController)

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

func getRaceResult(raceI interfaces.RaceI) (model.RaceResult, error) {
	return raceI.GetRaceResult()
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

func getRaceFastLapDriver(raceI interfaces.RaceI) (model.Driver, error) {
	return raceI.GetRaceFastLapDriver()
}
