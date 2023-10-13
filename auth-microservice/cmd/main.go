package main

import (
	"auth/internal/transport/rest"
	"auth/internal/transport/rest/handlers"
	"log"
)

func main() {
	router := rest.CreateRouter()

	_ = handlers.New(&handlers.AuthHandlerConfig{R: router})

	server := rest.CreateServer(router)

	log.Println("server is up and running on port : ", server.Addr)

	rest.InitServer(server)
}
