package handlers

import (
	"encoding/json"
	"f1-api/controllers/mysql"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// CircuitHandler :
func CircuitHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Circuit{}
	circuitController := mysql.CircuitController{}

	circuits, err := getCircuits(circuitController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.CircuitsKey] = circuits

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func getCircuits(circuitI interfaces.CircuitI) ([]model.Circuit, error) {
	return circuitI.GetCircuits()
}
