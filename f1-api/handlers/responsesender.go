package handlers

import "net/http"

func SendResponse(response http.ResponseWriter, content []byte) {

	response.Header().Set("Content-Type", "application/json")
	response.Header().Set("charset", "utf-8")

	response.Write(content)
}
