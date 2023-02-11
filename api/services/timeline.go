package services

import (
	"timetravel/api/repositories"
)

type context struct {
	tr TimelineRepository
}

type TimelineRepository interface {
	GetAll() ([]*repositories.Time, error)
}

func NewTimelineService(tr TimelineRepository) *context {
	return &context{tr: tr}
}

func (ctx context) GetAll() ([]*repositories.Time, error) {
	// TODO: error handling
	return ctx.tr.GetAll()
}
