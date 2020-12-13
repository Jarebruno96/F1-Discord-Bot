const teamsInfo = "info"
const teamDrivers = "pilotos"
const apiManager = require("../api-manager")
const textBeautifier = require("../text-beautifier")


function execTeamsCmd(discordClient, options){
    
    if (options != "" && options != teamsInfo && options != teamDrivers){
        discordClient.sendMessage(discordClient.channelID, "No se a que te refieres")
    }

    if (options == teamsInfo){
        apiManager.getTeamsInfo().then(
            teamsInfo => {
                console.log(teamsInfo)
                //driverClassificationTable = textBeautifier.driversClassificationToTable(driversClassification)
                //discordClient.sendMessage(discordClient.channelID, driverClassificationTable)
            }
        )
        return
    }

    if (options == teamDrivers){
        apiManager.getTeamsDrivers().then(
            teamsDrivers => {
                console.log(teamsDrivers)
                teamsDriversTable = textBeautifier.teamsDriversToStringTable(teamsDrivers)
                discordClient.sendMessage(discordClient.channelID, teamsDriversTable)
            }
        )
        return
    }

    if (options == ""){
        apiManager.getTeams().then(
            teams => {
                console.log(teams)
                teamsTable = textBeautifier.teamsToStringTable(teams)
                discordClient.sendMessage(discordClient.channelID, teamsTable)
            }
        )
        return
    }

}

module.exports = {
    execTeamsCmd: execTeamsCmd
}