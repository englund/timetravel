package main

import (
	"log"
	"os"
	"timetravel/api/db"
	"timetravel/api/repositories"
	"timetravel/api/routes"
	"timetravel/api/services"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	db, err := db.CreateConnection()
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}

	routes.Status(r.Group("/status"))

	v1 := r.Group("/v1")
	{
		timelineRepository := repositories.NewTimelineRepository(db)
		timelineService := services.NewTimelineService(timelineRepository)
		routes.Timeline(v1.Group("/timeline"), timelineService)
	}

	r.Run(":8080")
}
