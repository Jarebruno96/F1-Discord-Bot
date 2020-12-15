package handlers

import (
	"encoding/json"
	"f1-api/controllers/mysql"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// RaceInfoHandler :
func RaceInfoHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Race{}
	raceController := mysql.RaceController{}

	raceName := r.URL.Query().Get(RaceParameterKey)

	if raceName == "" {
		http.Error(w, "Race parameter is not specified", http.StatusBadRequest)
		return
	}

	race, err := getRaceInfo(raceController, raceName)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.RaceInfoKey] = *race

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getRaceInfo(raceI interfaces.RaceI, raceName string) (*model.Race, error) {
	return raceI.GetRaceInfo(raceName)
}

// RaceGridHandler :
func RaceGridHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.RaceGrid{}
	raceController := mysql.RaceController{}

	raceName := r.URL.Query().Get(RaceParameterKey)

	if raceName == "" {
		http.Error(w, "Race parameter is not specified", http.StatusBadRequest)
		return
	}

	raceGrid, err := getRaceGrid(raceController, raceName)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.RaceGridKey] = *raceGrid

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getRaceGrid(raceI interfaces.RaceI, raceName string) (*model.RaceGrid, error) {
	return raceI.GetRaceGrid(raceName)
}

// RaceResultHandler :
func RaceResultHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.RaceResult{}
	raceController := mysql.RaceController{}

	raceName := r.URL.Query().Get(RaceParameterKey)

	if raceName == "" {
		http.Error(w, "Race parameter is not specified", http.StatusBadRequest)
		return
	}

	raceResult, err := getRaceResult(raceController, raceName)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.PositionsKey] = *raceResult

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getRaceResult(raceI interfaces.RaceI, raceName string) (*model.RaceResult, error) {
	return raceI.GetRaceResult(raceName)
}

// RaceFastLapDriverHandler :
func RaceFastLapDriverHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Driver{}
	raceController := mysql.RaceController{}

	raceName := r.URL.Query().Get(RaceParameterKey)

	if raceName == "" {
		http.Error(w, "Race parameter is not specified", http.StatusBadRequest)
		return
	}

	fastLapDriver, err := raceController.GetRaceFastLapDriver(raceName)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.RaceFastLapDriverKey] = *fastLapDriver

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getRaceFastLapDriver(raceI interfaces.RaceI, raceName string) (*model.Driver, error) {
	return raceI.GetRaceFastLapDriver(raceName)
}
