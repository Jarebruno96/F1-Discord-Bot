const circuit = require("./circuit.js")
const team = require("./team.js")
const driver = require("./driver.js")

class FastLap{

    constructor(fastlapDriver = null, fastlapCircuit = null, fastlapTeam = null){
        this.driver = fastlapDriver
        this.team = fastlapTeam
        this.circuit = fastlapCircuit
    }

    static fromJSON(jsonFastLap){

        let fastlapCircuit = null
        let fastlapDriver = null
        let fastlapTeam = null

        if (jsonFastLap.hasOwnProperty('Team')){
            fastlapTeam = team.Team.fromJSON(jsonFastLap['Team'])
        }

        if (jsonFastLap.hasOwnProperty('Circuit')){
            fastlapCircuit = circuit.Circuit.fromJSON(jsonFastLap['Circuit'])
        }

        if (jsonFastLap.hasOwnProperty('Driver')){
            fastlapDriver = driver.Driver.fromJSON(jsonFastLap['Driver'])
        }

        return new FastLap(fastlapDriver = fastlapDriver, fastlapCircuit = fastlapCircuit, fastlapTeam = fastlapTeam)

    }
}

module.exports = {
    FastLap: FastLap
}