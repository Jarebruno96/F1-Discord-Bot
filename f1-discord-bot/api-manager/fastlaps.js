const request = require('./request.js')
const apiResources = require('./api-resources.js')
const fastlaps = require('./../model/fastlaps.js')


function getDriversFastlaps(serverOptions){

    console.log(`Requesting drivers fast laps from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.driversFastlaps}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.driversFastlaps,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting drivers fast laps. Response: ${response}`)
                let driversFastLaps = []
                
                response['DriversFastLaps'].forEach(
                    jsonFastlap => {
                        driversFastLaps.push(fastlaps.FastLap.fromJSON(jsonFastlap))
                    }
                )

                resolve(driversFastLaps)
            }
        ).catch(
            error => {

                console.log(`Error requesting drivers fast laps. Error: ${error}`)
                reject(error)
            }
        )
    })
}


function getTeamsFastlaps(serverOptions){

    console.log(`Requesting teams fast laps from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.teamsFastlaps}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.teamsFastlaps,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(

            
            response => {

                console.log(`Success requesting teams fast laps. Response: ${response}`)

                let teamsFastLaps = []
                
                response['TeamsFastLaps'].forEach(
                    jsonFastlap => {
                        teamsFastLaps.push(fastlaps.FastLap.fromJSON(jsonFastlap))
                    }
                )

                resolve(teamsFastLaps)
            }
        ).catch(
            error => {

                console.log(`Error requesting teams fast laps. Error: ${error}`)
                reject(error)
            }
        )
    }) 
}

module.exports = {
    getDriversFastlaps : getDriversFastlaps,
    getTeamsFastlaps: getTeamsFastlaps
}
