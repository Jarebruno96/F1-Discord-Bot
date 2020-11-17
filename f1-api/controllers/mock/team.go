package mock

import "f1-api/model"

//TeamController :
type TeamController struct{}

//GetTeams :
func (tc TeamController) GetTeams() ([]model.Team, error) {

	teams := []model.Team{
		model.Team{
			Name:  "Team1",
			Color: "Color1",
		},
		model.Team{
			Name:  "Team2",
			Color: "Color2",
		},
	}

	return teams, nil
}

//GetTeamsDrivers :
func (tc TeamController) GetTeamsDrivers() ([]model.Team, error) {

	teamsDrivers := []model.Team{
		model.Team{
			Name: "Team1",
			Drivers: []model.Driver{
				model.Driver{
					Name:   "Driver1",
					Number: 1,
				},
				model.Driver{
					Name:   "Driver2",
					Number: 2,
				},
			},
		},
		model.Team{
			Name: "Team2",
			Drivers: []model.Driver{
				model.Driver{
					Name:   "Driver1",
					Number: 1,
				},
				model.Driver{
					Name:   "Driver2",
					Number: 2,
				},
			},
		},
	}

	return teamsDrivers, nil
}

//GetTeamsInfo :
func (tc TeamController) GetTeamsInfo() ([]model.Team, error) {

	teamsDrivers := []model.Team{
		model.Team{
			Name:  "Team1",
			Color: "Color1",
			Drivers: []model.Driver{
				model.Driver{
					Name:   "Driver1",
					Number: 1,
				},
				model.Driver{
					Name:   "Driver2",
					Number: 2,
				},
			},
		},
		model.Team{
			Name:  "Team2",
			Color: "Color2",
			Drivers: []model.Driver{
				model.Driver{
					Name:   "Driver1",
					Number: 1,
				},
				model.Driver{
					Name:   "Driver2",
					Number: 2,
				},
			},
		},
	}

	return teamsDrivers, nil
}
