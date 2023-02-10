package repositories

import (
	"gorm.io/gorm"
)

type Time struct {
	ID int64
}

type context struct {
	db *gorm.DB
}

func NewTimelineRepository(db *gorm.DB) *context {
	return &context{db: db}
}

func (ctx context) GetAll() []*Time {
	return make([]*Time, 0)
}
