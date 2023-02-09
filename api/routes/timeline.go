package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Timeline(r *gin.RouterGroup) {
	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"hello": "world",
		})
	})
}
