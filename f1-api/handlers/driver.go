package handlers

import (
	"encoding/json"
	"f1-api/controllers/mock"
	"f1-api/model"
	"net/http"
)

// DriverHandler :
func DriverHandler(w http.ResponseWriter, r *http.Request) {

	driverController := mock.DriverController{}
	payload := map[string][]model.Driver{}

	drivers, err := driverController.GetDrivers()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	payload["Drivers"] = drivers

	js, err := json.Marshal(payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
