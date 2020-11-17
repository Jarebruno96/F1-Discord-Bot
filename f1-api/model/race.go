package model

//RaceGrid :
type RaceGrid struct {
	Grid map[string]Driver
}

//RaceResult :
type RaceResult struct {
	Result map[string]Driver
}

//Race :
type Race struct {
	Grid          RaceGrid
	Result        RaceResult
	FastLapDriver Driver
}
