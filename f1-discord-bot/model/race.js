const drivers = require('../api-manager/drivers')
const driver = require('./driver')

class RaceGrid{

    constructor(grid = {}){
        
        this.grid = grid
    }

    static fromJSON(jsonRaceGrid){
        
        let grid = {}
       
        Object.keys(jsonRaceGrid).forEach(
            key => {
                grid[key] = driver.Driver.fromJSON(jsonRaceGrid[key])
            }
        )

        return new RaceGrid(grid = grid)
    }
}

class RaceResult{

    constructor(result = {}){

        this.result = result
    }

    static fromJSON(jsonRaceResult){
        
        let result = {}

        Object.keys(jsonRaceResult).forEach(
            key => {
                result[key] = driver.Driver.fromJSON(jsonRaceResult[key])
            }
        )

        return new RaceResult(result = result)
    }
}

class Race{

    constructor(grid = null, result = null, raceFastDriver = null){

        this.grid = grid
        this.result = result
        this.raceFastDriver = raceFastDriver
    }

    static fromJSON(jsonRace){

        let grid = null
        let result = null
        let raceFastDriver = null

        if(jsonRace.hasOwnProperty('Grid')){
            grid = RaceGrid.fromJSON(jsonRace['Grid'])
        }
        if(jsonRace.hasOwnProperty('Result')){
            result = RaceResult.fromJSON(jsonRace['Result'])
        }
        if(jsonRace.hasOwnProperty('FastLapDriver')){
            raceFastDriver = driver.Driver.fromJSON(jsonRace['FastLapDriver'])
        }

        return new Race(grid = grid, result = result, raceFastDriver = raceFastDriver)
    }
}

module.exports = {
    RaceGrid: RaceGrid,
    RaceResult: RaceResult,
    Race: Race
}