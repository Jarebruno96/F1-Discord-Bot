const driver = require("./driver.js")
class Team{

    constructor(name = "", color = "", drivers = []){
        this.name = name
        this.color = color
        this.drivers = drivers
    }

    static fromJSON(jsonTeam){

        let name = ""
        let color = ""
        let drivers = []

        if (jsonTeam.hasOwnProperty('Name')){
            name = jsonTeam['Name']
        }

        if (jsonTeam.hasOwnProperty('Color')){
            color = jsonTeam['Color']
        }

        if (jsonTeam.hasOwnProperty('Drivers')){

            let jsonDrivers = jsonTeam['Drivers']

            if (jsonDrivers != null){
                jsonDrivers.forEach(jsonDriver => {
                    drivers.push(driver.Driver.fromJSON(jsonDriver))
                })
            }
        }

        return new Team(name = name, color = color, drivers = drivers)
    }
}

module.exports = {
    Team : Team
}