package main

import (
	"log"

	"github.com/gin-contrib/cors"

	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	router.Use(cors.New(config))

	connectDb()

	router.GET("/transaction", GetTransaction)
	router.GET("/summary", GetSummary)
	router.GET("/", GetUsers)
	router.POST("/new-user", CreateUser)
	router.POST("/send-message", func(c *gin.Context) {
		SentMessage()
		c.Status(http.StatusOK)
	})
	router.DELETE("/delete-user/:id", DeleteUser)
	router.POST("/login", Login)
	router.POST("/insert-transaction", InsertTransaction)

	BotInit()

	if err := router.Run(":8080"); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
