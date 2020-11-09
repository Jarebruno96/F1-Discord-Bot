package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// TeamHandler :
func TeamHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Team{}
	teamController := mock.TeamController{}

	teams, err := getTeams(teamController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.TeamsKey] = teams

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getTeams(teamsI interfaces.TeamsI) ([]model.Team, error) {
	return teamsI.GetTeams()
}
