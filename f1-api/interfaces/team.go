package interfaces

import (
	"f1-api/model"
)

// TeamsI :
type TeamsI interface {
	GetTeams() ([]model.Team, error)
	GetTeamsDrivers() ([]model.Team, error)
	GetTeamsInfo() ([]model.Team, error)
}
