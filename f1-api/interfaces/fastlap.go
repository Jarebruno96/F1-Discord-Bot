package interfaces

import (
	"f1-api/model"
)

// FastLapI :
type FastLapI interface {
	GetDriverFastLaps() ([]model.FastLap, error)
	GetTeamFastLaps() ([]model.FastLap, error)
}
