const request = require('./request.js')
const apiResources = require('./api-resources.js')
const team = require('./../model/team.js')


function getTeams(serverOptions){

    console.log(`Requesting teams from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.teams}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.teams,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(
            response => {

                console.log(`Success requesting teams. Response: ${response}`)

                let teams = []
                console.log(response)

                response['Teams'].forEach(jsonTeam => {
                    teams.push(team.Team.fromJSON(jsonTeam))
                })
                
                resolve(teams)
            }
        ).catch(
            error => {

                console.log(`Error requesting teams. Error: ${error}`)
                reject(error)
            }
        )
    }) 
}

/* REVISAR POR QUÉ ESTÁ ASÍ */

function getTeamsInfo(serverOptions){

    console.log(`Requesting teams info from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.teamsInfo}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.teamsInfo,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(

            response => {

                console.log(`Success requesting teams info. Response: ${response}`)

                console.log(response)
                let teams = []
                response['Teams'].forEach(jsonTeam => {
                    teams.push(team.Team.fromJSON(jsonTeam))
                })

                resolve(teams)
            }
        ).catch(
            error => {

                console.log(`Error requesting teams info. Response: ${error}`)
                reject(error)
            }
        )
    })
     
}


function getTeamsDrivers(serverOptions){

    console.log(`Requesting teams drivers from https://${serverOptions['hostname']}:${serverOptions['port']}${apiResources.teamsDrivers}`)

    let requestOptions = {
        hostname: serverOptions['hostname'],
        port: serverOptions['port'],
        path: apiResources.teamsDrivers,
        agent: false,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return new Promise((resolve, reject) => {

        request.makeAsyncRequest(requestOptions).then(

            response => {

                console.log(`Success requesting teams drivers. Response: ${response}`)

                console.log(response)
                let teams = []
                response['Teams'].forEach(jsonTeam => {
                    teams.push(team.Team.fromJSON(jsonTeam))
                })

                resolve(teams)
            }
        ).catch(
            error => {

                console.log(`Error requesting teams drivers. Response: ${error}`)
                reject(error)
            }
        )
    })
}

module.exports = {
    getTeams : getTeams,
    getTeamsInfo: getTeamsInfo,
    getTeamsDrivers: getTeamsDrivers
}