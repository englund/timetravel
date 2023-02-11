package db

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func CreateConnection() (*gorm.DB, error) {
	return gorm.Open(sqlite.Open("database.sqlite"), &gorm.Config{})
}
