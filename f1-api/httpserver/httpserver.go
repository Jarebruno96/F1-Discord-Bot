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

	http.HandleFunc(DriversHTTPPath, handlers.DriverHandler)
	http.HandleFunc(CalendarHTTPPath, handlers.CalendarHandler)

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
