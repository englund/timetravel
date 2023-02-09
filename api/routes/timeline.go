package routes

import (
	"net/http"
	"timetravel/api/repositories"

	"github.com/gin-gonic/gin"
)

type TimelineRepository interface {
	GetAll() []*repositories.Time
}

func Timeline(g *gin.RouterGroup, r TimelineRepository) {
	g.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, r.GetAll())
	})
}
