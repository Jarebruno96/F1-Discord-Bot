package mock

import "f1-api/model"

// CircuitController :
type CircuitController struct{}

// GetCircuits :
func (cc CircuitController) GetCircuits() ([]model.Circuit, error) {

	circuits := []model.Circuit{
		model.Circuit{
			Name:     "Circuit1",
			Country:  "Country1",
			Distance: 1902,
			Turns:    5,
		},
		model.Circuit{
			Name:     "Circuit2",
			Country:  "Country2",
			Distance: 1222,
			Turns:    1,
		},
	}

	return circuits, nil
}
