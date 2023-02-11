package services

import (
	"timetravel/api/repositories"
)

type context struct {
	tr TimelineRepository
}

type TimelineRepository interface {
	GetAll() ([]*repositories.Time, error)
	Create(time *repositories.Time) (*repositories.Time, error)
}

func NewTimelineService(tr TimelineRepository) *context {
	return &context{tr: tr}
}

func (ctx context) Create(time *repositories.Time) (*repositories.Time, error) {
	// TODO: check for duplicates
	return ctx.tr.Create(time)
}

func (ctx context) GetAll() ([]*repositories.Time, error) {
	// TODO: error handling
	return ctx.tr.GetAll()
}
