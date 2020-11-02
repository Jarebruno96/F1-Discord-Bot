package model

//RaceGrid :
type RaceGrid struct {
	Grid map[string]string
}

//RaceResult :
type RaceResult struct {
	Result map[string]string
}

//Race :
type Race struct {
	Grid          RaceGrid
	Result        RaceResult
	FastLapDriver Driver
}
