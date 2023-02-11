package routes

import (
	"log"
	"net/http"
	"time"
	"timetravel/api/repositories"

	"github.com/gin-gonic/gin"
)

type TimelineService interface {
	GetAll() ([]*repositories.Time, error)
	Create(time *repositories.Time) (*repositories.Time, error)
}

type PostTimeRequest struct {
	Date  time.Time `json:"date" binding:"required"`
	Hours uint64    `json:"hours" binding:"required"`
}

// TODO: extract endpoints to separate functions

func Timeline(g *gin.RouterGroup, ts TimelineService) {
	g.POST("/", func(ctx *gin.Context) {
		var request PostTimeRequest
		if ctx.Bind(&request) != nil {
			ctx.JSON(http.StatusBadRequest, nil)
			return
		}

		time, err := ts.Create(&repositories.Time{Date: request.Date, Hours: request.Hours})
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, nil)
			return
		}

		// TODO: separate db and response model

		ctx.JSON(http.StatusOK, time)
	})
	g.GET("/", func(ctx *gin.Context) {
		times, err := ts.GetAll()
		if err != nil {
			// TODO: error handling
			log.Println(err)
		}
		ctx.JSON(http.StatusOK, times)
	})
}
