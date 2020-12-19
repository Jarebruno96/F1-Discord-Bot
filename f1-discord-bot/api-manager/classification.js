const request = require('./request.js')
const apiResources = require('./api-resources.js')
const classificationPosition = require('./../model/classificationPosition.js')


function getDriversClassification(serverOptions){

    console.log(`Requesting drivers classification from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.driversClassification}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.driversClassification,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting drivers classificaction. Response: ${response}`)

                let driversClassification = []
                response['DriversClassification'].forEach(position => {
                    driversClassification.push(classificationPosition.ClassificationPosition.fromJSON(position))
                })

                resolve(driversClassification)
            }
        ).catch(
            error => {

                console.log(`Error requesting drivers classificaction. Error: ${error}`)
                reject(error)
            }
        )
    })
}


function getTeamsClassification(serverOptions){

    console.log(`Requesting teams classification from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.teamsClassification}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.teamsClassification,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting teams classificaction. Response: ${response}`)

                let driversClassification = []
                response['TeamsClassification'].forEach(position => {
                    driversClassification.push(classificationPosition.ClassificationPosition.fromJSON(position))
                })
                resolve(driversClassification)
            }
        ).catch(
            error => {

                console.log(`Error requesting teams classificaction. Error: ${response}`)
                reject(error)
            }
        )
    }) 
}

module.exports = {
    getDriversClassification : getDriversClassification,
    getTeamsClassification: getTeamsClassification
}
