package mysql

import (
	"database/sql"
	"encoding/json"
	"errors"
	"f1-api/controllers/mysql/config"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path"
	"path/filepath"
	"runtime"

	_ "github.com/go-sql-driver/mysql"
)

var (
	driverName     string = "mysql"
	configFilePath string = "config/config.json"

	_, b, _, _ = runtime.Caller(0)
	basePath   = filepath.Dir(b)

	db *sql.DB = nil

	CircuitsQueryFile string = "queries/circuits.sql"
)

type MysqlConnector struct {
	DB     *sql.DB
	Config *config.Config
}

func (mysqlConnector *MysqlConnector) InitDBConnection() error {

	if db != nil {
		mysqlConnector.DB = db
		return nil
	}

	config, err := loadConfiguration()

	if err != nil {
		log.Println("Can not load mysql configuration from: ", configFilePath)
		return err
	}

	mysqlConnector.Config = config
	mysqlConnector.DB, err = createConnection(mysqlConnector.Config)

	if err != nil {
		log.Println("Can not connect to database: ", err)
	}

	//mysqlConnector.Query("SET NAMES utf8", nil)
	//mysqlConnector.Query("SET CHARACTER SET utf8", nil)
	/*mysqlConnector.Query("SET character_set_connection=utf8", nil)
	mysqlConnector.Query("SET character_set_client=utf8", nil)
	mysqlConnector.Query("SET character_set_results=utf8", nil)*/

	return err

}

func (mysqlConnector MysqlConnector) Ping() error {

	if mysqlConnector.DB == nil {
		return errors.New("Null database connection")
	}

	err := mysqlConnector.DB.Ping()

	if err != nil {
		log.Println("Can not ping to database: ", err)
	}

	return err
}

func loadConfiguration() (*config.Config, error) {

	jsonFile, err := os.Open(path.Join(basePath, configFilePath))

	if err != nil {
		log.Println("Can not open mysql config file ", configFilePath, ". ", err)
		return nil, err
	}
	defer jsonFile.Close()

	byteValues, _ := ioutil.ReadAll(jsonFile)

	var config config.Config

	err = json.Unmarshal(byteValues, &config)

	if err != nil {
		log.Println("Can not unmarshall mysql config file. ", err)
		return nil, err
	}

	return &config, nil
}

func createConnection(config *config.Config) (*sql.DB, error) {

	connectionString := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", //?charset=utf8
		config.User,
		config.Password,
		config.Host,
		config.Port,
		config.Database)

	return sql.Open(driverName, connectionString)
}

func (mysqlConnector MysqlConnector) ReadQueryFile(queryFilePath string) (string, error) {

	query, err := ioutil.ReadFile(path.Join(basePath, queryFilePath))

	if err != nil {
		log.Println("Can not read query file ", queryFilePath, ". ", err)
		return "", err
	}

	return string(query), nil
}

func (mysqlConnector MysqlConnector) Query(query string, args ...interface{}) (*sql.Rows, error) {

	rows, err := mysqlConnector.DB.Query(query)

	if err != nil {
		log.Println("Can not query ", query, " . ", err)
		return nil, err
	}

	return rows, nil
}
