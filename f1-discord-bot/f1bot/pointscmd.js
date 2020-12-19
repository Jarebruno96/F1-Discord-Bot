const apiManager = require('./../api-manager')
const textBeautifier = require('./../text-beautifier')


function execPointsCmd(discordClient){

    console.log('Getting points')
    
    apiManager.getPoints().then(
        points => {

            console.log(`Success getting drivers classification: ${points}`)
            let pointsTable = textBeautifier.pointsToStringTable(points)

            console.log(`Sending points to discord channel ${pointsTable}`)
            discordClient.sendMessage(discordClient.channelID, pointsTable)
        } 
    ).catch(
        error => {
            console.log(`Error: Can not get points info ${error}`)
        }
    )
}

module.exports = {
    execPointsCmd: execPointsCmd
}