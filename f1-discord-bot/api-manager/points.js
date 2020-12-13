const request = require("./request.js")
const apiResources = require("./api-resources.js")

function getPoints(serverOptions){

    console.log(`Getting points from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.points}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.points,
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
                resolve(response["Positions"])
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}

module.exports = {
    getPoints : getPoints
}
