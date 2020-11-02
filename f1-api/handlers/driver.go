package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/model"
	"f1-api/response"
	"net/http"
)

// DriverHandler :
func DriverHandler(w http.ResponseWriter, r *http.Request) {

	payload := map[string][]model.Driver{}
	driverController := mock.DriverController{}

	drivers, err := driverController.GetDrivers()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload[response.DriversKey] = drivers

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
