package handlers

import (
	"encoding/json"
	"f1-api/controllers/mysql"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// PositionsHandler :
func PositionsHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string]map[string]int{}
	positionsController := mysql.PositionsController{}

	positions, err := getPositions(positionsController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.PositionsKey] = positions.Position

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getPositions(positionsI interfaces.PositionsI) (*model.Positions, error) {
	return positionsI.GetPositions()
}
