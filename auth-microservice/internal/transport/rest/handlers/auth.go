package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type authHandler struct {
}

type AuthHandlerConfig struct {
	R *gin.Engine
}

func New(ahc *AuthHandlerConfig) *authHandler {
	h := &authHandler{}
	hRoutes := ahc.R.Group("/auth")
	hRoutes.GET("/current-user", h.HandleGetCurrentUser)
	return h
}

func (h *authHandler) HandleGetCurrentUser(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"response": "fady gamil is the current logged in  user",
	})
}
