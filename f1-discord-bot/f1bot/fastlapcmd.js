const driversFastlaps = 'pilotos'
const teamFastlaps = 'constructores'
const apiManager = require('./../api-manager')
const textBeautifier = require('./../text-beautifier')


function execFastlapsCmd(discordClient, options){
    
    if (options != '' && options != driversFastlaps && options != teamFastlaps){
        discordClient.sendMessage(discordClient.channelID, 'No se a que te refieres')
    }

    if (options == '' || options == driversFastlaps){

        console.log('Getting drivers fast laps')

        apiManager.getDriversFastlaps().then(
            driversFastlaps => {

                console.log(`Sending drivers fast laps to discord channel ${driversFastlaps}`)
                driversFastlapsTable = textBeautifier.driverFastLapsToStringTable(driversFastlaps)

                console.log(`Sending drivers fast laps to discord channel:  ${driversFastlapsTable}`)
                discordClient.sendMessage(discordClient.channelID, driversFastlapsTable)
            }
        )
    }

    if (options == '' || options == teamFastlaps){

        console.log('Getting teams fast laps')

        apiManager.getTeamsFastlaps().then(
            teamsFastlaps => {

                console.log(`Sending teams fast laps to discord channel ${teamsFastlaps}`)
                teamsFastlapsTable = textBeautifier.teamFastLapsToStringTable(teamsFastlaps)

                console.log(`Sending teams fast laps to discord channel:  ${teamsFastlapsTable}`)
                discordClient.sendMessage(discordClient.channelID, teamsFastlapsTable)
            }
        )
    }
}

module.exports = {
    execFastlapsCmd: execFastlapsCmd
}