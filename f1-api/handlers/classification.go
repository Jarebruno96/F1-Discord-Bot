package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// DriverClassificationHandler :
func DriverClassificationHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Classification{}
	classificationContoller := mock.ClassificationController{}

	driversClassification, err := getDriversClassification(classificationContoller)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.DriversClassificationKey] = driversClassification

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getDriversClassification(classificationI interfaces.ClassificationI) ([]model.Classification, error) {
	return classificationI.GetDriversClassification()
}

// TeamsClassificationHandler :
func TeamsClassificationHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Classification{}
	classificationContoller := mock.ClassificationController{}

	teamsClassification, err := getTeamsClassification(classificationContoller)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.TeamsClassificationKey] = teamsClassification

<<<<<<< HEAD
	content, err := json.Marshal(payload)
=======
	js, err := json.Marshal(payload)
>>>>>>> d02d9feac153485110d7c717170b267673b642b7

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

<<<<<<< HEAD
	SendResponse(w, content)
=======
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
>>>>>>> d02d9feac153485110d7c717170b267673b642b7
}

func getTeamsClassification(classificationI interfaces.ClassificationI) ([]model.Classification, error) {
	return classificationI.GetTeamsClassification()
}
