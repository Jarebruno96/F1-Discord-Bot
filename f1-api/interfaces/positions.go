package interfaces

import (
	"f1-api/model"
)

// PositionsI :
type PositionsI interface {
	GetPositions() (*model.Positions, error)
}
