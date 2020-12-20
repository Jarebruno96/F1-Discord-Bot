const request = require('./request.js')
const apiResources = require('./api-resources.js')
const race = require('./../model/race.js')
const driver = require('./../model/driver.js')


function getRace(serverOptions, raceName){

    console.log(`Requesting race from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.race}`)
    
    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: request.buildPathWithParameters(apiResources.race, urlParameters),
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting race. Response: ${response}`)
                resolve(race.Race.fromJSON(response['RaceInfo']))
            }
        ).catch(
            error => {

                console.log(`Error requesting race. Error: ${error}`)
                reject(error)
            }
        )
    })
}


function getRaceGrid(serverOptions, raceName){

    console.log(`Requesting race grid from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.raceGrid}`)
    
    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: request.buildPathWithParameters(apiResources.raceGrid, urlParameters),
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting race grid. Response: ${response}`)
                resolve(race.RaceGrid.fromJSON(response['RaceGrid']['Grid']))
            }
        ).catch(
            error => {

                console.log(`Error requesting race grid. Error: ${error}`)
                reject(error)
            }
        )
    })
}


function getRaceResult(serverOptions, raceName){

    console.log(`Requesting race result from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.raceResult}`)

    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: request.buildPathWithParameters(apiResources.raceResult, urlParameters),
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {
                
                console.log(`Success requesting race result. Response: ${response}`)
                resolve(race.RaceResult.fromJSON(response['Positions']['Result']))
            }
        ).catch(
            error => {

                console.log(`Error requesting race result. Error: ${error}`)
                reject(error)
            }
        )
    })
}


function getRaceFastlapDriver(serverOptions, raceName){

    console.log(`Requesting fast lap driver from race from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.raceFastLap}`)

    let urlParameters = {}
    urlParameters[apiResources.raceUrlParameter] = raceName

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: request.buildPathWithParameters(apiResources.raceFastLap, urlParameters),
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting fast lap driver from race. Response: ${response}`)
                resolve(driver.Driver.fromJSON(response['RaceFastLapDriver']))
            }
        ).catch(
            error => {

                console.log(`Error requesting fast lap driver from race. Error: ${error}`)
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
