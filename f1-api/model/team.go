package model

// Team :
type Team struct {
	Name    string   `json:"Name,omitempty"`
	Color   string   `json:"Color,omitempty"`
	Drivers []Driver `json:"Drivers,omitempty"`
}
