package mock

import "f1-api/model"

// RaceController :
type RaceController struct{}

// GetRaceInfo :
func (rc RaceController) GetRaceInfo() (model.Race, error) {

	race := model.Race{
		Grid: model.RaceGrid{
			Grid: map[string]model.Driver{},
		},
		Result: model.RaceResult{
			Result: map[string]model.Driver{},
		},
		FastLapDriver: model.Driver{},
	}

	race.Grid.Grid["1"] = model.Driver{
		Name: "Driver1",
	}
	race.Grid.Grid["2"] = model.Driver{
		Name: "Driver3",
	}
	race.Grid.Grid["3"] = model.Driver{
		Name: "Driver3",
	}

	race.Result.Result["1"] = model.Driver{
		Name: "Driver1",
	}
	race.Result.Result["2"] = model.Driver{
		Name: "Driver3",
	}
	race.Result.Result["3"] = model.Driver{
		Name: "Driver3",
	}

	race.FastLapDriver = model.Driver{
		Name:   "Driver1",
		Number: 1,
	}

	return race, nil
}

// GetRaceGrid :
func (rc RaceController) GetRaceGrid() (model.RaceGrid, error) {

	raceGrid := model.RaceGrid{
		Grid: map[string]model.Driver{},
	}

	raceGrid.Grid["1"] = model.Driver{
		Name: "Driver1",
	}
	raceGrid.Grid["2"] = model.Driver{
		Name: "Driver3",
	}
	raceGrid.Grid["3"] = model.Driver{
		Name: "Driver3",
	}

	return raceGrid, nil
}

// GetRaceResult :
func (rc RaceController) GetRaceResult() (model.RaceResult, error) {

	raceResult := model.RaceResult{
		Result: map[string]model.Driver{},
	}

	raceResult.Result["1"] = model.Driver{
		Name: "Driver1",
	}
	raceResult.Result["2"] = model.Driver{
		Name: "Driver3",
	}
	raceResult.Result["3"] = model.Driver{
		Name: "Driver3",
	}

	return raceResult, nil

}

// GetRaceFastLapDriver :
func (rc RaceController) GetRaceFastLapDriver() (model.Driver, error) {

	driver := model.Driver{
		Name:   "Driver1",
		Number: 1,
	}

	return driver, nil
}
