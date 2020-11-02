package model

// Event :
type Event struct {
	Day     string
	Circuit string
}

// Calendar :
type Calendar struct {
	Season string
	Events []Event
}
