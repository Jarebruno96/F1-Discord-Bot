package mock

import "f1-api/model"

// ClassificationController :
type ClassificationController struct{}

// GetDriversClassification :
func (cc ClassificationController) GetDriversClassification() ([]model.Classification, error) {

	classification := []model.Classification{
		model.Classification{
			Name:   "Driver1",
			Points: 10,
		},
		model.Classification{
			Name:   "Driver2",
			Points: 5,
		},
	}

	return classification, nil
}

// GetTeamsClassification :
func (cc ClassificationController) GetTeamsClassification() ([]model.Classification, error) {

	classification := []model.Classification{
		model.Classification{
			Name:   "Team1",
			Points: 10,
		},
		model.Classification{
			Name:   "Team2",
			Points: 5,
		},
	}

	return classification, nil

}
