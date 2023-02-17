package routes

import (
	"log"
	"net/http"
	"time"
	"timetravel/api/repositories"

	"github.com/gin-gonic/gin"
)

type timelineService interface {
	GetAll() ([]*repositories.Time, error)
	Create(time *repositories.Time) (*repositories.Time, error)
}

type timeResponse struct {
	ID    uint      `json:"id"`
	Date  time.Time `json:"date" binding:"required"`
	Hours float32   `json:"hours" binding:"required"`
}
type postTimeRequest struct {
	timeResponse
}

type postTimeResponse struct {
	timeResponse
}

type getAllTimeResponse = []*timeResponse

func mapToTimeResponse(time *repositories.Time) *timeResponse {
	return &timeResponse{
		ID:    time.ID,
		Date:  time.Date,
		Hours: time.Hours,
	}
}

func Timeline(g *gin.RouterGroup, ts timelineService) {
	g.POST("/", func(ctx *gin.Context) {
		var request postTimeRequest
		if ctx.Bind(&request) != nil {
			ctx.JSON(http.StatusBadRequest, nil)
			return
		}

		time, err := ts.Create(&repositories.Time{
			Date:  request.Date,
			Hours: request.Hours,
		})
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, nil)
			return
		}

		ctx.JSON(http.StatusOK, postTimeResponse{
			timeResponse: *mapToTimeResponse(time),
		})
	})
	g.GET("/", func(ctx *gin.Context) {
		times, err := ts.GetAll()
		if err != nil {
			// TODO: error handling
			log.Println(err)
		}

		response := make(getAllTimeResponse, len(times))
		for i, x := range times {
			response[i] = mapToTimeResponse(x)
		}
		ctx.JSON(http.StatusOK, response)
	})
}
