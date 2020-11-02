package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// DriverClassificationHandler :
func DriverClassificationHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Classification{}
	classificationContoller := mock.ClassificationController{}

	driversClassification, err := classificationContoller.GetDriversClassification()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.DriversClassificationKey] = driversClassification

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

// TeamsClassificationHandler :
func TeamsClassificationHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Classification{}
	classificationContoller := mock.ClassificationController{}

	teamsClassification, err := classificationContoller.GetTeamsClassification()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.TeamsClassificationKey] = teamsClassification

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
