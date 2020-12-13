const driversClassification = "pilotos"
const teamClassification = "constructores"
const apiManager = require("./../api-manager")
const textBeautifier = require("./../text-beautifier")


function execClassificationCmd(discordClient, options){
    
    if (options != "" && options != driversClassification && options != teamClassification){
        discordClient.sendMessage(discordClient.channelID, "No se a que te refieres")
    }

    if (options == "" || options == driversClassification){
        apiManager.getDriversClassification().then(
            driversClassification => {
                console.log(driversClassification)
                driverClassificationTable = textBeautifier.driversClassificationToTable(driversClassification)
                discordClient.sendMessage(discordClient.channelID, driverClassificationTable)
            }
        )
    }

    if (options == "" || options == teamClassification){
        apiManager.getTeamsClassification().then(
            teamsClassification => {
                console.log(driversClassification)
                teamClassificationTable = textBeautifier.teamsClassificationToStringTable(teamsClassification)
                discordClient.sendMessage(discordClient.channelID, teamClassificationTable)
            }
        )
    }

}

module.exports = {
    execClassificationCmd: execClassificationCmd
}