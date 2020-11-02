package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// PositionsHandler :
func PositionsHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]model.Positions{}
	positionsController := mock.PositionsController{}

	positions, err := getPositions(positionsController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.PositionsKey] = positions

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func getPositions(positionsI interfaces.PositionsI) (model.Positions, error) {
	return positionsI.GetPositions()
}
