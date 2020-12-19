const apiManager = require('./../api-manager')
const textBeautifier = require('./../text-beautifier')


function execCircuitCmd(discordClient){

    console.log(`Getting circuits info`)

    apiManager.getCircuitsInfo().then(
        circuitsInfo => {

            console.log(`Success getting circuits: ${circuitsInfo}`)
            let circuitsTable = textBeautifier.circuitsToStringTable(circuitsInfo)
            
            console.log(`Sending circtuits to discord channel ${circuitsTable}`)
            discordClient.sendMessage(discordClient.channelID, circuitsTable)
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