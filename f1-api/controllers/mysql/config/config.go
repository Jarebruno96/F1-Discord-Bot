package config

// Config :
type Config struct {
	Host     string `json:"Host"`
	Port     string `json:"Port"`
	User     string `json:"User"`
	Password string `json:"Password"`
	Database string `json:"Database"`
}
