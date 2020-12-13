package model

//Circuit :
type Circuit struct {
	Name     string `json:"Name,omitempty"`
	Country  string `json:"Country,omitempty"`
	Distance int    `json:"Distance,omitempty"`
	Turns    int    `json:"Turns,omitempty"`
}
