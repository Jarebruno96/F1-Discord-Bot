const apiManager = require("../api-manager")
const textBeautifier = require("../text-beautifier")


function execDriversCmd(discordClient){

    apiManager.getDrivers().then(
        drivers => {
            console.log(drivers)
            let driversTable = textBeautifier.driversToStringTable(drivers)
            console.log(driversTable)
            discordClient.sendMessage(discordClient.channelID, driversTable)
        } 
    ).catch(
        error => {
            console.log(`Error: Can not get circuits info ${error}`)
        }
    )
}

module.exports = {
    execDriversCmd: execDriversCmd
}