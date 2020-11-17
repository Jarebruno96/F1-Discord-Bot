package interfaces

import (
	"f1-api/model"
)

// ClassificationI :
type ClassificationI interface {
	GetDriversClassification() ([]model.Classification, error)
	GetTeamsClassification() ([]model.Classification, error)
}
