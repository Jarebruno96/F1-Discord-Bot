const request = require("./request.js")
const apiResources = require("./api-resources.js")
const driver = require('./../model/driver.js')

function getDrivers(serverOptions){

    console.log(`Getting drivers from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.drivers}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.drivers,
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
                let drivers = []
                response["Drivers"].forEach(jsonDriver => {
                    drivers.push(driver.Driver.fromJSON(jsonDriver))
                });
                resolve(drivers)
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}

module.exports = {
    getDrivers : getDrivers
}
