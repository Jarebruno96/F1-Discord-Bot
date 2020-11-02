package interfaces

import (
	"f1-api/model"
)

// DriversI :
type DriversI interface {
	GetDrivers() ([]model.Driver, error)
}
