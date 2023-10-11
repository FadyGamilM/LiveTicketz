package rest

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func CreateServer(R *gin.Engine) *http.Server {
	addr := "0.0.0.0:3000"
	return &http.Server{
		Addr:    addr,
		Handler: R,
	}
}

func InitServer(srv *http.Server) {
	if err := srv.ListenAndServe(); err != nil {
		log.Printf("couldn't initaite the server => %v\n", err)
		os.Exit(1)
	}
}
