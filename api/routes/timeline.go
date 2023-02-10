package routes

import (
	"net/http"
	"timetravel/api/repositories"

	"github.com/gin-gonic/gin"
)

type TimelineService interface {
	GetAll() []*repositories.Time
}

func Timeline(g *gin.RouterGroup, ts TimelineService) {
	g.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, ts.GetAll())
	})
}
