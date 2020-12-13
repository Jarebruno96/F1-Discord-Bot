const request = require("./request.js")
const apiResources = require("./api-resources.js")
const circuit = require('./../model/circuit.js')
const { circuits } = require("./api-resources.js")

function getCircuitsInfo(serverOptions){

    console.log(`Getting circuits from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.circuits}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.circuits,
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
                //console.log("Entro aqui")
                let circuitsInfo = []
                response["Circuirts"].forEach(circuitInfo => {
                    circuitsInfo.push(circuit.Circuit.fromJSON(circuitInfo))
                });
                //console.log(circuitsInfo)
                resolve(circuitsInfo)
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}

module.exports = {
    getCircuitsInfo : getCircuitsInfo
}
