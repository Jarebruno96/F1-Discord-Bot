package main

import (
	"f1-api/httpserver"
)

func main() {

	httpConfig := httpserver.Config{
		Port: "8080",
	}

	httpserver.InitHTTPServer(httpConfig)

}
