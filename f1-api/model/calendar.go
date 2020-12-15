package model

// Event :
type Event struct {
	Day     string `json:"Day,omitempty"`
	Circuit string `json:"Circuit,omitempty"`
}

// Calendar :
type Calendar struct {
	Season string  `json:"Season,omitempty"`
	Events []Event `json:"Events,omitempty"`
}
