package httpserver

import (
	"f1-api/handlers"
	"log"
	"net/http"
	"os"
)

// InitHTTPServer :
func InitHTTPServer(config Config) {

	log.Print("Starting server...")

	http.HandleFunc(CalendarHTTPPath, handlers.CalendarHandler)
	http.HandleFunc(TeamsHTTPPath, handlers.TeamHandler)
	http.HandleFunc(TeamInfoHTTPPath, handlers.TeamInfoHandler)
	http.HandleFunc(TeamDriversHTTPPath, handlers.TeamDriversHandler)
	http.HandleFunc(DriversHTTPPath, handlers.DriverHandler)
	http.HandleFunc(PointsHTTPPath, handlers.PositionsHandler)
	http.HandleFunc(CircuitsHTTPPath, handlers.CircuitHandler)
	http.HandleFunc(FastLapsDriversHTTPPath, handlers.DriverFastLapsHandler)
	http.HandleFunc(FastLapsTeamsHTTPPath, handlers.TeamsFastLapsHandler)
	http.HandleFunc(ClassificationDriversHTTPPath, handlers.DriverClassificationHandler)
	http.HandleFunc(ClassificationTeamsHTTPPath, handlers.TeamsClassificationHandler)
	http.HandleFunc(RaceHTTPPath, handlers.RaceInfoHandler)
	http.HandleFunc(RaceGridHTTPPath, handlers.RaceGridHandler)
	http.HandleFunc(RaceResultsHTTPPath, handlers.RaceResultHandler)
	http.HandleFunc(RaceFastLapHTTPPath, handlers.RaceFastLapDriverHandler)

	// Determine port for HTTP service.
	port := os.Getenv("PORT")
	if port == "" {
		port = config.Port
		log.Printf("defaulting to port %s", port)
	} else {
		log.Print("Getting port from Environment OS")
	}

	// Start HTTP server.
	log.Printf("listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
