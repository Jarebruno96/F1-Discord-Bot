package model

// FastLap :
type FastLap struct {
	Team    *Team    `json:"Team,omitempty"`
	Circuit *Circuit `json:"Circuit,omitempty"`
	Driver  *Driver  `json:"Driver,omitempty"`
}
