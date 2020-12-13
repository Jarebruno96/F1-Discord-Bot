const request = require("./request.js")
const apiResources = require("./api-resources.js")
const race = require('./../model/race.js')
const driver = require("./../model/driver.js")

function getRace(serverOptions){

    console.log(`Getting race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.race}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.race,
        agent: false,
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    }

    //return request.makeAsyncRequest(requestOptions)
    return new Promise((resolve, reject) => {
        request.makeAsyncRequest(requestOptions).then(
            response => {
                resolve(race.Race.fromJSON(response["RaceInfo"]))
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}

function getRaceGrid(serverOptions){

    console.log(`Getting race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.raceGrid}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.raceGrid,
        agent: false,
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    }

    //return request.makeAsyncRequest(requestOptions)
    return new Promise((resolve, reject) => {
        request.makeAsyncRequest(requestOptions).then(
            response => {
                console.log(response)
                resolve(race.RaceGrid.fromJSON(response["RaceGrid"]))
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 

}
function getRaceResult(serverOptions){

    console.log(`Getting race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.raceResult}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.raceResult,
        agent: false,
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    }

    //return request.makeAsyncRequest(requestOptions)
    return new Promise((resolve, reject) => {
        request.makeAsyncRequest(requestOptions).then(
            response => {
                console.log(response)
                resolve(race.RaceResult.fromJSON(response["Positions"]))
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 

}
function getRaceFastlapDriver(serverOptions){

    console.log(`Getting fast lap race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.raceFastLap}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.raceFastLap,
        agent: false,
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    }

    //return request.makeAsyncRequest(requestOptions)
    return new Promise((resolve, reject) => {
        request.makeAsyncRequest(requestOptions).then(
            response => {
                console.log(response)
                resolve(driver.Driver.fromJSON(response["RaceFastLapDriver"]))
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 

}

module.exports = {
    getRace: getRace,
    getRaceGrid: getRaceGrid,
    getRaceResult: getRaceResult,
    getRaceFastlapDriver: getRaceFastlapDriver
}
