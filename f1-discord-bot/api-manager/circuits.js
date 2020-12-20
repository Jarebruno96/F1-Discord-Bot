const request = require('./request.js')
const apiResources = require("./api-resources.js")
const circuit = require('./../model/circuit.js')


function getCircuitsInfo(serverOptions){

    console.log(`Requesting circuits from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.circuits}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.circuits,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting circuits. Response: ${response}`)

                let circuitsInfo = []
                response['Circuirts'].forEach(circuitInfo => {
                    circuitsInfo.push(circuit.Circuit.fromJSON(circuitInfo))
                })
                
                resolve(circuitsInfo)
            }
        ).catch(
            error => {

                console.log(`Error requesting circuits. Error: ${error}`)
                reject(error)
            }
        )
    })
}

module.exports = {
    getCircuitsInfo : getCircuitsInfo
}
