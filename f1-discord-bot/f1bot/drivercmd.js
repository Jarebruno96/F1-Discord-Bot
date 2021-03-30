const apiManager = require('../api-manager')
const textBeautifier = require('../text-beautifier')


function execDriversCmd(discordClient){

    console.log(`Getting list of drivers`)
    
    apiManager.getDrivers().then(
        drivers => {
            console.log(drivers)
            let driversTable = textBeautifier.driversToStringTable(drivers)
            console.log(driversTable)
            discordClient.sendMessage(discordClient.channelID, driversTable)
        } 
    ).catch(
        error => {
            console.log(`Error: Can not get drivers info ${error}`)
        }
    )
}

module.exports = {
    execDriversCmd: execDriversCmd
}