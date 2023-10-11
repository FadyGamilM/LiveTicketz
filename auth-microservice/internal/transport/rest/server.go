package rest

import (
	"auth/config"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func CreateServer(R *gin.Engine) *http.Server {
	configs, err := config.LoadServerConfigs("./config")
	if err != nil {
		log.Println("couldn't read the configs")
		os.Exit(1)
	}

	return &http.Server{
		Addr:    configs.Server.Port,
		Handler: R,
	}
}

func InitServer(srv *http.Server) {
	if err := srv.ListenAndServe(); err != nil {
		log.Printf("couldn't initaite the server => %v\n", err)
		os.Exit(1)
	}
}
