package mock

import (
	"f1-api/model"
)

//DriverController :
type DriverController struct{}

//GetDrivers :
func (dc DriverController) GetDrivers() ([]model.Driver, error) {

	drivers := []model.Driver{
		model.Driver{
			Name:   "Driver1",
			Number: 1,
		},
		model.Driver{
			Name:   "Driver2",
			Number: 2,
		},
	}

	return drivers, nil
}
