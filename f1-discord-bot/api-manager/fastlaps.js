const request = require("./request.js")
const apiResources = require("./api-resources.js")
const fastlaps = require("./../model/fastlaps.js")

function getDriversFastlaps(serverOptions){

    console.log(`Getting drivers classification from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.driversFastlaps}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.driversFastlaps,
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
                let driversFastLaps = []
                
                response["DriversFastLaps"].forEach(
                    jsonFastlap => {
                        driversFastLaps.push(fastlaps.FastLap.fromJSON(jsonFastlap))
                    }
                );

                resolve(driversFastLaps)
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}


function getTeamsFastlaps(serverOptions){

    console.log(`Getting teams fast laps from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.teamsFastlaps}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.teamsFastlaps,
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
                let teamsFastLaps = []
                
                response["TeamsFastLaps"].forEach(
                    jsonFastlap => {
                        teamsFastLaps.push(fastlaps.FastLap.fromJSON(jsonFastlap))
                    }
                );

                resolve(teamsFastLaps)
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}


module.exports = {
    getDriversFastlaps : getDriversFastlaps,
    getTeamsFastlaps: getTeamsFastlaps
}
