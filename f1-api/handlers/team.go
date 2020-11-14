package handlers

import (
	"encoding/json"
	"f1-api/controllers/mysql"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// TeamHandler :
func TeamHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Team{}
	teamController := mysql.TeamController{}

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

// TeamDriversHandler :
func TeamDriversHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Team{}
	teamController := mysql.TeamController{}

	teams, err := getTeamDrivers(teamController)

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

func getTeamDrivers(teamsI interfaces.TeamsI) ([]model.Team, error) {
	return teamsI.GetTeamsDrivers()
}

// TeamInfoHandler :
func TeamInfoHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Team{}
	teamController := mysql.TeamController{}

	teams, err := getTeamInfo(teamController)

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

func getTeamInfo(teamsI interfaces.TeamsI) ([]model.Team, error) {
	return teamsI.GetTeamsInfo()
}
