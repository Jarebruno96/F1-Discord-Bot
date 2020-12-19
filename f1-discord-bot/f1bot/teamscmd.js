const teamsInfo = 'info'
const teamDrivers = 'pilotos'
const apiManager = require('../api-manager')
const textBeautifier = require('../text-beautifier')


function execTeamsCmd(discordClient, options){
    
    if (options != '' && options != teamsInfo && options != teamDrivers){
        discordClient.sendMessage(discordClient.channelID, 'No se a que te refieres')
    }

    if (options == teamsInfo){

        console.log('Getting teams info')

        apiManager.getTeamsInfo().then(
            teamsInfo => {

                console.log(`Success getting teams info: ${teamsInfo}`)
                teamsInfoTable = textBeautifier.teamsInfoToStringTable(teamsInfo)

                console.log(`Sending teams info: ${teamsInfoTable}`)
                discordClient.sendMessage(discordClient.channelID, teamsInfoTable)
            }
        )
        return
    }

    if (options == teamDrivers){

        console.log('Getting teams drivers')

        apiManager.getTeamsDrivers().then(
            teamsDrivers => {
                
                console.log(`Success getting teams drivers: ${teamsDrivers}`)
                teamsDriversTable = textBeautifier.teamsDriversToStringTable(teamsDrivers)

                console.log(`Sending teams drivers: ${teamsDriversTable}`)
                discordClient.sendMessage(discordClient.channelID, teamsDriversTable)
            }
        )
        return
    }

    if (options == ''){

        console.log('Getting teams')

        apiManager.getTeams().then(
            teams => {

                console.log(`Success getting teams: ${teams}`)
                teamsTable = textBeautifier.teamsToStringTable(teams)

                console.log(`Sending teams: ${teamsTable}`)
                discordClient.sendMessage(discordClient.channelID, teamsTable)
            }
        )
        return
    }
}

module.exports = {
    execTeamsCmd: execTeamsCmd
}