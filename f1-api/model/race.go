package model

//RaceGrid :
type RaceGrid struct {
	Grid map[string]Driver `json:"Grid,omitempty"`
}

//RaceResult :
type RaceResult struct {
	Result map[string]Driver `json:"Result,omitempty"`
}

//Race :
type Race struct {
	*RaceGrid     `json:",omitempty"`
	*RaceResult   `json:",omitempty"`
	FastLapDriver *Driver `json:"FastLapDriver,omitempty"`
}
