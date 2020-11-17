package mock

import "f1-api/model"

// FastLapController :
type FastLapController struct{}

// GetDriverFastLaps :
func (flc FastLapController) GetDriverFastLaps() ([]model.FastLap, error) {

	driverFastLaps := []model.FastLap{
		model.FastLap{
			Driver: model.Driver{
				Name:   "Driver1",
				Number: 1,
			},
			Circuit: model.Circuit{
				Name: "Circuit1",
			},
		},
	}

	return driverFastLaps, nil
}

// GetTeamFastLaps :
func (flc FastLapController) GetTeamFastLaps() ([]model.FastLap, error) {

	teamFastLaps := []model.FastLap{
		model.FastLap{
			Team: model.Team{
				Name: "Team1",
			},
			Circuit: model.Circuit{
				Name: "Circuit1",
			},
		},
	}

	return teamFastLaps, nil

}
