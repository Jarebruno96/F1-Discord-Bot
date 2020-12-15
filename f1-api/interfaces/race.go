package interfaces

import (
	"f1-api/model"
)

//RaceI :
type RaceI interface {
	GetRaceInfo(raceName string) (*model.Race, error)
	GetRaceGrid(raceName string) (*model.RaceGrid, error)
	GetRaceResult(raceName string) (*model.RaceResult, error)
	GetRaceFastLapDriver(raceName string) (*model.Driver, error)
}
