const request = require("./request.js")
const apiResources = require("./api-resources.js")
const team = require("./../model/team.js")


function getTeams(serverOptions){

    console.log(`Getting points from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.teams}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.teams,
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

                let teams = []
                console.log(response)

                response["Teams"].forEach(jsonTeam => {
                    teams.push(team.Team.fromJSON(jsonTeam))
                });
                
                resolve(teams)
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}

function getTeamsInfo(serverOptions){

    console.log(`Getting points from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.teamsInfo}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.teamsInfo,
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
                resolve(team.Team())
            }
        ).catch(
            error => {
                reject(error)
            }
        )
    }) 
     
}


function getTeamsDrivers(serverOptions){

    console.log(`Getting points from https://${serverOptions["hostname"]}:${serverOptions["port"]}${apiResources.teamsDrivers}`)

    let requestOptions = {
        hostname: serverOptions["hostname"],
        port: serverOptions["port"],
        path: apiResources.teamsDrivers,
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

                console.log(response)
                let teams = []
                response["Teams"].forEach(jsonTeam => {
                    teams.push(team.Team.fromJSON(jsonTeam))
                });

                resolve(teams)
            }
        ).catch(
            error => {
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