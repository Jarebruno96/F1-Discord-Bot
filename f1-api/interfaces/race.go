package interfaces

import (
	"f1-api/model"
)

//RaceI :
type RaceI interface {
	GetRaceInfo() (model.Race, error)
	GetRaceGrid() (model.RaceGrid, error)
	GetRaceResult() (model.RaceResult, error)
	GetRaceFastLapDriver() (model.Driver, error)
}
