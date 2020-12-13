const apiManager = require("./../api-manager")
const textBeautifier = require("./../text-beautifier")


function execPointsCmd(discordClient){

    apiManager.getPoints().then(
        points => {
            console.log(points)
            let pointsTable = textBeautifier.pointsToStringTable(points)
            console.log(pointsTable)
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