package repositories

import (
	"time"

	"gorm.io/gorm"
)

type Time struct {
	gorm.Model
	Hours uint64
	Date  time.Time
}

type context struct {
	db *gorm.DB
}

func NewTimelineRepository(db *gorm.DB) *context {
	db.AutoMigrate(&Time{})

	time := Time{Hours: 8, Date: time.Now()}
	db.Create(&time)

	return &context{db}
}

func (ctx context) GetAll() ([]*Time, error) {
	var times []*Time
	result := ctx.db.Find(&times)
	if result.Error != nil {
		return nil, result.Error
	}

	return times, nil
}
