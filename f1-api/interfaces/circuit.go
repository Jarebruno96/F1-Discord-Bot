package interfaces

import (
	"f1-api/model"
)

//CircuitI :
type CircuitI interface {
	GetCircuits() ([]model.Circuit, error)
}
