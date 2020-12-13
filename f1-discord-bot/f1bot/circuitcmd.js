const apiManager = require("./../api-manager")
const textBeautifier = require("./../text-beautifier")


function execCircuitCmd(discordClient){

    apiManager.getCircuitsInfo().then(
        circuitsInfo => {
            console.log(circuitsInfo)
            let stringTable = textBeautifier.circuitsToStringTable(circuitsInfo)
            console.log(stringTable)
            
            discordClient.sendMessage(discordClient.channelID, stringTable)
        } 
    ).catch(
        error => {
            console.log(`Error: Can not get circuits info ${error}`)
        }
    )
}

module.exports = {
    execCircuitCmd: execCircuitCmd
}