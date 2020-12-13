const driversFastlaps = "pilotos"
const teamFastlaps = "constructores"
const apiManager = require("./../api-manager")
const textBeautifier = require("./../text-beautifier")


function execFastlapsCmd(discordClient, options){
    
    if (options != "" && options != driversFastlaps && options != teamFastlaps){
        discordClient.sendMessage(discordClient.channelID, "No se a que te refieres")
    }

    if (options == "" || options == driversFastlaps){
        apiManager.getDriversFastlaps().then(
            driversFastlaps => {
                console.log(driversFastlaps)
                driverClassificationTable = textBeautifier.driverFastLapsToStringTable(driversFastlaps)
                discordClient.sendMessage(discordClient.channelID, driverClassificationTable)
            }
        )
    }

    if (options == "" || options == teamFastlaps){
        apiManager.getTeamsFastlaps().then(
            teamsFastlaps => {
                console.log(teamsFastlaps)
                teamClassificationTable = textBeautifier.teamFastLapsToStringTable(teamsFastlaps)
                discordClient.sendMessage(discordClient.channelID, teamClassificationTable)
            }
        )
    }

}

module.exports = {
    execFastlapsCmd: execFastlapsCmd
}