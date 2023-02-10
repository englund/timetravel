package main

import (
	"log"
	"os"
	"timetravel/api/repositories"
	"timetravel/api/routes"
	"timetravel/api/services"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	r := gin.Default()

	db, err := gorm.Open(sqlite.Open("database.sqlite"), &gorm.Config{})

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
