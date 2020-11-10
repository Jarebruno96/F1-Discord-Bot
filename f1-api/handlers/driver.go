package handlers

import (
	"encoding/json"
	"f1-api/controllers/mysql"
	"f1-api/interfaces"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// DriverHandler :
func DriverHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Driver{}
	driverController := mysql.DriverController{}

	drivers, err := getDrivers(driverController)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.DriversKey] = drivers

	content, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	SendResponse(w, content)
}

func getDrivers(driversI interfaces.DriversI) ([]model.Driver, error) {
	return driversI.GetDrivers()
}
