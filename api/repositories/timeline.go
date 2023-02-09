package repositories

import (
	"gorm.io/gorm"
)

type Time struct {
	ID int64
}

type ctx struct {
	db *gorm.DB
}

func NewTimelineRepository(db *gorm.DB) *ctx {
	return &ctx{db: db}
}

func (c ctx) GetAll() []*Time {
	return make([]*Time, 0)
}
