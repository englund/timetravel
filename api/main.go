package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()
  r.GET("/status", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "running": true,
    })
  })
  r.Run(":8080")
}
