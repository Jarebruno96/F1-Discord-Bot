const request = require('./request.js')
const apiResources = require('./api-resources.js')


function getPoints(serverOptions){

    console.log(`Requesting points from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.points}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.points,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting points. Response: ${response}`)

                resolve(response['Positions'])
            }
        ).catch(
            error => {

                console.log(`Error requesting points. Error: ${error}`)
                reject(error)
            }
        )
    }) 
}

module.exports = {
    getPoints : getPoints
}
