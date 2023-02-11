package routes

import (
	"log"
	"net/http"
	"timetravel/api/repositories"

	"github.com/gin-gonic/gin"
)

type TimelineService interface {
	GetAll() ([]*repositories.Time, error)
}

func Timeline(g *gin.RouterGroup, ts TimelineService) {
	g.GET("/", func(ctx *gin.Context) {
		times, err := ts.GetAll()
		if err != nil {
			// TODO: error handling
			log.Println(err)
		}
		ctx.JSON(http.StatusOK, times)
	})
}
