package main

import (
	"timetravel/api/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.Status(r.Group("/status"))

	v1 := r.Group("/v1")
	{
		routes.Timeline(v1.Group("/timeline"))
	}

	r.Run(":8080")
}
