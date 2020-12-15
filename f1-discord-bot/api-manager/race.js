const request = require("./request.js")
const apiResources = require("./api-resources.js")
const race = require('./../model/race.js')
const driver = require("./../model/driver.js")

function getRace(serverOptions, raceName){

    console.log(`Getting race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.race}`)
    
    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: request.buildPathWithParameters(apiResources.race, urlParameters),
        agent: false,
        method: "GET",
        headers: {
            'Accept': 'application/json'
        },

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

function getRaceGrid(serverOptions, raceName){

    console.log(`Getting race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.raceGrid}`)
    
    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: request.buildPathWithParameters(apiResources.raceGrid, urlParameters),
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
                resolve(race.RaceGrid.fromJSON(response["RaceGrid"]["Grid"]))
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 

}
function getRaceResult(serverOptions, raceName){

    console.log(`Getting race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.raceResult}`)

    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: request.buildPathWithParameters(apiResources.raceResult, urlParameters),
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
                resolve(race.RaceResult.fromJSON(response["Positions"]["Result"]))
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 

}
function getRaceFastlapDriver(serverOptions, raceName){

    console.log(`Getting fast lap race from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.raceFastLap}`)

    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: request.buildPathWithParameters(apiResources.raceFastLap, urlParameters),
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
