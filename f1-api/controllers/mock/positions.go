package mock

import "f1-api/model"

// PositionsController :
type PositionsController struct{}

//GetPositions :
func (pc PositionsController) GetPositions() (model.Positions, error) {

	positions := model.Positions{
		Position: map[string]int{},
	}

	positions.Position["Position1"] = 5
	positions.Position["Position2"] = 2
	positions.Position["PositionDNF"] = 0

	return positions, nil
}
