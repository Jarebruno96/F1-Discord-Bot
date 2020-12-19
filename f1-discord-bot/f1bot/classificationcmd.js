const driversClassification = 'pilotos'
const teamClassification = 'constructores'
const apiManager = require('./../api-manager')
const textBeautifier = require('./../text-beautifier')


function execClassificationCmd(discordClient, options){
    
    if (options != '' && options != driversClassification && options != teamClassification){
        discordClient.sendMessage(discordClient.channelID, 'No se a que te refieres')
    }

    if (options == '' || options == driversClassification){

        console.log(`Getting drivers classification`)

        apiManager.getDriversClassification().then(
            driversClassification => {

                console.log(`Success getting drivers classification: ${driversClassification}`)
                driverClassificationTable = textBeautifier.driversClassificationToTable(driversClassification)
                
                console.log(`Sending drivers classification to discord channel:  ${driversClassification}`)
                discordClient.sendMessage(discordClient.channelID, driverClassificationTable)
            }
        )
    }

    if (options == '' || options == teamClassification){

        console.log(`Getting teams classification`)

        apiManager.getTeamsClassification().then(
            teamsClassification => {

                console.log(`Success getting teams classification: ${teamsClassification}`)
                teamClassificationTable = textBeautifier.teamsClassificationToStringTable(teamsClassification)

                console.log(`Sending teams classification to discord channel:  ${teamsClassification}`)
                discordClient.sendMessage(discordClient.channelID, teamClassificationTable)
            }
        )
    }
}

module.exports = {
    execClassificationCmd: execClassificationCmd
}